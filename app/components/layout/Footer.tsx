import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { site, footer } from "../data/content";

function SocialIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    linkedin: (
      <path d="M6.94 8.5V18H4V8.5h2.94zM5.47 4a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4zM20 18h-2.93v-5c0-1.2-.43-2-1.5-2-.82 0-1.3.55-1.52 1.08-.08.19-.1.45-.1.71V18H11s.04-8.66 0-9.5h2.94v1.35c.39-.6 1.09-1.46 2.65-1.46 1.94 0 3.4 1.27 3.4 4V18z" />
    ),
    instagram: (
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17C2.41 8.5 2.4 8.85 2.4 12s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4C15.5 4.01 15.15 4 12 4zm0 3.06A4.94 4.94 0 1 1 12 17a4.94 4.94 0 0 1 0-9.88zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28zm5.16-.96a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
    ),
    x: (
      <path d="M17.5 3h3l-6.56 7.5L21.5 21h-5.9l-4.6-5.9L5.7 21H2.7l7-8L2.5 3h6l4.15 5.45L17.5 3zm-1.05 16h1.65L7.62 4.65H5.85L16.45 19z" />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      {paths[name]}
    </svg>
  );
}

/** Global dark footer with description, socials and link columns. */
export function Footer() {
  return (
    <footer className="bg-espresso text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo invert />
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              {footer.description}
            </p>
            <div className="mt-6 flex gap-4 text-white/55">
              {footer.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="transition-colors hover:text-white"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-white"
          >
            {site.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
