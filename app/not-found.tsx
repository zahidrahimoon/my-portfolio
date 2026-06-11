import Link from "next/link";
import { Container } from "./components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <main className="flex flex-1 items-center justify-center py-16">
        <Container className="max-w-md text-center">
          <span className="eyebrow mb-6 block text-gold">404 — Not Found</span>
          <h1 className="font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            Lost in code
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            The page you are looking for doesn't exist, has been moved, or is still compiling in development.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="lift inline-flex h-12 items-center justify-center rounded-lg bg-espresso px-6 text-[0.95rem] font-medium text-white transition-colors hover:bg-espresso-soft"
            >
              Go back home
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-semibold text-ink hover:underline underline-offset-4"
            >
              Get in touch <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Container>
      </main>
    </div>
  );
}
