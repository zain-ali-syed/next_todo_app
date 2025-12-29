import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in your environment variables.");
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents Next.js from creating multiple connections.
 */

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Add a type-safe mongoose property to the global object
declare global {
  var mongoose: MongooseCache | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = { conn: null, promise: null };
  global.mongoose = cached;
}

export async function connectToDatabase() {
  if (cached?.conn) {
    console.log("return cached");
    return cached.conn;
  }

  if (!cached) {
    throw new Error("Mongoose cache is not initialized.");
  }
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
