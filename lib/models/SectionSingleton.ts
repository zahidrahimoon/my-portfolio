import "server-only";
import mongoose, { Schema, type InferSchemaType } from "mongoose";

/**
 * Single-document section editors (hero, about, site/nav/footer, contact, …).
 * One row per `key`; the section object lives in `data`, validated per-key by its
 * Zod schema. Avoids a pile of near-empty one-row models.
 */

const SectionSingletonSchema = new Schema(
  {
    key: { type: String, required: true, unique: true, index: true },
    data: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true, minimize: false },
);

export type SectionSingletonDoc = InferSchemaType<typeof SectionSingletonSchema>;

export const SectionSingletonModel =
  (mongoose.models.SectionSingleton as mongoose.Model<SectionSingletonDoc>) ||
  mongoose.model<SectionSingletonDoc>("SectionSingleton", SectionSingletonSchema);
