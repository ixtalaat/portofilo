"use client";

import { useState } from "react";
import { profile } from "@/data/cv";
import Reveal from "./reveal";
import SectionHeader from "./section-header";
import {
  CheckIcon,
  CopyIcon,
  DocIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "./icons";

type Row = {
  label: string;
  value: string;
  href: string | null;
  icon: React.ReactNode;
  copy?: string;
};

const rows: Row[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <MailIcon />,
    copy: profile.email,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: <PhoneIcon />,
    copy: profile.phone,
  },
  { label: "GitHub", value: "ixtalaat", href: profile.github, icon: <GithubIcon /> },
  { label: "LinkedIn", value: "ixtalaat", href: profile.linkedin, icon: <LinkedinIcon /> },
  { label: "Location", value: profile.location, href: null, icon: <PinIcon /> },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyRow(row: Row) {
    if (!row.copy) return;
    try {
      await navigator.clipboard.writeText(row.copy);
      setCopied(row.label);
      window.setTimeout(() => setCopied(null), 1500);
    } catch {
      // clipboard unavailable (permissions / insecure context)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeader index="Section 04" title="Contact" kicker="Letters to the editor" />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <Reveal delay={80}>
          <p className="font-display text-4xl leading-tight uppercase sm:text-5xl">
            Let&apos;s build
            <span className="block text-accent">something solid.</span>
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Open to software engineering roles, freelance work and interesting
            problems in .NET, Laravel and NestJS. Drop a line and I&apos;ll get
            back to you.
          </p>
          <a
            href="/CV.pdf"
            download
            className="animate-pill mt-8 inline-flex items-center gap-2 rounded-full bg-accent-solid px-5 py-3 text-sm font-semibold text-white"
          >
            <DocIcon className="h-4 w-4" />
            Download CV
          </a>
        </Reveal>

        <ul className="space-y-3" aria-live="polite">
          {rows.map((row, index) => {
            const inner = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  {row.icon}
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                    {row.label}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    {row.value}
                  </span>
                </span>
              </>
            );
            return (
              <li key={row.label}>
                <Reveal delay={100 + index * 70}>
                  <div className="group relative rounded-2xl border border-border bg-surface transition-colors hover:border-accent">
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="flex items-center gap-4 p-4 pr-14"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 pr-14">{inner}</div>
                    )}
                    {row.copy && (
                      <button
                        type="button"
                        onClick={() => copyRow(row)}
                        aria-label={
                          copied === row.label
                            ? `${row.label} copied`
                            : `Copy ${row.label.toLowerCase()}`
                        }
                        className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                      >
                        {copied === row.label ? (
                          <CheckIcon className="h-4 w-4 text-accent" />
                        ) : (
                          <CopyIcon className="h-4 w-4" />
                        )}
                      </button>
                    )}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
