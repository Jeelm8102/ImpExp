"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  { n: "01 / SOURCING", title: "Direct farmer procurement", desc: "We buy at harvest from 2,400+ registered farmer partners across four growing belts — priced by grade, not blended." },
  { n: "02 / GRADING", title: "Cleaning & grading", desc: "Mechanical sorting by size, colour and moisture content before anything touches a warehouse floor." },
  { n: "03 / TESTING", title: "Lab certification", desc: "Pesticide residue, aflatoxin and microbial screening at NABL-accredited labs, on every lot." },
  { n: "04 / PACKING", title: "Buyer-spec packing", desc: "Food-grade bulk, retail-ready or private-label packaging, built to your market's requirements." },
  { n: "05 / DOCUMENTATION", title: "Export paperwork", desc: "Phytosanitary certificates, certificate of origin and Spice Board clearance filed before booking." },
  { n: "06 / SHIPPING", title: "Port to port", desc: "FCL/LCL booking, customs clearance and live tracking until the container reaches your dock." },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.3"] });
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="eyebrow text-saffron mb-3.5">Process</p>
        <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight">
          From soil to
          <br />
          <span className="italic text-saffron">shipping container.</span>
        </h2>

        <div ref={ref} className="relative mt-16 pl-11">
          <div className="absolute left-[6px] top-0 bottom-0 w-0.5 bg-alabaster/[0.12]" />
          <motion.div
            style={{ height: railHeight }}
            className="absolute left-[6px] top-0 w-0.5 bg-gradient-to-b from-saffron to-paprika"
          />

          {STEPS.map((s, i) => (
            <TimelineItem key={s.n} step={s} isLast={i === STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ step, isLast }: { step: (typeof STEPS)[number]; isLast: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`relative ${isLast ? "" : "pb-16"}`}
    >
      <motion.span
        initial={{ borderColor: "rgba(247,243,234,0.25)", boxShadow: "0 0 0px rgba(242,169,59,0)" }}
        whileInView={{ borderColor: "#C98A2B", boxShadow: "0 0 16px rgba(242,169,59,0.5)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="absolute -left-11 top-0.5 w-3.5 h-3.5 rounded-full bg-ink border-2"
      />
      <span className="font-mono text-xs text-saffron/80">{step.n}</span>
      <h3 className="font-display text-2xl mt-2.5 mb-2">{step.title}</h3>
      <p className="text-alabaster/60 max-w-xl leading-relaxed text-[0.92rem]">{step.desc}</p>
    </motion.div>
  );
}
