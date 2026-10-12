"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { tenants } from "@/lib/mock";

const nav = [
  { label: "People", href: "/platform/people" },
  { label: "Time", href: "/platform/time" },
  { label: "Finance", href: "/platform/finance" },
  { label: "Compliance", href: "/platform/compliance" },
  { label: "Workplace", href: null },
  { label: "AI Assistant", href: "/platform/ai" },
];

function Menu({ button, children, align = "right", label }: { button: React.ReactNode; children: React.ReactNode; align?: "left" | "right"; label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const c = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("keydown", k);
    document.addEventListener("mousedown", c);
    return () => {
      document.removeEventListener("keydown", k);
      document.removeEventListener("mousedown", c);
    };
  }, []);
  return (
    <div ref={ref} className="relative">
      <button type="button" aria-label={label} aria-expanded={open} aria-haspopup="true" onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm hover:border-ink">
        {button}
      </button>
      {open && (
        <div onClick={() => setOpen(false)}
          className={`absolute top-full z-50 mt-2 min-w-56 rounded-xl border border-line bg-surface p-1.5 shadow-xl ${align === "right" ? "right-0" : "left-0"}`}>
          {children}
        </div>
      )}
    </div>
  );
}

const item = "block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-bg";

export default function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [tenant, setTenant] = useState(tenants[0]);

  const links = nav.map((n) =>
    n.href ? (
      <Link key={n.label} href={n.href} aria-current={path.startsWith(n.href) ? "page" : undefined}
        className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors ${path.startsWith(n.href) ? "bg-ink text-bg" : "text-muted hover:bg-bg hover:text-ink"}`}>
        {n.label}
      </Link>
    ) : (
      <span key={n.label} className="flex items-center gap-2 whitespace-nowrap px-3 py-2 text-sm text-muted/60" aria-disabled="true">
        {n.label} <span className="rounded-full border border-line px-1.5 text-[11px]">Soon</span>
      </span>
    )
  );

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[232px_1fr]">
      <aside className="hidden border-r border-line bg-surface lg:block">
        <div className="sticky top-0 p-4">
          <Link href="/" className="mb-6 flex items-center gap-2 px-3 py-2 font-display text-lg font-semibold">
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              <circle cx="11" cy="11" r="8.5" fill="none" stroke="var(--halo)" strokeWidth="2.5" />
              <circle cx="11" cy="11" r="2.5" fill="currentColor" />
            </svg>
            NexusHR
          </Link>
          <nav aria-label="Workspace" className="flex flex-col gap-1">{links}</nav>
        </div>
      </aside>

      <div className="min-w-0">
        <div className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
          <div className="flex items-center gap-3 px-5 py-3">
            <Menu label="Switch client" align="left" button={<><span className="max-w-[9rem] truncate">{tenant}</span><span aria-hidden="true">▾</span></>}>
              <p className="px-3 py-1.5 text-xs text-muted">Northwind Consulting</p>
              {tenants.map((t) => (
                <button key={t} className={item} onClick={() => setTenant(t)}>{t}{t === tenant && " ✓"}</button>
              ))}
            </Menu>
            <label className="relative hidden flex-1 sm:block sm:max-w-md">
              <span className="sr-only">Search</span>
              <input type="search" placeholder="Search people, invoices, policies"
                className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm placeholder:text-muted" />
            </label>
            <div className="ml-auto flex items-center gap-2">
              <Menu label="Notifications" button={<>Alerts <span className="rounded-full bg-halo px-1.5 text-xs font-semibold text-bg">3</span></>}>
                <p className={item}>2 timesheets waiting for approval</p>
                <p className={item}>Work authorization expires in 5 days</p>
                <p className={item}>INV-1041 is overdue</p>
              </Menu>
              <Menu label="Profile menu" button={<><span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-xs text-bg">DO</span><span className="hidden sm:inline">Dana</span></>}>
                <p className="px-3 py-1.5 text-xs text-muted">dana@northwind.co</p>
                <button className={item}>Account settings</button>
                <button className={item}>Switch workspace</button>
                <Link href="/" className={item}>Sign out</Link>
              </Menu>
            </div>
          </div>
          <nav aria-label="Workspace" className="flex gap-1 overflow-x-auto px-3 pb-2 lg:hidden">{links}</nav>
        </div>
        <main className="p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}
