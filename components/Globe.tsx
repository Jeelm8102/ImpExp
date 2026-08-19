"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const PORTS = [
  { name: "Kochi", code: "INCOK", coords: "9.93°N 76.26°E", x: 180, y: 430, tag: "Origin — Kochi sourcing hub" },
  { name: "Jebel Ali", code: "AEJEA", coords: "25.01°N 55.06°E", x: 340, y: 260, tag: "Gulf transshipment hub" },
  { name: "Rotterdam", code: "NLRTM", coords: "51.95°N 4.14°E", x: 400, y: 150, tag: "European gateway" },
  { name: "New York", code: "USNYC", coords: "40.71°N 74.01°W", x: 560, y: 230, tag: "North American hub" },
  { name: "Singapore", code: "SGSIN", coords: "1.29°N 103.85°E", x: 640, y: 470, tag: "Far East distribution" },
];

function arcPath(a: (typeof PORTS)[number], b: (typeof PORTS)[number]) {
  const midX = (a.x + b.x) / 2;
  const midY = Math.min(a.y, b.y) - 70;
  return `M${a.x} ${a.y} Q ${midX} ${midY} ${b.x} ${b.y}`;
}

export default function Globe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  const segments = PORTS.length - 1;
  const seg = 1 / segments;
  // one useTransform per arc segment (fixed count = 4)
  const arc0 = useTransform(scrollYProgress, [0 * seg, 1 * seg], [0, 1]);
  const arc1 = useTransform(scrollYProgress, [1 * seg, 2 * seg], [0, 1]);
  const arc2 = useTransform(scrollYProgress, [2 * seg, 3 * seg], [0, 1]);
  const arc3 = useTransform(scrollYProgress, [3 * seg, 4 * seg], [0, 1]);
  const arcProgress = [arc0, arc1, arc2, arc3];

  const [activeIdx, setActiveIdx] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(segments, Math.floor(v / seg));
    setActiveIdx(idx);
  });

  return (
    <section id="network" ref={sectionRef} className="relative bg-ink" style={{ height: "320vh" }}>
      <div className="sticky top-0 h-[100svh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_55%,#1D2740_0%,#141B2E_68%)]" />

        <div className="relative z-[5] mx-auto max-w-7xl px-6 md:px-10 w-full">
          <p className="eyebrow text-saffron mb-3.5">Trade Network</p>
          <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight">
            Five ports. One
            <br />
            <span className="italic text-saffron">continuous route.</span>
          </h2>
        </div>

        <div className="relative flex-1 flex items-center justify-center">
          <svg viewBox="0 0 800 800" className="w-[min(74vh,90vw)] h-[min(74vh,90vw)]">
            <defs>
              <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C98A2B" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#C98A2B" stopOpacity="0" />
              </radialGradient>
            </defs>

            <g className="origin-center animate-[spin_90s_linear_infinite]" style={{ transformOrigin: "400px 400px" }}>
              <circle cx="400" cy="400" r="300" fill="none" stroke="rgba(247,243,234,.14)" strokeWidth="1" />
              <ellipse cx="400" cy="400" rx="300" ry="90" fill="none" stroke="rgba(247,243,234,.1)" strokeWidth="1" />
              <ellipse cx="400" cy="400" rx="300" ry="180" fill="none" stroke="rgba(247,243,234,.1)" strokeWidth="1" />
              <ellipse cx="400" cy="400" rx="90" ry="300" fill="none" stroke="rgba(247,243,234,.1)" strokeWidth="1" />
              <ellipse cx="400" cy="400" rx="180" ry="300" fill="none" stroke="rgba(247,243,234,.1)" strokeWidth="1" />
              <line x1="100" y1="400" x2="700" y2="400" stroke="rgba(247,243,234,.1)" strokeWidth="1" />
              <line x1="400" y1="100" x2="400" y2="700" stroke="rgba(247,243,234,.1)" strokeWidth="1" />
            </g>

            {PORTS.slice(0, -1).map((p, i) => (
              <motion.path
                key={i}
                d={arcPath(p, PORTS[i + 1])}
                fill="none"
                stroke="#C98A2B"
                strokeWidth="1.5"
                style={{ pathLength: arcProgress[i] }}
              />
            ))}

            {PORTS.map((p, i) => {
              const active = i <= activeIdx;
              return (
                <g key={p.code} style={{ opacity: active ? 1 : 0.25, transition: "opacity .5s" }}>
                  {i === activeIdx && <circle cx={p.x} cy={p.y} r="22" fill="url(#glowGrad)" opacity="0.7" />}
                  <circle cx={p.x} cy={p.y} r={i === activeIdx ? 7 : 5} fill={active ? "#C98A2B" : "#6B7278"} />
                  <text x={p.x} y={p.y - 16} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fill={active ? "#9BA3AA" : "#6B7278"}>
                    {p.name}
                  </text>
                  <text x={p.x} y={p.y + 26} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="#6B7278">
                    {p.coords}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="relative z-[5] mx-auto max-w-7xl px-6 md:px-10 w-full">
          <div className="flex justify-between font-mono text-xs text-alabaster/55 border-t border-alabaster/10 pt-4 mt-2.5">
            <span>{PORTS[activeIdx].tag}</span>
            <span>
              Port {activeIdx + 1} / {PORTS.length} — {PORTS[activeIdx].code}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
