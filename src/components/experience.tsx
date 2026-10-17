import { experience } from "@/data/cv";
import Reveal from "./reveal";
import SectionHeader from "./section-header";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeader index="Section 02" title="Experience" kicker="Field notes" />
      </Reveal>

      <ol className="relative space-y-8 border-l border-border pl-8">
        {experience.map((job, index) => (
          <li key={job.role + job.company} className="relative">
            <span
              className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent"
              aria-hidden
            />
            <Reveal delay={index * 90}>
              <div className="animate-card rounded-2xl border border-border bg-surface p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl uppercase">{job.role}</h3>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {job.company} · {job.place}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-accent">·</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
