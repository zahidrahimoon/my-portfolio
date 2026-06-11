import { Container } from "../ui/Container";
import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import { Marquee } from "../ui/Marquee";
import { network } from "../data/content";

type Tech = { name: string; slug: string };

/* Deterministic colorways so the tile wall looks varied but stable. */
const palettes = [
  { bg: "#111111", fg: "#ffffff" },
  { bg: "#ffffff", fg: "#1a1a1a" },
  { bg: "#8b1d1d", fg: "#ffffff" },
  { bg: "#1b2a4a", fg: "#dfe6f5" },
  { bg: "#e9ff4f", fg: "#161616" },
  { bg: "#5a2db0", fg: "#ffffff" },
  { bg: "#2f3b2a", fg: "#cfe0b8" },
  { bg: "#ff7a45", fg: "#3a1500" },
  { bg: "#ec4faa", fg: "#ffffff" },
  { bg: "#10b3a3", fg: "#04241f" },
];

function Tile({ tech, i }: { tech: Tech; i: number }) {
  const p = palettes[i % palettes.length];
  /* Monochrome Simple Icons logo tinted to match the tile's text color. */
  const logo = tech.slug
    ? `https://cdn.simpleicons.org/${tech.slug}/${p.fg.replace("#", "")}`
    : null;
  return (
    <div
      className="flex h-28 w-28 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl p-3 text-center sm:h-32 sm:w-32"
      style={{ background: p.bg, color: p.fg }}
    >
      {logo ? (
        <div className="relative h-8 w-8 sm:h-9 sm:w-9">
          <Image
            src={logo}
            alt={`${tech.name} logo`}
            fill
            unoptimized
            className="object-contain"
            sizes="(max-width: 640px) 32px, 36px"
          />
        </div>
      ) : (
        <span
          aria-hidden
          className="grid h-8 w-8 place-items-center rounded-lg text-base font-bold sm:h-9 sm:w-9"
          style={{ background: `${p.fg}22` }}
        >
          {tech.name.charAt(0)}
        </span>
      )}
      <span className="text-[0.7rem] font-bold uppercase leading-tight tracking-tight">
        {tech.name}
      </span>
    </div>
  );
}

function TileRow({
  items,
  offset = 0,
  reverse = false,
}: {
  items: Tech[];
  offset?: number;
  reverse?: boolean;
}) {
  return (
    <Marquee reverse={reverse} speed={reverse ? "slow" : "normal"}>
      {items.map((tech, idx) => (
        <Tile key={`${tech.name}-${idx}`} tech={tech} i={idx + offset} />
      ))}
    </Marquee>
  );
}

/** "Tech Stack" — heading over a full-bleed wall of logo tiles. */
export function Network() {
  const third = Math.ceil(network.communities.length / 3);
  const r1 = network.communities.slice(0, third);
  const r2 = network.communities.slice(third, third * 2);
  const r3 = network.communities.slice(third * 2);

  return (
    <section id="network" className="overflow-hidden bg-cream py-section">
      <Container>
        <SectionHeading
          eyebrow={network.eyebrow}
          title={network.title}
          body={network.body}
        />
      </Container>

      <div className="mt-14 space-y-4">
        <TileRow items={r1} offset={0} />
        <TileRow items={r2} offset={4} reverse />
        <TileRow items={r3} offset={7} />
      </div>
    </section>
  );
}
