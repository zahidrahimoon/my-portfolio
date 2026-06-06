"use client";

import { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { nav } from "../data/content";

function Caret() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Thin accent strip + sticky cream navigation with mobile menu. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* dark accent strip */}
      <div className="h-1.5 w-full bg-topbar" />

      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-line/70 bg-cream-soft/90 backdrop-blur-md"
            : "border-transparent bg-cream"
        }`}
      >
        <Container className="flex h-16 items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-3 md:flex">
            {nav.actions.map((action) => (
              <Button
                key={action.label}
                href={action.href}
                variant={action.variant}
              >
                {action.label}
              </Button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink hover:bg-ink/5 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </Container>

        {open ? (
          <div className="border-t border-line bg-cream-soft md:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {nav.primary.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink-soft hover:bg-ink/5"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                {nav.actions.map((action) => (
                  <Button
                    key={action.label}
                    href={action.href}
                    variant={action.variant}
                    className="w-full"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            </Container>
          </div>
        ) : null}
      </div>
    </header>
  );
}
