import type { NextRequest } from "next/server";
import { z } from "zod";
import { ok, badRequest, unauthorized, fail, serverError } from "@/lib/http/responses";
import { isSameOrigin } from "@/lib/auth/dal";
import { connectDB, isDbConfigured } from "@/lib/db/client";
import { AdminModel } from "@/lib/models/Admin";
import { verifyPassword } from "@/lib/auth/password";
import { signSession, sessionCookieOptions } from "@/lib/auth/session";
import { checkLoginRateLimit } from "@/lib/http/rate-limit";

const loginSchema = z.object({
  username: z.string().min(1).max(128),
  password: z.string().min(1).max(256),
});

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  return fwd?.split(",")[0]?.trim() || "unknown";
}

export async function POST(req: NextRequest) {
  if (!(await isSameOrigin())) return unauthorized("Cross-origin request rejected");
  if (!isDbConfigured()) {
    return fail(503, "DB_UNCONFIGURED", "Authentication is not available");
  }

  let parsed;
  try {
    parsed = loginSchema.safeParse(await req.json());
  } catch {
    return badRequest("Invalid JSON body");
  }
  if (!parsed.success) return badRequest("Username and password are required");

  const { username, password } = parsed.data;

  // Rate limit on IP + username so neither dimension alone can be brute-forced.
  const rl = await checkLoginRateLimit(`${clientIp(req)}:${username}`);
  if (!rl.success) {
    return fail(429, "RATE_LIMITED", "Too many attempts. Try again shortly.");
  }

  try {
    await connectDB();
    const admin = await AdminModel.findOne({ username }).lean();

    // Constant-ish path: always verify against *some* hash to reduce user enumeration.
    const valid =
      admin && (await verifyPassword(password, admin.passwordHash));
    if (!admin || !valid) {
      return unauthorized("Invalid credentials");
    }

    const token = await signSession({
      sub: String(admin._id),
      username: admin.username,
      role: "admin",
    });

    const res = ok({ username: admin.username }, { message: "Signed in" });
    res.cookies.set({ ...sessionCookieOptions, value: token });
    return res;
  } catch {
    return serverError();
  }
}
