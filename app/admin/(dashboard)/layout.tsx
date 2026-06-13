import { Suspense, type ReactNode } from "react";
import { verifySession } from "@/lib/auth/dal";
import { Sidebar } from "./_components/Sidebar";

/**
 * Authoritative gate for the admin dashboard. `verifySession()` cryptographically
 * verifies the JWT (the proxy only checked the cookie's presence) and redirects to
 * /admin/login when invalid. Every nested admin page inherits this protection.
 *
 * Under `cacheComponents`, dynamic data (here, the session cookie) must be read
 * inside a <Suspense> boundary so the static shell can stream while the auth check
 * and the page body resolve at request time.
 */
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-cream">
      <Suspense fallback={<SidebarFallback />}>
        <AuthedSidebar />
      </Suspense>
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-4xl px-8 py-10">
          <Suspense fallback={<p className="text-sm text-muted">Loading…</p>}>
            {children}
          </Suspense>
        </div>
      </main>
    </div>
  );
}

async function AuthedSidebar() {
  const session = await verifySession();
  return <Sidebar username={session.username} />;
}

function SidebarFallback() {
  return <aside className="h-screen w-64 shrink-0 border-r border-line bg-cream-soft" />;
}
