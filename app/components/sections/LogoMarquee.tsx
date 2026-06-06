/** Infinite horizontal marquee of wordmark "logos" (pure CSS animation). */
export function LogoMarquee({
  items,
  speed = "normal",
  className = "",
}: {
  items: string[];
  speed?: "normal" | "slow";
  className?: string;
}) {
  const doubled = [...items, ...items];
  const animation =
    speed === "slow" ? "animate-marquee-slow" : "animate-marquee";

  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div className={`flex w-max items-center gap-14 ${animation}`}>
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="shrink-0 text-xl font-semibold tracking-tight text-ink/30"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
