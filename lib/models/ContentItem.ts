import "server-only";
import mongoose, { Schema, type InferSchemaType } from "mongoose";

/**
 * Generic store for every *collection* section (projects, reviews, faqs, …).
 *
 * One physical MongoDB collection discriminated by `collectionKey`, so the generic
 * engine (`/api/v1/[collection]`, `getCollection()`) and the generic admin list/form
 * work for all of them without bespoke models. The section-specific shape lives in
 * `data` and is validated per-key by its Zod schema (see lib/validation/schemas.ts).
 */

const ContentItemSchema = new Schema(
  {
    collectionKey: { type: String, required: true, index: true },
    order: { type: Number, default: 0 },
    published: { type: Boolean, default: true },
    data: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true, minimize: false },
);

// List queries: items of one section in display order.
ContentItemSchema.index({ collectionKey: 1, order: 1 });
// Slug lookups for /projects/[slug] (sparse: only slug-bearing items).
ContentItemSchema.index(
  { collectionKey: 1, "data.slug": 1 },
  { sparse: true },
);

export type ContentItemDoc = InferSchemaType<typeof ContentItemSchema>;

export const ContentItemModel =
  (mongoose.models.ContentItem as mongoose.Model<ContentItemDoc>) ||
  mongoose.model<ContentItemDoc>("ContentItem", ContentItemSchema);
