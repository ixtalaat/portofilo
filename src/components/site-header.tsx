"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/cv";
import ThemeToggle from "./theme-toggle";
import { DocIcon } from "./icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="IX — back to top">
          <span
            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl shadow-[0_4px_14px_-4px_var(--glow)] transition-transform duration-300 group-hover:scale-105"
            style={{ background: "linear-gradient(135deg, var(--accent) 0%, #1d4ed8 100%)" }}
          >
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-white/25" aria-hidden />
            <span className="font-display text-lg leading-none text-white">
              {profile.initials}
            </span>
            <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
          </span>
          <span className="font-mono text-sm font-semibold uppercase tracking-widest transition-colors group-hover:text-accent">
            {profile.fullName}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                  isActive ? "text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-accent-soft px-4 py-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-white sm:inline-block"
          >
            Ask
          </a>
          <a
            href="/CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs font-semibold uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
          >
            <DocIcon className="h-3.5 w-3.5" />
            CV
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-2 sm:px-6" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-border py-3 font-mono text-xs uppercase tracking-[0.25em] last:border-b-0 ${
                active === link.href.slice(1) ? "text-accent" : "text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted sm:px-6 md:grid-cols-4 lg:px-8">
          <span>{profile.issue}</span>
          <span className="md:text-center">{profile.edition}</span>
          <span className="md:text-center">Cairo · Remote</span>
          <span className="text-right">{profile.est}</span>
        </div>
      </div>

      <div
        className="h-0.5 origin-left bg-accent transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress / 100})` }}
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </header>
  );
}
