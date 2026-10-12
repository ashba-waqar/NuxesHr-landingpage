"use client";

import { useState } from "react";
import Reveal from "./reveal";

const col1 = ["Platform", "About", "Blog", "Academy", "Pricing"];
const col2 = ["Solutions", "Careers", "Security", "Contact", "Partner program"];
const legal = ["Terms", "Privacy", "Cookies", "DPA", "Accessibility", "Security", "Trust Center", "Compliance"];
const socials = [
  { label: "Instagram", text: "ig" },
  { label: "LinkedIn", text: "in" },
  { label: "X", text: "X" },
  { label: "Facebook", text: "f" },
  { label: "YouTube", text: "yt" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="bg-[#4a2a40] text-[#f5ebef]">
      <Reveal className="mx-auto max-w-6xl px-5 pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">Nexus</p>
            <address className="mt-6 space-y-1 not-italic text-[#e2d0da]">
              <p>123 Example Street, Suite 100</p>
              <p>Your City, ST 00000</p>
            </address>
            <p className="mt-5 text-[#e2d0da]">hello@nexus.example</p>
            <p className="text-[#e2d0da]">+1-800-000-0000</p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5c3a51] text-sm font-semibold text-[#f5ebef] transition-colors hover:bg-[#6e4a63] hover:text-white">
                  {s.text}
                </a>
              ))}
            </div>
            <p className="mt-6 flex gap-4 font-medium text-[#e8a184]">
              <a href="#contact" className="hover:underline">Support</a>
              <a href="/book-a-call" className="hover:underline">Request a demo</a>
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Company</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-[#e2d0da]">
              {[...col1.map((c, i) => [c, col2[i]])].flat().map((l) => (
                <li key={l}><a href="#" className="transition-colors hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Stay updated</h3>
            <p className="mt-2 text-[#e2d0da]">Get product news and HR insights in your inbox.</p>
            <form
              className="mt-5 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.includes("@")) setSent(true);
              }}
            >
              <label className="flex-1">
                <span className="sr-only">Email address</span>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"
                  className="w-full rounded-lg border border-[#6e4a63] bg-[#5c3a51] px-4 py-3 text-sm placeholder:text-[#c4aeb9]" />
              </label>
              <button type="submit" className="rounded-lg bg-[#e8a184] px-5 py-3 text-sm font-semibold text-[#2b1624] transition-opacity hover:opacity-90">
                Subscribe
              </button>
            </form>
            <p className="mt-2 min-h-5 text-sm text-[#e8a184]" aria-live="polite">{sent ? "Thanks, you're on the list." : ""}</p>
            <div className="mt-4 rounded-xl border border-[#6e4a63] p-4">
              <p className="font-medium">Security first</p>
              <p className="mt-1 text-sm text-[#e2d0da]">Role-based access and audit logs on every change.</p>
              <a href="#security" className="mt-2 inline-block text-sm text-[#e8a184] hover:underline">Learn more</a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[#6e4a63] pt-8 text-center text-sm text-[#c4aeb9]">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {legal.map((l, i) => (
              <li key={`${l}-${i}`}><a href="#" className="transition-colors hover:text-white">{l}</a></li>
            ))}
          </ul>
          <p className="mt-5">&copy; 2026 Nexus. All rights reserved.</p>
          <a href="#top" className="mt-4 inline-block font-medium text-[#e8a184] hover:underline">Back to top</a>
        </div>
      </Reveal>

      <a href="#contact" aria-label="Support"
        className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#a85c44] text-white shadow-lg transition-transform hover:scale-105">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
          <path d="M4 14v-2a8 8 0 0116 0v2M4 14h3v4H5a1 1 0 01-1-1zm16 0h-3v4h2a1 1 0 001-1z" />
        </svg>
      </a>
    </footer>
  );
}