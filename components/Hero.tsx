"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Crate from "./Crate";

const WORDS = [
  { text: "One", delay: 0.15 },
  { text: "origin.", delay: 0.28, breakAfter: true, accent: true },
  { text: "Every", delay: 0.46 },
  { text: "longitude.", delay: 0.6 },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  // Mouse-driven 3D tilt of the crate rig (spring-smoothed)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 55, damping: 20 });
  const smy = useSpring(my, { stiffness: 55, damping: 20 });
  const rotateX = useTransform(smy, (v) => v * -14);
  const rotateY = useTransform(smx, (v) => v * 20);
  const auroraX = useTransform(smx, (v) => v * -14);
  const auroraY = useTransform(smy, (v) => v * -14);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX / rect.width - 0.5);
    my.set(e.clientY / rect.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink"
    >
      {/* Aurora blobs — muted ochre / clay / sage instead of the old saturated cinematic glow */}
      <motion.div style={{ x: auroraX, y: auroraY }} className="absolute -inset-[10%] blur-[90px] opacity-[0.4]">
        <div className="absolute w-[46vw] h-[46vw] rounded-full -top-[8%] -left-[6%] bg-[radial-gradient(circle,_#B14A32,_transparent_70%)] animate-float-a" />
        <div className="absolute w-[38vw] h-[38vw] rounded-full -bottom-[10%] -right-[4%] bg-[radial-gradient(circle,_#C98A2B,_transparent_70%)] animate-float-b" />
        <div className="absolute w-[30vw] h-[30vw] rounded-full top-[35%] right-[20%] bg-[radial-gradient(circle,_#5B7360,_transparent_70%)] animate-float-c" />
      </motion.div>

      {/* Fine meridian/latitude grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* 3D crate scene — signature visual, right-biased on desktop */}
      <motion.div
        style={{ scale: sceneScale, y: sceneY, opacity: sceneOpacity }}
        className="scene-perspective absolute z-[3] top-0 -right-[4%] w-full md:w-[64%] h-full opacity-[0.55] md:opacity-100"
      >
        <motion.div style={{ rotateX, rotateY }} className="rig-3d">
          <Crate
            size={170}
            accent="sage"
            x={-150}
            y={10}
            z={60}
            spinDuration={26}
            bobDuration={7}
            label={
              <>
                CARDAMOM
                <br />
                <b className="font-medium opacity-80">LOT · WS-04</b>
                <br />
                9.9°N 76.3°E → RTM
              </>
            }
          />
          <Crate
            size={130}
            accent="clay"
            x={150}
            y={-50}
            z={-40}
            spinDuration={32}
            reverse
            bobDuration={8.4}
            bobDelay={-2}
            label={
              <>
                CHILI
                <br />
                <b className="font-medium opacity-80">LOT · GS-02</b>
                <br />
                16.3°N 80.4°E → JEA
              </>
            }
          />
          <Crate
            size={100}
            accent="ochre"
            x={-10}
            y={-170}
            z={-110}
            spinDuration={20}
            bobDuration={6.2}
            bobDelay={-4}
            label={
              <>
                TURMERIC
                <br />
                <b className="font-medium opacity-80">LOT · GS-01</b>
              </>
            }
          />

          <div
            className="orbit-ring"
            style={{ width: 520, height: 520, marginLeft: -260, marginTop: -260, animation: "ringSpin 40s linear infinite" }}
          />
          <div
            className="orbit-ring"
            style={{
              width: 380,
              height: 380,
              marginLeft: -190,
              marginTop: -190,
              borderColor: "rgba(91,115,96,.25)",
              transform: "rotateX(70deg) rotateZ(30deg)",
              animation: "ringSpin 30s linear infinite reverse",
            }}
          />
        </motion.div>
        <div className="scene-ground" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity: contentOpacity }} className="relative z-[5] h-full mx-auto max-w-7xl px-6 md:px-10 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-3.5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-saffron shadow-[0_0_12px_#C98A2B]" />
          <span className="eyebrow text-alabaster/60">Est. 1994 · Charted from 76°E</span>
        </motion.div>

        <h1 className="font-display font-normal text-[13vw] leading-[0.94] md:text-[6.6rem] lg:text-[5.8rem]">
          {WORDS.map((w, i) => (
            <span key={i}>
              <motion.span
                initial={{ opacity: 0, y: 40, rotate: 1 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: w.delay, ease: [0.2, 0.8, 0.2, 1] }}
                className={`inline-block ${w.accent ? "italic text-saffron" : ""}`}
              >
                {w.text}
              </motion.span>
              {w.breakAfter && <br />}
              {!w.breakAfter && i < WORDS.length - 1 && " "}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 max-w-xl text-alabaster/60 text-base md:text-lg font-light leading-relaxed"
        >
          Every shipment starts at the same coordinates — Kochi&apos;s spice
          belt — and is charted from there to your port: sourced, lab-certified,
          and tracked across whichever meridian your business sits on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <a
            href="#showcase"
            className="bg-alabaster text-ink px-8 py-4 rounded-full font-medium text-sm hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,138,43,0.25)] transition-all"
          >
            Explore the Catalog
          </a>
          <a
            href="/contact"
            className="border border-alabaster/25 px-8 py-4 rounded-full text-sm hover:border-saffron hover:text-saffron hover:bg-saffron/[0.06] transition-colors"
          >
            Talk to Trade Desk →
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: cueOpacity }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-2.5 text-alabaster/45"
      >
        <span className="eyebrow">Scroll</span>
        <span className="scroll-track relative w-px h-11 bg-alabaster/20 overflow-hidden" />
      </motion.div>
    </section>
  );
}
