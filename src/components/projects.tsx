import { projects } from "@/data/cv";
import Reveal from "./reveal";
import SectionHeader from "./section-header";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeader index="Section 03" title="Projects" kicker="Selected work" />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={(index % 2) * 100}>
            <article className="animate-card flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-3xl uppercase">{project.name}</h3>
                <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {project.kind}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
              {project.links && (
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent hover:underline"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
              <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-muted">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
