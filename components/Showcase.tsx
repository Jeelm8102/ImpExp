"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PRODUCTS = [
  { n: "01", lot: "LOT-WS", name: "Whole Spices", desc: "Cardamom, pepper, cloves, cinnamon — hand-sorted and moisture-tested.", from: "from-cardamom/25", image: "/categories/whole_spices.jpg" },
  { n: "02", lot: "LOT-GS", name: "Ground & Blended", desc: "Turmeric, chili, coriander powders milled to buyer specification.", from: "from-paprika/25", image: "/categories/ground_spices.jpg" },
  { n: "03", lot: "LOT-PL", name: "Pulses & Lentils", desc: "Toor, moong, chana and urad dal — machine-cleaned, graded by size.", from: "from-saffron/25", image: "/categories/pulses_lentils.jpg" },
  { n: "04", lot: "LOT-DV", name: "Dehydrated Veg", desc: "Onion, garlic, ginger flakes and powders, dried without additives.", from: "from-harbor/25", image: "/categories/dehydrated_veg.jpg" },
  { n: "05", lot: "LOT-GC", name: "Grains & Cereals", desc: "Basmati, non-basmati rice, wheat and millets by region and harvest.", from: "from-cardamom/25", image: "/categories/grains_cereals.jpg" },
  { n: "06", lot: "LOT-ON", name: "Oilseeds & Nuts", desc: "Sesame, groundnut, mustard seed and cashew — aflatoxin-screened.", from: "from-paprika/25", image: "/categories/oilseeds_nuts.jpg" },
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
    <section id="showcase" ref={sectionRef} className="relative bg-alabaster-dim" style={{ height: "400vh" }}>
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
                className={`group relative flex-none w-[min(340px,72vw)] md:w-[380px] h-[64vh] min-h-[440px] rounded-3xl p-6 md:p-8 flex flex-col overflow-hidden border border-ink/[0.08] bg-gradient-to-br ${p.from} to-alabaster transition-all duration-500 hover:shadow-[0_22px_50px_rgba(20,27,46,0.08)] hover:-translate-y-1`}
              >
                {/* Framed Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-ink/[0.06] shadow-sm bg-ink/5">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle inner dark gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/15 to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <span className="font-mono text-[0.65rem] tracking-wider opacity-50 block mb-2">
                      {p.n} / {p.lot}
                    </span>
                    <h3 className="font-display text-2xl mb-2 text-ink group-hover:text-paprika transition-colors duration-300">
                      {p.name}
                    </h3>
                    <p className="text-sm text-ink/70 leading-relaxed line-clamp-3">
                      {p.desc}
                    </p>
                  </div>
                  <span className="mt-4 self-start eyebrow border border-ink/20 px-3.5 py-1.5 rounded-full text-[0.62rem] transition-all duration-300 group-hover:border-saffron group-hover:text-saffron group-hover:bg-saffron/[0.04]">
                    Export Grade
                  </span>
                </div>
              </div>
            ))}
            <div className="flex-none w-[6vw]" />
          </motion.div>
        </div>

        <div className="relative z-[5] mx-auto max-w-7xl px-6 md:px-10 w-full mt-6">
          <div className="h-0.5 rounded-full bg-ink/[0.12] overflow-hidden">
            <motion.div style={{ width: barWidth }} className="h-full bg-gradient-to-r from-saffron to-paprika" />
          </div>
        </div>
      </div>
    </section>
  );
}
