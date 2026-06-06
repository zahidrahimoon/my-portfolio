"use client";

import { useEffect, useState } from "react";
import { contact } from "../data/content";

/* Dispatch this anywhere to open the contact modal. */
export const OPEN_CONTACT_EVENT = "open-contact-modal";

export function openContactModal() {
  window.dispatchEvent(new Event(OPEN_CONTACT_EVENT));
}

function SocialIcon({ label }: { label: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-4 w-4",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (label === "GitHub")
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  if (label === "LinkedIn")
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H17.6v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z" />
      </svg>
    );
  // Email
  return (
    <svg {...common}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_CONTACT_EVENT, onOpen);

    // Let existing `#contact` links open the modal instead of jumping.
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href="#contact"]');
      if (link) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener(OPEN_CONTACT_EVENT, onOpen);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      name ? `Portfolio enquiry from ${name}` : "Portfolio enquiry"
    );
    const body = encodeURIComponent(
      `${message}\n\n— ${name || "Someone"}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Contact"
    >
      <button
        type="button"
        aria-label="Close contact dialog"
        onClick={() => setOpen(false)}
        className="absolute inset-0 cursor-default bg-ink/55 backdrop-blur-sm"
      />

      <div className="relative grid w-full max-w-3xl overflow-hidden rounded-card bg-cream shadow-lift md:grid-cols-2">
        {/* Close */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white md:text-white/70"
        >
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Left 50% — info & links */}
        <div className="flex flex-col bg-espresso p-7 text-white sm:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            {contact.eyebrow}
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
            {contact.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {contact.body}
          </p>

          <dl className="mt-7 space-y-4 text-sm">
            <div>
              <dt className="text-white/45">Email</dt>
              <dd>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-medium text-white underline-offset-4 hover:underline"
                >
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/45">Location</dt>
              <dd className="font-medium text-white/90">{contact.location}</dd>
            </div>
            <div>
              <dt className="text-white/45">Availability</dt>
              <dd className="font-medium text-white/90">
                {contact.availability}
              </dd>
            </div>
          </dl>

          <div className="mt-auto flex gap-2 pt-7">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                <SocialIcon label={s.label} />
              </a>
            ))}
          </div>
        </div>

        {/* Right 50% — contact form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-7 sm:p-8">
          <div>
            <label
              htmlFor="cm-name"
              className="mb-1.5 block text-sm font-medium text-ink"
            >
              Name
            </label>
            <input
              id="cm-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-faint focus:border-espresso/40 focus:ring-2 focus:ring-espresso/15"
            />
          </div>
          <div>
            <label
              htmlFor="cm-email"
              className="mb-1.5 block text-sm font-medium text-ink"
            >
              Email
            </label>
            <input
              id="cm-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@gmail.com"
              className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-faint focus:border-espresso/40 focus:ring-2 focus:ring-espresso/15"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <label
              htmlFor="cm-message"
              className="mb-1.5 block text-sm font-medium text-ink"
            >
              Message
            </label>
            <textarea
              id="cm-message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project…"
              rows={5}
              className="min-h-[120px] w-full flex-1 resize-none rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-faint focus:border-espresso/40 focus:ring-2 focus:ring-espresso/15"
            />
          </div>
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-espresso px-5 text-[0.95rem] font-medium text-white transition-colors hover:bg-espresso-soft"
          >
            Send message
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="text-center text-xs text-muted">
            {contact.responseTime}
          </p>
        </form>
      </div>
    </div>
  );
}
