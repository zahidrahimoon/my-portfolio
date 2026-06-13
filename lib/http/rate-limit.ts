import "server-only";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Login rate limiting backed by Upstash Redis. Required on Vercel because
 * serverless instances don't share memory — an in-memory limiter would reset
 * on every cold start and never coordinate across concurrent instances.
 *
 * Degrades open if Redis isn't configured (local dev), so logins still work
 * without an Upstash account.
 */

const hasRedis = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
);

const limiter = hasRedis
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      // 5 attempts per 60s sliding window per key.
      limiter: Ratelimit.slidingWindow(5, "60 s"),
      prefix: "rl:login",
      analytics: false,
    })
  : null;

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  reset: number;
}

/** `identifier` should combine IP + username so neither alone can be brute-forced. */
export async function checkLoginRateLimit(
  identifier: string,
): Promise<RateLimitResult> {
  if (!limiter) {
    return { success: true, remaining: Infinity, reset: 0 };
  }
  const { success, remaining, reset } = await limiter.limit(identifier);
  return { success, remaining, reset };
}
