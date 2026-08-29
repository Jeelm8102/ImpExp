"use client";

import { motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Crate from "./Crate";

const WORDS = [
  { text: "One", delay: 0.15 },
  { text: "origin.", delay: 0.28, breakAfter: true, accent: true },
  { text: "Every", delay: 0.46 },
  { text: "longitude.", delay: 0.6 },
];

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 2,
  x: Math.random() * 100, // percentage horizontal placement
  y: Math.random() * 100, // percentage vertical placement
  depth: Math.random() * 0.75 + 0.25, // speed/depth multiplier
}));

function CoordinateHUD({ scrollYProgress }: { scrollYProgress: any }) {
  const [coords, setCoords] = useState("09.93°N · 076.26°E");

  useMotionValueEvent(scrollYProgress, "change", (v: any) => {
    const points = [
      { lat: 9.93, lng: 76.26 },  // Kochi (INCOK)
      { lat: 25.01, lng: 55.06 },  // Jebel Ali (AEJEA)
      { lat: 51.95, lng: 4.14 },   // Rotterdam (NLRTM)
      { lat: 40.71, lng: -74.01 }, // New York (USNYC)
      { lat: 1.29, lng: 103.85 },  // Singapore (SGSIN)
    ];

    const val = v as number;
    const segment = Math.min(points.length - 2, Math.floor(val * (points.length - 1)));
    const segProgress = val * (points.length - 1) - segment;

    const p1 = points[segment];
    const p2 = points[segment + 1];

    if (!p1 || !p2) return;

    const lat = p1.lat + (p2.lat - p1.lat) * segProgress;
    const lng = p1.lng + (p2.lng - p1.lng) * segProgress;

    const latStr = Math.abs(lat).toFixed(4).padStart(7, "0") + "°" + (lat >= 0 ? "N" : "S");
    const lngStr = Math.abs(lng).toFixed(4).padStart(8, "0") + "°" + (lng >= 0 ? "E" : "W");

    setCoords(`${latStr} · ${lngStr}`);
  });

  return (
    <div className="font-mono text-[10px] tracking-widest2 text-ink/40 uppercase">
      ROUTE TELEMETRY: <span className="text-saffron font-semibold font-mono">{coords}</span>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  // Scroll-linked individual 3D translations & rotations for depth/separating effect
  const crate1Z = useTransform(scrollYProgress, [0, 0.85], [0, 180]); // Cardamom flies forward
  const crate1Y = useTransform(scrollYProgress, [0, 0.85], [0, 60]);   // Cardamom floats down
  const crate1Rotate = useTransform(scrollYProgress, [0, 0.85], [0, 80]); // extra spin on scroll

  const crate2X = useTransform(scrollYProgress, [0, 0.85], [0, 110]);  // Chili drifts right
  const crate2Y = useTransform(scrollYProgress, [0, 0.85], [0, -90]);   // Chili drifts up
  const crate2Z = useTransform(scrollYProgress, [0, 0.85], [0, -120]); // Chili recedes
  const crate2Rotate = useTransform(scrollYProgress, [0, 0.85], [0, -100]);

  const crate3X = useTransform(scrollYProgress, [0, 0.85], [0, -90]);  // Turmeric drifts left
  const crate3Y = useTransform(scrollYProgress, [0, 0.85], [0, -140]);  // Turmeric drifts up
  const crate3Z = useTransform(scrollYProgress, [0, 0.85], [0, -80]);   // Turmeric recedes
  const crate3Rotate = useTransform(scrollYProgress, [0, 0.85], [0, 60]);

  // Orbit rings tilt and rotate on scroll
  const ring1RotateX = useTransform(scrollYProgress, [0, 0.85], [78, 88]);
  const ring1RotateZ = useTransform(scrollYProgress, [0, 0.85], [0, 90]);
  const ring2RotateX = useTransform(scrollYProgress, [0, 0.85], [70, 52]);
  const ring2RotateZ = useTransform(scrollYProgress, [0, 0.85], [30, -60]);

  // Text vertical parallax translation
  const textY = useTransform(scrollYProgress, [0, 0.85], [0, -85]);

  // Mouse & Touch pointer-driven 3D tilt of the crate rig (spring-smoothed)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 55, damping: 20 });
  const smy = useSpring(my, { stiffness: 55, damping: 20 });
  const rotateX = useTransform(smy, (v) => v * -14);
  const rotateY = useTransform(smx, (v) => v * 20);
  const auroraX = useTransform(smx, (v) => v * -14);
  const auroraY = useTransform(smy, (v) => v * -14);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX / rect.width - 0.5);
    my.set(e.clientY / rect.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onPointerMove={handlePointerMove}
      className="relative min-h-[100svh] md:h-[100svh] md:min-h-[680px] w-full overflow-hidden bg-alabaster flex flex-col md:block"
    >
      {/* Aurora blobs — muted ochre / clay / sage instead of the old saturated cinematic glow */}
      <motion.div style={{ x: auroraX, y: auroraY }} className="absolute -inset-[10%] blur-[90px] opacity-[0.22]">
        <div className="absolute w-[46vw] h-[46vw] rounded-full -top-[8%] -left-[6%] bg-[radial-gradient(circle,_#B14A32,_transparent_70%)] animate-float-a" />
        <div className="absolute w-[38vw] h-[38vw] rounded-full -bottom-[10%] -right-[4%] bg-[radial-gradient(circle,_#C98A2B,_transparent_70%)] animate-float-b" />
        <div className="absolute w-[30vw] h-[30vw] rounded-full top-[35%] right-[20%] bg-[radial-gradient(circle,_#5B7360,_transparent_70%)] animate-float-c" />
      </motion.div>

      {/* Fine meridian/latitude grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Floating Parallax Spice Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[4]">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              y: useTransform(scrollYProgress, [0, 1], [0, -160 * p.depth]),
            }}
            className="absolute rounded-full bg-saffron/20 blur-[0.5px]"
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: textY }}
        className="relative z-[5] w-full h-auto md:h-full mx-auto max-w-7xl px-6 md:px-10 flex flex-col justify-center pt-28 pb-8 md:py-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3.5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-saffron shadow-[0_0_12px_#C98A2B]" />
          <span className="eyebrow text-ink/60">Est. 1994 · Charted from 76°E</span>
          <span className="hidden sm:inline text-ink/20">|</span>
          <CoordinateHUD scrollYProgress={scrollYProgress} />
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
          className="mt-8 max-w-xl text-ink/60 text-base md:text-lg font-light leading-relaxed"
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
            className="bg-ink text-alabaster px-8 py-4 rounded-full font-medium text-sm hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(20,27,46,0.15)] hover:bg-paprika transition-all"
          >
            Explore the Catalog
          </a>
          <a
            href="/contact"
            className="border border-ink/20 px-8 py-4 rounded-full text-sm hover:border-saffron hover:text-saffron hover:bg-saffron/[0.06] transition-colors"
          >
            Talk to Trade Desk →
          </a>
        </motion.div>
      </motion.div>

      {/* 3D crate scene — signature visual, right-biased on desktop */}
      <motion.div
        style={{ scale: sceneScale, y: sceneY, opacity: sceneOpacity }}
        className="scene-perspective relative md:absolute z-[3] top-0 left-0 right-0 md:left-auto md:-right-[4%] w-full md:w-[64%] h-[320px] md:h-full opacity-100"
      >
        <div className="absolute inset-0 flex items-center justify-center scale-[0.66] sm:scale-75 md:scale-100 transition-transform duration-500">
          <motion.div style={{ rotateX, rotateY }} className="rig-3d left-1/2 top-1/2">
            {/* Cardamom Crate with individual Z/Y/rotate scroll transforms + hover lift */}
            <motion.div
              style={{ y: crate1Y, z: crate1Z, rotateY: crate1Rotate, transformStyle: "preserve-3d" }}
              className="absolute"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -12, transition: { duration: 0.3 } }}
                className="cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
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
              </motion.div>
            </motion.div>

            {/* Chili Crate with individual X/Y/Z/rotate scroll transforms + hover lift */}
            <motion.div
              style={{ x: crate2X, y: crate2Y, z: crate2Z, rotateY: crate2Rotate, transformStyle: "preserve-3d" }}
              className="absolute"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -12, transition: { duration: 0.3 } }}
                className="cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
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
              </motion.div>
            </motion.div>

            {/* Turmeric Crate with individual X/Y/Z/rotate scroll transforms + hover lift */}
            <motion.div
              style={{ x: crate3X, y: crate3Y, z: crate3Z, rotateY: crate3Rotate, transformStyle: "preserve-3d" }}
              className="absolute"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -12, transition: { duration: 0.3 } }}
                className="cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
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
              </motion.div>
            </motion.div>

            {/* Orbit Ring 1: Scroll-linked tilt (outer motion.div) + constant Z spin (inner div) */}
            <motion.div
              style={{
                rotateX: ring1RotateX,
                rotateZ: ring1RotateZ,
                transformStyle: "preserve-3d",
              }}
              className="absolute left-0 top-0"
            >
              <div
                className="orbit-ring animate-[spin_40s_linear_infinite]"
                style={{ width: 520, height: 520, marginLeft: -260, marginTop: -260 }}
              />
            </motion.div>

            {/* Orbit Ring 2: Scroll-linked tilt (outer motion.div) + constant Z spin reverse (inner div) */}
            <motion.div
              style={{
                rotateX: ring2RotateX,
                rotateZ: ring2RotateZ,
                transformStyle: "preserve-3d",
              }}
              className="absolute left-0 top-0"
            >
              <div
                className="orbit-ring animate-[spin_30s_linear_infinite_reverse]"
                style={{
                  width: 380,
                  height: 380,
                  marginLeft: -190,
                  marginTop: -190,
                  borderColor: "rgba(91,115,96,.25)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="scene-ground" />
      </motion.div>

      <motion.div
        style={{ opacity: cueOpacity }}
        className="hidden md:flex absolute bottom-9 left-1/2 -translate-x-1/2 z-[5] flex-col items-center gap-2.5 text-ink/45"
      >
        <span className="eyebrow">Scroll</span>
        <span className="scroll-track relative w-px h-11 bg-ink/10 overflow-hidden" />
      </motion.div>
    </section>
  );
}
