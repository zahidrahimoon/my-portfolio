import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { testimonials } from "../data/content";

type Item = (typeof testimonials.items)[number];

function AchievementIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    package: (
      <path
        d="M12 3 4 7v10l8 4 8-4V7l-8-4ZM4 7l8 4 8-4M12 11v10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    research: (
      <path
        d="M9 3h6M10 3v5L6 18a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-10V3M8 14h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    certificate: (
      <path
        d="M12 3 4 6v5c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3ZM9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    network: (
      <path
        d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 8v3M12 11 6 17M12 11l6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    code: (
      <path
        d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    cap: (
      <path
        d="M12 4 2 9l10 5 10-5-10-5ZM6 11v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5M21 9v5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      {paths[name]}
    </svg>
  );
}

function AchievementCard({ item, featured }: { item: Item; featured: boolean }) {
  return (
    <div
      className={`relative flex flex-col rounded-card bg-cream-soft p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 ${
        featured ? "border-2 border-espresso" : "border border-line-soft"
      }`}
    >
      {featured ? (
        <div className="absolute -top-3 left-6">
          <Badge tone="dark">Featured</Badge>
        </div>
      ) : null}

      <span
        className="grid h-11 w-11 place-items-center rounded-xl"
        style={{ background: `${item.accent}1a`, color: item.accent }}
      >
        <AchievementIcon name={item.icon} />
      </span>

      <h3 className="mt-6 font-display text-xl font-bold text-ink">
        {item.company}
      </h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
        {item.quote}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3">
        <span
          className="text-[0.7rem] font-semibold uppercase tracking-wider"
          style={{ color: item.accent }}
        >
          {item.role}
        </span>
        {item.cta ? (
          <a
            href="https://www.npmjs.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-ink-soft"
          >
            {item.cta}
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
              <path
                d="M7 17 17 7M9 7h8v8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ) : null}
      </div>
    </div>
  );
}

/** "Achievements" — a grid of credential / award cards with a featured highlight. */
export function Achievements() {
  return (
    <section id="gtm" className="bg-surface py-section">
      <Container>
        <div className="max-w-2xl">
          <span className="eyebrow mb-5 block">{testimonials.eyebrow}</span>
          <h2 className="display text-4xl font-bold text-ink sm:text-5xl">
            {testimonials.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{testimonials.body}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <AchievementCard
              key={item.company}
              item={item}
              featured={i === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
