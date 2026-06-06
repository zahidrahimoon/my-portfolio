import { Container } from "../ui/Container";
import { about } from "../data/content";

/** "About Me" — intro copy with stats and a button that opens the contact modal. */
export function About() {
  return (
    <section id="about" className="bg-cream py-section">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left — copy + CTA */}
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

          {/* Right — stat cards */}
          <div className="reveal grid gap-4 sm:grid-cols-2">
            {about.highlights.map((h, i) => (
              <div
                key={h.label}
                className={`flex flex-col justify-center rounded-card border border-line-soft bg-white p-7 ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <span className="font-display text-4xl font-bold text-ink sm:text-5xl">
                  {h.value}
                </span>
                <span className="mt-2 text-sm text-muted">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
