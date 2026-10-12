"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const plans = [
  {
    name: "Starter",
    description: "Essential HR tools for small teams getting organized.",
    priceMonthly: 14,
    priceAnnual: 11,
    popular: false,
    features: [
      "People module (Records & Org chart)",
      "Time & Work (Timesheets & Leave)",
      "Up to 25 employees",
      "Standard email support",
      "Basic reporting",
    ],
    cta: "Start free 14-day trial",
    href: "/get-started",
  },
  {
    name: "Growth",
    description: "Complete 6-pillar suite with Pixi AI for growing companies.",
    priceMonthly: 29,
    priceAnnual: 23,
    popular: true,
    features: [
      "All 6 Pillars included",
      "Pixi AI assistant & auto-summaries",
      "Payroll & Expense management",
      "Compliance evidence & audit trail",
      "E-signatures & Document vault",
      "Priority 24/7 support",
    ],
    cta: "Get Started with Growth",
    href: "/get-started",
  },
  {
    name: "Enterprise & Partners",
    description: "Multi-tenant control for HR consulting firms and large orgs.",
    priceMonthly: 49,
    priceAnnual: 39,
    popular: false,
    features: [
      "Multi-tenant agency workspace",
      "White-label client portal & domain",
      "Custom RBAC & security policies",
      "Dedicated account manager",
      "99.99% SLA & Custom integrations",
      "Unlimited client accounts",
    ],
    cta: "Contact Sales",
    href: "#contact",
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#a85c44", "#38bdf8", "#818cf8", "#f3b89f"],
    });
  };

  return (
    <section id="pricing" className="border-t border-line bg-bg/50 py-8 md:py-11 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute right-10 bottom-10 -z-10 h-[250px] w-[250px] rounded-full bg-halo/10 blur-[80px]" />

      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-ink">
            Predictable plans that scale with your team
          </h2>

          {/* Billing Toggle */}
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface/80 backdrop-blur-md p-1 shadow-sm relative">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`relative rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                !annual ? "text-bg" : "text-muted hover:text-ink"
              }`}
            >
              {!annual && (
                <motion.div
                  layoutId="billingPill"
                  className="absolute inset-0 bg-ink rounded-md -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              Monthly billing
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`relative flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                annual ? "text-bg" : "text-muted hover:text-ink"
              }`}
            >
              {annual && (
                <motion.div
                  layoutId="billingPill"
                  className="absolute inset-0 bg-ink rounded-md -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span>Annual billing</span>
              <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold ${annual ? "bg-[#3d2233] text-white" : "bg-[#3d2233]/15 text-[#3d2233]"}`}>
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="mt-5 grid gap-3.5 md:grid-cols-3 max-w-[760px] mx-auto items-stretch">
          {plans.map((plan, idx) => {
            const price = annual ? plan.priceAnnual : plan.priceMonthly;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className={`relative flex flex-col justify-between rounded-xl border backdrop-blur-xl p-3.5 sm:p-4 transition-all duration-300 ${
                  plan.popular
                    ? "border-[#3d2233] bg-surface/90 shadow-[0_8px_20px_rgba(61,34,51,0.25)] ring-2 ring-[#3d2233] md:-translate-y-1"
                    : "border-[#3d2233]/30 bg-surface/60 shadow-sm hover:border-[#3d2233] hover:bg-surface/80 hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded bg-[#3d2233] px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-wider text-white shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="font-display text-sm sm:text-base font-bold tracking-tight text-ink">{plan.name}</h3>
                  <p className="mt-0.5 text-[10.5px] text-muted leading-snug min-h-[26px]">
                    {plan.description}
                  </p>

                  <div className="mt-2.5 flex items-baseline gap-1">
                    <motion.span
                      key={price}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-ink"
                    >
                      ${price}
                    </motion.span>
                    <span className="text-[9.5px] font-medium text-muted">/ employee / mo</span>
                  </div>
                  {annual && (
                    <p className="mt-0.5 text-[9.5px] font-semibold text-[#3d2233]">Billed annually</p>
                  )}

                  <div className="mt-3 border-t border-line/60 pt-2.5">
                    <p className="text-[8.5px] font-semibold uppercase tracking-wider text-muted mb-1.5">
                      What's Included
                    </p>
                    <ul className="space-y-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-[10.5px] text-ink/90 font-medium">
                          <div className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[#3d2233]/15 text-[#3d2233]">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path d="M3 8l3.5 3.5 6.5-6.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-3.5 pt-1">
                  <a
                    href={plan.href}
                    onClick={handleCtaClick}
                    className={`block w-full rounded-lg px-2 py-1.5 text-center text-[10.5px] font-semibold transition-all shadow-sm active:scale-95 ${
                      plan.popular
                        ? "bg-[#3d2233] text-white hover:bg-[#2a1723] hover:shadow-md"
                        : "border border-[#3d2233]/40 bg-bg text-ink hover:border-[#3d2233] hover:bg-surface"
                    }`}
                  >
                    {plan.cta}
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
