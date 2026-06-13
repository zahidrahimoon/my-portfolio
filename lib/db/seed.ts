/**
 * Idempotent seed: run with `npm run seed`.
 *
 *  1. Creates the root admin from ADMIN_USERNAME / ADMIN_PASSWORD (only if none exists).
 *  2. Imports every content.ts collection (only collections that are currently empty).
 *  3. Upserts every section singleton (only those not already present, so edits survive).
 *
 * Safe to re-run: it never overwrites existing data.
 */
import mongoose from "mongoose";
import { connectDB } from "./client";
import { AdminModel } from "../models/Admin";
import { ContentItemModel } from "../models/ContentItem";
import { SectionSingletonModel } from "../models/SectionSingleton";
import { hashPassword } from "../auth/password";
import { COLLECTIONS, SINGLETONS } from "../content/registry";

async function seedAdmin() {
  const existing = await AdminModel.countDocuments();
  if (existing > 0) {
    console.log(`• admin: ${existing} already present, skipping`);
    return;
  }
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  if (!username || !password) {
    console.warn("! admin: ADMIN_USERNAME/ADMIN_PASSWORD not set, skipping admin seed");
    return;
  }
  await AdminModel.create({
    username,
    passwordHash: await hashPassword(password),
    role: "admin",
  });
  console.log(`✓ admin: created "${username}"`);
}

async function seedCollections() {
  for (const def of Object.values(COLLECTIONS)) {
    const count = await ContentItemModel.countDocuments({ collectionKey: def.key });
    if (count > 0) {
      console.log(`• ${def.key}: ${count} already present, skipping`);
      continue;
    }
    const items = def.seed().map((data, i) => ({
      collectionKey: def.key,
      order: i,
      published: true,
      data,
    }));
    if (items.length) await ContentItemModel.insertMany(items);
    console.log(`✓ ${def.key}: inserted ${items.length}`);
  }
}

async function seedSingletons() {
  for (const def of Object.values(SINGLETONS)) {
    const existing = await SectionSingletonModel.findOne({ key: def.key }).lean();
    if (existing) {
      console.log(`• singleton ${def.key}: present, skipping`);
      continue;
    }
    await SectionSingletonModel.create({ key: def.key, data: def.seed() });
    console.log(`✓ singleton ${def.key}: created`);
  }
}

async function main() {
  await connectDB();
  console.log("Connected. Seeding…\n");
  await seedAdmin();
  await seedCollections();
  await seedSingletons();
  console.log("\nDone.");
  await mongoose.disconnect();
}

main().catch(async (err) => {
  console.error("Seed failed:", err);
  await mongoose.disconnect();
  process.exit(1);
});
