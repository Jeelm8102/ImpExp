"use client";

import React from "react";

export type ContainerColor = "sage" | "clay" | "ochre" | "navy";

interface CargoContainerProps {
  length?: number; // Container length along X axis (e.g. 200px)
  height?: number; // Container height along Y axis (e.g. 80px)
  depth?: number;  // Container depth along Z axis (e.g. 80px)
  accent: ContainerColor;
  commodity: string;
  spinDuration?: number;
  reverse?: boolean;
  x: number;
  y: number;
  z: number;
  bobDuration?: number;
  bobDelay?: number;
  // Legacy compatibility props
  size?: number;
  label?: React.ReactNode;
  containerCode?: string;
  lot?: string;
  route?: string;
  payload?: string;
}

const THEMES = {
  sage: {
    base: "#1F3B35",
    highlight: "#2E564E",
    roof: "#172E29",
    doors: "#1B342F",
    textPrimary: "#F0F6F3",
    textAccent: "#E5A93C",
    border: "#122420",
  },
  clay: {
    base: "#8A2E1A",
    highlight: "#B04229",
    roof: "#6B2212",
    doors: "#782715",
    textPrimary: "#FFF5F2",
    textAccent: "#F9C365",
    border: "#4D170B",
  },
  ochre: {
    base: "#A66C13",
    highlight: "#CC891E",
    roof: "#80510C",
    doors: "#8F5C10",
    textPrimary: "#FFFAF0",
    textAccent: "#FFF8ED",
    border: "#5C3906",
  },
  navy: {
    base: "#16283C",
    highlight: "#234161",
    roof: "#101E2E",
    doors: "#142436",
    textPrimary: "#F0F5FA",
    textAccent: "#E5A93C",
    border: "#0B1520",
  },
};

// Corner Casting for Container Corners
function CornerCasting() {
  return (
    <div className="w-2.5 h-2.5 bg-[#0E141C] border border-white/25 rounded-[1px] flex items-center justify-center shrink-0 shadow-xs">
      <div className="w-1 h-0.5 bg-black rounded-full border border-white/10" />
    </div>
  );
}

