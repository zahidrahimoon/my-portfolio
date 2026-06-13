import type { NextRequest } from "next/server";
import { ok, badRequest, notFound, unauthorized, serverError } from "@/lib/http/responses";
import { requireAdmin, isSameOrigin } from "@/lib/auth/dal";
import { getCollectionDef } from "@/lib/content/registry";
import { listItems, createItem, ValidationError } from "@/lib/content/service";

/**
 * Generic collection endpoint.
 *   GET  /api/v1/[collection]        — list all items (admin view; includes unpublished)
 *   POST /api/v1/[collection]        — create (admin only)
 */

type Ctx = { params: Promise<{ collection: string }> };

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { collection } = await params;
  if (!getCollectionDef(collection)) return notFound("Unknown collection");
  try {
    const items = await listItems(collection);
    return ok(items ?? [], { path: `/api/v1/${collection}`, count: items?.length ?? 0 });
  } catch {
    return serverError();
  }
}

export async function POST(req: NextRequest, { params }: Ctx) {
  const { collection } = await params;
  if (!getCollectionDef(collection)) return notFound("Unknown collection");
  if (!(await isSameOrigin())) return unauthorized("Cross-origin request rejected");
  if (!(await requireAdmin())) return unauthorized();

  let body: { data: unknown; order?: number; published?: boolean };
  try {
    body = await req.json();
  } catch {
    return badRequest("Invalid JSON body");
  }

  try {
    const created = await createItem(collection, body);
    return ok(created, { status: 201, message: "Created", path: `/api/v1/${collection}` });
  } catch (err) {
    if (err instanceof ValidationError) return badRequest("Validation failed", err.details);
    return serverError();
  }
}
