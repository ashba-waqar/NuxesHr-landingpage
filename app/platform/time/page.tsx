"use client";

import { useState } from "react";
import { timeOff, timesheets } from "@/lib/mock";
import { Badge, Card, PageHeader, btn, td, th } from "@/components/dashboard/ui";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const OCT_OFFSET = 3; // Oct 1, 2026 is a Thursday (Sunday-first grid)

export default function TimePage() {
  const [status, setStatus] = useState<Record<number, "Approved" | "Rejected">>({});
  const [leave, setLeave] = useState(timeOff.map((t) => t.status));
  const onLeave = (d: number) => {
    const iso = `2026-10-${String(d).padStart(2, "0")}`;
    return timeOff.filter((t, i) => leave[i] !== "Rejected" && iso >= t.start && iso <= t.end);
  };
  const cells = [...Array(OCT_OFFSET).fill(0), ...Array.from({ length: 31 }, (_, i) => i + 1)];

  return (
    <>
      <PageHeader title="Time" sub="Approve timesheets for the week of Sep 21 and review upcoming time off." />
      <Card className="mb-6 overflow-hidden">
        <h2 className="border-b border-line px-4 py-3 font-display text-lg font-semibold">Timesheet approvals</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-line">
              <tr><th className={th}>Employee</th><th className={th}>Client</th>{days.map((d) => <th key={d} className={th}>{d}</th>)}<th className={th}>Total</th><th className={th}>Action</th></tr>
            </thead>
            <tbody className="divide-y divide-line">
              {timesheets.map((t) => {
                const s = status[t.id];
                return (
                  <tr key={t.id}>
                    <td className={`${td} font-medium`}>{t.name}</td>
                    <td className={td}>{t.client}</td>
                    {t.hours.map((h, i) => <td key={i} className={td}>{h}</td>)}
                    <td className={`${td} font-medium`}>{t.hours.reduce((a, b) => a + b, 0)}</td>
                    <td className={td}>
                      {s ? <Badge tone={s === "Approved" ? "ok" : "bad"}>{s}</Badge> : (
                        <span className="flex gap-2">
                          <button className={btn} onClick={() => setStatus({ ...status, [t.id]: "Approved" })}>Approve</button>
                          <button className={btn} onClick={() => setStatus({ ...status, [t.id]: "Rejected" })}>Reject</button>
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <Card className="p-5">
          <h2 className="mb-4 font-display text-lg font-semibold">October 2026</h2>
          <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => <div key={d} className="py-1">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells.map((d, i) => (
              <div key={i} className={`min-h-16 rounded-lg p-1.5 text-xs ${d ? "border border-line" : ""}`}>
                {d > 0 && (
                  <>
                    <span className="text-muted">{d}</span>
                    {onLeave(d).map((t) => (
                      <span key={t.name} title={`${t.name}: ${t.type}`} className="mt-0.5 block truncate rounded bg-halo/25 px-1 text-[11px]">{t.name.split(" ")[0]}</span>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card className="h-fit p-5">
          <h2 className="mb-4 font-display text-lg font-semibold">Time-off requests</h2>
          <ul className="space-y-4">
            {timeOff.map((t, i) => (
              <li key={t.name} className="border-t border-line pt-4 first:border-0 first:pt-0">
                <div className="flex items-center justify-between"><span className="font-medium">{t.name}</span><Badge tone={leave[i] === "Approved" ? "ok" : leave[i] === "Rejected" ? "bad" : "warn"}>{leave[i]}</Badge></div>
                <p className="text-sm text-muted">{t.type}, {t.start} to {t.end}</p>
                {leave[i] === "Pending" && (
                  <div className="mt-2 flex gap-2">
                    <button className={btn} onClick={() => setLeave(leave.map((s, j) => (j === i ? "Approved" : s)))}>Approve</button>
                    <button className={btn} onClick={() => setLeave(leave.map((s, j) => (j === i ? "Rejected" : s)))}>Decline</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
