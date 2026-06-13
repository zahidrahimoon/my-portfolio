"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "../ui/Container";
import type { ExperienceItem } from "@/lib/validation/schemas";

/** Experience: scroll-driven roles that swap a detail panel on the right. */
export function HowItWorksClient({
  eyebrow,
  title,
  items,
}: {
  eyebrow?: string;
  title?: string;
  items: ExperienceItem[];
}) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // A 0-height "line" at viewport center: whichever role crosses it wins.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how" className="bg-cream py-section">
      <Container>
        <div className="max-w-2xl">
          <span className="eyebrow mb-5 block">{eyebrow}</span>
          <h2 className="display text-4xl font-bold text-ink sm:text-5xl">
            {title}
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* role list */}
          <ol className="space-y-16 lg:space-y-28">
            {items.map((step, i) => {
              const isActive = i === active;
              return (
                <li
                  key={step.no}
                  data-index={i}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="relative"
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -top-6 right-0 font-display text-8xl font-bold leading-none transition-colors duration-300 ${
                      isActive ? "text-faint/60" : "text-faint/25"
                    }`}
                  >
                    {step.no}
                  </span>
                  <p
                    className={`relative text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-faint"
                    }`}
                  >
                    {step.period}
                  </p>
                  <h3
                    className={`relative mt-1 font-display text-2xl font-bold transition-colors duration-300 ${
                      isActive ? "text-ink" : "text-faint"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`relative text-sm font-semibold transition-colors duration-300 ${
                      isActive ? "text-ink-soft" : "text-faint"
                    }`}
                  >
                    {step.company}
                  </p>
                  <p
                    className={`relative mt-3 max-w-md leading-relaxed transition-colors duration-300 ${
                      isActive ? "text-muted" : "text-faint"
                    }`}
                  >
                    {step.body}
                  </p>
                </li>
              );
            })}
          </ol>

          {/* detail panel (sticky on desktop, swaps with the active role) */}
          <div className="lg:sticky lg:top-28">
            <div className="relative h-[460px] overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
              {items.map((step, i) => (
                <div
                  key={step.no}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 flex flex-col p-7 transition-opacity duration-500 ${
                    i === active ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-pill bg-cream-deep px-3 py-1 text-xs font-semibold text-ink-soft">
                      {step.company}
                    </span>
                    <span className="font-display text-5xl font-bold text-faint/40">
                      {step.no}
                    </span>
                  </div>

                  <h4 className="mt-6 font-display text-2xl font-bold text-ink">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-sm text-gold">{step.period}</p>

                  <ul className="mt-6 space-y-3">
                    {step.achievements.map((a) => (
                      <li key={a} className="flex gap-3 text-sm text-ink-soft">
                        <span className="mt-1.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                            <path
                              d="m5 13 4 4L19 7"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {step.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-line-soft bg-cream-soft/50 px-2.5 py-1 text-xs font-medium text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
