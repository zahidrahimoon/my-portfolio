import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "light";

const base =
  "lift inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso/30 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-12 px-7 text-[0.95rem]",
} as const;

const variants: Record<Variant, string> = {
  primary: "bg-espresso text-white hover:bg-espresso-soft",
  outline:
    "border border-line bg-cream-soft text-ink hover:bg-white",
  ghost: "text-ink hover:bg-ink/5",
  light: "border border-line bg-white text-ink hover:bg-cream-soft",
};

/** Anchor-styled button. Square-ish corners matching the Covent design. */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
