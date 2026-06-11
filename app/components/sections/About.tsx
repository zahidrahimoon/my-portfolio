"use client";

import { useState, useRef } from "react";
import { Container } from "../ui/Container";
import { about } from "../data/content";

/** "About Me" — intro copy + CTA on the left, a click-to-play intro video on the right. */
export function About() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    setMuted(false);
    v.play();
    setPlaying(true);
    setStarted(true);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section id="about" className="bg-cream py-section">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Left — copy + CTA */}
          <div className="reveal">
            <span className="eyebrow mb-5 block">{about.eyebrow}</span>
            <h2 className="display max-w-xl text-4xl font-bold text-ink sm:text-5xl">
              {about.title}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right — intro video */}
          <div className="reveal relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto">
            {/* decorative offset frame */}
            <div
              className="absolute -right-4 -top-4 h-28 w-28 rounded-card border border-gold/40"
              aria-hidden
            />

            <div
              onClick={started ? togglePlay : undefined}
              className={`group relative w-full overflow-hidden rounded-card border border-line-soft bg-espresso shadow-lift ${
                started ? "cursor-pointer" : ""
              }`}
            >
              <video
                ref={videoRef}
                src="/intro.mp4#t=0.5"
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => {
                  setPlaying(false);
                  setStarted(false);
                  if (videoRef.current) videoRef.current.currentTime = 0.5;
                }}
                className="block h-auto w-full"
              />

              {/* Idle overlay — poster gradient + big play button */}
              {!started && (
                <button
                  type="button"
                  onClick={startVideo}
                  aria-label="Play introduction video"
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent transition-colors hover:from-espresso/60"
                >
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-white/95 text-espresso shadow-lift transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-current">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white drop-shadow">
                    Watch my intro
                  </span>
                </button>
              )}

              {/* Center play/pause flash when started + paused */}
              {started && !playing && (
                <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-espresso/30">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-espresso shadow-lift">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-7 w-7 fill-current">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              )}

              {/* Bottom control bar (only after start) */}
              {started && (
                <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 bg-gradient-to-t from-espresso/80 to-transparent px-4 pb-4 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    aria-label={playing ? "Pause video" : "Play video"}
                    className="grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white/90 text-espresso transition-transform hover:scale-105"
                  >
                    {playing ? (
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-current">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={muted ? "Unmute video" : "Mute video"}
                    className="grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white/90 text-espresso transition-transform hover:scale-105"
                  >
                    {muted ? (
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
