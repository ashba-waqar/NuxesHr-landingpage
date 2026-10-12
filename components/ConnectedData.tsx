"use client";

import { motion } from "framer-motion";
import { HoverZoomSurface } from "@/components/ClickZoomSurface";

const points = [
  "Single employee record across HR, time, and payroll",
  "Role-based access scoped by tenant, client, and team",
  "Audit logs on every change",
  "Real-time dashboards that cross modules",
];

const record = [
  { field: "Role", value: "Senior consultant", module: "People" },
  { field: "Hours this week", value: "38.5", module: "Time & Work" },
  { field: "Hourly rate", value: "$72.00", module: "Finance" },
  { field: "Security training", value: "Valid to Mar 2027", module: "Compliance" },
  { field: "Laptop", value: "MBP-0413", module: "Workplace" },
];

function Check() {
  return (
    <div className="mt-0.5 shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-halo/10 text-halo">
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function ConnectedData() {
  return (
    <section id="security" className="border-t border-line relative overflow-hidden bg-bg/30">
      {/* Background Decorative Pulsing Energy Beam */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-halo/5 blur-[100px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 md:py-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-ink">
            Stop copy-pasting between tools
          </h2>
          <ul className="mt-9 space-y-5">
            {points.map((p, idx) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex gap-3 text-lg leading-snug font-medium text-ink"
              >
                <Check />
                <span>{p}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end relative"
        >
          {/* Animated Card Container */}
          <HoverZoomSurface
            className="w-full max-w-md rounded-3xl border-2 border-halo/40 bg-surface/90 p-5 sm:p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-halo transition-colors duration-300"
            role="group"
            aria-label="Example employee record showing which module owns each field"
          >
            {/* Shimmer sweep effect on card */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="flex items-center gap-3.5 border-b border-line pb-4">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-bg ring-2 ring-halo/40 shadow-md"
              >
                MC
              </span>
              <div>
                <p className="font-display text-lg font-bold leading-tight text-ink">Maya Chen</p>
                <p className="text-xs text-muted font-medium">One record, five modules</p>
              </div>
            </div>

            <dl className="divide-y divide-line/70">
              {record.map((r, i) => (
                <motion.div
                  key={r.field}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-center justify-between gap-4 py-3 hover:bg-bg/40 px-2 rounded-lg transition-colors"
                >
                  <div>
                    <dt className="text-xs text-muted font-medium">{r.field}</dt>
                    <dd className="text-sm font-semibold text-ink">{r.value}</dd>
                  </div>
                  <span className="rounded-lg border border-halo/30 bg-halo/10 px-2.5 py-1 text-xs text-halo font-semibold shadow-xs">
                    {r.module}
                  </span>
                </motion.div>
              ))}
            </dl>

            <p className="border-t border-line/70 pt-3.5 text-xs text-muted flex items-center justify-between">
              <span>
                Hourly rate changed by <span className="text-ink font-bold">Dana Ortiz</span> today at 09:12
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            </p>
          </HoverZoomSurface>
        </motion.div>
      </div>
    </section>
  );
}
