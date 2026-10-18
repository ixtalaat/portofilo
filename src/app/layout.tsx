import type { Metadata, Viewport } from "next";
import { Anton, Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ixtalaat.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: "Talaat Ramadan — Software Engineer",
  description:
    "Portfolio of Talaat Ramadan, Software Engineer specializing in .NET, Laravel and NestJS. Based in Cairo, Egypt — remote friendly.",
  openGraph: {
    title: "Talaat Ramadan — Software Engineer",
    description:
      "Software Engineer specializing in .NET, Laravel and NestJS. Cairo, Egypt — remote friendly.",
    url: "https://ixtalaat.vercel.app",
    siteName: "Talaat Ramadan",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Talaat Ramadan — Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talaat Ramadan — Software Engineer",
    description:
      "Software Engineer specializing in .NET, Laravel and NestJS. Cairo, Egypt — remote friendly.",
    images: ["/og.jpg"],
  },
};

const SITE_URL = "https://ixtalaat.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Talaat Ramadan",
      jobTitle: "Software Engineer",
      email: "mailto:talatramadan10@gmail.com",
      telephone: "+201126342642",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/portrait-cut.webp`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cairo",
        addressCountry: "EG",
      },
      sameAs: [
        "https://github.com/ixtalaat",
        "https://www.linkedin.com/in/ixtalaat",
      ],
      knowsAbout: [
        "ASP.NET Core",
        "Laravel",
        "NestJS",
        "Angular",
        "C#",
        "TypeScript",
        "SQL Server",
        "PostgreSQL",
        "Clean Architecture",
        "RESTful APIs",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Mapour",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Talaat Ramadan",
      description:
        "Portfolio of Talaat Ramadan, Software Engineer specializing in .NET, Laravel and NestJS.",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");var dark=t!=="light";document.documentElement.classList.toggle("dark",dark);var m=document.querySelector('meta[name="theme-color"]');if(!m){m=document.createElement("meta");m.setAttribute("name","theme-color");document.head.appendChild(m)}m.content=dark?"#0b1120":"#f4f1ea"}catch(e){document.documentElement.classList.add("dark")}})();`;

export const viewport: Viewport = {
  themeColor: "#0b1120",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${plexMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent-solid focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