export default function Crate({
  length = 200,
  height = 80,
  depth = 80,
  accent = "sage",
  commodity = "GREEN CARDAMOM",
  spinDuration = 26,
  reverse = false,
  x,
  y,
  z,
  bobDuration = 7,
  bobDelay = 0,
  size,
}: CargoContainerProps) {
  // Proportions: Length ~ 2.4x Height/Depth for true ISO 20ft container shape
  const L = size ? Math.round(size * 1.3) : length;
  const H = size ? Math.round(size * 0.54) : height;
  const D = size ? Math.round(size * 0.54) : depth;

  const halfL = L / 2;
  const halfH = H / 2;
  const halfD = D / 2;

  const theme = THEMES[accent] || THEMES.sage;

  return (
    <div className="crate-pos" style={{ transform: `translate3d(${x}px, ${y}px, ${z}px)` }}>
      <div
        className="crate-float"
        style={{
          animationDuration: `${bobDuration}s`,
          animationDelay: `${bobDelay}s`,
        }}
      >
        {/* 3D Spin Rig with Zero Dimension Root to prevent transform-origin misalignment */}
        <div
          className="container-3d-spin"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            transformOrigin: "0 0 0",
            transformStyle: "preserve-3d",
            animationDuration: `${spinDuration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {/* ================= 1. FRONT LONG FACE: ALPHA IMPEXX ONLY ================= */}
          <div
            className="container-face absolute overflow-hidden select-none flex items-center justify-center p-3 shadow-inner"
            style={{
              width: L,
              height: H,
              left: -halfL,
              top: -halfH,
              transform: `translateZ(${halfD}px)`,
              backgroundColor: theme.base,
              border: `1.5px solid ${theme.border}`,
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
            }}
          >
            {/* Corrugated Vertical Fluting */}
            <div
              className="absolute inset-0 pointer-events-none opacity-45"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.15) 2px, rgba(255,255,255,0.2) 4px, rgba(255,255,255,0.06) 6px, rgba(0,0,0,0.2) 8px, rgba(0,0,0,0.45) 12px)",
                backgroundSize: "12px 100%",
              }}
            />

            {/* Corner Castings */}
            <div className="absolute top-0.5 left-0.5 z-10"><CornerCasting /></div>
            <div className="absolute top-0.5 right-0.5 z-10"><CornerCasting /></div>
            <div className="absolute bottom-0.5 left-0.5 z-10"><CornerCasting /></div>
            <div className="absolute bottom-0.5 right-0.5 z-10"><CornerCasting /></div>

            {/* Center Brand Name: ALPHA IMPEXX */}
            <div className="relative z-[2] text-center px-2">
              <span
                className="font-mono uppercase text-white drop-shadow-md whitespace-nowrap font-black"
                style={{
                  fontSize: `${Math.max(9.5, Math.min(13.5, Math.round(L * 0.072)))}px`,
                  letterSpacing: L < 140 ? "0.08em" : "0.14em",
                }}
              >
                ALPHA IMPEXX
              </span>
            </div>
          </div>

          {/* ================= 2. BACK LONG FACE: PRODUCT NAME ONLY ================= */}
          <div
            className="container-face absolute overflow-hidden select-none flex items-center justify-center p-3 shadow-inner"
            style={{
              width: L,
              height: H,
              left: -halfL,
              top: -halfH,
              transform: `rotateY(180deg) translateZ(${halfD}px)`,
              backgroundColor: theme.base,
              border: `1.5px solid ${theme.border}`,
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
            }}
          >
            {/* Corrugated Vertical Fluting */}
            <div
              className="absolute inset-0 pointer-events-none opacity-45"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.15) 2px, rgba(255,255,255,0.2) 4px, rgba(255,255,255,0.06) 6px, rgba(0,0,0,0.2) 8px, rgba(0,0,0,0.45) 12px)",
                backgroundSize: "12px 100%",
              }}
            />

            {/* Corner Castings */}
            <div className="absolute top-0.5 left-0.5 z-10"><CornerCasting /></div>
            <div className="absolute top-0.5 right-0.5 z-10"><CornerCasting /></div>
            <div className="absolute bottom-0.5 left-0.5 z-10"><CornerCasting /></div>
            <div className="absolute bottom-0.5 right-0.5 z-10"><CornerCasting /></div>

            {/* Center Product Name */}
            <div className="relative z-[2] text-center px-2">
              <span
                className="font-mono uppercase drop-shadow-md whitespace-nowrap font-bold"
                style={{
                  color: theme.textAccent,
                  fontSize: `${Math.max(9.5, Math.min(13.5, Math.round(L * 0.072)))}px`,
                  letterSpacing: L < 140 ? "0.06em" : "0.12em",
                }}
              >
                {commodity}
              </span>
            </div>
          </div>

          {/* ================= 3. LEFT DOOR END FACE (D x H) ================= */}
          <div
            className="container-face absolute overflow-hidden select-none flex items-center justify-center"
            style={{
              width: D,
              height: H,
              left: -halfD,
              top: -halfH,
              transform: `rotateY(-90deg) translateZ(${halfL}px)`,
              backgroundColor: theme.doors,
              border: `1.5px solid ${theme.border}`,
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
            }}
          >
            <div className="absolute top-0.5 left-0.5 z-10"><CornerCasting /></div>
            <div className="absolute top-0.5 right-0.5 z-10"><CornerCasting /></div>
            <div className="absolute bottom-0.5 left-0.5 z-10"><CornerCasting /></div>
            <div className="absolute bottom-0.5 right-0.5 z-10"><CornerCasting /></div>

            {/* Center Split Rubber Gasket Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-black/90 z-[3]" />

            {/* Dual Steel Locking Rods & Handles */}
            <div className="absolute top-0 bottom-0 left-[26%] w-[2.5px] bg-gradient-to-r from-gray-400 via-white to-gray-500 shadow-xs z-[4]">
              <div className="absolute top-1/2 -translate-y-1/2 -left-0.5 w-2 h-0.5 bg-black rounded-xs" />
            </div>
            <div className="absolute top-0 bottom-0 right-[26%] w-[2.5px] bg-gradient-to-r from-gray-400 via-white to-gray-500 shadow-xs z-[4]">
              <div className="absolute top-1/2 -translate-y-1/2 -right-0.5 w-2 h-0.5 bg-black rounded-xs" />
            </div>
          </div>

          {/* ================= 4. RIGHT END BULKHEAD FACE (D x H) ================= */}
          <div
            className="container-face absolute overflow-hidden select-none flex items-center justify-center"
            style={{
              width: D,
              height: H,
              left: -halfD,
              top: -halfH,
              transform: `rotateY(90deg) translateZ(${halfL}px)`,
              backgroundColor: theme.base,
              border: `1.5px solid ${theme.border}`,
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
            }}
          >
            {/* Corrugated Vertical Ribs */}
            <div
              className="absolute inset-0 pointer-events-none opacity-45"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.15) 2px, rgba(255,255,255,0.2) 4px, rgba(255,255,255,0.06) 6px, rgba(0,0,0,0.2) 8px, rgba(0,0,0,0.45) 12px)",
                backgroundSize: "12px 100%",
              }}
            />

            <div className="absolute top-0.5 left-0.5 z-10"><CornerCasting /></div>
            <div className="absolute top-0.5 right-0.5 z-10"><CornerCasting /></div>
            <div className="absolute bottom-0.5 left-0.5 z-10"><CornerCasting /></div>
            <div className="absolute bottom-0.5 right-0.5 z-10"><CornerCasting /></div>
          </div>

          {/* ================= 5. TOP ROOF FACE (L x D) ================= */}
          <div
            className="container-face absolute overflow-hidden select-none"
            style={{
              width: L,
              height: D,
              left: -halfL,
              top: -halfD,
              transform: `rotateX(90deg) translateZ(${halfH}px)`,
              backgroundColor: theme.roof,
              border: `1.5px solid ${theme.border}`,
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          >
            {/* Horizontal Corrugated Panels on Roof */}
            <div
              className="absolute inset-0 pointer-events-none opacity-35"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0px, rgba(255,255,255,0.15) 2px, rgba(0,0,0,0.45) 8px)",
                backgroundSize: "100% 10px",
              }}
            />
            {/* Corner Castings on Roof */}
            <div className="absolute top-0.5 left-0.5 z-10"><CornerCasting /></div>
            <div className="absolute top-0.5 right-0.5 z-10"><CornerCasting /></div>
            <div className="absolute bottom-0.5 left-0.5 z-10"><CornerCasting /></div>
            <div className="absolute bottom-0.5 right-0.5 z-10"><CornerCasting /></div>
          </div>

          {/* ================= 6. BOTTOM FLOOR FACE (L x D) ================= */}
          <div
            className="container-face absolute overflow-hidden select-none"
            style={{
              width: L,
              height: D,
              left: -halfL,
              top: -halfD,
              transform: `rotateX(-90deg) translateZ(${halfH}px)`,
              backgroundColor: "#0D141C",
              border: `1.5px solid ${theme.border}`,
            }}
          >
            {/* Forklift Pocket Channels */}
            <div className="absolute inset-y-0 left-1/3 w-2.5 bg-black/90 border-x border-white/10" />
            <div className="absolute inset-y-0 right-1/3 w-2.5 bg-black/90 border-x border-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
