import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { LogoMarquee } from "./LogoMarquee";
import { hero, clientLogos } from "../data/content";

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 2l2.9 6.1 6.6.9-4.8 4.7 1.2 6.6L12 18.2 6.1 20.3l1.2-6.6L2.5 9l6.6-.9L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/** Above-the-fold hero with serif headline, CTAs, rating and logo wall. */
export function Hero() {
  return (
    <section id="top" className="bg-cream">
      <Container className="pt-20 pb-14 text-center sm:pt-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <span className="eyebrow">{hero.eyebrow}</span>

          <h1 className="display mt-8 max-w-4xl text-5xl font-bold text-ink sm:text-6xl md:text-[5rem]">
            {hero.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            {hero.body}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} variant="primary" size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="light" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>

          {/* social proof */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-sm">
            <Stars />
            <span className="font-medium text-ink-soft">{hero.rating}</span>
            <div className="flex -space-x-2">
              {["#8a6d5b", "#5b6a8a", "#7a5b8a", "#5b8a72"].map((c, i) => (
                <span
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-cream"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span className="font-medium text-ink-soft">{hero.ratingSub}</span>
          </div>
        </div>
      </Container>

      {/* client logo wall */}
      <div className="pb-16">
        <LogoMarquee items={clientLogos} />
      </div>
    </section>
  );
}
