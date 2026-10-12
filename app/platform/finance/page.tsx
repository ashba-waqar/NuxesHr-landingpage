"use client";

import { useState } from "react";
import { employees, invoices } from "@/lib/mock";
import { Badge, Card, PageHeader, btn, btnPrimary, td, th } from "@/components/dashboard/ui";

const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const steps = ["Review hours", "Review pay", "Confirm"];
const tone = { Paid: "ok", Sent: "neutral", Overdue: "bad", Draft: "warn" } as const;

export default function FinancePage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const gross = employees.reduce((s, e) => s + e.salary / 12, 0);
  const tax = gross * 0.22;

  return (
    <>
      <PageHeader title="Finance" sub="Run payroll and keep invoices moving." />
      <Card className="mb-6 p-5">
        <h2 className="font-display text-lg font-semibold">October payroll run</h2>
        <ol className="mt-4 flex flex-wrap gap-2">
          {steps.map((s, i) => (
            <li key={s} aria-current={i === step ? "step" : undefined}
              className={`rounded-full border px-3 py-1 text-sm ${i === step ? "border-ink font-medium" : i < step ? "border-halo text-ink" : "border-line text-muted"}`}>
              {i + 1}. {s}
            </li>
          ))}
        </ol>
        <div className="mt-5 min-h-24 text-sm">
          {done ? (
            <p><Badge tone="ok">Submitted</Badge> Payroll for {employees.length} employees is scheduled for Oct 30.</p>
          ) : step === 0 ? (
            <p>{employees.length} employees, 152 approved hours this cycle, 2 timesheets still pending.</p>
          ) : step === 1 ? (
            <dl className="grid max-w-sm grid-cols-2 gap-y-2">
              <dt className="text-muted">Gross pay</dt><dd className="text-right">{fmt(gross)}</dd>
              <dt className="text-muted">Estimated tax</dt><dd className="text-right">{fmt(tax)}</dd>
              <dt className="font-medium">Net pay</dt><dd className="text-right font-medium">{fmt(gross - tax)}</dd>
            </dl>
          ) : (
            <p>Submit payroll of {fmt(gross - tax)} net for {employees.length} employees? This can&apos;t be edited after submission.</p>
          )}
        </div>
        {!done && (
          <div className="mt-4 flex gap-2">
            <button className={btn} disabled={step === 0} onClick={() => setStep(step - 1)}>Back</button>
            {step < 2 ? <button className={btnPrimary} onClick={() => setStep(step + 1)}>Continue</button> : <button className={btnPrimary} onClick={() => setDone(true)}>Submit payroll</button>}
          </div>
        )}
      </Card>

      <Card className="overflow-hidden">
        <h2 className="border-b border-line px-4 py-3 font-display text-lg font-semibold">Invoices</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-line"><tr><th className={th}>Invoice</th><th className={th}>Client</th><th className={th}>Amount</th><th className={th}>Due</th><th className={th}>Status</th></tr></thead>
            <tbody className="divide-y divide-line">
              {invoices.map((v) => (
                <tr key={v.no}><td className={`${td} font-medium`}>{v.no}</td><td className={td}>{v.client}</td><td className={td}>{fmt(v.amount)}</td><td className={td}>{v.due}</td><td className={td}><Badge tone={tone[v.status as keyof typeof tone]}>{v.status}</Badge></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
