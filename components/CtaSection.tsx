"use client";

import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section id="contact" className="border-t border-line relative overflow-hidden bg-bg/40 py-12 md:py-16">
      {/* Background Animated Energy Glow Beams */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-halo/20 via-sky-500/10 to-transparent blur-[120px] animate-pulse" />

      <div className="mx-auto max-w-3xl px-5 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-halo font-bold">
            Ready to see more?
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-ink">
            Book a platform walkthrough.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted font-medium">
            We will show you how NexusHR replaces your current stack with one connected workspace.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-9 inline-block"
          >
            <a
              href="/book-a-call"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-ink px-8 py-4 text-base font-semibold text-bg transition-all shadow-xl hover:shadow-2xl hover:bg-halo"
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule a call
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
