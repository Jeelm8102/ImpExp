import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalog — Monsoon & Meridian",
  description: "Full export catalog of spices, pulses, grains and dehydrated food staples from Monsoon & Meridian.",
};

const CATALOG = [
  {
    lot: "LOT-WS",
    category: "Whole Spices",
    items: [
      "Green Cardamom (8mm+)",
      "Black Pepper (550 GL / 500 GL)",
      "Cloves (Handpicked)",
      "Cinnamon Quills (Alba / C5)",
      "Star Anise",
      "Nutmeg & Mace",
    ],
  },
  {
    lot: "LOT-GS",
    category: "Ground & Blended Spices",
    items: [
      "Turmeric Powder (Curcumin 2–5%)",
      "Red Chili Powder (Byadgi / Guntur)",
      "Coriander Powder",
      "Cumin Powder",
      "Garam Masala (Custom Blend)",
      "Curry Powder (Custom Blend)",
    ],
  },
  {
    lot: "LOT-PL",
    category: "Pulses & Lentils",
    items: [
      "Toor Dal (Split Pigeon Pea)",
      "Moong Dal (Split Green Gram)",
      "Chana Dal (Split Bengal Gram)",
      "Urad Dal (Split Black Gram)",
      "Masoor Dal (Red Lentil)",
      "Kabuli Chana (Chickpea)",
    ],
  },
  {
    lot: "LOT-DV",
    category: "Dehydrated Vegetables",
    items: [
      "White Onion Flakes / Powder",
      "Garlic Flakes / Powder",
      "Ginger Flakes / Powder",
      "Green Chili Flakes",
      "Tomato Powder",
      "Beetroot & Carrot Powder",
    ],
  },
  {
    lot: "LOT-GC",
    category: "Grains & Cereals",
    items: [
      "Basmati Rice (1121 / Pusa)",
      "Non-Basmati Rice (IR64, Sona Masoori)",
      "Wheat (Sharbati / Lokwan)",
      "Pearl Millet (Bajra)",
      "Finger Millet (Ragi)",
      "Sorghum (Jowar)",
    ],
  },
  {
    lot: "LOT-ON",
    category: "Oilseeds & Nuts",
    items: [
      "Sesame Seeds (Natural / Hulled)",
      "Groundnut (Bold / Java)",
      "Mustard Seeds",
      "Cashew Kernels (W240 / W320)",
      "Sunflower Seeds",
      "Flax Seeds",
    ],
  },
];

export default function ProductsPage() {
  return (
    <main>
      <Nav />
      <section className="relative bg-alabaster pt-40 pb-20 border-b border-ink/10 bg-grid">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow text-saffron mb-4">Full Catalog</p>
          <h1 className="font-display text-4xl md:text-6xl font-light max-w-3xl text-balance">
            Six categories.
            <span className="italic text-saffron"> Export-grade throughout.</span>
          </h1>
          <p className="mt-6 text-ink/60 max-w-xl">
            All specifications available on request — packaging, grading and
            minimum order quantities are tailored per buyer market.
          </p>
        </div>
      </section>

      <section className="bg-alabaster-dim py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-px bg-ink/10">
          {CATALOG.map((c) => (
            <div key={c.lot} className="bg-white p-8 md:p-12">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] text-saffron tracking-widest2">{c.lot}</span>
                <span className="flex-1 mx-4 h-px bg-ink/15" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl mb-6">{c.category}</h2>
              <ul className="space-y-2.5">
                {c.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink/70">
                    <span className="w-1 h-1 rounded-full bg-saffron/70 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-alabaster py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="eyebrow text-saffron mb-3">Custom Sourcing</p>
            <h2 className="font-display text-3xl md:text-4xl font-light max-w-lg text-balance">
              Don&apos;t see what you need? We source on request.
            </h2>
          </div>
          <a
            href="/contact"
            className="bg-alabaster text-ink px-8 py-4 rounded-full text-sm font-medium hover:bg-paprika hover:text-alabaster transition-colors shrink-0"
          >
            Request a Quote
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
