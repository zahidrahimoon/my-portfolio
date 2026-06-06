import { Container } from "../ui/Container";
import { formats } from "../data/content";
import { Badge } from "../ui/Badge";

const toneStyles: Record<string, string> = {
  tan: "bg-[#e7d9bf] text-[#9a7a3a]",
  rose: "bg-rose-100 text-rose-400",
  purple: "bg-violet-100 text-violet-400",
  blue: "bg-sky-100 text-sky-500",
  gray: "bg-stone-200 text-stone-500",
};

function FormatIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    dining: (
      <path
        d="M6 3v7m0 0v11M6 10c1.7 0 3-1.3 3-3V3M18 3c-2 0-3 2-3 5s1 3 3 3v10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    wine: (
      <path
        d="M7 3h10l-1 6a4 4 0 0 1-8 0L7 3zM12 13v6m-3 0h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    coffee: (
      <path
        d="M4 9h13v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9zM17 10h2a2 2 0 0 1 0 4h-2M7 3v2M11 3v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    code: (
      <path
        d="m9 9-3 3 3 3m6-6 3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    ticket: (
      <path
        d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 2 2 0 0 0 0-4zM10 6v12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    sparkle: (
      <path
        d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
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

/** Grid of event-format cards with a highlighted "Most popular" option. */
export function WhatWeRun() {
  return (
    <section className="bg-cream-deep py-section">
      <Container>
        <div className="max-w-2xl">
          <span className="eyebrow mb-5 block">{formats.eyebrow}</span>
          <h2 className="display text-4xl font-bold text-ink sm:text-5xl">
            {formats.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {formats.items.map((item) => (
            <div
              key={item.name}
              className={`relative rounded-card bg-white p-7 ${
                item.popular
                  ? "border-2 border-espresso shadow-soft"
                  : "border border-line-soft"
              }`}
            >
              {item.popular ? (
                <div className="absolute -top-3 left-6">
                  <Badge tone="dark">Most Popular</Badge>
                </div>
              ) : null}

              <span
                className={`grid h-11 w-11 place-items-center rounded-xl ${toneStyles[item.tone]}`}
              >
                <FormatIcon name={item.icon} />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">
                {item.name}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
