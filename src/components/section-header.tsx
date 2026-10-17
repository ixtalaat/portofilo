export default function SectionHeader({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          {index}
        </p>
        <h2 className="mt-2 font-display text-4xl uppercase tracking-wide sm:text-5xl">
          {title}
        </h2>
      </div>
      {kicker ? (
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{kicker}</p>
      ) : null}
    </div>
  );
}
