"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "../ui/Container";
import { steps } from "../data/content";

/** How-it-works: scroll-driven steps that swap the app mockup panel. */
export function HowItWorks() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // A 0-height "line" at viewport center: whichever step crosses it wins.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.index
            );
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
          <span className="eyebrow mb-5 block">{steps.eyebrow}</span>
          <h2 className="display text-4xl font-bold text-ink sm:text-5xl">
            {steps.title}
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* steps */}
          <ol className="space-y-20 lg:space-y-32">
            {steps.items.map((step, i) => {
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
                  <h3
                    className={`relative font-display text-2xl font-bold transition-colors duration-300 ${
                      isActive ? "text-ink" : "text-faint"
                    }`}
                  >
                    {step.title}
                  </h3>
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

          {/* app mockup (sticky on desktop, swaps with the active step) */}
          <div className="lg:sticky lg:top-28">
            <AppMock active={active} />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  App mockup — one browser frame, four panels cross-fading by step.  */
/* ------------------------------------------------------------------ */

const navByStep = ["Dashboard", "Opportunities", "Attendees", "Payments"];

function AppMock({ active }: { active: number }) {
  const navItems = [
    { label: "Dashboard", badge: "" },
    { label: "Opportunities", badge: "3" },
    { label: "Attendees", badge: "" },
    { label: "Messages", badge: "3" },
    { label: "Payments", badge: "" },
  ];
  const activeNav = navByStep[active] ?? "Opportunities";

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
      {/* window chrome */}
      <div className="flex items-center gap-2 bg-[#1d1a16] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="mx-auto rounded bg-white/10 px-6 py-0.5 text-[0.65rem] text-white/60">
          coventapp.com
        </span>
      </div>

      <div className="flex">
        {/* sidebar */}
        <aside className="hidden w-40 shrink-0 flex-col border-r border-line-soft bg-cream-soft/50 p-3 sm:flex">
          <span className="font-display text-lg font-bold text-ink">Covent</span>
          <nav className="mt-5 space-y-1">
            {navItems.map((n) => (
              <span
                key={n.label}
                className={`flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                  n.label === activeNav
                    ? "bg-cream-deep text-ink"
                    : "text-muted"
                }`}
              >
                {n.label}
                {n.badge ? (
                  <span className="rounded-full bg-rose-500 px-1.5 text-[0.6rem] font-semibold text-white">
                    {n.badge}
                  </span>
                ) : null}
              </span>
            ))}
          </nav>
          <div className="mt-auto flex items-center gap-2 pt-6">
            <span
              className="h-6 w-6 rounded-full bg-cover bg-center"
              style={{
                backgroundImage: "url(https://i.pravatar.cc/40?img=47)",
                backgroundColor: "#cabfae",
              }}
            />
            <span className="text-xs font-medium text-ink-soft">Sarah M.</span>
          </div>
        </aside>

        {/* main panel — all four stacked, cross-fading on the active step */}
        <div className="relative min-w-0 flex-1">
          <div className="h-[420px]">
            {[GoalsPanel, BuildPanel, ApprovePanel, ResultsPanel].map(
              (Panel, i) => (
                <div
                  key={i}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 overflow-hidden p-4 transition-opacity duration-500 ${
                    i === active
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                >
                  <Panel />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PanelHead({ title, sub }: { title: string; sub: string }) {
  return (
    <>
      <h4 className="font-display text-lg font-bold text-ink">{title}</h4>
      <p className="text-xs text-muted">{sub}</p>
    </>
  );
}

/* 01 — Share your goals */
function GoalsPanel() {
  const fields = [
    { k: "ICP", v: "Series B+ SaaS" },
    { k: "Target cities", v: "New York · San Francisco" },
    { k: "Format", v: "Executive Dinner" },
    { k: "Budget", v: "$15K – $25K" },
  ];
  return (
    <>
      <PanelHead title="New event brief" sub="Tell us what a great room looks like" />
      <div className="mt-4 space-y-2.5">
        {fields.map((f) => (
          <div key={f.k} className="rounded-xl border border-line-soft bg-cream-soft/40 p-3">
            <p className="text-[0.65rem] font-medium uppercase tracking-wider text-muted">
              {f.k}
            </p>
            <p className="mt-1 text-sm font-semibold text-ink">{f.v}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-md bg-espresso px-3 py-2 text-center text-xs font-medium text-white">
        Submit brief
      </div>
    </>
  );
}

/* 02 — We build it */
function BuildPanel() {
  const cards = [
    {
      title: "Series B SaaS Founders Dinner",
      meta: "San Francisco · $18,500 · 20–30 · ~$240K est.",
      gradient: "linear-gradient(120deg,#e8a07a,#c25b4a)",
    },
    {
      title: "GTM Leaders Roundtable",
      meta: "Boston · $12,000 · 15–25 · ~$180K est.",
      gradient: "linear-gradient(120deg,#3a4a6b,#9a5b4a)",
    },
  ];
  return (
    <>
      <PanelHead
        title="Opportunities"
        sub="Curated event recommendations based on your goals"
      />
      <div className="mt-3 flex gap-1.5 text-[0.7rem]">
        <span className="rounded-md bg-cream-deep px-2.5 py-1 font-medium text-ink">
          To Review 2
        </span>
        <span className="px-2.5 py-1 text-muted">Interested 2</span>
        <span className="px-2.5 py-1 text-muted">Expired 1</span>
      </div>
      <div className="mt-3 space-y-3">
        {cards.map((c) => (
          <div
            key={c.title}
            className="overflow-hidden rounded-xl border border-line-soft bg-white"
          >
            <div className="h-16 w-full" style={{ background: c.gradient }} />
            <div className="p-3">
              <p className="text-sm font-semibold text-ink">{c.title}</p>
              <p className="mt-0.5 text-xs text-muted">{c.meta}</p>
              <div className="mt-2.5 flex gap-2">
                <span className="rounded-md bg-espresso px-3 py-1.5 text-xs font-medium text-white">
                  Interested
                </span>
                <span className="rounded-md border border-line px-3 py-1.5 text-xs font-medium text-ink-soft">
                  Pass
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* 03 — You approve the room */
function ApprovePanel() {
  const guests = [
    { t: "VP Engineering · Series C", ok: true },
    { t: "Head of Data · Series B", ok: true },
    { t: "CTO · Series B+", ok: true },
    { t: "Marketing Manager · Seed", ok: false },
    { t: "VP Product · Series C", ok: true },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <PanelHead title="Guest list" sub="Approve or decline before invites go out" />
        <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-1 text-[0.65rem] font-semibold text-emerald-700">
          94% ICP match
        </span>
      </div>
      <div className="mt-4 space-y-2">
        {guests.map((g) => (
          <div
            key={g.t}
            className="flex items-center justify-between rounded-lg border border-line-soft bg-cream-soft/40 px-3 py-2"
          >
            <span className="flex items-center gap-2 text-sm text-ink-soft">
              <span className="h-6 w-6 rounded-full bg-espresso/10" />
              {g.t}
            </span>
            <span
              className={`grid h-5 w-5 place-items-center rounded-full text-white ${
                g.ok ? "bg-emerald-500" : "bg-rose-400"
              }`}
            >
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                {g.ok ? (
                  <path
                    d="m5 13 4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M7 7l10 10M17 7L7 17"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

/* 04 — You just show up */
function ResultsPanel() {
  const stats = [
    { v: "22", l: "Attended" },
    { v: "95%", l: "ICP match" },
    { v: "14", l: "Qualified leads" },
    { v: "+840%", l: "Projected ROI" },
  ];
  return (
    <>
      <PanelHead title="Event recap" sub="Series B SaaS Founders Dinner · San Francisco" />
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {stats.map((s) => (
          <div key={s.l} className="rounded-xl bg-espresso p-4 text-white">
            <p className="font-display text-2xl font-bold">{s.v}</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-white/55">
              {s.l}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-line-soft bg-cream-soft/40 p-3 text-xs text-muted">
        Full attribution report sent to your inbox — every lead mapped back to
        pipeline.
      </div>
    </>
  );
}
