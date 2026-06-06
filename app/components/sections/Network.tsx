import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { network } from "../data/content";

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

function Tile({ name, i }: { name: string; i: number }) {
  const p = palettes[i % palettes.length];
  return (
    <div
      className="grid h-28 w-28 shrink-0 place-items-center rounded-2xl p-3 text-center sm:h-32 sm:w-32"
      style={{ background: p.bg, color: p.fg }}
    >
      <span className="text-[0.72rem] font-bold uppercase leading-tight tracking-tight">
        {name}
      </span>
    </div>
  );
}

function TileRow({
  items,
  offset = 0,
  reverse = false,
}: {
  items: string[];
  offset?: number;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-4 ${
          reverse ? "animate-marquee-slow" : "animate-marquee"
        }`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((name, idx) => (
          <Tile key={`${name}-${idx}`} name={name} i={idx + offset} />
        ))}
      </div>
    </div>
  );
}

/** "The Network" — heading over a full-bleed wall of organizer logos. */
export function Network() {
  const third = Math.ceil(network.communities.length / 3);
  const r1 = network.communities.slice(0, third);
  const r2 = network.communities.slice(third, third * 2);
  const r3 = network.communities.slice(third * 2);

  return (
    <section id="network" className="overflow-hidden bg-tan py-section">
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
