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
  title: "ALPHA IMPEXX — Premium Spice & Agricultural Commodity Exports | Surat, Gujarat",
  description:
    "ALPHA IMPEXX is an export & trading company based in Surat, Gujarat, supplying premium spice powders, whole spices, dried herbs, and culinary pastes to international buyers globally via Hazira & Mundra ports.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "ALPHA IMPEXX — Premium Spice & Agricultural Commodity Exports",
    description: "Exporting premium Indian spices, herbs, and agricultural commodities globally.",
    images: ["/logo-white-bg.jpg"],
  },
  keywords: [
    "ALPHA IMPEXX",
    "spice exporter India",
    "Surat export company",
    "bulk spice supplier Gujarat",
    "powder spices export",
    "whole spices exporter",
    "Hazira port shipping",
    "Mundra port export",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-alabaster text-ink antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
