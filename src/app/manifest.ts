import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Talaat Ramadan — Software Engineer",
    short_name: "Talaat Ramadan",
    description:
      "Portfolio of Talaat Ramadan, Software Engineer specializing in .NET, Laravel and NestJS. Based in Cairo, Egypt — remote friendly.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1120",
    theme_color: "#0b1120",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
