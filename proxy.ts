import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE } from "@/lib/auth/session";

/**
 * Next.js 16 Proxy (formerly `middleware`). Runs on the Node.js runtime.
 *
 * This is only an OPTIMISTIC check: it redirects browser requests for /admin/* to
 * the login page when the session cookie is absent. It does NOT verify the JWT
 * signature — per the Next docs, Proxy "should not be used as a full session
 * management or authorization solution." The authoritative check lives in the DAL
 * (`verifySession`/`requireAdmin`), which runs in the admin layout and every
 * mutating route handler.
 */
export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only the login page is public under /admin.
  const isLogin = pathname === "/admin/login";
  const hasCookie = Boolean(req.cookies.get(SESSION_COOKIE)?.value);

  if (!hasCookie && !isLogin) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  // Already "logged in" (cookie present) and hitting the login page → send to dashboard.
  if (hasCookie && isLogin) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
