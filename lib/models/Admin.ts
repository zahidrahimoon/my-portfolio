import "server-only";
import mongoose, { Schema, type InferSchemaType } from "mongoose";

const AdminSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["admin"], default: "admin" },
  },
  { timestamps: true },
);

export type AdminDoc = InferSchemaType<typeof AdminSchema>;

// Guard against model re-compilation across serverless warm invocations / HMR.
export const AdminModel =
  (mongoose.models.Admin as mongoose.Model<AdminDoc>) ||
  mongoose.model<AdminDoc>("Admin", AdminSchema);
