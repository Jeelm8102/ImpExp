import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monsoon & Meridian — Spice & Food Exports Since 1994",
  description:
    "Monsoon & Meridian sources, processes, and exports premium spices, pulses, and food staples from India's growing belts to over 40 countries. FSSAI, ISO 22000 & Spice Board certified.",
  keywords: [
    "spice exporter India",
    "food export company",
    "bulk spice supplier",
    "import export spices",
    "Indian spice trade",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-ink text-alabaster antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
