"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { modules } from "@/lib/modules";

const links = [
  { label: "Solutions", href: "#solutions", id: "solutions" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "Security", href: "#security", id: "security" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const moduleIcons: Record<string, React.ReactNode> = {
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

export default function Navbar() {
  const [platformOpen, setPlatformOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const platformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((sec) => observer.observe(sec));

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPlatformOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (platformRef.current && !platformRef.current.contains(e.target as Node)) {
        setPlatformOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <header className="sticky top-2.5 sm:top-3.5 z-50 mx-auto w-full max-w-5xl px-3 sm:px-4">
      <nav
        aria-label="Main"
        className={`flex h-12 sm:h-[52px] items-center justify-between px-3.5 sm:px-5 rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-line bg-surface/90 shadow-xl shadow-ink/5 backdrop-blur-xl"
            : "border-line/70 bg-surface/80 shadow-lg shadow-ink/5 backdrop-blur-md hover:bg-surface/95 hover:border-line"
        }`}
      >
        <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <svg width="20" height="20" viewBox="0 0 22 22" aria-hidden="true" className="animate-spin-slow">
            <circle cx="11" cy="11" r="8.5" fill="none" stroke="var(--halo)" strokeWidth="2.5" />
            <circle cx="11" cy="11" r="2.5" fill="currentColor" />
          </svg>
          <span className="font-soria text-2xl sm:text-[26px] text-ink font-bold tracking-tight leading-none">NexusHR</span>
        </a>

        <div className="hidden items-center gap-0.5 lg:flex">
          {/* Platform Dropdown */}
          <div ref={platformRef} className="relative">
            <button
              type="button"
              className={`group relative flex items-center gap-1 rounded-md px-2.5 py-1 text-[13px] font-medium transition-colors ${
                platformOpen ? "text-ink" : "text-muted hover:text-ink"
              }`}
              aria-expanded={platformOpen}
              aria-haspopup="true"
              onClick={() => setPlatformOpen((o) => !o)}
            >
              Platform
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                aria-hidden="true"
                className={`transition-transform duration-200 ${platformOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>

              {/* Indicator Underline */}
              <span
                className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] rounded-full bg-halo transition-all duration-300 ${
                  platformOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                }`}
              />
            </button>
            <AnimatePresence>
              {platformOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2.5 w-[500px] rounded-2xl border border-[#e5d9dd] bg-white p-3 shadow-2xl shadow-black/15 z-50 ring-1 ring-black/5"
                >
                  <div className="mb-2 px-2.5 pt-1 pb-1.5 flex items-center justify-between border-b border-[#f0e6ea]">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#a85c44]">Platform Modules</span>
                    <span className="text-[10px] text-[#7a6570]">All-in-one HR Suite</span>
                  </div>
                  <ul className="grid grid-cols-2 gap-1.5">
                    {modules.map((m) => (
                      <li key={m.name}>
                        <a
                          href={m.href}
                          onClick={() => setPlatformOpen(false)}
                          className="group flex items-start gap-2.5 rounded-xl p-2.5 transition-all duration-150 hover:bg-[#f7f2f3]"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#a85c44]/10 border border-[#a85c44]/20 text-[#a85c44] group-hover:bg-[#a85c44] group-hover:text-white transition-colors mt-0.5">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {moduleIcons[m.slug] || (
                                <circle cx="12" cy="12" r="3" />
                              )}
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block text-xs font-semibold text-[#3d2233] group-hover:text-[#a85c44] transition-colors">
                              {m.name}
                            </span>
                            <span className="mt-0.5 block text-[11px] text-[#7a6570] leading-relaxed group-hover:text-[#3d2233] transition-colors">
                              {m.description}
                            </span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2.5 flex items-center justify-between border-t border-[#f0e6ea] px-2.5 pt-2 text-[11px]">
                    <span className="text-[#7a6570]">Unified HR Architecture</span>
                    <a
                      href="#platform"
                      onClick={() => setPlatformOpen(false)}
                      className="font-semibold text-[#a85c44] hover:text-[#823d29] transition-colors flex items-center gap-1"
                    >
                      Explore platform pillars →
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Links with Indicator Underline Effect */}
          {links.map((l) => {
            const isActive = activeSection === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`group relative rounded-md px-2.5 py-1 text-[13px] font-medium transition-colors duration-200 ${
                  isActive ? "text-ink font-semibold" : "text-muted hover:text-ink"
                }`}
              >
                {l.label}
                {/* Indicator Underline Bar */}
                <span
                  className={`absolute bottom-0 left-2.5 right-2.5 h-[2px] rounded-full bg-halo transition-all duration-300 ${
                    isActive
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-1.5 lg:flex">
          <a href="/platform/people" className="group relative rounded-md px-2.5 py-1 text-[13px] font-medium text-muted transition-colors hover:text-ink">
            Sign in
            <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] rounded-full bg-halo scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300" />
          </a>
          <a
            href="/get-started"
            className="rounded-full bg-ink px-3.5 py-1.5 text-[13px] font-medium text-bg transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-[0.98]"
          >
            Get started
          </a>
        </div>

        <button
          type="button"
          className="rounded-full p-2 hover:bg-bg/70 transition-colors lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <path
              d={mobileOpen ? "M5 5l12 12M17 5 5 17" : "M3 6h16M3 11h16M3 16h16"}
              stroke="currentColor"
              strokeWidth="1.75"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 rounded-2xl border border-[#e5d9dd] bg-white px-5 py-4 shadow-2xl text-[#3d2233] lg:hidden"
          >
            <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#a85c44]">Platform</p>
            <ul className="mb-2 ml-3 border-l border-[#e5d9dd] pl-2">
              {modules.map((m) => (
                <li key={m.name}>
                  <a
                    href={m.href}
                    onClick={() => setMobileOpen(false)}
                    className="block my-0.5 rounded-md px-3 py-2 text-sm text-[#7a6570] transition-colors hover:text-[#3d2233] hover:bg-[#f7f2f3]"
                  >
                    {m.name}
                  </a>
                </li>
              ))}
            </ul>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block my-0.5 rounded-md px-3 py-2 text-sm text-[#7a6570] transition-colors hover:text-[#3d2233] hover:bg-[#f7f2f3]"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-4 flex gap-2 pt-2 border-t border-[#e5d9dd]">
              <a
                href="/platform/people"
                className="flex-1 rounded-full border border-[#e5d9dd] px-4 py-2 text-center text-sm font-medium text-[#3d2233] transition-colors hover:bg-[#f7f2f3]"
              >
                Sign in
              </a>
              <a
                href="/get-started"
                className="flex-1 rounded-full bg-[#3d2233] px-4 py-2 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
