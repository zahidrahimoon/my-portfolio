import { Container } from "../ui/Container";
import { gallery } from "../data/content";

/* Seeded placeholder photos — swap these URLs for real event photography. */
const row1 = ["ev-a", "ev-b", "ev-c", "ev-d", "ev-e", "ev-f"];
const row2 = ["ev-g", "ev-h", "ev-i", "ev-j", "ev-k", "ev-l"];

/** One auto-scrolling row. Items are doubled so the loop is seamless. */
function PhotoMarquee({
  seeds,
  reverse = false,
}: {
  seeds: string[];
  reverse?: boolean;
}) {
  const doubled = [...seeds, ...seeds];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-4 ${reverse ? "animate-marquee-slow" : "animate-marquee"}`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((seed, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${seed}-${i}`}
            src={`https://picsum.photos/seed/${seed}/520/360`}
            alt="Covent event"
            loading="lazy"
            className="h-44 w-72 shrink-0 rounded-lg object-cover sm:h-52 sm:w-80"
          />
        ))}
      </div>
    </div>
  );
}

/** "Inside a Covent Event" — two auto-sliding rows of event photography. */
export function Gallery() {
  return (
    <section id="formats" className="overflow-hidden bg-cream py-section">
      <Container>
        <div className="max-w-2xl">
          <span className="eyebrow mb-5 block">{gallery.eyebrow}</span>
          <h2 className="display text-4xl font-bold text-ink sm:text-5xl">
            {gallery.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{gallery.body}</p>
        </div>
      </Container>

      <div className="mt-12 space-y-4">
        <PhotoMarquee seeds={row1} />
        <PhotoMarquee seeds={row2} reverse />
      </div>
    </section>
  );
}
