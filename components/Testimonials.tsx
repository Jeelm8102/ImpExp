const QUOTES = [
  { q: "Consistent grading batch after batch. Our QC team rarely flags a container from them anymore.", n: "H. Brandt", r: "Purchasing Lead, Hamburg" },
  { q: "Documentation is always clean and on time — customs clearance in Jebel Ali has never been faster.", n: "R. Al-Farsi", r: "Import Manager, Dubai" },
  { q: "We switched three product lines to them after a single trial shipment of their cumin.", n: "L. Tanaka", r: "Category Buyer, Osaka" },
  { q: "Best lead-time reliability of any Indian exporter we've worked with in a decade.", n: "M. Novak", r: "Supply Chain Director, Chicago" },
];

export default function Testimonials() {
  const doubled = [...QUOTES, ...QUOTES];
  return (
    <section className="relative bg-alabaster-dim py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-16">
        <p className="eyebrow text-saffron mb-3.5">From Our Buyers</p>
        <h2 className="font-display text-4xl md:text-5xl font-normal">
          Trusted on five
          <br />
          <span className="italic text-saffron">continents.</span>
        </h2>
      </div>

      <div className="marquee-pause">
        <div className="flex gap-6 w-max animate-marquee-slow">
          {doubled.map((t, i) => (
            <figure
              key={i}
              className="w-[380px] flex-none bg-alabaster border border-ink/[0.08] rounded-3xl p-9"
            >
              <blockquote className="font-display italic text-xl leading-snug text-balance">
                &ldquo;{t.q}&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-mono text-xs text-ink/50">
                {t.n} — {t.r}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
