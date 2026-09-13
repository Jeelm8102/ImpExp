"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const PORTS = [
  { name: "Hajira / Surat", code: "INHAZ", coords: "21.17°N 72.83°E", x: 200, y: 440, tag: "Hajira / Surat export gateway & bulk terminal" },
  { name: "Mundra", code: "INMUN", coords: "22.84°N 69.70°E", x: 320, y: 260, tag: "Mundra deep-water container terminal" },
  { name: "Mumbai", code: "INNSA", coords: "18.95°N 72.95°E", x: 480, y: 380, tag: "Mumbai / JNPT western maritime hub" },
  { name: "Chennai", code: "INMAA", coords: "13.08°N 80.29°E", x: 620, y: 470, tag: "Chennai eastern maritime gateway" },
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
  // one useTransform per arc segment (fixed count = 3)
  const arc0 = useTransform(scrollYProgress, [0 * seg, 1 * seg], [0, 1]);
  const arc1 = useTransform(scrollYProgress, [1 * seg, 2 * seg], [0, 1]);
  const arc2 = useTransform(scrollYProgress, [2 * seg, 3 * seg], [0, 1]);
  const arcProgress = [arc0, arc1, arc2];

  const [activeIdx, setActiveIdx] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(segments, Math.floor(v / seg));
    setActiveIdx(idx);
  });

  return (
    <section id="network" ref={sectionRef} className="relative bg-alabaster" style={{ height: "320vh" }}>
      <div className="sticky top-0 h-[100svh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_55%,#FDFBF7_0%,#EAE3D3_75%)]" />

        <div className="relative z-[5] mx-auto max-w-7xl px-6 md:px-10 w-full">
          <p className="eyebrow text-saffron mb-3.5">Trade Network</p>
          <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight">
            Four ports. One
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
              <circle cx="400" cy="400" r="300" fill="none" stroke="rgba(20,27,46,.12)" strokeWidth="1" />
              <ellipse cx="400" cy="400" rx="300" ry="90" fill="none" stroke="rgba(20,27,46,.07)" strokeWidth="1" />
              <ellipse cx="400" cy="400" rx="300" ry="180" fill="none" stroke="rgba(20,27,46,.07)" strokeWidth="1" />
              <ellipse cx="400" cy="400" rx="90" ry="300" fill="none" stroke="rgba(20,27,46,.07)" strokeWidth="1" />
              <ellipse cx="400" cy="400" rx="180" ry="300" fill="none" stroke="rgba(20,27,46,.07)" strokeWidth="1" />
              <line x1="100" y1="400" x2="700" y2="400" stroke="rgba(20,27,46,.07)" strokeWidth="1" />
              <line x1="400" y1="100" x2="400" y2="700" stroke="rgba(20,27,46,.07)" strokeWidth="1" />
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
                  <text x={p.x} y={p.y - 16} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fill={active ? "#141B2E" : "#8A8270"}>
                    {p.name}
                  </text>
                  <text x={p.x} y={p.y + 26} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="#8A8270">
                    {p.coords}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="relative z-[5] mx-auto max-w-7xl px-6 md:px-10 w-full">
          <div className="flex justify-between font-mono text-xs text-ink/55 border-t border-ink/10 pt-4 mt-2.5">
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
