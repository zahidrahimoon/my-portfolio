import type { NextRequest } from "next/server";
import { ok, badRequest, notFound, unauthorized, serverError } from "@/lib/http/responses";
import { requireAdmin, isSameOrigin } from "@/lib/auth/dal";
import { getSingletonDef } from "@/lib/content/registry";
import { getSingleton, updateSingleton, ValidationError } from "@/lib/content/service";

/**
 * Section singleton endpoint.
 *   GET /api/v1/singletons/[key]  — current section data (admin)
 *   PUT /api/v1/singletons/[key]  — replace section data (admin only)
 */

type Ctx = { params: Promise<{ key: string }> };

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { key } = await params;
  if (!getSingletonDef(key)) return notFound("Unknown section");
  try {
    return ok(await getSingleton(key), { path: `/api/v1/singletons/${key}` });
  } catch {
    return serverError();
  }
}

export async function PUT(req: NextRequest, { params }: Ctx) {
  const { key } = await params;
  if (!getSingletonDef(key)) return notFound("Unknown section");
  if (!(await isSameOrigin())) return unauthorized("Cross-origin request rejected");
  if (!(await requireAdmin())) return unauthorized();

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return badRequest("Invalid JSON body");
  }

  try {
    const data = await updateSingleton(key, body);
    return ok(data, { message: "Updated" });
  } catch (err) {
    if (err instanceof ValidationError) return badRequest("Validation failed", err.details);
    return serverError();
  }
}
