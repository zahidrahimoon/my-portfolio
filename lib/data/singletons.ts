import "server-only";
import { cacheTag } from "next/cache";
import { connectDB, isDbConfigured } from "@/lib/db/client";
import { SectionSingletonModel } from "@/lib/models/SectionSingleton";
import { getSingletonDef } from "@/lib/content/registry";

/**
 * Cached read for single-document sections (hero, about, site/nav/footer, …).
 * DB value wins; falls back to the bundled `content.ts` seed.
 */
export async function getSection<T = Record<string, unknown>>(
  key: string,
): Promise<T | null> {
  "use cache";
  const def = getSingletonDef(key);
  if (!def) return null;
  cacheTag(def.cacheTag);

  if (isDbConfigured()) {
    try {
      await connectDB();
      const doc = await SectionSingletonModel.findOne({ key }).lean();
      if (doc?.data) return doc.data as T;
    } catch {
      // Fail open: DB unreachable → serve bundled content so the site never breaks.
    }
  }
  return def.seed() as T;
}
