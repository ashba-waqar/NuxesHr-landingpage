"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const useCases = [
  {
    id: "consulting",
    title: "HR Consulting & Advisory",
    bullets: [
      "Switch client environments seamlessly in one click",
      "Unified billing & multi-org compliance dashboards",
      "White-labeled client portal with custom domain branding",
    ],
  },
  {
    id: "scaleups",
    title: "Fast-Growing Startups",
    bullets: [
      "Automated paperless onboarding & e-signatures",
      "Built-in Applicant Tracking System (ATS)",
      "Instant time-off tracking & team calendars",
    ],
  },
  {
    id: "enterprise",
    title: "Mid-Market Enterprises",
    bullets: [
      "Granular role-based access control (RBAC)",
      "Audit trail logs for all sensitive employee data changes",
      "Pixi AI assistant for automated policy search & answers",
    ],
  },
];

export default function SolutionsSection() {
  const reduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const [selectedClient, setSelectedClient] = useState("Acme Corp");
  const activeCase = useCases.find((c) => c.id === activeTab) || useCases[0];

  return (
    <section id="solutions" className="border-t border-line bg-surface py-12 md:py-16 relative overflow-hidden">
      {/* Subtle Background Mesh Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-halo/10 via-transparent to-transparent opacity-70" />

      <div className="mx-auto max-w-4xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg mx-auto"
        >
          <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl text-ink">
            Tailored solutions for every stage of growth
          </h2>
        </motion.div>

        {/* Tab Buttons */}
        <div className="mt-4 flex justify-center overflow-x-auto pb-1 no-scrollbar gap-2">
          <div className="inline-flex p-1 rounded-xl border border-line bg-bg/80 backdrop-blur-md shadow-sm relative">
            {useCases.map((uc) => {
              const isActive = activeTab === uc.id;
              return (
                <button
                  key={uc.id}
                  type="button"
                  onClick={() => setActiveTab(uc.id)}
                  className={`relative rounded-lg px-3 py-1.5 text-[11px] font-medium transition-all duration-200 whitespace-nowrap z-10 ${
                    isActive
                      ? "text-bg"
                      : "text-muted hover:text-ink hover:bg-surface"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSolutionTab"
                      className="absolute inset-0 bg-ink rounded-lg -z-10 shadow-md"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {uc.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase Area */}
        <motion.div
          layout
          whileHover={reduceMotion ? undefined : { scale: 1.005 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
          className="mt-5 grid gap-4 lg:grid-cols-12 lg:items-center rounded-2xl border border-[#58334f] bg-[#3b2135] p-3.5 sm:p-4.5 shadow-xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-6 space-y-3"
            >
              <h3 className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
                {activeCase.title}
              </h3>

              <ul className="space-y-2 pt-0.5">
                {activeCase.bullets.map((bullet, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="flex items-start gap-2 text-xs font-medium text-pink-100/90 leading-snug"
                  >
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#c87b9e] text-white mt-0.5 shadow-sm">
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M2.5 6l2.5 2.5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-1.5">
                <a
                  href="/get-started"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-[#3b2135] transition-all hover:bg-pink-100 hover:scale-[1.02] active:scale-95 shadow-md"
                >
                  Schedule a Demo
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Code-based UI Showcase */}
          <div className="lg:col-span-6">
            <motion.div
              layout
              whileHover={{ y: -3 }}
              className="relative overflow-hidden rounded-xl border border-line bg-white text-slate-800 p-4 sm:p-5 shadow-md transition-all duration-300"
            >
              {/* Top Window Header */}
              <div className="flex items-center justify-between border-b border-line/60 pb-2.5 mb-3.5">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-1.5 text-[11px] font-mono text-muted">nexushr-app // {activeTab}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Workspace
                  </span>
                </div>
              </div>

              {/* Dynamic UI Content based on activeTab */}
              <AnimatePresence mode="wait">
                {activeTab === "consulting" && (
                  <motion.div
                    key="consulting-content"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                      Multi-Client Workspace Switcher
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {["Acme Corp", "TechFlow", "Starlight"].map((client) => (
                        <button
                          key={client}
                          type="button"
                          onClick={() => setSelectedClient(client)}
                          className={`rounded-lg p-2 text-[11px] font-medium border text-left transition-all ${
                            selectedClient === client
                              ? "border-halo bg-halo/10 text-halo shadow-sm"
                              : "border-line bg-white text-muted hover:text-ink"
                          }`}
                        >
                          <div className="font-bold">{client}</div>
                          <div className="text-[9px] opacity-75">Client Org</div>
                        </button>
                      ))}
                    </div>

                    <div className="rounded-lg border border-line bg-white p-3 space-y-2 text-[11px]">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-muted font-medium">Active Environment:</span>
                        <span className="font-bold text-ink">{selectedClient}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-0.5">
                        <div className="rounded-md bg-slate-50 p-2 border border-line/60">
                          <div className="text-[10px] text-muted">Headcount</div>
                          <div className="text-sm font-bold text-ink">142 Active</div>
                        </div>
                        <div className="rounded-md bg-slate-50 p-2 border border-line/60">
                          <div className="text-[10px] text-muted">Compliance Status</div>
                          <div className="text-sm font-bold text-emerald-600">99.4% Verified</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] pt-0.5 text-muted">
                        <span>White-label Portal</span>
                        <span className="font-mono text-[10px] text-halo bg-halo/10 px-1.5 py-0.5 rounded">
                          hr.{selectedClient.toLowerCase().replace(/\s+/g, "")}.com
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "scaleups" && (
                  <motion.div
                    key="scaleups-content"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-muted">
                      <span>Paperless Onboarding Pipeline</span>
                      <span className="text-halo font-bold">94% Complete</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        { name: "Sarah Jenkins", role: "Senior Product Designer", step: "Offer Signed", status: "Complete", color: "bg-emerald-500" },
                        { name: "Marcus Chen", role: "Lead Frontend Engineer", step: "Identity & Tax Docs", status: "In Progress", color: "bg-amber-500 animate-pulse" },
                        { name: "Elena Rostova", role: "Growth Marketer", step: "Equipment Setup", status: "Queued", color: "bg-muted/40" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-line bg-white p-2.5 text-[11px] hover:border-halo/40 transition-colors">
                          <div className="flex items-center gap-2">
                            <div className={`h-2 w-2 rounded-full ${item.color}`} />
                            <div>
                              <div className="font-bold text-ink">{item.name}</div>
                              <div className="text-[10px] text-muted">{item.role}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-ink">{item.step}</div>
                            <div className="text-[9px] text-muted">{item.status}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-lg bg-halo/10 border border-halo/30 p-2.5 flex items-center justify-between text-[11px] text-halo font-medium">
                      <span>Automated E-Signatures Active</span>
                      <span className="font-mono bg-white px-1.5 py-0.5 rounded text-[10px] font-bold">3 Pending Approval</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "enterprise" && (
                  <motion.div
                    key="enterprise-content"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                      RBAC Security & Pixi AI Audit Log
                    </div>

                    <div className="rounded-lg border border-line bg-white p-2.5 space-y-1.5 text-[11px]">
                      <div className="flex items-center justify-between font-medium">
                        <span className="text-ink font-bold">Pixi AI Policy Grounding</span>
                        <span className="text-emerald-600 font-bold text-[10px]">Active & Encrypted</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-halo w-[88%]" />
                      </div>
                      <div className="text-[10px] text-muted">482 employee queries resolved automatically today</div>
                    </div>

                    <div className="space-y-1.5 text-[11px]">
                      <div className="text-[10px] font-semibold text-muted">Recent Audit Trail Events</div>
                      {[
                        { event: "Global Payroll Audit Verified", time: "2m ago" },
                        { event: "Granular RBAC Policy Updated", time: "14m ago" },
                        { event: "SOC-2 Compliance Artifact Logged", time: "1h ago" },
                      ].map((log, i) => (
                        <div key={i} className="flex items-center justify-between rounded-md bg-white border border-line/60 p-2">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-halo" />
                            <span className="font-medium text-ink text-[11px]">{log.event}</span>
                          </div>
                          <span className="text-[9px] text-muted">{log.time}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
