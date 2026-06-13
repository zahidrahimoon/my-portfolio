import "server-only";
import { SignJWT, jwtVerify } from "jose";

/**
 * Stateless admin session tokens signed with `jose`. Chosen over `jsonwebtoken`
 * because it works on both Node and edge runtimes with the same code, which keeps
 * the optimistic check in `proxy.ts` and the authoritative check in the DAL aligned.
 */

export const SESSION_COOKIE = "admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours
const ALG = "HS256";

export interface SessionPayload {
  sub: string; // admin _id
  username: string;
  role: "admin";
}

function getSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET is not set");
  return new TextEncoder().encode(secret);
}

export async function signSession(payload: SessionPayload): Promise<string> {
  return new SignJWT({ username: payload.username, role: payload.role })
    .setProtectedHeader({ alg: ALG })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE_SECONDS}s`)
    .sign(getSecret());
}

/** Returns the verified payload, or null when the token is missing/invalid/expired. */
export async function verifyToken(
  token: string | undefined,
): Promise<SessionPayload | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret(), {
      algorithms: [ALG],
    });
    if (!payload.sub || payload.role !== "admin") return null;
    return {
      sub: payload.sub,
      username: String(payload.username ?? ""),
      role: "admin",
    };
  } catch {
    return null;
  }
}

export const sessionCookieOptions = {
  name: SESSION_COOKIE,
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge: MAX_AGE_SECONDS,
};
