"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { modules } from "@/lib/modules";

const icons: Record<string, React.ReactNode> = {
  people: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-4 3-6 7-6s7 2 7 6" />
    </>
  ),
  "time-work": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  finance: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  compliance: (
    <>
      <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  workplace: (
    <>
      <rect x="4" y="8" width="16" height="11" rx="2" />
      <path d="M9 8V6h6v2" />
    </>
  ),
  "pixi-ai": <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />,
};

const moduleHighlights: Record<string, { stats: string; statLabel: string; highlights: string[] }> = {
  people: {
    stats: "100%",
    statLabel: "Unified employee records",
    highlights: ["Self-service employee portal", "Automated onboarding workflows", "Custom 1:1 templates & review cycles"],
  },
  "time-work": {
    stats: "40%",
    statLabel: "Time saved on approvals",
    highlights: ["Automated timesheet sync", "Multi-tier leave requests", "Real-time attendance tracking"],
  },
  finance: {
    stats: "0 Errors",
    statLabel: "Automated payroll processing",
    highlights: ["Instant expense payouts", "Automated aging reports", "Direct accounting system integrations"],
  },
  compliance: {
    stats: "99.9%",
    statLabel: "Audit trail coverage",
    highlights: ["Real-time document verification", "Custom policy acknowledgments", "Secure credential storage"],
  },
  workplace: {
    stats: "24/7",
    statLabel: "Helpdesk responsiveness",
    highlights: ["Centralized asset tracking", "Knowledge base auto-answers", "Integrated e-signatures"],
  },
  "pixi-ai": {
    stats: "10x",
    statLabel: "Faster HR query resolution",
    highlights: ["Instant document grounding search", "Smart command palette", "Proactive daily leadership briefs"],
  },
};

// Double the array for seamless infinite loop
const carouselModules = [...modules, ...modules];

export default function SixPillarsGrid() {
  const [activeTab, setActiveTab] = useState(modules[0].slug);

  return (
    <section id="platform" className="border-t border-line bg-bg/50 py-10 md:py-14 overflow-hidden relative">
      {/* Background Decorative Ambient Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c87b9e]/15 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-5">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-ink">
              Explore the six pillars
            </h2>
            <p className="mt-1.5 max-w-xl text-xs sm:text-sm text-muted">
              GPU-accelerated smooth horizontal ecosystem loop. Hover over any card to pause and inspect core capabilities.
            </p>
          </div>
        </motion.div>

        {/* Tab Pills Bar */}
        <div className="mt-5 flex overflow-x-auto pb-1 pt-1 no-scrollbar gap-1.5">
          <div className="inline-flex p-1 rounded-xl border border-line bg-surface/80 backdrop-blur-md shadow-sm relative">
            {modules.map((m) => {
              const isActive = activeTab === m.slug;
              return (
                <button
                  key={m.slug}
                  type="button"
                  onClick={() => setActiveTab(m.slug)}
                  className={`relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 whitespace-nowrap z-10 ${
                    isActive
                      ? "text-bg font-semibold"
                      : "text-muted hover:text-ink hover:bg-bg/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-ink rounded-lg -z-10 shadow-md"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isActive ? "currentColor" : "#c87b9e"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icons[m.slug]}
                  </svg>
                  <span>{m.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* GPU Hardware-Accelerated Buttery-Smooth Horizontal Track */}
      <div className="mt-6 overflow-hidden py-3">
        <div className="animate-marquee-gpu flex gap-4 transform-gpu will-change-transform">
          {carouselModules.map((m, idx) => {
            const isTabActive = activeTab === m.slug;
            const meta = moduleHighlights[m.slug] || moduleHighlights.people;

            return (
              <motion.div
                key={`${m.slug}-${idx}`}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className={`w-[270px] sm:w-[310px] shrink-0 rounded-2xl border backdrop-blur-xl transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden group cursor-pointer outline-none focus:outline-none focus-visible:outline-none select-none transform-gpu will-change-transform border-[#c87b9e]/40 bg-surface/90 shadow-[0_0_15px_rgba(200,123,158,0.2)] hover:border-[#e4a8c5] hover:shadow-[0_0_25px_rgba(200,123,158,0.45)] ${
                  isTabActive
                    ? "border-2 border-[#e4a8c5] bg-surface/98 shadow-[0_0_30px_rgba(200,123,158,0.65)]"
                    : ""
                }`}
                style={{
                  transform: "translate3d(0,0,0)",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Glowing Ambient Shimmer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#c87b9e]/15 blur-xl group-hover:bg-[#c87b9e]/30 transition-all" />

                <div>
                  {/* Header Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#c87b9e]/15 text-[#c87b9e] group-hover:scale-105 transition-transform duration-300">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {icons[m.slug]}
                        </svg>
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold tracking-tight text-ink">{m.name}</h3>
                    </div>

                    <span className="rounded-md border border-[#c87b9e]/30 bg-bg px-2 py-0.5 text-[11px] font-bold text-[#c87b9e] shadow-sm">
                      {meta.stats}
                    </span>
                  </div>

                  {/* Features Badges */}
                  <div className="mt-3.5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-1.5">
                      Core Capabilities
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {m.features.map((f) => (
                        <span
                          key={f}
                          className="rounded border border-line bg-bg/80 px-2 py-0.5 text-[11px] font-medium text-ink transition-colors hover:border-[#c87b9e] hover:bg-surface"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Bullet Highlights */}
                  <div className="mt-3.5 space-y-1.5 border-t border-line/60 pt-3">
                    {meta.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-ink/90 font-medium">
                        <div className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#c87b9e]/20 text-[#c87b9e]">
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M2.5 6l2.5 2.5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-line/60">
                  <span className="text-[11px] text-muted font-medium group-hover:text-ink transition-colors line-clamp-1">
                    {meta.statLabel}
                  </span>
                  <a
                    href={m.href}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-3 py-1.5 text-[11px] font-semibold text-bg transition-all duration-300 hover:bg-[#c87b9e] hover:shadow-md active:scale-95 shrink-0"
                  >
                    Explore {m.name}
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




