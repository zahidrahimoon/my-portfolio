import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Marquee } from "../ui/Marquee";
import { projectsShowcase } from "../data/content";

type Project = (typeof projectsShowcase.items)[number];

function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group/card flex w-[300px] shrink-0 flex-col overflow-hidden rounded-card border border-line-soft bg-white transition-shadow hover:shadow-soft sm:w-[360px]"
    >
      <div className="relative h-44 overflow-hidden sm:h-48">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://picsum.photos/seed/${p.seed}/720/420`}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
        <span
          className="absolute left-4 top-4 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold text-white"
          style={{ background: p.accent }}
        >
          {p.year}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium uppercase tracking-wider text-muted">
          {p.tagline}
        </span>
        <h3 className="mt-2 font-display text-xl font-bold text-ink">
          {p.name}
        </h3>
        <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-muted">
          {p.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full bg-cream px-2.5 py-1 text-[0.7rem] font-medium text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
          View project
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 transition-transform group-hover/card:translate-x-1"
            fill="none"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

/** "Featured Work" — an auto-scrolling marquee of project cards that link to detail pages. */
export function Projects() {
  const items = projectsShowcase.items;

  return (
    <section id="formats" className="overflow-hidden bg-cream py-section">
      <Container>
        <SectionHeading
          eyebrow={projectsShowcase.eyebrow}
          title={projectsShowcase.title}
          body={projectsShowcase.body}
        />
      </Container>

      {/* Auto-scrolling row; pauses on hover so cards can be clicked. */}
      <Marquee
        className="mt-14"
        gapClass="gap-6"
        trailingGapClass="pr-6"
        speed="slow"
        pauseOnHover
      >
        {items.map((p, i) => (
          <ProjectCard key={`${p.slug}-${i}`} p={p} />
        ))}
      </Marquee>
    </section>
  );
}
