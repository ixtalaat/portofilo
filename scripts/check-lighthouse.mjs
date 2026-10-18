import { readFileSync } from "node:fs";

const file = process.argv[2];
if (!file) {
  console.error("usage: node scripts/check-lighthouse.mjs <report.json>");
  process.exit(2);
}

const report = JSON.parse(readFileSync(file, "utf8"));

const thresholds = {
  performance: 0.6,
  accessibility: 0.95,
  "best-practices": 0.9,
  seo: 0.95,
};

let failed = false;
for (const [id, min] of Object.entries(thresholds)) {
  const score = report.categories?.[id]?.score ?? 0;
  const pass = score >= min;
  if (!pass) failed = true;
  const name = id.padEnd(16);
  const mark = pass ? "PASS" : "FAIL";
  console.log(`${mark}  ${name} ${Math.round(score * 100)} (min ${Math.round(min * 100)})`);
}

process.exit(failed ? 1 : 0);
