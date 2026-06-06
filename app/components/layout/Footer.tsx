import { footer } from "../data/content";

const links = [
  ...footer.socials.map((s) => ({ label: s.label, href: s.href })),
  { label: "Email", href: `mailto:${footer.email}` },
];

/** Oversized wordmark footer (à la Antigravity) with a vertical social rail. */
export function Footer() {
  return (
    <footer className="overflow-hidden bg-espresso text-white">
      <div className="flex items-stretch gap-6 px-6 pb-8 pt-16 sm:px-8">
        {/* Left — giant animated name + copyright */}
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <h2 className="name-shimmer display text-[13vw] font-bold leading-[0.85] tracking-tight">
            {footer.name}
          </h2>
          <p className="mt-10 text-xs text-white/40 text-center">{footer.copyright}</p>
        </div>

        {/* Right — vertical, interactive social rail */}
        <nav className="flex shrink-0 flex-col justify-center gap-5 self-stretch">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-center justify-end gap-3 text-sm font-medium text-white/55 transition-colors duration-300 hover:text-white"
            >
              <span className="h-px w-0 bg-white/70 transition-all duration-300 ease-out group-hover:w-8" />
              <span className="transition-transform duration-300 ease-out group-hover:-translate-x-1">
                {l.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
