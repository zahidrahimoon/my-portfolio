import { Container } from "../ui/Container";
import { footer, contact, nav } from "../data/content";

const socials = [
  ...footer.socials.map((s) => ({ label: s.label, href: s.href })),
  { label: "Email", href: `mailto:${footer.email}` },
];

/** Oversized wordmark footer with a contact CTA, link columns and a social row. */
export function Footer() {
  return (
    <footer className="overflow-hidden bg-espresso text-white">
      <Container className="pt-16 pb-10 sm:pt-20">
        {/* Top — CTA + quick links + socials */}
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-soft">
              Let&apos;s work together
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="display mt-4 inline-block text-3xl font-bold text-white transition-colors hover:text-gold-soft sm:text-4xl"
            >
              {contact.email}
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
              {contact.responseTime} · {contact.location}
            </p>
          </div>

          <div className="flex gap-12 sm:gap-16 md:justify-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Explore
              </p>
              <ul className="mt-4 space-y-3">
                {nav.primary.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Connect
              </p>
              <ul className="mt-4 space-y-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-white/70 transition-all duration-300 ease-out group-hover:w-5" />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Giant animated wordmark — bleeds edge to edge */}
      <h2 className="name-shimmer display select-none px-6 text-center text-[19vw] font-bold leading-[0.82] tracking-tight sm:px-8 lg:text-[15vw]">
        {footer.name}
      </h2>

      <Container className="flex flex-col items-center justify-between gap-3 pb-10 pt-8 sm:flex-row">
        <p className="text-xs text-white/40">{footer.copyright}</p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-xs font-medium text-white/55 transition-colors hover:text-white"
        >
          Back to top
          <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" fill="none">
            <path
              d="M12 19V5M6 11l6-6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </Container>
    </footer>
  );
}
