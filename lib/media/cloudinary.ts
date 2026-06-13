import "server-only";
import { v2 as cloudinary } from "cloudinary";

/**
 * Signed direct-upload helper. The browser never sees CLOUDINARY_API_SECRET: it
 * asks `/api/v1/media/sign` for a signature, then uploads the file straight to
 * Cloudinary and posts back the returned `secure_url` + `public_id`. Mongo stores
 * only those strings — never binaries.
 */

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

export function isCloudinaryConfigured(): boolean {
  return Boolean(cloudName && apiKey && apiSecret);
}

if (isCloudinaryConfigured()) {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });
}

export interface UploadSignature {
  cloudName: string;
  apiKey: string;
  timestamp: number;
  signature: string;
  folder: string;
}

export function createUploadSignature(folder = "portfolio"): UploadSignature {
  if (!isCloudinaryConfigured()) {
    throw new Error("Cloudinary is not configured");
  }
  const timestamp = Math.round(Date.now() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder },
    apiSecret as string,
  );
  return {
    cloudName: cloudName as string,
    apiKey: apiKey as string,
    timestamp,
    signature,
    folder,
  };
}

/** Best-effort cleanup when a record referencing an asset is deleted. */
export async function destroyAsset(publicId: string): Promise<void> {
  if (!isCloudinaryConfigured() || !publicId) return;
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch {
    // Non-fatal: orphaned assets can be reaped later.
  }
}
