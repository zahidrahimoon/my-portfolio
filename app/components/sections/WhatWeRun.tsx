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

function ProjectIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    book: (
      <path
        d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5zM18 17H6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    rocket: (
      <path
        d="M5 15c-1 1-1 4-1 4s3 0 4-1m1-3a8 8 0 0 1 6-9c2 0 3 1 3 3a8 8 0 0 1-9 6l-3-3zM14 9h.01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    server: (
      <path
        d="M4 5h16v5H4zM4 14h16v5H4zM7 7.5h.01M7 16.5h.01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    dashboard: (
      <path
        d="M4 5h7v6H4zM13 5h7v4h-7zM13 12h7v7h-7zM4 14h7v5H4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    cart: (
      <path
        d="M4 5h2l1.5 10.5a1 1 0 0 0 1 .9h7.8a1 1 0 0 0 1-.8L20 8H6.5M9 20h.01M17 20h.01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    phone: (
      <path
        d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM11 18h2"
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

/** Project cards with a highlighted "Featured" project. */
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
              className={`relative flex flex-col rounded-card bg-white p-7 ${
                item.popular
                  ? "border-2 border-espresso shadow-soft"
                  : "border border-line-soft"
              }`}
            >
              {item.popular ? (
                <div className="absolute -top-3 left-6">
                  <Badge tone="dark">Featured</Badge>
                </div>
              ) : null}

              <span
                className={`grid h-11 w-11 place-items-center rounded-xl ${toneStyles[item.tone]}`}
              >
                <ProjectIcon name={item.icon} />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">
                {item.name}
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
                {item.desc}
              </p>
              <p className="mt-5 font-mono text-xs text-ink-soft/70">
                {item.tech}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
