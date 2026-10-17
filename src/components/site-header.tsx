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

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent font-display text-xl text-white">
            {profile.initials}.
          </span>
          <span className="font-mono text-sm font-semibold uppercase tracking-widest">
            {profile.fullName}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
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
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted sm:px-6 md:grid-cols-4 lg:px-8">
          <span>{profile.issue}</span>
          <span className="md:text-center">{profile.edition}</span>
          <span className="md:text-center">Cairo · Remote</span>
          <span className="text-right">{profile.est}</span>
        </div>
      </div>
    </header>
  );
}
