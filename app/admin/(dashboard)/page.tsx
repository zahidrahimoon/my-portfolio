import Link from "next/link";
import { COLLECTIONS, SINGLETONS } from "@/lib/content/registry";
import { isDbConfigured } from "@/lib/db/client";

export default function AdminOverviewPage() {
  const dbReady = isDbConfigured();

  return (
    <div>
      <h1 className="font-display text-3xl text-ink">Dashboard</h1>
      <p className="mt-1 text-sm text-muted">
        Edit every section of the portfolio. Changes publish on save.
      </p>

      {!dbReady && (
        <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <strong>Database not configured.</strong> Set <code>MONGODB_URI</code> and run{" "}
          <code>npm run seed</code> to start editing. The public site is serving bundled
          fallback content.
        </p>
      )}

      <section className="mt-8">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-faint">
          Collections
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Object.values(COLLECTIONS).map((c) => (
            <Card key={c.key} href={`/admin/collections/${c.key}`} label={c.label} />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-faint">
          Sections
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Object.values(SINGLETONS).map((s) => (
            <Card key={s.key} href={`/admin/singletons/${s.key}`} label={s.label} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Card({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="lift rounded-xl border border-line bg-white px-4 py-5 text-sm font-medium text-ink shadow-soft transition-all hover:border-gold/40"
    >
      {label}
    </Link>
  );
}
