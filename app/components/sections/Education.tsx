import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { education } from "../data/content";

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M12 4 2 9l10 5 10-5-10-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6 11v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5M21 9v5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** "Education" — the two qualifications from the CV. */
export function Education() {
  return (
    <section id="education" className="bg-surface py-section">
      <Container>
        <SectionHeading
          eyebrow={education.eyebrow}
          title={education.title}
          body={education.body}
          align="left"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {education.items.map((e) => (
            <article
              key={e.degree}
              className="flex flex-col rounded-card border border-line-soft bg-white p-7 shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-espresso text-white">
                  <CapIcon />
                </span>
                <span className="rounded-full border border-line bg-cream-soft px-3 py-1 font-mono text-xs text-ink-soft">
                  {e.period}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">
                {e.degree}
              </h3>
              <p className="mt-2 text-[0.95rem] font-medium text-ink-soft">
                {e.school}
              </p>
              <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted">
                {e.note}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
