"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string[];
  takeaways: string[];
}

const ARTICLES: Article[] = [
  {
    id: "cumin-haldi-harvest-outlook",
    title: "Gujarat Cumin & Haldi Harvest: Purity, Oil Content & Global Pricing Trends",
    category: "Crop Outlook",
    date: "August 2026",
    readTime: "4 min read",
    image: "/blogs/crop_harvest.jpg",
    summary:
      "A comprehensive review of the current harvest season across Gujarat's prime agricultural belts, analyzing Sortex 99.5% purity yields, curcumin benchmarks, and international container rates.",
    content: [
      "Gujarat and Rajasthan continue to represent the epicenter of the global cumin (Cuminum cyminum) trade, accounting for over 70% of world production. The latest harvest cycles have yielded exceptionally high volatile oil content (>3.2%) and uniform seed density, driven by favorable winter temperature profiles across Saurashtra and North Gujarat.",
      "For Turmeric (Haldi), export consignments destined for North America and Western Europe are demanding verified curcumin concentration between 2.5% and 5.0%. Our direct procurement model at farm-gate collection centers ensures batches remain unadulterated, with zero lead chromate or synthetic color enhancement.",
      "International freight dynamics from Hazira and Mundra ports remain stable, with regular 20ft and 40ft container liner availability ensuring swift transit to Jebel Ali, Rotterdam, and New York harbors.",
    ],
    takeaways: [
      "Volatile oil content in current cumin arrivals exceeds 3.2% across Saurashtra belts.",
      "Turmeric batches tested via HPLC for certified 2.5% to 5.0% curcumin concentration.",
      "Direct Hazira port stuffing avoids multi-day inland logistics delays.",
    ],
  },
  {
    id: "eu-fda-quality-standards",
    title: "Meeting EU & US FDA Compliance: Steam Sterilization & Aflatoxin Thresholds",
    category: "Quality Standards",
    date: "July 2026",
    readTime: "5 min read",
    image: "/blogs/quality_standards.jpg",
    summary:
      "A practical technical guide for international importers on ASTA cleanliness specifications, microbiological limits, ETO vs Steam treatment, and mandatory phytosanitary protocols.",
    content: [
      "Exporting whole and ground spices into strictly regulated markets such as the European Union and the United States requires stringent adherence to ASTA (American Spice Trade Association) cleanliness parameters and EU maximum residue limits (MRLs).",
      "One of the key compliance differentiators is the method of microbial reduction. While Ethylene Oxide (ETO) treatment is restricted or banned across several EU countries, continuous High-Pressure Steam Sterilization offers a 100% natural, chemical-free pathogen kill, reducing total plate count (TPC) to below 10,000 cfu/g without degrading aroma or essential oil compounds.",
      "Every batch processed by ALPHA IMPEXX is accompanied by accredited laboratory Certificates of Analysis (COA) covering aflatoxin B1/total aflatoxins, ochratoxin A, heavy metals, and multi-pesticide screens.",
    ],
    takeaways: [
      "Continuous steam sterilization provides chemical-free microbial compliance for European buyers.",
      "Strict compliance with ASTA cleanliness specifications and destination MRLs.",
      "NABL / SGS accredited COA supplied with every ocean bill of lading.",
    ],
  },
  {
    id: "hazira-mundra-port-logistics",
    title: "Hazira & Mundra Port Gateways: Optimizing Ocean Freight from Western India",
    category: "Logistics & Shipping",
    date: "June 2026",
    readTime: "3 min read",
    image: "/blogs/port_logistics.jpg",
    summary:
      "How geographic proximity to Gujarat's premier deep-water container terminals minimizes inland transit times, reduces demurrage risk, and guarantees dependable vessel sailings.",
    content: [
      "For bulk agricultural commodities and spice exports, inland transport overheads and port congestion often represent the largest hidden variable in CIF quoting. Being headquartered in Surat provides ALPHA IMPEXX with an unmatched logistical edge.",
      "Hazira Port (INHAZ) is located just minutes from our primary processing and packing hubs, offering direct container terminal access and fast-track customs clearance. For long-haul direct mother-vessel services to Europe and the Americas, dedicated rail feeder lines directly connect our warehouse network to Mundra Port (INMUN).",
      "This dual-gateway strategy ensures that even during peak export seasons, our consignments avoid bottlenecks and meet narrow vessel loading cutoffs.",
    ],
    takeaways: [
      "Under 45-minute transit window to Hazira Port container terminals.",
      "Direct weekly vessel connections to Middle East, Europe, Southeast Asia, and USA.",
      "FOB and CIF execution backed by established freight forwarder agreements.",
    ],
  },
  {
    id: "private-label-export-packaging",
    title: "Private Label Packaging: Custom Nitrogen Flushing & Food-Grade Bulk Sacks",
    category: "Packaging Solutions",
    date: "May 2026",
    readTime: "4 min read",
    image: "/blogs/export_packaging.jpg",
    summary:
      "Exploring seaworthy packaging options — from 250g nitrogen-flushed retail stand-up pouches to 50kg multi-wall kraft paper sacks engineered for extreme ocean humidity.",
    content: [
      "Preserving the delicate volatile aromatics and color pigments of spices during long ocean transits requires specialized moisture-barrier packaging tailored to climate zones.",
      "For food service and wholesale buyers, we offer multi-wall kraft paper bags with inner high-barrier poly-liners (25kg/50kg) and high-density food-grade PP woven sacks. For retail and private-label distributors, our packaging lines support customized zip-lock stand-up pouches with nitrogen flushing to maintain maximum shelf freshness.",
      "All master cartons are palletized, stretch-wrapped, and fitted with container desiccants to prevent container sweat during equatorial voyages.",
    ],
    takeaways: [
      "Nitrogen flushing preserves volatile spice aromas up to 24 months.",
      "Seaworthy multi-wall paper and PP packaging engineered for ocean humidity.",
      "Full OEM custom branding, barcode integration, and buyer language labels.",
    ],
  },
];

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedArticle]);

  return (
    <section id="insights" className="relative bg-alabaster py-24 md:py-32 border-b border-ink/10 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow text-saffron mb-2 font-semibold">Export Intelligence · Trade Journal</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-ink">
              Market reports &amp;
              <span className="italic text-saffron block sm:inline sm:ml-2">export standards.</span>
            </h2>
          </div>
          <span className="text-xs font-mono text-ink/50 hidden md:block">
            Curated analysis from our Surat Trade Desk
          </span>
        </div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="group bg-white border border-ink/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-saffron/60 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-ink/5 border-b border-ink/8">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold text-ink border border-ink/10">
                    {art.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-ink/50 mb-2">
                    <span>{art.date}</span>
                    <span>·</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-medium text-ink leading-snug group-hover:text-paprika transition-colors line-clamp-2 mb-2.5">
                    {art.title}
                  </h3>
                  <p className="text-xs text-ink/70 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-ink/5">
                <span className="text-xs font-mono text-saffron group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                  Read Report →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reading Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-ink/60 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-alabaster border border-ink/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Header */}
              <div className="relative p-6 sm:p-8 bg-white border-b border-ink/10 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono mb-2">
                    <span className="text-saffron font-bold uppercase">{selectedArticle.category}</span>
                    <span className="text-ink/30">·</span>
                    <span className="text-ink/50">{selectedArticle.date}</span>
                    <span className="text-ink/30">·</span>
                    <span className="text-ink/50">{selectedArticle.readTime}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium text-ink leading-tight">
                    {selectedArticle.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-10 h-10 rounded-full bg-alabaster hover:bg-ink hover:text-white border border-ink/10 flex items-center justify-center transition-colors shrink-0 text-ink cursor-pointer"
                  aria-label="Close report"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                {/* Key Takeaways Card */}
                {selectedArticle.takeaways && selectedArticle.takeaways.length > 0 && (
                  <div className="bg-white rounded-2xl p-5 border border-saffron/30 bg-gradient-to-br from-saffron/5 to-transparent">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-saffron font-bold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-saffron" />
                      Key Export Takeaways
                    </h4>
                    <ul className="space-y-2">
                      {selectedArticle.takeaways.map((t, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-ink/80 flex items-start gap-2">
                          <span className="text-saffron font-bold">✓</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Article Content Paragraphs */}
                <div className="space-y-4 text-ink/80 text-sm sm:text-base leading-relaxed">
                  {selectedArticle.content && selectedArticle.content.length > 0 ? (
                    selectedArticle.content.map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <p>{selectedArticle.summary}</p>
                  )}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 bg-white border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-ink/60">
                  Trade desk quotes &amp; specification inquiries available
                </span>
                <a
                  href="#contact"
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto bg-saffron text-ink px-7 py-3 rounded-full font-medium text-sm hover:bg-ink hover:text-alabaster transition-colors text-center shadow-sm"
                >
                  Inquire on this Commodity →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
