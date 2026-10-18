import { execSync } from "node:child_process";
import type { MetadataRoute } from "next";

const SITE_URL = "https://ixtalaat.vercel.app";
const FALLBACK_DATE = "2026-10-18";

function lastCommitDate(): string {
  try {
    return execSync("git log -1 --format=%cI", { encoding: "utf8" }).trim() || FALLBACK_DATE;
  } catch {
    return FALLBACK_DATE;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: lastCommitDate(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
