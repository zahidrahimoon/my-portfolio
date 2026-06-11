"use client";

import { useEffect } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function GlobalError({
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
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream flex flex-col items-center justify-center p-6 text-center">
        <span className="eyebrow mb-6 block text-rose-800">Critical Error</span>
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
          Something went wrong
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted max-w-md">
          A critical exception was thrown in the base application shell.
        </p>
        <div className="mt-10">
          <button
            onClick={() => reset()}
            className="lift inline-flex h-12 items-center justify-center rounded-lg bg-espresso px-6 text-[0.95rem] font-medium text-white transition-colors hover:bg-espresso-soft cursor-pointer"
          >
            Refresh Application
          </button>
        </div>
      </body>
    </html>
  );
}
