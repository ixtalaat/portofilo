import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
        Error 404 · Issue missing
      </p>
      <h1 className="mt-4 font-display text-6xl leading-none uppercase sm:text-8xl">
        Off the
        <span className="block text-accent">record.</span>
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
        The page you&apos;re looking for doesn&apos;t exist, was moved, or the
        press run never happened. Everything worth reading is still on the front
        page.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="animate-pill inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
        >
          Back to the front page
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          Browse projects
        </Link>
      </div>
    </section>
  );
}
