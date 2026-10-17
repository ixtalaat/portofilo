import type { Metadata } from "next";
import { Anton, Inter, IBM_Plex_Mono } from "next/font/google";
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
        url: "/og.png",
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
    images: ["/og.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Talaat Ramadan",
  jobTitle: "Software Engineer",
  email: "mailto:talatramadan10@gmail.com",
  telephone: "+201126342642",
  url: "https://ixtalaat.vercel.app",
  image: "https://ixtalaat.vercel.app/portrait-cut.png",
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
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})();`;

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
