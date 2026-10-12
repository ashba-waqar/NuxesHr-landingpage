export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-line bg-surface ${className}`}>{children}</div>;
}

export function PageHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <header className="mb-6">
      <h1 className="font-display text-3xl font-semibold tracking-tight">{title}</h1>
      {sub && <p className="mt-1 text-muted">{sub}</p>}
    </header>
  );
}

const tones = {
  ok: "border-emerald-500/40 text-emerald-700 dark:text-emerald-400",
  warn: "border-amber-500/50 text-amber-700 dark:text-amber-400",
  bad: "border-red-500/40 text-red-700 dark:text-red-400",
  neutral: "border-line text-muted",
};

export function Badge({ tone = "neutral", children }: { tone?: keyof typeof tones; children: React.ReactNode }) {
  return <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>{children}</span>;
}

export const th = "px-4 py-3 text-left text-sm font-medium text-muted";
export const td = "px-4 py-3 text-sm";
export const btn = "rounded-lg border border-line px-3 py-1.5 text-sm font-medium transition-colors hover:border-ink";
export const btnPrimary = "rounded-lg bg-ink px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85 disabled:opacity-40";
export const tabCls = (on: boolean) =>
  `rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${on ? "bg-ink text-bg" : "text-muted hover:text-ink"}`;
