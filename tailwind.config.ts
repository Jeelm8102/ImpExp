import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#141B2E",
          light: "#1D2740",
          soft: "#283454",
        },
        alabaster: {
          DEFAULT: "#F7F3EA",
          dim: "#EAE3D3",
        },
        saffron: {
          DEFAULT: "#C98A2B",
          deep: "#A8721E",
        },
        paprika: {
          DEFAULT: "#B14A32",
          deep: "#8F3A26",
        },
        cardamom: {
          DEFAULT: "#5B7360",
          deep: "#435847",
        },
        harbor: {
          DEFAULT: "#4A6FA5",
          deep: "#35507A",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.24em",
      },
    },
  },
  plugins: [],
};
export default config;
