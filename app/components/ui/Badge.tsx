import type { ReactNode } from "react";

/** Small pill label, e.g. the "MOST POPULAR" tag on format cards. */
export function Badge({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "neutral";
}) {
  const tones = {
    dark: "bg-espresso text-white",
    neutral: "bg-cream-deep text-ink-soft",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-pill px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
