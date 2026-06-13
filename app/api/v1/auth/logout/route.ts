import { ok } from "@/lib/http/responses";
import { SESSION_COOKIE } from "@/lib/auth/session";

export async function POST() {
  const res = ok({ ok: true }, { message: "Signed out" });
  res.cookies.set({
    name: SESSION_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return res;
}
