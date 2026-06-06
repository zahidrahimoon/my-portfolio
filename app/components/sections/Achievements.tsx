import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Icon } from "../svg/Icon";
import { testimonials } from "../data/content";

type Item = (typeof testimonials.items)[number];

function AchievementCard({ item, featured }: { item: Item; featured: boolean }) {
  return (
    <div
      className={`group relative flex flex-col rounded-card bg-cream-soft p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 ${
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
        <Icon name={item.icon} />
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
        <div className="reveal max-w-2xl">
          <span className="eyebrow mb-5 block">{testimonials.eyebrow}</span>
          <h2 className="display text-4xl font-bold text-ink sm:text-5xl">
            {testimonials.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{testimonials.body}</p>
        </div>

        <div className="reveal mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
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
