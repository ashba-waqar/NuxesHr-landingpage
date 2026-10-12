"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wrap anything in <Reveal> and it slides up + fades in
 * the first time it scrolls into view.
 * delay = milliseconds to wait (use it to stagger cards).
 */
export default function Reveal({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setShown(true);
            return;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    io.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } ${className}`}
        >
            {children}
        </div>
    );
}