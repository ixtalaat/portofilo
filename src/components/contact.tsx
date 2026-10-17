import { profile } from "@/data/cv";
import Reveal from "./reveal";
import SectionHeader from "./section-header";
import { DocIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon } from "./icons";

export default function Contact() {
  const rows = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <MailIcon /> },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      icon: <PhoneIcon />,
    },
    { label: "GitHub", value: "ixtalaat", href: profile.github, icon: <GithubIcon /> },
    { label: "LinkedIn", value: "ixtalaat", href: profile.linkedin, icon: <LinkedinIcon /> },
    { label: "Location", value: profile.location, href: null, icon: <PinIcon /> },
  ];

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
            className="animate-pill mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
          >
            <DocIcon className="h-4 w-4" />
            Download CV
          </a>
        </Reveal>

        <ul className="space-y-3">
          {rows.map((row, index) => {
            const content = (
              <div className="animate-icon flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 hover:border-accent">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  {row.icon}
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                    {row.label}
                  </p>
                  <p className="text-sm font-medium">{row.value}</p>
                </div>
              </div>
            );
            return (
              <li key={row.label}>
                <Reveal delay={100 + index * 70}>
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
