import type { CSSProperties } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { LogoMarquee } from "./LogoMarquee";
import { getSection } from "@/lib/data/singletons";
import { getCollection } from "@/lib/data/collections";
import type { HeroSingleton, ClientLogoItem } from "@/lib/validation/schemas";

/** Above-the-fold hero with serif headline, CTAs, availability + stack. */
export async function Hero() {
  const [hero, logoDocs] = await Promise.all([
    getSection<HeroSingleton>("hero"),
    getCollection<ClientLogoItem>("clientLogos"),
  ]);
  if (!hero) return null;
  const clientLogos = logoDocs.map((d) => d.data.label);

  return (
    <section id="top" className="bg-cream">
      <Container className="pt-20 pb-14 text-center sm:pt-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <span className="rise inline-flex items-center gap-2 rounded-pill border border-line bg-cream-soft px-4 py-1.5 text-sm font-medium text-ink-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {hero.status}
          </span>

          <span className="eyebrow rise mt-6" style={{ "--rise-delay": "80ms" } as CSSProperties}>
            {hero.eyebrow}
          </span>

          <h1
            className="display rise mt-5 text-4xl font-bold text-ink sm:text-5xl lg:whitespace-nowrap lg:text-6xl"
            style={{ "--rise-delay": "160ms" } as CSSProperties}
          >
            {hero.title}
          </h1>

          <p
            className="rise mt-8 max-w-2xl text-lg leading-relaxed text-muted"
            style={{ "--rise-delay": "240ms" } as CSSProperties}
          >
            {hero.body}
          </p>

          <div
            className="rise mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ "--rise-delay": "320ms" } as CSSProperties}
          >
            <Button href={hero.primaryCta.href} variant="primary" size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="light" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>

          {/* quick stats */}
          <div
            className="rise mt-12 flex items-center gap-8 sm:gap-12"
            style={{ "--rise-delay": "400ms" } as CSSProperties}
          >
            {hero.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold text-ink">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* tech-stack marquee */}
      <div className="pb-16">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-muted">
          Tools &amp; technologies I work with
        </p>
        <LogoMarquee items={clientLogos} />
      </div>
    </section>
  );
}
