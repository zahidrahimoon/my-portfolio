import { ok, unauthorized } from "@/lib/http/responses";
import { getSession } from "@/lib/auth/dal";

export async function GET() {
  const session = await getSession();
  if (!session) return unauthorized();
  return ok({ username: session.username, role: session.role });
}
