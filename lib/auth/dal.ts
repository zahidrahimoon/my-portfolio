import "server-only";
import { cache } from "react";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, verifyToken, type SessionPayload } from "./session";

/**
 * Data Access Layer — the authoritative auth boundary.
 *
 * Per the Next.js docs, `proxy.ts` only does an optimistic cookie check. The real
 * verification (signature + expiry) happens here, as close to the data as possible,
 * and runs in the admin layout, Server Actions, and every mutating route handler.
 *
 * `cache()` memoizes the read for the duration of a single render/request so we don't
 * re-verify the JWT once per call.
 */

export const getSession = cache(async (): Promise<SessionPayload | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  return verifyToken(token);
});

/** For Server Components / layouts: redirect to login when unauthenticated. */
export async function verifySession(): Promise<SessionPayload> {
  const session = await getSession();
  if (!session) redirect("/admin/login");
  return session;
}

/** For route handlers: returns the session or null (caller returns 401). */
export async function requireAdmin(): Promise<SessionPayload | null> {
  return getSession();
}

/**
 * CSRF defense for mutations: SameSite=Strict already blocks cross-site cookie
 * sends, and this same-origin check rejects any request whose Origin doesn't match
 * the Host. Admin and API share one origin, so there are no legitimate cross-site
 * mutations.
 */
export async function isSameOrigin(): Promise<boolean> {
  const h = await headers();
  const origin = h.get("origin");
  if (!origin) return true; // non-browser / same-origin server calls have no Origin
  const host = h.get("host");
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}
