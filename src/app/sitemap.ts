import type { MetadataRoute } from "next";

const SITE_URL = "https://ixtalaat.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2026-10-18",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
