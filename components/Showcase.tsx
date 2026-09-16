"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface ProductDetail {
  name: string;
  image: string;
  spec: string;
}

interface ProductItem {
  n: string;
  lot: string;
  name: string;
  tagline: string;
  desc: string;
  from: string;
  accentColor: string;
  image: string;
  keyHighlights: string[];
  products: ProductDetail[];
  packaging: string[];
  certifications: string[];
}

const PRODUCTS: ProductItem[] = [
  {
    n: "01",
    lot: "LOT-PS",
    name: "Powder Spices",
    tagline: "Fine-Ground · Rich Aroma · Export-Grade",
    desc: "Fine-ground spice powders packed for rich aroma, natural flavor, and export-grade consistency.",
    from: "from-paprika/25",
    accentColor: "#B14A32",
    image: "/categories/powder_spices.jpg",
    keyHighlights: ["Chili Powder", "Cumin (Jeera)", "Turmeric (Haldi)", "Coriander (Dhania)", "Amchur", "Ginger (Sonth)"],
    products: [
      { name: "Chili Powder", image: "/products/chili_powder.jpg", spec: "Rich Color & Heat · Fine Mesh" },
      { name: "Cumin Powder (Jeera)", image: "/products/cumin_powder.jpg", spec: "100% Pure · Roasted Aroma" },
      { name: "Turmeric Powder (Haldi)", image: "/products/turmeric_powder.jpg", spec: "Curcumin 2–5% · High Purity" },
      { name: "Coriander Powder (Dhania)", image: "/products/coriander_powder.jpg", spec: "Aromatic · Machine Ground" },
      { name: "Ginger Powder (Sonth)", image: "/products/ginger_powder.jpg", spec: "Sun-Dried · Spicy Aroma" },
      { name: "Dry Mango Powder (Amchur)", image: "/products/amchur_powder.jpg", spec: "Tangy Raw Mango · Clean" },
      { name: "Black Pepper Powder", image: "/products/black_pepper_powder.jpg", spec: "Coarse / Fine · Pungent" },
      { name: "Garlic Powder", image: "/products/garlic_powder.jpg", spec: "Dehydrated · Free Flowing" },
    ],
    packaging: [
      "Multi-wall Kraft Paper Bags (25kg / 50kg)",
      "Food-grade PP Woven Sacks with Inner Poly Liner",
      "Nitrogen-flushed / Vacuum Foil Pouches (500g–5kg)",
      "Custom Private Labeling & Retail Jar Packaging",
    ],
    certifications: ["Spice Board of India", "FSSAI Licensed", "NABL / SGS Lab Purity & Mesh Tested", "Phytosanitary Protocol"],
  },
  {
    n: "02",
    lot: "LOT-WS",
    name: "Whole Spices",
    tagline: "Natural Form · Hand-Sorted · Maximum Flavor",
    desc: "Authentic whole spices in their natural form, carefully selected for maximum flavor and aroma.",
    from: "from-[#8C5E3C]/20",
    accentColor: "#8C5E3C",
    image: "/categories/whole_spices.jpg",
    keyHighlights: ["Black Peppercorns", "Cumin Seeds", "Cardamom Pods", "Cinnamon / Cassia", "Cloves", "Star Anise"],
    products: [
      { name: "Whole Black Peppercorns", image: "/products/black_peppercorns.jpg", spec: "550 GL / 500 GL Bold Grade" },
      { name: "Whole Cumin Seeds", image: "/products/cumin_seeds.jpg", spec: "Sortex Cleaned · 99.5% Pure" },
      { name: "Whole Red Chilis", image: "/products/whole_red_chilis.jpg", spec: "Stemless / With Stem · Bold" },
      { name: "Cinnamon Sticks / Cassia", image: "/products/cinnamon_sticks.jpg", spec: "Natural Bark & Rolled Quills" },
      { name: "Green / Black Cardamom Pods", image: "/products/cardamom_pods.jpg", spec: "8mm+ Bold · High Oil Content" },
      { name: "Handpicked Cloves", image: "/products/cloves.jpg", spec: "Lalpari Grade · Head Intact" },
      { name: "Fennel Seeds (Saunf)", image: "/products/fennel_seeds.jpg", spec: "Green Sweet · Double Polished" },
      { name: "Star Anise", image: "/products/star_anise.jpg", spec: "Whole 8-Point Stars · Fragrant" },
    ],
    packaging: [
      "Traditional Jute / Burlap Sacks (25kg / 50kg)",
      "Food-grade PP Sacks with High Moisture Barrier",
      "Vacuum-sealed Bulk Export Cartons",
      "Buyer-specified Retail Display Packs",
    ],
    certifications: ["Spice Board of India", "FSSAI Licensed", "Grade & Moisture Certified", "Phytosanitary & Fumigation Verified"],
  },
  {
    n: "03",
    lot: "LOT-DH",
    name: "Dried Leaves & Herbs",
    tagline: "Aromatic Botanicals · Natural Preservation",
    desc: "Aromatic dried leaves and herbs carefully preserved for maximum flavor in every dish.",
    from: "from-cardamom/25",
    accentColor: "#5B7360",
    image: "/categories/dried_herbs.jpg",
    keyHighlights: ["Bay Leaves (Tej Patta)", "Dried Oregano", "Dried Thyme", "Dried Mint Leaves"],
    products: [
      { name: "Bay Leaves (Tej Patta)", image: "/products/bay_leaves.jpg", spec: "Whole Dried Leaves · Grade A" },
      { name: "Dried Oregano", image: "/products/dried_oregano.jpg", spec: "Crushed & Rubbed Herb Flakes" },
      { name: "Dried Thyme", image: "/products/dried_thyme.jpg", spec: "Cut & Sifted · High Aroma" },
      { name: "Dried Mint Leaves", image: "/products/dried_mint.jpg", spec: "Pudina Flakes · Fragrant Green" },
    ],
    packaging: [
      "Corrugated Master Cartons with Food-grade Liners (10kg–15kg)",
      "Poly-lined Bags with Nitrogen Flush",
      "Custom Stand-up Herb Pouches & Seasoning Jars",
      "Palletized Container Stuffing",
    ],
    certifications: ["FSSAI Licensed", "APEDA Registered", "Zero Artificial Additives / Colorants", "NABL Lab Tested"],
  },
  {
    n: "04",
    lot: "LOT-PF",
    name: "Paste & Fresh Spices",
    tagline: "Ready-to-Use Pastes · Fresh Roots",
    desc: "Ready-to-use pastes and fresh roots delivering authentic Indian flavor to any kitchen.",
    from: "from-saffron/25",
    accentColor: "#C98A2B",
    image: "/categories/paste_fresh_spices.jpg",
    keyHighlights: ["Ginger-Garlic Paste", "Tamarind Paste", "Fresh Ginger Root"],
    products: [
      { name: "Ginger-Garlic Paste", image: "/products/ginger_garlic_paste.jpg", spec: "Homogeneous Culinary Blend" },
      { name: "Tamarind Paste", image: "/products/tamarind_paste.jpg", spec: "Pure Dark Concentrated Pulp" },
      { name: "Fresh Ginger Root", image: "/products/fresh_ginger.jpg", spec: "Washed & Cleaned Rhizomes" },
      { name: "Fresh Turmeric Root", image: "/products/fresh_turmeric.jpg", spec: "Raw Golden Rhizomes" },
    ],
    packaging: [
      "Aseptic Bag-in-Box / Food-grade Drums (20kg–220kg)",
      "Glass & PET Jars (200g, 500g, 1kg)",
      "Food-service Commercial Buckets (5kg–20kg)",
      "Ventilated Crates for Fresh Rhizomes / Roots",
    ],
    certifications: ["ISO 22000 / HACCP", "FSSAI Licensed", "APEDA Member", "Cold-chain Storage & Transit Compliant"],
  },
];

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  // Move the track left by its own overflow width, driven by scroll progress.
  const x = useTransform(scrollYProgress, (v) => {
    const track = trackRef.current;
    if (!track) return "0px";
    const overflow = Math.max(track.scrollWidth - window.innerWidth, 0);
    return `-${v * overflow}px`;
  });
  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  return (
    <section id="showcase" ref={sectionRef} className="relative bg-alabaster-dim" style={{ height: "340vh" }}>
      <div className="sticky top-0 h-[100svh] flex flex-col justify-between overflow-hidden pt-12 sm:pt-14 md:pt-12 pb-3 sm:pb-4">
        {/* Section Header */}
        <div className="relative z-[5] mx-auto max-w-7xl px-6 md:px-10 w-full flex-none pb-2 sm:pb-3">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4">
            <div>
              <p className="eyebrow text-saffron mb-1.5 font-semibold text-[11px] sm:text-xs uppercase tracking-widest">
                The Catalog · What We Export
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-balance">
                Four categories, one
                <span className="italic text-saffron block sm:inline sm:ml-2">export standard.</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div className="relative flex-1 min-h-0 flex items-center overflow-hidden py-3 sm:py-4">
          <motion.div ref={trackRef} style={{ x }} className="flex gap-5 sm:gap-6 md:gap-7 px-[6vw] py-3 items-center">
            {PRODUCTS.map((p) => (
              <div
                key={p.lot}
                onClick={() => setSelectedProduct(p)}
                className={`group relative flex-none w-[min(385px,85vw)] sm:w-[380px] md:w-[395px] lg:w-[410px] h-[min(530px,calc(100svh-170px))] min-h-[455px] max-h-[535px] rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 flex flex-col justify-between border border-ink/[0.08] bg-gradient-to-br ${p.from} to-alabaster shadow-[0_6px_25px_rgba(20,27,46,0.06)] hover:shadow-[0_22px_50px_rgba(20,27,46,0.13)] hover:-translate-y-2 hover:border-ink/20 transition-all duration-300 ease-out cursor-pointer select-none`}
              >
                <div>
                  {/* Framed Image Container */}
                  <div className="relative w-full aspect-[16/10] max-h-[195px] rounded-xl sm:rounded-2xl overflow-hidden mb-3.5 sm:mb-4 border border-ink/[0.06] shadow-sm bg-ink/5 flex-none">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-md text-ink font-mono text-[10px] px-2.5 py-1 rounded-full font-semibold shadow-sm border border-ink/[0.06] group-hover:bg-saffron group-hover:text-ink transition-colors duration-200 flex items-center gap-1">
                      Quick Specs ↗
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <p className="eyebrow text-saffron text-[10px] sm:text-[10.5px] font-semibold tracking-wider uppercase mb-1">
                      {p.tagline}
                    </p>
                    <h3 className="font-display text-2xl sm:text-[1.65rem] md:text-[1.75rem] text-ink font-normal mb-1.5 leading-snug group-hover:text-paprika transition-colors duration-300">
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-ink/75 leading-relaxed min-h-[2.6rem] sm:min-h-[2.85rem] line-clamp-2">
                      {p.desc}
                    </p>
                  </div>

                  {/* Key Highlights Chips */}
                  <div className="mt-3 sm:mt-3.5 flex flex-wrap content-start gap-1 sm:gap-1.5 min-h-[3.6rem] sm:min-h-[4rem]">
                    {p.keyHighlights.map((item) => (
                      <span
                        key={item}
                        className="bg-white/85 backdrop-blur-sm border border-ink/10 rounded-lg px-2.5 py-1 text-[11px] text-ink/80 font-medium whitespace-nowrap shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:bg-white hover:border-ink/20 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="mt-auto pt-3 border-t border-ink/[0.08] flex items-center justify-between flex-none">
                  <span className="eyebrow border border-ink/20 px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold text-ink/70 bg-white/40 group-hover:border-saffron group-hover:text-saffron group-hover:bg-saffron/[0.06] transition-all duration-300">
                    Export Grade
                  </span>
                  <span className="text-xs font-mono text-ink/65 group-hover:text-ink group-hover:translate-x-1 transition-all inline-flex items-center gap-1 font-semibold">
                    View Varieties ({p.products.length}) →
                  </span>
                </div>
              </div>
            ))}
            <div className="flex-none w-[6vw]" />
          </motion.div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="relative z-[5] mx-auto max-w-7xl px-6 md:px-10 w-full flex-none mt-1 sm:mt-2">
          <div className="h-0.5 rounded-full bg-ink/[0.12] overflow-hidden">
            <motion.div style={{ width: barWidth }} className="h-full bg-gradient-to-r from-saffron to-paprika" />
          </div>
        </div>
      </div>

      {/* Interactive Product Details Modal / Drawer */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-ink/60 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-alabaster border border-ink/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="relative p-4 sm:p-6 md:p-8 bg-white border-b border-ink/10 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 border border-ink/10 bg-ink/5 shadow-xs">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-saffron font-bold">{selectedProduct.lot}</span>
                      <span className="text-ink/30">·</span>
                      <span className="eyebrow text-ink/60 text-[10px]">{selectedProduct.tagline}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-medium text-ink">
                      {selectedProduct.name}
                    </h3>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-10 h-10 rounded-full bg-alabaster hover:bg-ink hover:text-white border border-ink/10 flex items-center justify-center transition-colors shrink-0 text-ink cursor-pointer"
                  aria-label="Close details"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="eyebrow text-ink/50 text-[11px] mb-2 font-semibold">Description</h4>
                  <p className="text-ink/80 text-sm sm:text-base leading-relaxed">
                    {selectedProduct.desc}
                  </p>
                </div>

                {/* Visual Product Grid with Thumbnails */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-ink/10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-saffron font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-saffron" />
                      Products &amp; Export Varieties ({selectedProduct.products.length})
                    </h4>
                    <span className="text-[10px] font-mono text-ink/45 hidden sm:inline">Lab Tested &amp; Export Graded</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProduct.products.map((p) => (
                      <div
                        key={p.name}
                        className="flex items-center gap-3.5 p-2.5 rounded-xl border border-ink/8 bg-alabaster/40 hover:bg-white hover:border-saffron/40 hover:shadow-xs transition-all duration-200 group/item"
                      >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shrink-0 border border-ink/10 bg-ink/5 shadow-2xs">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h5 className="font-medium text-xs sm:text-sm text-ink group-hover/item:text-paprika transition-colors truncate">
                            {p.name}
                          </h5>
                          <p className="text-[11px] text-ink/60 font-mono tracking-tight truncate mt-0.5">
                            {p.spec}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Packaging & Certifications Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-ink/10">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-ink/50 font-semibold mb-3">
                      Packaging Options
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.packaging.map((pack) => (
                        <li key={pack} className="text-xs text-ink/75 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-ink/40 shrink-0" />
                          {pack}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-ink/10">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-ink/50 font-semibold mb-3">
                      Quality &amp; Compliance
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.certifications.map((cert) => (
                        <li key={cert} className="text-xs text-ink/75 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-cardamom shrink-0" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-6 bg-white border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-ink/60 text-center sm:text-left">
                  Sample requests &amp; custom FOB/CIF quotes available
                </span>
                <a
                  href="#contact"
                  onClick={() => {
                    const prodName = selectedProduct.name;
                    setSelectedProduct(null);
                    setTimeout(() => {
                      const input = document.getElementById("products") as HTMLInputElement | null;
                      if (input) {
                        input.value = prodName;
                        input.dispatchEvent(new Event("input", { bubbles: true }));
                      }
                    }, 100);
                  }}
                  className="w-full sm:w-auto bg-saffron text-ink px-7 py-3 rounded-full font-medium text-sm hover:bg-ink hover:text-alabaster transition-colors text-center shadow-sm"
                >
                  Request Quote for {selectedProduct.name} →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
