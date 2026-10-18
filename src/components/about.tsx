import { certifications, education, languages, profile, skills } from "@/data/cv";
import Reveal from "./reveal";
import SectionHeader from "./section-header";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeader index="Section 01" title="About" kicker="The long read" />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <Reveal delay={80}>
          <p className="text-base leading-relaxed text-muted sm:text-lg">{profile.summary}</p>

          <div className="animate-card mt-10 rounded-2xl border border-border bg-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Education
            </p>
            <h3 className="mt-3 font-display text-2xl uppercase">{education.school}</h3>
            <p className="mt-1 text-sm text-muted">{education.degree}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
              {education.period}
            </p>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {education.notes.map((note) => (
                <li key={note}>◦ {note}</li>
              ))}
            </ul>
          </div>

          <div className="animate-card mt-6 rounded-2xl border border-border bg-surface p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Certifications
            </p>
            <ul className="mt-3 space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-sm font-medium">{cert.name}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    {cert.issuer} · {cert.date}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
              {languages.map((lang) => (
                <span
                  key={lang.name}
                  className="rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted"
                >
                  {lang.name}: {lang.level}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid content-start gap-4 sm:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal key={group.label} delay={120 + index * 70}>
              <div className="animate-card h-full rounded-2xl border border-border bg-surface p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  {group.label}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-onsoft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
