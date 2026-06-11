"use client";

import { useEffect } from "react";
import { Container } from "./components/ui/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <main className="flex flex-1 items-center justify-center py-16">
        <Container className="max-w-md text-center">
          <span className="eyebrow mb-6 block text-rose-800">System Error</span>
          <h1 className="font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            Something went wrong
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            An error occurred while loading this page. Our team has been notified.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => reset()}
              className="lift inline-flex h-12 items-center justify-center rounded-lg bg-espresso px-6 text-[0.95rem] font-medium text-white transition-colors hover:bg-espresso-soft cursor-pointer"
            >
              Try again
            </button>
            <a
              href="/"
              className="text-sm font-semibold text-ink hover:underline underline-offset-4"
            >
              Go back home <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </Container>
      </main>
    </div>
  );
}
