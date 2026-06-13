import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../svg/Icon";
import { getCollection, getSectionHeading } from "@/lib/data/collections";
import type { EducationItem } from "@/lib/validation/schemas";

/** "Education" — the two qualifications from the CV. */
export async function Education() {
  const [items, heading] = await Promise.all([
    getCollection<EducationItem>("education"),
    getSectionHeading("education"),
  ]);

  return (
    <section id="education" className="bg-surface py-section">
      <Container>
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          body={heading.body}
          align="left"
        />

        <div className="reveal mt-12 grid gap-5 sm:grid-cols-2">
          {items.map(({ data: e }) => (
            <article
              key={e.degree}
              className="group flex flex-col rounded-card border border-line-soft bg-white p-7 shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-espresso text-white">
                  <Icon name="cap" className="h-6 w-6" />
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
