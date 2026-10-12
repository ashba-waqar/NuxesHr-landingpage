"use client";

import { useState } from "react";
import { employees } from "@/lib/mock";
import { Badge, Card, PageHeader, tabCls, td, th } from "@/components/dashboard/ui";

type Emp = (typeof employees)[number];

function OrgNode({ e, onPick }: { e: Emp; onPick: (e: Emp) => void }) {
  const reports = employees.filter((x) => x.manager === e.id);
  return (
    <li>
      <button onClick={() => onPick(e)} className="my-1 rounded-lg border border-line bg-surface px-3 py-2 text-left hover:border-halo">
        <span className="block text-sm font-medium">{e.name}</span>
        <span className="block text-xs text-muted">{e.role}</span>
      </button>
      {reports.length > 0 && (
        <ul className="ml-5 border-l border-line pl-5">
          {reports.map((r) => <OrgNode key={r.id} e={r} onPick={onPick} />)}
        </ul>
      )}
    </li>
  );
}

export default function PeoplePage() {
  const [view, setView] = useState<"directory" | "org">("directory");
  const [q, setQ] = useState("");
  const [sel, setSel] = useState<Emp>(employees[3]);
  const rows = employees.filter((e) => `${e.name} ${e.role} ${e.dept}`.toLowerCase().includes(q.toLowerCase()));
  const manager = employees.find((e) => e.id === sel.manager);
  const reports = employees.filter((e) => e.manager === sel.id);

  return (
    <>
      <PageHeader title="People" sub="Everyone at Northwind, in one directory." />
      <div className="mb-4 flex gap-1" role="tablist">
        <button role="tab" aria-selected={view === "directory"} className={tabCls(view === "directory")} onClick={() => setView("directory")}>Directory</button>
        <button role="tab" aria-selected={view === "org"} className={tabCls(view === "org")} onClick={() => setView("org")}>Org chart</button>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
        {view === "directory" ? (
          <Card className="overflow-hidden">
            <div className="border-b border-line p-3">
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter by name, role, or department" aria-label="Filter employees"
                className="w-full rounded-lg border border-line bg-bg px-3 py-2 text-sm" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-line"><tr><th className={th}>Name</th><th className={th}>Role</th><th className={th}>Department</th><th className={th}>Status</th></tr></thead>
                <tbody className="divide-y divide-line">
                  {rows.map((e) => (
                    <tr key={e.id} onClick={() => setSel(e)} className={`cursor-pointer hover:bg-bg ${sel.id === e.id ? "bg-bg" : ""}`}>
                      <td className={`${td} font-medium`}>
                        <button className="text-left" onClick={() => setSel(e)}>{e.name}</button>
                      </td>
                      <td className={td}>{e.role}</td>
                      <td className={td}>{e.dept}</td>
                      <td className={td}><Badge tone={e.status === "Active" ? "ok" : "warn"}>{e.status}</Badge></td>
                    </tr>
                  ))}
                  {rows.length === 0 && <tr><td className={`${td} text-muted`} colSpan={4}>No one matches that filter.</td></tr>}
                </tbody>
              </table>
            </div>
          </Card>
        ) : (
          <Card className="overflow-x-auto p-5">
            <ul>{employees.filter((e) => e.manager === null).map((e) => <OrgNode key={e.id} e={e} onPick={setSel} />)}</ul>
          </Card>
        )}

        <Card className="h-fit p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display font-semibold text-bg">
              {sel.name.split(" ").map((n) => n[0]).join("")}
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold leading-tight">{sel.name}</h2>
              <p className="text-sm text-muted">{sel.role}</p>
            </div>
          </div>
          <dl className="mt-5 space-y-3 text-sm">
            {[["Email", sel.email], ["Location", sel.location], ["Department", sel.dept], ["Start date", sel.start], ["Manager", manager?.name ?? "None"], ["Direct reports", reports.length ? reports.map((r) => r.name).join(", ") : "None"]].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-t border-line pt-3"><dt className="text-muted">{k}</dt><dd className="text-right">{v}</dd></div>
            ))}
          </dl>
        </Card>
      </div>
    </>
  );
}
