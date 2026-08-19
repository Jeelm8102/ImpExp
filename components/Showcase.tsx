"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PRODUCTS = [
  { n: "01", lot: "LOT-WS", name: "Whole Spices", desc: "Cardamom, pepper, cloves, cinnamon — hand-sorted and moisture-tested.", from: "from-cardamom/25" },
  { n: "02", lot: "LOT-GS", name: "Ground & Blended", desc: "Turmeric, chili, coriander powders milled to buyer specification.", from: "from-paprika/25" },
  { n: "03", lot: "LOT-PL", name: "Pulses & Lentils", desc: "Toor, moong, chana and urad dal — machine-cleaned, graded by size.", from: "from-saffron/25" },
  { n: "04", lot: "LOT-DV", name: "Dehydrated Veg", desc: "Onion, garlic, ginger flakes and powders, dried without additives.", from: "from-harbor/25" },
  { n: "05", lot: "LOT-GC", name: "Grains & Cereals", desc: "Basmati, non-basmati rice, wheat and millets by region and harvest.", from: "from-cardamom/25" },
  { n: "06", lot: "LOT-ON", name: "Oilseeds & Nuts", desc: "Sesame, groundnut, mustard seed and cashew — aflatoxin-screened.", from: "from-paprika/25" },
];

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  // Move the track left by its own overflow width, driven by scroll progress.
  const x = useTransform(scrollYProgress, (v) => {
    const track = trackRef.current;
    if (!track) return "0px";
    const overflow = Math.max(track.scrollWidth - window.innerWidth, 0);
    return `-${v * overflow}px`;
  });
  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="showcase" ref={sectionRef} className="relative bg-ink" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-[100svh] flex flex-col justify-center overflow-hidden">
        <div className="relative z-[5] mx-auto max-w-7xl px-6 md:px-10 pb-2 w-full">
          <p className="eyebrow text-saffron mb-3.5">The Catalog</p>
          <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight text-balance">
            Six categories, one
            <br />
            <span className="italic text-saffron">export standard.</span>
          </h2>
        </div>

        <div className="relative flex-1 flex items-center overflow-hidden">
          <motion.div ref={trackRef} style={{ x }} className="flex gap-7 px-[6vw]">
            {PRODUCTS.map((p) => (
              <div
                key={p.lot}
                className={`relative flex-none w-[min(380px,72vw)] h-[62vh] min-h-[380px] rounded-3xl p-9 flex flex-col justify-end overflow-hidden border border-alabaster/[0.08] bg-gradient-to-br ${p.from} to-ink`}
              >
                <span className="absolute top-7 left-7 font-mono text-[0.7rem] opacity-50">
                  {p.n} / {p.lot}
                </span>
                <h3 className="relative font-display text-[1.7rem] mb-2.5">{p.name}</h3>
                <p className="relative text-sm text-alabaster/65 leading-relaxed max-w-[280px]">{p.desc}</p>
                <span className="relative mt-4 self-start eyebrow border border-alabaster/20 px-3 py-1.5 rounded-full">
                  Export Grade
                </span>
              </div>
            ))}
            <div className="flex-none w-[6vw]" />
          </motion.div>
        </div>

        <div className="relative z-[5] mx-auto max-w-7xl px-6 md:px-10 w-full mt-6">
          <div className="h-0.5 rounded-full bg-alabaster/[0.12] overflow-hidden">
            <motion.div style={{ width: barWidth }} className="h-full bg-gradient-to-r from-saffron to-paprika" />
          </div>
        </div>
      </div>
    </section>
  );
}
