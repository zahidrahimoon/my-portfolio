import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { whyItWorks } from "../data/content";

function ServiceIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    layout: (
      <path
        d="M4 5h16v14H4zM4 9h16M9 9v10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
    server: (
      <path
        d="M4 5h16v5H4zM4 14h16v5H4zM7 7.5h.01M7 16.5h.01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    phone: (
      <path
        d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM11 18h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    cloud: (
      <path
        d="M7 18a4 4 0 0 1-.5-7.97 5 5 0 0 1 9.6.97A3.5 3.5 0 0 1 17 18H7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink-soft" fill="none">
      {paths[name]}
    </svg>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-gold" fill="currentColor">
      <path d="M12 2l2.9 6.1 6.6.9-4.8 4.7 1.2 6.6L12 18.2 6.1 20.3l1.2-6.6L2.5 9l6.6-.9L12 2z" />
    </svg>
  );
}

/** "What I Do" — four disciplines connected to a full-stack highlight. */
export function WhyItWorks() {
  return (
    <section className="bg-cream py-section">
      <Container>
        <SectionHeading
          eyebrow={whyItWorks.eyebrow}
          title={whyItWorks.title}
          body={whyItWorks.body}
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-line lg:block"
          />

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whyItWorks.channels.map((ch) => (
              <div
                key={ch.name}
                className="flex flex-col items-center rounded-2xl border border-line bg-cream/40 px-5 py-7 text-center"
              >
                <ServiceIcon name={ch.icon} />
                <h3 className="mt-4 font-semibold text-ink">{ch.name}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {ch.note}
                </p>
              </div>
            ))}

            {/* highlighted discipline */}
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-gold bg-white px-5 py-7 text-center shadow-soft">
              <Star />
              <div className="mt-4 h-px w-10 bg-gold/40" />
              <h3 className="mt-4 font-display text-lg font-bold leading-tight text-ink">
                {whyItWorks.highlight.name}
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
