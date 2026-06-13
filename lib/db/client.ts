import "server-only";
import mongoose from "mongoose";

/**
 * Serverless-safe Mongoose connection.
 *
 * On Vercel each warm function invocation reuses the same module scope, so we
 * cache the connection promise on `globalThis` to avoid opening a new pool on
 * every request (which would exhaust Atlas connection limits). A small pool is
 * deliberate: serverless concurrency is per-instance, not per-pool.
 */

const MONGODB_URI = process.env.MONGODB_URI;

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalForMongoose = globalThis as unknown as {
  _mongooseCache?: MongooseCache;
};

const cache: MongooseCache =
  globalForMongoose._mongooseCache ?? { conn: null, promise: null };

globalForMongoose._mongooseCache = cache;

/** True when a database is configured. Callers fall back to static content otherwise. */
export function isDbConfigured(): boolean {
  return Boolean(MONGODB_URI);
}

export async function connectDB(): Promise<typeof mongoose> {
  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is not set. Call isDbConfigured() before connectDB() on public paths.",
    );
  }

  if (cache.conn) return cache.conn;

  if (!cache.promise) {
    cache.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      maxPoolSize: 5,
      serverSelectionTimeoutMS: 8000,
    });
  }

  try {
    cache.conn = await cache.promise;
  } catch (err) {
    // Reset so the next call can retry instead of reusing a rejected promise.
    cache.promise = null;
    throw err;
  }

  return cache.conn;
}
