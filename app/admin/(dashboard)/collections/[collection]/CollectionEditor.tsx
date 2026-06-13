"use client";

import { useCallback, useEffect, useState } from "react";

interface Item {
  id: string;
  order: number;
  published: boolean;
  data: Record<string, unknown>;
}

const TITLE_KEYS = ["name", "title", "degree", "company", "label", "q", "slug"];

function itemTitle(data: Record<string, unknown>): string {
  for (const k of TITLE_KEYS) {
    const v = data[k];
    if (typeof v === "string" && v.trim()) return v;
  }
  return "(untitled)";
}

export function CollectionEditor({
  collectionKey,
  label,
  hasSlug,
}: {
  collectionKey: string;
  label: string;
  hasSlug: boolean;
}) {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Item | "new" | null>(null);
  const [error, setError] = useState<string | null>(null);

  const base = `/api/v1/${collectionKey}`;

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch(base);
    const json = await res.json();
    setItems(json.data ?? []);
    setLoading(false);
  }, [base]);

  useEffect(() => {
    load();
  }, [load]);

  async function togglePublished(item: Item) {
    await fetch(`${base}/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !item.published }),
    });
    load();
  }

  async function remove(item: Item) {
    if (!confirm(`Delete "${itemTitle(item.data)}"?`)) return;
    await fetch(`${base}/${item.id}`, { method: "DELETE" });
    load();
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl text-ink">{label}</h1>
          <p className="mt-1 text-sm text-muted">{items.length} item(s)</p>
        </div>
        <button
          onClick={() => {
            setError(null);
            setEditing("new");
          }}
          className="lift rounded-lg bg-espresso px-4 py-2 text-sm font-medium text-white hover:bg-espresso-soft"
        >
          + Add item
        </button>
      </div>

      {loading ? (
        <p className="text-sm text-muted">Loading…</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3 shadow-soft"
            >
              <div className="min-w-0">
                <p className="truncate font-medium text-ink">{itemTitle(item.data)}</p>
                {hasSlug && typeof item.data.slug === "string" && (
                  <p className="truncate text-xs text-muted">/{item.data.slug}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => togglePublished(item)}
                  className={`rounded-md px-2 py-1 text-xs font-medium ${
                    item.published
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-cream-deep text-muted"
                  }`}
                >
                  {item.published ? "Published" : "Hidden"}
                </button>
                <button
                  onClick={() => {
                    setError(null);
                    setEditing(item);
                  }}
                  className="rounded-md border border-line px-2 py-1 text-xs text-ink-soft hover:bg-cream-soft"
                >
                  Edit
                </button>
                <button
                  onClick={() => remove(item)}
                  className="rounded-md px-2 py-1 text-xs text-rose-600 hover:bg-rose-50"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {editing && (
        <ItemDrawer
          base={base}
          item={editing === "new" ? null : editing}
          error={error}
          setError={setError}
          onClose={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            load();
          }}
        />
      )}
    </div>
  );
}

function ItemDrawer({
  base,
  item,
  error,
  setError,
  onClose,
  onSaved,
}: {
  base: string;
  item: Item | null;
  error: string | null;
  setError: (e: string | null) => void;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [json, setJson] = useState(
    JSON.stringify(item?.data ?? {}, null, 2),
  );
  const [saving, setSaving] = useState(false);

  async function save() {
    setError(null);
    let parsed: unknown;
    try {
      parsed = JSON.parse(json);
    } catch {
      setError("Invalid JSON");
      return;
    }
    setSaving(true);
    const res = await fetch(item ? `${base}/${item.id}` : base, {
      method: item ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: parsed }),
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
    onSaved();
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-ink/30">
      <div className="flex h-full w-full max-w-lg flex-col bg-cream shadow-lift">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="font-display text-xl text-ink">
            {item ? "Edit item" : "New item"}
          </h2>
          <button onClick={onClose} className="text-muted hover:text-ink">
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          <label className="mb-1.5 block text-sm font-medium text-ink-soft">
            Item data (JSON)
          </label>
          <textarea
            value={json}
            onChange={(e) => setJson(e.target.value)}
            spellCheck={false}
            className="h-[60vh] w-full rounded-lg border border-line bg-white p-3 font-mono text-xs text-ink outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
          {error && (
            <p className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700">
              {error}
            </p>
          )}
        </div>
        <div className="flex gap-2 border-t border-line px-5 py-4">
          <button
            onClick={save}
            disabled={saving}
            className="lift flex-1 rounded-lg bg-espresso px-4 py-2 text-sm font-medium text-white hover:bg-espresso-soft disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save"}
          </button>
          <button
            onClick={onClose}
            className="rounded-lg border border-line bg-white px-4 py-2 text-sm text-ink-soft hover:bg-cream-soft"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
