import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { whyItWorks } from "../data/content";

function Tombstone() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-faint" fill="none">
      <path
        d="M6 21V10a6 6 0 0 1 12 0v11"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 7v6M9 10h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Crown() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-gold" fill="none">
      <path
        d="M4 8l3.5 3L12 5l4.5 6L20 8l-1.5 9h-13L4 8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M5.5 20h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** "AI can never replace" — connected row of dying channels + highlight. */
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
          {/* connector line behind the cards */}
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
                <Tombstone />
                <h3 className="mt-4 font-semibold text-ink-soft">{ch.name}</h3>
                <span className="mt-1 text-xs text-muted">{ch.span}</span>
                <p className="mt-3 text-xs italic leading-relaxed text-muted">
                  {ch.note}
                </p>
              </div>
            ))}

            {/* highlighted alternative */}
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-gold bg-white px-5 py-7 text-center shadow-soft">
              <Crown />
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
