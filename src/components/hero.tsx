import { profile } from "@/data/cv";
import Portrait from "./portrait";
import { DocIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const socials = [
  { label: "GitHub", href: profile.github, icon: <GithubIcon /> },
  { label: "LinkedIn", href: profile.linkedin, icon: <LinkedinIcon /> },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-glow relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p
            className="rise-in flex items-center gap-3 font-display text-xl uppercase tracking-wide sm:text-2xl"
            style={{ animationDelay: "60ms" }}
          >
            <span className="h-5 w-1.5 rounded-full bg-accent" aria-hidden />
            {profile.fullName.toUpperCase()}
          </p>

          <h1 className="-skew-x-3 mt-4 origin-left font-display text-[17vw] leading-[0.85] uppercase sm:text-8xl lg:text-[7.5rem]">
            <span
              className="rise-in text-shimmer block bg-gradient-to-r from-blue-500 via-accent to-blue-300 bg-clip-text text-transparent"
              style={{
                animationDelay: "160ms",
                filter: "drop-shadow(0 0 28px var(--glow))",
              }}
            >
              {profile.role[0]}
            </span>
            <span
              className="rise-in block text-transparent"
              style={{
                animationDelay: "280ms",
                WebkitTextStroke: "2.5px var(--cream)",
              }}
            >
              {profile.role[1]}
            </span>
          </h1>

          <p
            className="rise-in mt-8 flex items-center gap-3 font-display text-xl uppercase tracking-wide sm:text-2xl"
            style={{ animationDelay: "400ms" }}
          >
            <span
              className="h-0.5 w-8 bg-gradient-to-r from-blue-500 to-accent"
              aria-hidden
            />
            <span className="bg-gradient-to-r from-blue-500 via-accent to-blue-300 bg-clip-text text-transparent">
              {profile.tagline}
            </span>
          </p>

          <p
            className="rise-in mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base"
            style={{ animationDelay: "480ms" }}
          >
            {profile.subtitle}
          </p>

          <div
            className="rise-in mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "560ms" }}
          >
            <a
              href="#contact"
              className="animate-pill inline-flex items-center gap-2 rounded-full bg-accent-solid px-5 py-3 text-sm font-semibold text-white"
            >
              <MailIcon className="h-4 w-4" />
              drop me a line
            </a>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="animate-icon inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface hover:border-accent hover:text-accent"
              >
                {s.icon}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="animate-icon inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface hover:border-accent hover:text-accent"
            >
              <MailIcon />
            </a>
            <a
              href="/CV.pdf"
              download
              className="animate-icon inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium hover:border-accent hover:text-accent"
            >
              <DocIcon className="h-4 w-4" />
              CV
            </a>
          </div>
        </div>

        <div className="rise-in" style={{ animationDelay: "320ms" }}>
          <div className="float-soft">
            <Portrait />
          </div>
        </div>
      </div>
    </section>
  );
}
