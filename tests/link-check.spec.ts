import { expect, test } from "@playwright/test";

test("external links on the home page respond", async ({ page, request }) => {
  test.setTimeout(180_000);
  await page.goto("/");

  const hrefs = await page.$$eval("a[href^='http']", (anchors) =>
    [...new Set(anchors.map((anchor) => (anchor as HTMLAnchorElement).href))],
  );
  const homeOrigin = new URL(page.url()).origin;
  const external = [...new Set(hrefs.filter((href) => new URL(href).origin !== homeOrigin))].sort();

  expect(external.length).toBeGreaterThan(0);

  const failures: string[] = [];

  for (const url of external) {
    let status: number;
    try {
      const head = await request.head(url, { timeout: 25_000, failOnStatusCode: false });
      status = head.status();
      if (status >= 400 || status === 405) {
        const get = await request.get(url, {
          timeout: 25_000,
          failOnStatusCode: false,
          maxRedirects: 5,
        });
        status = get.status();
      }
    } catch (error) {
      failures.push(`${url} — ${String(error)}`);
      continue;
    }

    // LinkedIn rejects automated clients (999); Railway free services
    // return 502/503 while waking from sleep. Neither means the link rotted.
    const acceptable = status < 400 || status === 999 || status === 502 || status === 503;
    if (!acceptable) failures.push(`${url} — HTTP ${status}`);
  }

  expect(failures).toEqual([]);
});
