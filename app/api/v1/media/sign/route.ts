import type { NextRequest } from "next/server";
import { ok, unauthorized, serverError, fail } from "@/lib/http/responses";
import { requireAdmin, isSameOrigin } from "@/lib/auth/dal";
import { createUploadSignature, isCloudinaryConfigured } from "@/lib/media/cloudinary";

/**
 * Returns short-lived signed params so the admin browser can upload directly to
 * Cloudinary. The API secret stays server-side. Admin-only.
 */
export async function POST(_req: NextRequest) {
  if (!(await isSameOrigin())) return unauthorized("Cross-origin request rejected");
  if (!(await requireAdmin())) return unauthorized();
  if (!isCloudinaryConfigured()) {
    return fail(503, "CLOUDINARY_UNCONFIGURED", "Cloudinary is not configured");
  }
  try {
    return ok(createUploadSignature(), { message: "Signed" });
  } catch {
    return serverError();
  }
}
