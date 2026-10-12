"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  { value: "500+", label: "Companies Powered" },
  { value: "99.9%", label: "Platform Uptime SLA" },
  { value: "4.9/5", label: "Customer Satisfaction" },
  { value: "15+", label: "Countries Supported" },
];

const values = [
  {
    title: "One Platform, Zero Complexity",
    description: "We eliminate fragmented HR stacks by unifying six core modules into a single, intuitive interface.",
  },
  {
    title: "Enterprise Security by Default",
    description: "Multi-tenant architecture built with SOC2 compliance, granular RBAC, and audit trails from day one.",
  },
  {
    title: "AI as a Power Multiplier",
    description: "Pixi AI handles routine queries, document searches, and compliance checks so HR teams focus on people.",
  },
];

function StatsMarqueeTrack({ trackId }: { trackId: string }) {
  return (
    <>
      {stats.map((s) => (
        <div key={`${trackId}-${s.label}`} className="flex items-center gap-3 shrink-0">
          <span className="font-display text-3xl font-extrabold text-ink sm:text-4xl tracking-tight whitespace-nowrap">
            {s.value}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted whitespace-nowrap">
            {s.label}
          </span>
          <span className="ml-4 sm:ml-8 text-halo/80 font-bold shrink-0">•</span>
        </div>
      ))}
    </>
  );
}

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="about" className="border-t border-line bg-surface pt-10 pb-8 md:pt-14 md:pb-10 overflow-hidden relative">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left: Team image matching right text height */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col h-full"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden rounded-2xl border border-line bg-bg shadow-md group h-full min-h-[280px] max-h-[360px] sm:max-h-[400px]"
            >
              <img
                src="/images/about_team.png"
                alt="NexusHR Team Collaborating"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-xs font-semibold text-bg">
                  Empowering 500+ global teams with intelligent HR infrastructure.
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Heading & accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-ink">
              Built by HR leaders for teams who value clarity
            </h2>

            <div className="space-y-3 pt-2">
              {values.map((v, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`rounded-2xl border overflow-hidden transition-colors shadow-sm ${
                      isOpen ? "border-halo/40 bg-[#ebe4ea]" : "border-line/70 bg-surface"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left"
                    >
                      <h3 className="font-display text-lg font-bold text-ink">{v.title}</h3>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isOpen ? "border-halo/50 bg-halo/10 text-halo" : "border-line bg-bg/80 text-muted"
                        }`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-sm text-muted leading-relaxed">
                            {v.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Continuous horizontal stats marquee */}
      <div className="mt-16 w-full relative overflow-hidden border-y border-line bg-bg/60 py-6 shadow-sm">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 sm:w-36 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 sm:w-36 bg-gradient-to-l from-[var(--bg)] via-[var(--bg)]/80 to-transparent" />

        <div className="animate-marquee-gpu-slow flex items-center gap-12 sm:gap-16">
          <div className="flex items-center gap-12 sm:gap-16 shrink-0 pr-12 sm:pr-16">
            <StatsMarqueeTrack trackId="a" />
          </div>
          <div className="flex items-center gap-12 sm:gap-16 shrink-0 pr-12 sm:pr-16" aria-hidden>
            <StatsMarqueeTrack trackId="b" />
          </div>
        </div>
      </div>
    </section>
  );
}
