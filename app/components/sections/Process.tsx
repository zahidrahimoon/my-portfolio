import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../svg/Icon";
import { getCollection, getSectionHeading } from "@/lib/data/collections";
import type { WorkProcessItem } from "@/lib/validation/schemas";

/** "How I Work" — a four-step delivery process from idea to production. */
export async function Process() {
  const [items, heading] = await Promise.all([
    getCollection<WorkProcessItem>("workProcess"),
    getSectionHeading("workProcess"),
  ]);

  return (
    <section id="process" className="bg-surface py-section">
      <Container>
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          body={heading.body}
          align="left"
        />

        <div className="reveal relative mt-14">
          {/* connecting line on large screens */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[2.65rem] hidden h-px bg-line lg:block"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map(({ data: s }) => (
              <div key={s.no} className="group relative flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-espresso text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-4xl font-bold text-faint">
                    {s.no}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
