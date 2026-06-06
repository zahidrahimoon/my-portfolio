import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { finalCta } from "../data/content";

/** Closing call-to-action band above the footer. */
export function FinalCta() {
  return (
    <section id="contact" className="bg-cream py-section">
      <Container className="reveal text-center">
        <h2 className="display mx-auto max-w-3xl text-4xl font-bold text-ink sm:text-5xl">
          {finalCta.title}
        </h2>
        <p className="mt-5 text-lg text-muted">{finalCta.body}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={finalCta.primaryCta.href} variant="primary" size="lg">
            {finalCta.primaryCta.label}
          </Button>
          <Button href={finalCta.secondaryCta.href} variant="light" size="lg">
            {finalCta.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
