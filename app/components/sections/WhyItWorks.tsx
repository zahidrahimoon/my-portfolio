import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../svg/Icon";
import { whyItWorks } from "../data/content";

/** "What I Do" — four disciplines connected to a full-stack highlight. */
export function WhyItWorks() {
  return (
    <section id="what" className="bg-surface py-section">
      <Container>
        <SectionHeading
          eyebrow={whyItWorks.eyebrow}
          title={whyItWorks.title}
          body={whyItWorks.body}
        />

        <div className="reveal relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-line lg:block"
          />

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whyItWorks.channels.map((ch) => (
              <div
                key={ch.name}
                className="group flex flex-col items-center rounded-2xl border border-line bg-cream/40 px-5 py-7 text-center"
              >
                <Icon name={ch.icon} className="h-6 w-6 text-ink-soft" />
                <h3 className="mt-4 font-semibold text-ink">{ch.name}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {ch.note}
                </p>
              </div>
            ))}

            {/* highlighted discipline */}
            <div className="group flex flex-col items-center justify-center rounded-2xl border-2 border-gold bg-white px-5 py-7 text-center shadow-soft">
              <Icon name="star" className="h-7 w-7 text-gold" animate="pulse" />
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
