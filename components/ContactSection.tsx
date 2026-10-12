"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { HoverZoomSurface } from "@/components/ClickZoomSurface";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#a85c44", "#38bdf8", "#10b981", "#f3b89f"],
    });
  };

  return (
    <section id="contact" className="border-t border-line bg-surface py-10 md:py-14 relative overflow-hidden">
      {/* Background Decorative Ambient Radial Glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-halo/10 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-5 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-ink">
              Let's build your ideal HR workspace
            </h2>

            <div className="space-y-4 pt-2">
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 rounded-2xl border border-line bg-bg p-4 shadow-sm hover:border-halo/50 transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-halo/10 text-halo">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted font-medium">Email Us</p>
                  <p className="text-sm font-semibold text-ink">hello@nexushr.example</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 rounded-2xl border border-line bg-bg p-4 shadow-sm hover:border-halo/50 transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-halo/10 text-halo">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted font-medium">Call Sales</p>
                  <p className="text-sm font-semibold text-ink">+1 (800) 555-NEXUS</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Compact Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex justify-center lg:justify-end"
          >
            <HoverZoomSurface className="w-full max-w-lg rounded-3xl border border-halo/40 bg-bg/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-4"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 ring-4 ring-emerald-500/20">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-muted max-w-xs mx-auto leading-relaxed">
                    Thank you for reaching out. One of our HR platform specialists will get back to you within 2 business hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display text-2xl font-bold text-ink mb-2">Send us a message</h3>
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-muted mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-halo focus:ring-2 focus:ring-halo/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-halo focus:ring-2 focus:ring-halo/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Company Name</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme HR Solutions"
                      className="w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-halo focus:ring-2 focus:ring-halo/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">How can we help?</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your team size, current setup, and goals..."
                      className="w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-halo focus:ring-2 focus:ring-halo/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-ink px-5 py-3.5 text-sm font-semibold text-bg transition-all hover:bg-halo hover:shadow-xl active:scale-[0.98] shadow-md"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </HoverZoomSurface>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
