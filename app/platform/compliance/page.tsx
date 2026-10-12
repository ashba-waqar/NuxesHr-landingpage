"use client";

import { useState } from "react";
import { TODAY, controls as initial, expiring } from "@/lib/mock";
import { Badge, Card, PageHeader } from "@/components/dashboard/ui";

export default function CompliancePage() {
  const [items, setItems] = useState(initial);
  const done = items.filter((i) => i.done).length;
  const alerts = expiring
    .map((e) => ({ ...e, days: Math.ceil((new Date(e.expires).getTime() - TODAY.getTime()) / 86400000) }))
    .sort((a, b) => a.days - b.days);

  return (
    <>
      <PageHeader title="Compliance" sub="Track regulatory controls and catch expiring documents early." />
      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold">Controls checklist</h2>
            <span className="text-sm text-muted">{done} of {items.length} complete</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-line" role="progressbar" aria-valuenow={done} aria-valuemin={0} aria-valuemax={items.length}>
            <div className="h-full bg-halo transition-all" style={{ width: `${(done / items.length) * 100}%` }} />
          </div>
          <ul className="mt-4 divide-y divide-line">
            {items.map((c) => (
              <li key={c.id}>
                <label className="flex cursor-pointer items-start gap-3 py-3">
                  <input type="checkbox" checked={c.done} className="mt-1 h-4 w-4 accent-[var(--halo)]"
                    onChange={() => setItems(items.map((x) => (x.id === c.id ? { ...x, done: !x.done } : x)))} />
                  <span>
                    <span className={`block text-sm ${c.done ? "text-muted line-through" : "font-medium"}`}>{c.title}</span>
                    <span className="text-xs text-muted">Owner: {c.owner}</span>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="h-fit p-5">
          <h2 className="font-display text-lg font-semibold">Document expiration alerts</h2>
          <ul className="mt-4 divide-y divide-line">
            {alerts.map((a) => (
              <li key={a.name} className="flex items-center justify-between gap-3 py-3">
                <div>
                  <p className="text-sm font-medium">{a.name}</p>
                  <p className="text-xs text-muted">Expires {a.expires}</p>
                </div>
                <Badge tone={a.days <= 14 ? "bad" : a.days <= 60 ? "warn" : "ok"}>{a.days} days</Badge>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
