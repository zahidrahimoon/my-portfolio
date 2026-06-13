import Link from "next/link";
import { COLLECTIONS, SINGLETONS } from "@/lib/content/registry";
import { LogoutButton } from "./LogoutButton";

/** Server component — nav is derived from the content registry. */
export function Sidebar({ username }: { username: string }) {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-line bg-cream-soft">
      <div className="flex items-center gap-2 border-b border-line px-5 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-espresso font-display text-sm text-white">
          Z
        </span>
        <span className="font-display text-lg text-ink">Admin</span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <Link
          href="/admin"
          className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-soft hover:bg-white"
        >
          Overview
        </Link>

        <NavGroup title="Collections">
          {Object.values(COLLECTIONS).map((c) => (
            <NavLink key={c.key} href={`/admin/collections/${c.key}`} label={c.label} />
          ))}
        </NavGroup>

        <NavGroup title="Sections">
          {Object.values(SINGLETONS).map((s) => (
            <NavLink key={s.key} href={`/admin/singletons/${s.key}`} label={s.label} />
          ))}
        </NavGroup>
      </nav>

      <div className="border-t border-line p-3">
        <p className="mb-2 px-1 text-xs text-muted">
          Signed in as <span className="text-ink-soft">{username}</span>
        </p>
        <LogoutButton />
      </div>
    </aside>
  );
}

function NavGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-faint">
        {title}
      </p>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-white"
    >
      {label}
    </Link>
  );
}
