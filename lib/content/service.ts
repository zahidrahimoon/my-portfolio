import "server-only";
import { revalidateTag } from "next/cache";
import { connectDB } from "@/lib/db/client";
import { ContentItemModel } from "@/lib/models/ContentItem";
import { SectionSingletonModel } from "@/lib/models/SectionSingleton";
import { destroyAsset } from "@/lib/media/cloudinary";
import {
  getCollectionDef,
  getSingletonDef,
  type CollectionDef,
} from "@/lib/content/registry";

/**
 * Authoritative write path for the generic content engine. Every mutation
 * validates against the registry's Zod schema, writes, then invalidates the
 * matching cache tag so public pages refresh.
 */

export class ValidationError extends Error {
  constructor(public details: unknown) {
    super("Validation failed");
    this.name = "ValidationError";
  }
}

function parse(def: CollectionDef, data: unknown) {
  const result = def.schema.safeParse(data);
  if (!result.success) throw new ValidationError(result.error.flatten());
  return result.data as Record<string, unknown>;
}

function revalidateCollection(def: CollectionDef, slug?: unknown) {
  // "max" = stale-while-revalidate; the single-arg form is deprecated in Next 16.
  revalidateTag(def.cacheTag, "max");
  if (def.hasSlug && typeof slug === "string") {
    revalidateTag(`${def.cacheTag}:${slug}`, "max");
  }
}

/* ------------------------------ collections ----------------------------- */

export async function listItems(key: string) {
  const def = getCollectionDef(key);
  if (!def) return null;
  await connectDB();
  const docs = await ContentItemModel.find({ collectionKey: key })
    .sort({ order: 1 })
    .lean();
  return docs.map((d) => ({
    id: String(d._id),
    order: d.order ?? 0,
    published: d.published ?? true,
    data: d.data,
  }));
}

export async function createItem(
  key: string,
  body: { data: unknown; order?: number; published?: boolean },
) {
  const def = getCollectionDef(key);
  if (!def) return null;
  const data = parse(def, body.data);
  await connectDB();

  const order =
    typeof body.order === "number"
      ? body.order
      : ((await ContentItemModel.countDocuments({ collectionKey: key })) || 0);

  const doc = await ContentItemModel.create({
    collectionKey: key,
    order,
    published: body.published ?? true,
    data,
  });
  revalidateCollection(def, data.slug);
  return { id: String(doc._id), order: doc.order, published: doc.published, data: doc.data };
}

export async function updateItem(
  key: string,
  id: string,
  body: { data?: unknown; order?: number; published?: boolean },
) {
  const def = getCollectionDef(key);
  if (!def) return null;
  await connectDB();

  const update: Record<string, unknown> = {};
  if (body.data !== undefined) update.data = parse(def, body.data);
  if (typeof body.order === "number") update.order = body.order;
  if (typeof body.published === "boolean") update.published = body.published;

  const doc = await ContentItemModel.findOneAndUpdate(
    { _id: id, collectionKey: key },
    { $set: update },
    { new: true },
  ).lean();
  if (!doc) return null;

  revalidateCollection(def, (doc.data as Record<string, unknown>)?.slug);
  return { id: String(doc._id), order: doc.order, published: doc.published, data: doc.data };
}

export async function deleteItem(key: string, id: string) {
  const def = getCollectionDef(key);
  if (!def) return null;
  await connectDB();
  const doc = await ContentItemModel.findOneAndDelete({
    _id: id,
    collectionKey: key,
  }).lean();
  if (!doc) return null;

  const publicId = (doc.data as Record<string, unknown>)?.imagePublicId;
  if (typeof publicId === "string") await destroyAsset(publicId);

  revalidateCollection(def, (doc.data as Record<string, unknown>)?.slug);
  return { id };
}

/** Bulk reorder: `[{ id, order }]`. */
export async function reorderItems(
  key: string,
  items: { id: string; order: number }[],
) {
  const def = getCollectionDef(key);
  if (!def) return null;
  await connectDB();
  await ContentItemModel.bulkWrite(
    items.map((it) => ({
      updateOne: {
        filter: { _id: it.id, collectionKey: key },
        update: { $set: { order: it.order } },
      },
    })),
  );
  revalidateCollection(def);
  return { count: items.length };
}

/* ------------------------------ singletons ------------------------------ */

export async function getSingleton(key: string) {
  const def = getSingletonDef(key);
  if (!def) return null;
  await connectDB();
  const doc = await SectionSingletonModel.findOne({ key }).lean();
  return doc?.data ?? def.seed();
}

export async function updateSingleton(key: string, data: unknown) {
  const def = getSingletonDef(key);
  if (!def) return null;
  const result = def.schema.safeParse(data);
  if (!result.success) throw new ValidationError(result.error.flatten());
  await connectDB();
  const doc = await SectionSingletonModel.findOneAndUpdate(
    { key },
    { $set: { data: result.data } },
    { new: true, upsert: true },
  ).lean();
  revalidateTag(def.cacheTag, "max");
  return doc?.data;
}
