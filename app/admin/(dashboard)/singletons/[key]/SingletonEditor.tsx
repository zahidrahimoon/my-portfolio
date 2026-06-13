"use client";

import { useCallback, useEffect, useState } from "react";

export function SingletonEditor({
  sectionKey,
  label,
}: {
  sectionKey: string;
  label: string;
}) {
  const base = `/api/v1/singletons/${sectionKey}`;
  const [json, setJson] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch(base);
    const body = await res.json();
    setJson(JSON.stringify(body.data ?? {}, null, 2));
    setLoading(false);
  }, [base]);

  useEffect(() => {
    load();
  }, [load]);

  async function save() {
    setError(null);
    setSaved(false);
    let parsed: unknown;
    try {
      parsed = JSON.parse(json);
    } catch {
      setError("Invalid JSON");
      return;
    }
    setSaving(true);
    const res = await fetch(base, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed),
    });
    const body = await res.json();
    setSaving(false);
    if (!res.ok || !body.success) {
      setError(
        body?.error?.details
          ? JSON.stringify(body.error.details)
          : body.message || "Save failed",
      );
      return;
    }
    setSaved(true);
  }

  return (
    <div>
      <h1 className="font-display text-3xl text-ink">{label}</h1>
      <p className="mt-1 text-sm text-muted">Edit this section&apos;s content.</p>

      {loading ? (
        <p className="mt-6 text-sm text-muted">Loading…</p>
      ) : (
        <div className="mt-6">
          <textarea
            value={json}
            onChange={(e) => {
              setJson(e.target.value);
              setSaved(false);
            }}
            spellCheck={false}
            className="h-[60vh] w-full rounded-lg border border-line bg-white p-3 font-mono text-xs text-ink outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
          {error && (
            <p className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700">
              {error}
            </p>
          )}
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={save}
              disabled={saving}
              className="lift rounded-lg bg-espresso px-5 py-2 text-sm font-medium text-white hover:bg-espresso-soft disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save changes"}
            </button>
            {saved && <span className="text-sm text-emerald-700">Saved ✓</span>}
          </div>
        </div>
      )}
    </div>
  );
}
