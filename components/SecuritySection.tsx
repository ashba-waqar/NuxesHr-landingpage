"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const securityFeatures = [
  "SOC 2 Type II Certified",
  "Granular Role-Based Access",
  "Immutable Audit Trails",
  "End-to-End Data Encryption",
];

export default function SecuritySection() {
  const [mfaEnforced, setMfaEnforced] = useState(true);
  const [rbacEnabled, setRbacEnabled] = useState(true);

  return (
    <section id="security" className="border-t border-line bg-bg/50 py-10 md:py-14 relative overflow-hidden">
      {/* Background Decorative Pulsing Shield Radial Ambient */}
      <div className="pointer-events-none absolute left-10 top-1/2 -z-10 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-5 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Security Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-ink">
              Bank-grade protection for your workforce data
            </h2>

            <div className="grid gap-3 sm:grid-cols-2 pt-2">
              {securityFeatures.map((title, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="flex items-center gap-3 rounded-xl border border-line bg-surface p-3.5 shadow-sm hover:border-emerald-500/50 transition-all"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-halo/10 text-halo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display text-sm font-bold text-ink">{title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Compact Security Control Center Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md rounded-2xl border border-halo/40 bg-surface/90 p-4 sm:p-5 shadow-[0_15px_40px_rgba(168,92,68,0.25)] backdrop-blur-xl relative overflow-hidden">
              {/* Radar Scanner Beam Overlay */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-r from-emerald-500/20 to-transparent blur-md animate-[spin_8s_linear_infinite]" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-line/60 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-halo/10 text-halo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">Security Control Center</h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Protected
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3.5">
                {/* Status Banner */}
                <div className="rounded-xl border border-line bg-bg/70 p-3 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted font-medium">Encryption Protocol</span>
                    <span className="font-mono text-emerald-600 font-bold">AES-256</span>
                  </div>
                  <div className="h-1.5 w-full bg-line rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-emerald-500"
                    />
                  </div>
                </div>

                {/* Simplified Compliance Badges */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { title: "SOC 2 Type II", status: "Verified" },
                    { title: "ISO 27001", status: "Certified" },
                  ].map((badge, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.03 }}
                      className="rounded-lg border border-line bg-bg/40 p-2.5 text-center"
                    >
                      <div className="text-xs font-bold text-ink">{badge.title}</div>
                      <div className="text-[11px] font-semibold text-emerald-600">{badge.status}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Simplified Access Controls */}
                <div className="rounded-xl border border-line bg-bg/50 p-3 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-ink">Mandatory 2FA</span>
                    <button
                      type="button"
                      onClick={() => setMfaEnforced(!mfaEnforced)}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                        mfaEnforced ? "bg-halo" : "bg-line"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-bg shadow ring-0 transition duration-200 ease-in-out ${
                          mfaEnforced ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs border-t border-line/40 pt-2">
                    <span className="font-bold text-ink">Zero-Trust RBAC</span>
                    <button
                      type="button"
                      onClick={() => setRbacEnabled(!rbacEnabled)}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                        rbacEnabled ? "bg-halo" : "bg-line"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-bg shadow ring-0 transition duration-200 ease-in-out ${
                          rbacEnabled ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
