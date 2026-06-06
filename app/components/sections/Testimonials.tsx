"use client";

import { useRef, useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { testimonials } from "../data/content";

/** "Built for GTM teams" — 4-up testimonial carousel with dividers. */
export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const items = testimonials.items;

  const scrollByDir = (dir: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : 1;
    setActive(Math.round(track.scrollLeft / step));
  };

  return (
    <section id="gtm" className="bg-cream py-section">
      <Container>
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          body={testimonials.body}
        />

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((t, i) => (
            <figure
              key={t.company}
              className={`flex w-[85%] shrink-0 snap-start flex-col px-1 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)] ${
                i > 0 ? "lg:border-l lg:border-line lg:pl-6" : ""
              }`}
            >
              <span className="font-display text-lg font-bold tracking-tight text-ink/55">
                {t.company}
              </span>
              <blockquote className="mt-5 flex-1 font-display text-[0.95rem] italic leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              {t.cta ? (
                <a
                  href="#gtm"
                  className="mt-6 inline-flex w-fit items-center rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-ink hover:bg-cream-soft"
                >
                  {t.cta}
                </a>
              ) : null}
              <figcaption className="mt-6 text-sm">
                {t.name ? (
                  <span className="block font-semibold text-ink">{t.name}</span>
                ) : null}
                <span className="text-muted">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            aria-label="Previous"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:bg-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="m14 7-5 5 5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {items.map((t, i) => (
              <span
                key={t.company}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-5 bg-espresso" : "w-1.5 bg-line"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByDir(1)}
            aria-label="Next"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:bg-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="m10 7 5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}
