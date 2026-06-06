import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { problems } from "../data/content";

const toneStyles: Record<string, string> = {
  rose: "bg-rose-100 text-rose-500",
  amber: "bg-amber-100 text-amber-600",
  sage: "bg-emerald-100 text-emerald-600",
};

function Icon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    "user-x": (
      <>
        <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M3.5 20a5.5 5.5 0 0 1 11 0M16 8l4 4m0-4-4 4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 7.5V12l3 2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    chart: (
      <>
        <path
          d="M5 20V10M12 20V5M19 20v-7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      {paths[name]}
    </svg>
  );
}

/** Three problem cards plus a supporting pull-quote. */
export function Problem() {
  return (
    <section className="bg-surface py-section">
      <Container>
        <SectionHeading
          eyebrow={problems.eyebrow}
          title={problems.title}
          align="left"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.items.map((item) => (
            <div
              key={item.title}
              className="rounded-card border border-line-soft bg-cream-soft/40 p-7"
            >
              <span
                className={`grid h-11 w-11 place-items-center rounded-xl ${toneStyles[item.tone]}`}
              >
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* pull quote */}
        <figure className="mt-12 max-w-3xl border-l-2 border-espresso pl-6">
          <blockquote className="font-display text-xl italic leading-relaxed text-ink-soft">
            &ldquo;{problems.testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3">
            <span
              className="h-9 w-9 rounded-full bg-cover bg-center"
              style={{
                backgroundImage: "url(https://i.pravatar.cc/80?img=12)",
                backgroundColor: "#cabfae",
              }}
            />
            <span className="text-sm text-muted">
              — {problems.testimonial.name}, {problems.testimonial.role}
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
