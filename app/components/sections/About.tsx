import { Container } from "../ui/Container";
import { about } from "../data/content";

/** "About Me" — intro copy + stats on the left, portrait on the right. */
export function About() {
  return (
    <section id="about" className="bg-cream py-section">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left — copy, stats + CTA */}
          <div className="reveal">
            <span className="eyebrow mb-5 block">{about.eyebrow}</span>
            <h2 className="display max-w-xl text-4xl font-bold text-ink sm:text-5xl">
              {about.title}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <a
              href="#contact"
              className="lift mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-espresso px-7 text-[0.95rem] font-medium text-white transition-colors hover:bg-espresso-soft"
            >
              {about.cta.label}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Right — portrait */}
          <div className="reveal relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-card border border-gold/30" aria-hidden />
            <div className="relative overflow-hidden rounded-card border border-line-soft bg-white shadow-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://picsum.photos/seed/zahid-portrait/720/880"
                alt="Zahid Rahimoon"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
