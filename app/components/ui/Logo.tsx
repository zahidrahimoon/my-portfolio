import { site } from "../data/content";

/** Serif wordmark (Playfair) used in navbar and footer. */
export function Logo({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <a
      href="#top"
      className={`font-display text-2xl font-bold tracking-tight ${
        invert ? "text-white" : "text-ink"
      } ${className}`}
    >
      {site.name}
    </a>
  );
}
