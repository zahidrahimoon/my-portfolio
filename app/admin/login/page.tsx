"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") || "/admin";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit() {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        setError(json.message || "Sign in failed");
        return;
      }
      router.replace(next);
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* Left — branded panel */}
      <section className="relative hidden overflow-hidden bg-espresso lg:block">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(120% 120% at 20% 10%, #3a332c 0%, #2b2520 45%, #1c1814 100%)",
          }}
        />
        <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gold-soft/10 blur-3xl" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <span className="text-sm font-medium tracking-wide text-gold-soft">
            Zahid Rahimoon · Admin Engine
          </span>
          <div>
            <h1 className="font-display text-4xl leading-tight text-white">
              Manage every word
              <br />
              of your portfolio.
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
              Projects, experience, reviews and site copy — edit it all from one
              place. Changes go live the moment you save.
            </p>
          </div>
          <span className="text-xs text-cream/40">
            Secured area · authorized access only
          </span>
        </div>
      </section>

      {/* Right — form card */}
      <section className="flex items-center justify-center bg-cream px-6 py-16">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-espresso font-display text-lg text-white">
              Z
            </div>
            <h2 className="font-display text-2xl text-ink">Welcome back</h2>
            <p className="mt-1 text-sm text-muted">
              Sign in to the admin dashboard.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void submit();
            }}
            className="space-y-4"
          >
            <Field
              id="username"
              label="Username"
              value={username}
              onChange={setUsername}
              autoComplete="username"
            />
            <Field
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              autoComplete="current-password"
            />

            {error && (
              <p
                role="alert"
                className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="lift inline-flex h-11 w-full items-center justify-center rounded-lg bg-espresso font-medium text-white transition-all hover:bg-espresso-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-soft">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        required
        className="h-11 w-full rounded-lg border border-line bg-white px-3 text-ink outline-none transition-all placeholder:text-faint focus:border-gold focus:ring-2 focus:ring-gold/20"
      />
    </div>
  );
}
