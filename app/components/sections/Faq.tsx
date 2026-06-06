"use client";

import { useState } from "react";
import { Container } from "../ui/Container";
import { faqs } from "../data/content";

/** Accordion FAQ with single-open behavior and chevron indicators. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface py-section">
      <Container className="max-w-3xl">
        <h2 className="reveal display text-center text-4xl font-bold text-ink sm:text-5xl">
          {faqs.title}
        </h2>

        <div className="reveal mt-14 divide-y divide-line border-y border-line">
          {faqs.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-semibold text-ink">{item.q}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 leading-relaxed text-muted">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
