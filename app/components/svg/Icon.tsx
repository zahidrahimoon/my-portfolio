import type { CSSProperties, ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  ICON REGISTRY                                                       */
/*  Every inline SVG icon used across the app lives here so markup      */
/*  stays clean and icons share one animated, themeable component.      */
/* ------------------------------------------------------------------ */

const s = {
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

const paths: Record<string, ReactNode> = {
  /* What I Do — disciplines */
  layout: <path d="M4 5h16v14H4zM4 9h16M9 9v10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />,
  server: <path d="M4 5h16v5H4zM4 14h16v5H4zM7 7.5h.01M7 16.5h.01" strokeWidth="1.6" {...s} />,
  phone: <path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM11 18h2" strokeWidth="1.6" {...s} />,
  cloud: <path d="M7 18a4 4 0 0 1-.5-7.97 5 5 0 0 1 9.6.97A3.5 3.5 0 0 1 17 18H7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />,

  /* Why Work With Me — impact */
  zap: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" fill="none" />,
  shield: <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM9 12l2 2 4-4" strokeWidth="1.7" {...s} />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.7" fill="none" />
      <path d="M12 7.5V12l3 2" strokeWidth="1.7" {...s} />
    </>
  ),
  chart: <path d="M5 20V10M12 20V5M19 20v-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none" />,

  /* Achievements */
  package: <path d="M12 3 4 7v10l8 4 8-4V7l-8-4ZM4 7l8 4 8-4M12 11v10" strokeWidth="1.6" {...s} />,
  research: <path d="M9 3h6M10 3v5L6 18a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-10V3M8 14h8" strokeWidth="1.6" {...s} />,
  certificate: <path d="M12 3 4 6v5c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3ZM9 12l2 2 4-4" strokeWidth="1.6" {...s} />,
  network: <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 8v3M12 11 6 17M12 11l6 6" strokeWidth="1.6" {...s} />,
  code: <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" strokeWidth="1.6" {...s} />,
  cap: <path d="M12 4 2 9l10 5 10-5-10-5ZM6 11v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5M21 9v5" strokeWidth="1.6" {...s} />,

  /* How I Work — process */
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="m15 9-2 5-4 1 2-5 4-1z" strokeWidth="1.6" {...s} />
    </>
  ),
  ruler: <path d="M4 14 14 4l6 6L10 20l-6-6Zm5-5 2 2m1-5 2 2m-7 4 2 2" strokeWidth="1.6" {...s} />,
  rocket: <path d="M5 15c-1 1-1 4-1 4s3 0 4-1m1-3a8 8 0 0 1 6-9c2 0 3 1 3 3a8 8 0 0 1-9 6l-3-3zM14 9h.01" strokeWidth="1.6" {...s} />,

  /* Contact */
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" fill="none" />
      <path d="m4 7 8 6 8-6" strokeWidth="1.7" {...s} />
    </>
  ),

  /* Filled glyphs */
  star: <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 2.5z" />,
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
  ),
  linkedin: (
    <path d="M6.94 8.5V18H4V8.5h2.94zM5.47 4a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4zM20 18h-2.93v-5c0-1.2-.43-2-1.5-2-.82 0-1.3.55-1.52 1.08-.08.19-.1.45-.1.71V18H11s.04-8.66 0-9.5h2.94v1.35c.39-.6 1.09-1.46 2.65-1.46 1.94 0 3.4 1.27 3.4 4V18z" />
  ),
  x: <path d="M17.5 3h3l-6.56 7.5L21.5 21h-5.9l-4.6-5.9L5.7 21H2.7l7-8L2.5 3h6l4.15 5.45L17.5 3zm-1.05 16h1.65L7.62 4.65H5.85L16.45 19z" />,
};

const filled = new Set(["star", "github", "linkedin", "x"]);

export type IconName = keyof typeof paths;

type Anim = "float" | "pulse" | "none";

/* Stable per-name delay so icons don't all bob in lockstep. */
function delayFor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h + name.charCodeAt(i)) % 12;
  return `${h * 130}ms`;
}

/** Single animated, themeable icon. Inherits color via `currentColor`. */
export function Icon({
  name,
  className = "h-5 w-5",
  animate = "float",
  style,
}: {
  name: string;
  className?: string;
  animate?: Anim;
  style?: CSSProperties;
}) {
  const animClass =
    animate === "float" ? "icon-float" : animate === "pulse" ? "icon-pulse" : "";
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${animClass} ${className}`}
      fill={filled.has(name) ? "currentColor" : "none"}
      style={animate === "none" ? style : { animationDelay: delayFor(name), ...style }}
      aria-hidden
    >
      {paths[name] ?? null}
    </svg>
  );
}
