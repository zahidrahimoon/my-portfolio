import { NextResponse } from "next/server";

/** Uniform API envelope returned by every /api/v1 handler. */
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: { code: string; details?: unknown };
  meta?: { timestamp: string; path?: string; count?: number };
}

const NO_STORE = "no-store, max-age=0";

function meta(path?: string, count?: number): ApiResponse["meta"] {
  return {
    timestamp: new Date().toISOString(),
    ...(path ? { path } : {}),
    ...(typeof count === "number" ? { count } : {}),
  };
}

export function ok<T>(
  data: T,
  opts: { message?: string; path?: string; count?: number; status?: number } = {},
): NextResponse<ApiResponse<T>> {
  const body: ApiResponse<T> = {
    success: true,
    message: opts.message ?? "OK",
    data,
    meta: meta(opts.path, opts.count),
  };
  return NextResponse.json(body, {
    status: opts.status ?? 200,
    headers: { "Cache-Control": NO_STORE },
  });
}

export function fail(
  status: number,
  code: string,
  message: string,
  details?: unknown,
): NextResponse<ApiResponse> {
  const body: ApiResponse = {
    success: false,
    message,
    error: { code, ...(details !== undefined ? { details } : {}) },
    meta: meta(),
  };
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": NO_STORE },
  });
}

/** Common shorthands. */
export const unauthorized = (message = "Unauthorized") =>
  fail(401, "UNAUTHORIZED", message);
export const badRequest = (message = "Invalid request", details?: unknown) =>
  fail(400, "BAD_REQUEST", message, details);
export const notFound = (message = "Not found") => fail(404, "NOT_FOUND", message);
export const serverError = (message = "Internal server error") =>
  fail(500, "INTERNAL_ERROR", message);
