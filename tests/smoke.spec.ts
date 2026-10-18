import { expect, test } from "@playwright/test";

const axePath = require.resolve("axe-core/axe.min.js");

type ConsoleNoise = { text: string; url: string };

function isAnalyticsNoise({ text, url }: ConsoleNoise) {
  return url.includes("/_vercel/") || text.includes("/_vercel/");
}

test("home renders with no console errors", async ({ page }) => {
  const messages: ConsoleNoise[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      messages.push({ text: msg.text(), url: msg.location().url });
    }
  });
  page.on("pageerror", (err) => messages.push({ text: String(err), url: "" }));

  const response = await page.goto("/");
  expect(response?.status()).toBe(200);

  await expect(page.getByRole("heading", { level: 1 })).toContainText(/software/i);
  await expect(page.getByAltText(/portrait/i)).toBeVisible();

  const errors = messages.filter((message) => !isAnalyticsNoise(message));
  expect(errors.map((message) => `${message.text} @ ${message.url}`)).toEqual([]);
});

test("unknown route serves the styled 404 page", async ({ page }) => {
  const response = await page.goto("/definitely-missing-page");
  expect(response?.status()).toBe(404);
  await expect(page.getByText("Off the", { exact: false })).toBeVisible();
  await expect(page.getByRole("link", { name: /front page/i })).toBeVisible();
});

test("mobile menu closes with Escape, restores focus and unlocks scroll", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const toggle = page.getByRole("button", { name: "Open menu" });
  await expect(toggle).toBeVisible();
  await toggle.click();
  await expect(page.locator("#mobile-nav")).toHaveCSS("opacity", "1");
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("hidden");

  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-nav")).toHaveCSS("opacity", "0");
  await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
});

declare global {
  interface Window {
    axe: {
      run: (
        context: Document,
        options: { resultTypes: string[] },
      ) => Promise<{
        violations: Array<{
          id: string;
          impact: string | null;
          nodes: Array<{ target: string[]; html: string }>;
        }>;
      }>;
    };
  }
}

async function revealWholePage(page: import("@playwright/test").Page) {
  await page.evaluate(async () => {
    const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    const step = Math.floor(window.innerHeight * 0.7);
    for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await wait(140);
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(900);
}

async function seriousViolations(page: import("@playwright/test").Page) {
  const violations = await page.evaluate(async () => {
    const results = await window.axe.run(document, { resultTypes: ["violations"] });
    return results.violations
      .filter(
        (violation) => violation.impact === "serious" || violation.impact === "critical",
      )
      .map(
        (violation) =>
          `${violation.id} (${violation.impact}) — ` +
          violation.nodes.map((node) => node.html.slice(0, 120)).join(" | "),
      );
  });
  return violations;
}

test("axe scan finds no serious or critical violations in either theme", async ({
  page,
}) => {
  await page.goto("/");
  await page.addScriptTag({ path: axePath });
  await revealWholePage(page);

  const darkViolations = await seriousViolations(page);

  await page.evaluate(() => document.documentElement.classList.remove("dark"));
  await page.waitForTimeout(200);
  const lightViolations = await seriousViolations(page);

  expect([...darkViolations.map((v) => `[dark] ${v}`), ...lightViolations.map((v) => `[light] ${v}`)]).toEqual([]);
});

test("copy button copies email to clipboard", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  await page
    .getByRole("button", { name: "copy email" })
    .scrollIntoViewIfNeeded();
  await page.getByRole("button", { name: "copy email" }).click();
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(copied).toBe("talatramadan10@gmail.com");
  await expect(page.getByRole("button", { name: "email copied" })).toBeVisible();
});

test("robots.txt and sitemap.xml are served", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("Sitemap: https://ixtalaat.vercel.app/sitemap.xml");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain("<loc>https://ixtalaat.vercel.app</loc>");
});

test("security headers are present", async ({ request }) => {
  const response = await request.get("/");
  expect(response.headers()["x-frame-options"]).toBe("DENY");
  expect(response.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response.headers()["content-security-policy"]).toContain("frame-ancestors 'none'");
});
