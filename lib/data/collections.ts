import "server-only";
import { cacheTag } from "next/cache";
import { connectDB, isDbConfigured } from "@/lib/db/client";
import { ContentItemModel } from "@/lib/models/ContentItem";
import { SectionSingletonModel } from "@/lib/models/SectionSingleton";
import { COLLECTIONS, getCollectionDef } from "@/lib/content/registry";

/**
 * Cached read layer for public pages.
 *
 * `cacheComponents: true` makes reads dynamic by default, so each reader opts into
 * the cache with `'use cache'` + `cacheTag`. Admin writes call `revalidateTag(<tag>)`
 * to refresh the public site. If the DB is unset/empty we fall back to the bundled
 * `content.ts` seed so the site never breaks during rollout.
 */

export interface CollectionItem<T = Record<string, unknown>> {
  id: string;
  order: number;
  published: boolean;
  data: T;
}

/** Published items of a collection, in display order. Falls back to seed data. */
export async function getCollection<T = Record<string, unknown>>(
  key: string,
): Promise<CollectionItem<T>[]> {
  "use cache";
  const def = getCollectionDef(key);
  if (!def) return [];
  cacheTag(def.cacheTag);

  if (!isDbConfigured()) return seedItems<T>(key);

  try {
    await connectDB();
    const docs = await ContentItemModel.find({ collectionKey: key, published: true })
      .sort({ order: 1 })
      .lean();

    if (!docs.length) return seedItems<T>(key);

    return docs.map((d) => ({
      id: String(d._id),
      order: d.order ?? 0,
      published: d.published ?? true,
      data: d.data as T,
    }));
  } catch {
    // Fail open: DB unreachable → serve bundled content so the site never breaks.
    return seedItems<T>(key);
  }
}

/** Single slug-keyed item (e.g. a project detail page). */
export async function getCollectionItemBySlug<T = Record<string, unknown>>(
  key: string,
  slug: string,
): Promise<CollectionItem<T> | null> {
  "use cache";
  const def = getCollectionDef(key);
  if (!def?.hasSlug) return null;
  cacheTag(def.cacheTag, `${def.cacheTag}:${slug}`);

  const fromSeed = () =>
    seedItems<T>(key).find(
      (i) => (i.data as Record<string, unknown>).slug === slug,
    ) ?? null;

  if (!isDbConfigured()) return fromSeed();

  try {
    await connectDB();
    const doc = await ContentItemModel.findOne({
      collectionKey: key,
      published: true,
      "data.slug": slug,
    }).lean();

    if (!doc) return fromSeed();

    return {
      id: String(doc._id),
      order: doc.order ?? 0,
      published: doc.published ?? true,
      data: doc.data as T,
    };
  } catch {
    return fromSeed();
  }
}

/** All slugs for a slug-bearing collection — used by generateStaticParams. */
export async function getCollectionSlugs(key: string): Promise<string[]> {
  "use cache";
  const def = getCollectionDef(key);
  if (!def?.hasSlug) return [];
  cacheTag(def.cacheTag);

  const fromSeed = () =>
    seedItems(key)
      .map((i) => (i.data as Record<string, unknown>).slug)
      .filter((s): s is string => typeof s === "string");

  if (!isDbConfigured()) return fromSeed();

  try {
    await connectDB();
    const docs = await ContentItemModel.find(
      { collectionKey: key, published: true },
      { "data.slug": 1 },
    ).lean();
    return docs
      .map((d) => (d.data as Record<string, unknown>)?.slug)
      .filter((s): s is string => typeof s === "string");
  } catch {
    return fromSeed();
  }
}

/** Editable section heading (eyebrow/title/body), DB-overridable, seed fallback. */
export async function getSectionHeading(
  key: string,
): Promise<{ eyebrow?: string; title?: string; body?: string }> {
  "use cache";
  const def = getCollectionDef(key);
  if (!def) return {};
  cacheTag(`heading:${key}`);

  if (isDbConfigured()) {
    try {
      await connectDB();
      const doc = await SectionSingletonModel.findOne({ key: `heading:${key}` }).lean();
      if (doc?.data) return doc.data as { eyebrow?: string; title?: string; body?: string };
    } catch {
      // fall through to seed heading
    }
  }
  return def.heading;
}

function seedItems<T>(key: string): CollectionItem<T>[] {
  const def = COLLECTIONS[key];
  if (!def) return [];
  return def.seed().map((data, i) => ({
    id: `seed-${key}-${i}`,
    order: i,
    published: true,
    data: data as T,
  }));
}
