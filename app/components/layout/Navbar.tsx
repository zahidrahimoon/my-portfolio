"use client";

import { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { nav } from "../data/content";

/** Thin accent strip + sticky cream navbar with an awards-style slide-in menu. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + close on Escape while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

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

          {/* Single hamburger on the right — every screen size */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="group inline-flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-ink transition-colors hover:bg-ink/5"
          >
            <span className="hidden text-sm font-medium tracking-wide sm:inline">
              Menu
            </span>
            <span className="relative block h-4 w-6">
              <span className="absolute left-0 top-0 block h-0.5 w-6 rounded-full bg-current transition-transform duration-300 group-hover:translate-y-px" />
              <span className="absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-current" />
              <span className="absolute bottom-0 left-0 block h-0.5 w-6 rounded-full bg-current transition-transform duration-300 group-hover:-translate-y-px" />
            </span>
          </button>
        </Container>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in panel from the right */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[86%] max-w-sm flex-col bg-cream-soft shadow-lift transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-6">
          <span className="font-display text-lg font-bold text-ink">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg text-ink transition-colors hover:bg-ink/5"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-4 py-5">
          {nav.menu.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${100 + i * 35}ms` : "0ms" }}
              className={`group flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 font-display text-xl font-bold text-ink transition-all duration-500 hover:bg-ink/5 ${
                open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
            >
              {item.label}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1"
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
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 border-t border-line px-6 py-6">
          {nav.actions.map((action) => (
            <Button
              key={action.label}
              href={action.href}
              variant={action.variant}
              onClick={() => setOpen(false)}
              className="w-full"
            >
              {action.label}
            </Button>
          ))}
        </div>
      </aside>
    </header>
  );
}
