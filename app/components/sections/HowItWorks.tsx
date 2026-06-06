import { Container } from "../ui/Container";
import { steps } from "../data/content";

/** How-it-works: stacked steps with oversized faded numbers + app mockup. */
export function HowItWorks() {
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
          <ol className="space-y-16">
            {steps.items.map((step, i) => {
              const active = i === 1;
              return (
                <li key={step.no} className="relative">
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -top-6 right-0 font-display text-8xl font-bold leading-none ${
                      active ? "text-faint/60" : "text-faint/30"
                    }`}
                  >
                    {step.no}
                  </span>
                  <h3
                    className={`relative font-display text-2xl font-bold ${
                      active ? "text-ink" : "text-faint"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`relative mt-3 max-w-md leading-relaxed ${
                      active ? "text-muted" : "text-faint"
                    }`}
                  >
                    {step.body}
                  </p>
                </li>
              );
            })}
          </ol>

          {/* app mockup (sticky on desktop) */}
          <div className="lg:sticky lg:top-28">
            <AppMock />
          </div>
        </div>
      </Container>
    </section>
  );
}

function OppCard({
  title,
  meta,
  gradient,
}: {
  title: string;
  meta: string;
  gradient: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line-soft bg-white">
      <div className="h-20 w-full" style={{ background: gradient }} />
      <div className="p-3.5">
        <p className="text-sm font-semibold text-ink">{title}</p>
        <p className="mt-0.5 text-xs text-muted">{meta}</p>
        <div className="mt-3 flex gap-2">
          <span className="rounded-md bg-espresso px-3 py-1.5 text-xs font-medium text-white">
            Interested
          </span>
          <span className="rounded-md border border-line px-3 py-1.5 text-xs font-medium text-ink-soft">
            Pass
          </span>
        </div>
      </div>
    </div>
  );
}

/** Stylized recreation of the Covent "Opportunities" dashboard. */
function AppMock() {
  const navItems = [
    { label: "Dashboard", badge: "" },
    { label: "Opportunities", badge: "3", active: true },
    { label: "Attendees", badge: "" },
    { label: "Messages", badge: "3" },
    { label: "Payments", badge: "" },
  ];

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
                className={`flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-medium ${
                  n.active
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

        {/* main panel */}
        <div className="min-w-0 flex-1 p-4">
          <h4 className="font-display text-lg font-bold text-ink">
            Opportunities
          </h4>
          <p className="text-xs text-muted">
            Curated event recommendations based on your goals
          </p>

          <div className="mt-3 flex gap-1.5 text-[0.7rem]">
            <span className="rounded-md bg-cream-deep px-2.5 py-1 font-medium text-ink">
              To Review 2
            </span>
            <span className="px-2.5 py-1 text-muted">Interested 2</span>
            <span className="px-2.5 py-1 text-muted">Expired 1</span>
          </div>

          <div className="mt-3 space-y-3">
            <OppCard
              title="Series B SaaS Founders Dinner"
              meta="San Francisco · $18,500 · 20–30 · ~$240K est."
              gradient="linear-gradient(120deg,#e8a07a,#c25b4a)"
            />
            <OppCard
              title="GTM Leaders Roundtable"
              meta="Boston · $12,000 · 15–25 · ~$180K est."
              gradient="linear-gradient(120deg,#3a4a6b,#9a5b4a)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
