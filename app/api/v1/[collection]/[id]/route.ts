import type { NextRequest } from "next/server";
import { ok, badRequest, notFound, unauthorized, serverError } from "@/lib/http/responses";
import { requireAdmin, isSameOrigin } from "@/lib/auth/dal";
import { getCollectionDef } from "@/lib/content/registry";
import { updateItem, deleteItem, ValidationError } from "@/lib/content/service";

/**
 * Single-item endpoint (admin only for mutations).
 *   PUT/PATCH /api/v1/[collection]/[id]  — update fields (data/order/published)
 *   DELETE    /api/v1/[collection]/[id]  — delete + Cloudinary cleanup
 */

type Ctx = { params: Promise<{ collection: string; id: string }> };

async function guard(collection: string) {
  if (!getCollectionDef(collection)) return notFound("Unknown collection");
  if (!(await isSameOrigin())) return unauthorized("Cross-origin request rejected");
  if (!(await requireAdmin())) return unauthorized();
  return null;
}

async function handleUpdate(req: NextRequest, ctx: Ctx) {
  const { collection, id } = await ctx.params;
  const blocked = await guard(collection);
  if (blocked) return blocked;

  let body: { data?: unknown; order?: number; published?: boolean };
  try {
    body = await req.json();
  } catch {
    return badRequest("Invalid JSON body");
  }

  try {
    const updated = await updateItem(collection, id, body);
    if (!updated) return notFound("Item not found");
    return ok(updated, { message: "Updated" });
  } catch (err) {
    if (err instanceof ValidationError) return badRequest("Validation failed", err.details);
    return serverError();
  }
}

export const PUT = handleUpdate;
export const PATCH = handleUpdate;

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const { collection, id } = await ctx.params;
  const blocked = await guard(collection);
  if (blocked) return blocked;

  try {
    const res = await deleteItem(collection, id);
    if (!res) return notFound("Item not found");
    return ok(res, { message: "Deleted" });
  } catch {
    return serverError();
  }
}
