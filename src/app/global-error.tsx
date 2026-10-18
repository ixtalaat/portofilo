"use client";

import "./globals.css";

const themeInit = `(function(){try{var t=localStorage.getItem("theme");var dark=t!=="light";document.documentElement.classList.toggle("dark",dark)}catch(e){document.documentElement.classList.add("dark")}})();`;

export default function GlobalError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <title>Something went wrong — Talaat Ramadan</title>
      </head>
      <body className="min-h-full flex flex-col">
        <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Error · Press stopped mid-run
          </p>
          <h1 className="mt-4 font-display text-6xl leading-none uppercase sm:text-8xl">
            Something
            <span className="block text-accent">jammed.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            A critical error occurred while loading the site. Try again — if it
            persists, the direct line below always works.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => retry()}
              className="inline-flex items-center gap-2 rounded-full bg-accent-solid px-5 py-3 text-sm font-semibold text-white"
            >
              Try again
            </button>
            <a
              href="mailto:talatramadan10@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Email directly
            </a>
          </div>
          <pre className="mt-8 max-w-2xl overflow-x-auto rounded-xl border border-border bg-surface p-4 font-mono text-[11px] text-muted">
            {error instanceof Error ? error.message : "Unexpected application error"}
          </pre>
        </section>
      </body>
    </html>
  );
}
