"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/**
 * Seamless, infinite, gap-free marquee.
 *
 * The naive "duplicate once, translate -50%" trick only looks seamless when a
 * single copy is already wider than the viewport. When there are few items the
 * copy is narrower than the screen, so a blank gap appears at the loop seam.
 *
 * This component measures one content copy against the visible width and
 * renders *enough* copies that the row always overflows the viewport, then
 * animates by exactly one copy width (`--mq-shift = -100% / copies`). The first
 * item follows immediately after the last — no gap, ever. Speed stays constant
 * because duration scales with the measured copy width.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Marquee({
  children,
  reverse = false,
  speed = "normal",
  gapClass = "gap-4",
  trailingGapClass = "pr-4",
  pauseOnHover = false,
  className = "",
}: {
  children: ReactNode;
  reverse?: boolean;
  speed?: "normal" | "slow";
  gapClass?: string;
  trailingGapClass?: string;
  pauseOnHover?: boolean;
  className?: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(2);
  const [duration, setDuration] = useState(40);

  /* pixels travelled per second — keeps every row moving at the same pace. */
  const pxPerSec = speed === "slow" ? 28 : 45;

  useIsomorphicLayoutEffect(() => {
    const measure = () => {
      const copyW = copyRef.current?.offsetWidth ?? 0;
      const viewW = viewportRef.current?.offsetWidth ?? 0;
      if (!copyW || !viewW) return;
      // Need the non-shifted remainder (copies - 1 copies) to cover the
      // viewport. Add one extra copy for safety on very wide screens.
      const needed = Math.max(2, Math.ceil(viewW / copyW) + 1);
      setCopies(needed);
      setDuration(Math.max(8, copyW / pxPerSec));
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    if (copyRef.current) ro.observe(copyRef.current);
    return () => ro.disconnect();
  }, [pxPerSec, children]);

  const trackStyle: CSSProperties = {
    // Use longhand properties only — mixing the `animation` shorthand with the
    // `animationDirection` longhand triggers a React styling warning because
    // the shorthand value changes across re-renders (duration is stateful).
    animationName: "marquee",
    animationDuration: `${duration}s`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationDirection: reverse ? "reverse" : "normal",
    // shift by exactly one copy so the loop is perfectly seamless
    ["--mq-shift" as string]: `-${100 / copies}%`,
  };

  return (
    <div
      ref={viewportRef}
      className={`marquee-mask ${pauseOnHover ? "group" : ""} overflow-hidden ${className}`}
    >
      <div
        className={`marquee-track flex w-max ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        style={trackStyle}
      >
        {Array.from({ length: copies }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? copyRef : undefined}
            aria-hidden={i > 0}
            className={`flex w-max shrink-0 ${gapClass} ${trailingGapClass}`}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
