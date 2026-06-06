import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Marquee } from "../ui/Marquee";
import { Icon } from "../svg/Icon";
import { gallery } from "../data/content";

type Review = (typeof gallery.items)[number];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label={`${count} out of 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" className="h-4 w-4" animate="none" />
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col rounded-card border border-line-soft bg-white p-7 sm:w-[380px]">
      <Stars count={r.rating} />
      <blockquote className="mt-5 flex-1 text-[1rem] leading-relaxed text-ink-soft">
        &ldquo;{r.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-espresso font-display text-base font-bold text-white">
          {r.name.charAt(0)}
        </span>
        <span className="text-sm">
          <span className="block font-semibold text-ink">{r.name}</span>
          <span className="text-muted">
            {r.role} · {r.company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

/** "Testimonials" — two auto-scrolling rows of client review cards. */
export function Gallery() {
  const items = gallery.items;
  const mid = Math.ceil(items.length / 2);
  const row1 = items.slice(0, mid);
  const row2 = items.slice(mid);

  return (
    <section id="reviews" className="overflow-hidden bg-cream py-section">
      <Container>
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          body={gallery.body}
        />
      </Container>

      <div className="mt-14 space-y-5">
        <Marquee gapClass="gap-5" trailingGapClass="pr-5" pauseOnHover>
          {row1.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} />
          ))}
        </Marquee>
        <Marquee
          reverse
          speed="slow"
          gapClass="gap-5"
          trailingGapClass="pr-5"
          pauseOnHover
        >
          {row2.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
