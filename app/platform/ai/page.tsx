"use client";

import { useState } from "react";
import { groundingDocs } from "@/lib/mock";
import { Card, PageHeader, btn, btnPrimary } from "@/components/dashboard/ui";

type Msg = { role: "user" | "pixi"; text: string; sources?: string[] };
const prompts = ["How much PTO do new hires get?", "What is the expense approval limit?", "Summarize this week's approvals"];

// Stub: replace with a real call to your Pixi AI endpoint.
function reply(q: string, docs: string[]): Msg {
  if (docs.length === 0) return { role: "pixi", text: "No documents are selected, so I can't ground an answer. Turn on at least one source." };
  return { role: "pixi", text: `Here is a draft answer to "${q}", based on the selected documents. This is a placeholder until Pixi AI is connected.`, sources: docs.slice(0, 2) };
}

export default function AiPage() {
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "pixi", text: "Hi Dana. Ask me about policies, approvals, or people data." }]);
  const [input, setInput] = useState("");
  const [on, setOn] = useState<string[]>(groundingDocs);

  const send = (t: string) => {
    if (!t.trim()) return;
    setMsgs((m) => [...m, { role: "user", text: t }, reply(t, on)]);
    setInput("");
  };

  return (
    <>
      <PageHeader title="Pixi AI" sub="Answers grounded in the documents you choose." />
      <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
        <Card className="flex h-[560px] flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto p-5" aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${m.role === "user" ? "bg-ink text-bg" : "border border-line bg-bg"}`}>
                  <p>{m.text}</p>
                  {m.sources && <p className="mt-2 text-xs text-muted">Sources: {m.sources.join(", ")}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-line p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {prompts.map((p) => <button key={p} className={btn} onClick={() => send(p)}>{p}</button>)}
            </div>
            <div className="flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send(input)}
                aria-label="Message Pixi AI" placeholder="Ask Pixi AI" className="flex-1 rounded-lg border border-line bg-bg px-3 py-2 text-sm" />
              <button className={btnPrimary} onClick={() => send(input)}>Send</button>
            </div>
          </div>
        </Card>

        <Card className="h-fit p-5">
          <h2 className="font-display text-lg font-semibold">Grounding documents</h2>
          <p className="mt-1 text-sm text-muted">Pixi AI only answers from what is turned on.</p>
          <ul className="mt-4 space-y-3">
            {groundingDocs.map((d) => (
              <li key={d}>
                <label className="flex cursor-pointer items-start gap-3 text-sm">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[var(--halo)]" checked={on.includes(d)}
                    onChange={() => setOn(on.includes(d) ? on.filter((x) => x !== d) : [...on, d])} />
                  {d}
                </label>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
