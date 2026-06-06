import { Container } from "../ui/Container";
import { gallery } from "../data/content";

/* Seeded placeholder photos — swap these URLs for real event photography. */
const row1 = [
  "events-a",
  "events-b",
  "events-c",
  "events-d",
  "events-e",
  "events-f",
];
const row2 = [
  "events-g",
  "events-h",
  "events-i",
  "events-j",
  "events-k",
  "events-l",
];

function PhotoRow({ seeds }: { seeds: string[] }) {
  return (
    <div className="flex gap-4">
      {seeds.map((seed) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={seed}
          src={`https://picsum.photos/seed/${seed}/520/360`}
          alt="Covent event"
          loading="lazy"
          className="h-44 w-72 shrink-0 rounded-lg object-cover sm:h-52 sm:w-80"
        />
      ))}
    </div>
  );
}

/** "Inside a Covent Event" — two full-bleed rows of event photography. */
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

      {/* full-bleed photo rows, nudged off-edge like the source */}
      <div className="mt-12 space-y-4 pl-6 sm:pl-[max(1.5rem,calc((100vw-72rem)/2))]">
        <div className="-ml-10">
          <PhotoRow seeds={row1} />
        </div>
        <div className="-ml-24">
          <PhotoRow seeds={row2} />
        </div>
      </div>
    </section>
  );
}
