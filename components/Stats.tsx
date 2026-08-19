"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 40, suffix: "+", label: "Countries served" },
  { value: 2400, suffix: "+", label: "Farmer partners" },
  { value: 120, suffix: "+", label: "SKUs exported" },
  { value: 31, suffix: "", label: "Years in trade" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20, mass: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  useEffect(() => spring.on("change", (v) => setDisplay(Math.floor(v))), [spring]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-alabaster text-ink py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <div className="font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-none text-paprika">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2.5 text-sm opacity-60">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
