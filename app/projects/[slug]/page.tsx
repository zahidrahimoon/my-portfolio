import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { Container } from "../../components/ui/Container";
import {
  getCollection,
  getCollectionItemBySlug,
  getCollectionSlugs,
} from "@/lib/data/collections";
import type { ProjectItem } from "@/lib/validation/schemas";

/* Slugs now come from the database. Under cacheComponents, params not returned by
   generateStaticParams render on demand by default — so projects added later in the
   admin work without a rebuild, and no `dynamicParams` export is needed. */

/* Instant-navigation validation. This dynamic route reads `params.slug`, so per
   the Next 16 docs it needs `prefetch: 'runtime'` with sample params. Route
   segment config must be a static literal — these are prefetch hints only, not
   the source of truth (that's the DB / seed). */
export const unstable_instant = {
  prefetch: "runtime",
  samples: [
    { params: { slug: "rahimoon-institute" } },
    { params: { slug: "next-boilerplate" } },
    { params: { slug: "360-mock-server" } },
    { params: { slug: "oneviti-dashboard" } },
    { params: { slug: "ecommerce-platforms" } },
    { params: { slug: "cross-platform-apps" } },
  ],
};

function projectImage(p: ProjectItem, w: number, h: number): string {
  return p.imageUrl && p.imageUrl.length
    ? p.imageUrl
    : `https://picsum.photos/seed/${p.seed}/${w}/${h}`;
}

export async function generateStaticParams() {
  return (await getCollectionSlugs("projects")).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getCollectionItemBySlug<ProjectItem>("projects", slug);
  if (!item) return { title: "Project not found" };
  return {
    title: `${item.data.name} — Zahid Rahimoon`,
    description: item.data.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getCollectionItemBySlug<ProjectItem>("projects", slug);
  if (!item) notFound();
  const project = item.data;
  const more = (await getCollection<ProjectItem>("projects"))
    .map((i) => i.data)
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-cream pt-section pb-12">
          <Container>
            <Link
              href="/#formats"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M19 12H5M11 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All projects
            </Link>

            <div className="mt-8 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ background: project.accent }}
                >
                  {project.year}
                </span>
                <span className="text-sm font-medium uppercase tracking-wider text-muted">
                  {project.role}
                </span>
              </div>
              <h1 className="display mt-5 text-4xl font-bold text-ink sm:text-6xl">
                {project.name}
              </h1>
              <p className="mt-4 text-xl text-ink-soft">{project.tagline}</p>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                {project.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.links.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="lift inline-flex h-11 items-center gap-2 rounded-lg bg-espresso px-5 text-[0.95rem] font-medium text-white transition-colors hover:bg-espresso-soft"
                  >
                    Live demo
                  </a>
                ) : null}
                {project.links.code ? (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="lift inline-flex h-11 items-center gap-2 rounded-lg border border-line bg-white px-5 text-[0.95rem] font-medium text-ink transition-colors hover:bg-cream-soft"
                  >
                    Source code
                  </a>
                ) : null}
              </div>
            </div>
          </Container>
        </section>

        {/* Cover */}
        <section className="bg-cream pb-section">
          <Container>
            <div className="overflow-hidden rounded-card border border-line-soft relative aspect-[2/1] w-full">
              <Image
                src={projectImage(project, 1280, 640)}
                alt={project.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </Container>
        </section>

        {/* Body */}
        <section className="bg-surface py-section">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
              <div>
                <span className="eyebrow mb-4 block">Overview</span>
                <p className="text-lg leading-relaxed text-ink-soft">
                  {project.overview}
                </p>

                <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                  Highlights
                </h2>
                <ul className="mt-5 space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-muted">
                      <svg
                        viewBox="0 0 24 24"
                        className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                        fill="none"
                      >
                        <path
                          d="m5 12 5 5L20 7"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-[1.02rem] leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="lg:border-l lg:border-line lg:pl-10">
                <span className="eyebrow mb-4 block">Tech stack</span>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line-soft bg-cream-soft px-3 py-1.5 text-sm font-medium text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <dl className="mt-8 space-y-5 text-sm">
                  <div>
                    <dt className="text-muted">Role</dt>
                    <dd className="mt-1 font-medium text-ink">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Year</dt>
                    <dd className="mt-1 font-medium text-ink">{project.year}</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </Container>
        </section>

        {/* More projects */}
        <section className="bg-cream py-section">
          <Container>
            <h2 className="display text-3xl font-bold text-ink">
              More projects
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group flex flex-col rounded-card border border-line-soft bg-white p-6 transition-shadow hover:shadow-soft"
                  >
                    <span className="text-xs font-medium uppercase tracking-wider text-muted">
                      {p.tagline}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {p.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                      View project
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                  </Link>
                ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
