"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
        Error 500 · Press stopped mid-run
      </p>
      <h1 className="mt-4 font-display text-6xl leading-none uppercase sm:text-8xl">
        Something
        <span className="block text-accent">jammed.</span>
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
        An unexpected error occurred while rendering this page. Try again — if
        it persists, the direct line below always works.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => retry()}
          className="animate-pill inline-flex items-center gap-2 rounded-full bg-accent-solid px-5 py-3 text-sm font-semibold text-white"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          Back to the front page
        </Link>
      </div>
    </section>
  );
}
