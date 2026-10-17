import { profile } from "@/data/cv";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted sm:px-6 lg:px-8">
        <span>
          © 2026 {profile.fullName}
        </span>
        <span>Built with Next.js · Tailwind</span>
        <span>{profile.est}</span>
      </div>
    </footer>
  );
}
