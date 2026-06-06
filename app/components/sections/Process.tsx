import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { workProcess } from "../data/content";

function StepIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    compass: (
      <>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="m15 9-2 5-4 1 2-5 4-1z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
    ruler: (
      <path
        d="M4 14 14 4l6 6L10 20l-6-6Zm5-5 2 2m1-5 2 2m-7 4 2 2"
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
  };
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      {paths[name]}
    </svg>
  );
}

/** "How I Work" — a four-step delivery process from idea to production. */
export function Process() {
  return (
    <section id="process" className="bg-surface py-section">
      <Container>
        <SectionHeading
          eyebrow={workProcess.eyebrow}
          title={workProcess.title}
          body={workProcess.body}
          align="left"
        />

        <div className="relative mt-14">
          {/* connecting line on large screens */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[2.65rem] hidden h-px bg-line lg:block"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workProcess.steps.map((s) => (
              <div key={s.no} className="relative flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-espresso text-white">
                    <StepIcon name={s.icon} />
                  </span>
                  <span className="font-display text-4xl font-bold text-faint">
                    {s.no}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
