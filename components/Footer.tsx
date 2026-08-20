import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-alabaster-dim border-t border-ink/[0.08] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-12 pb-14">
          <div>
            <span className="font-display text-xl">
              Monsoon <span className="italic text-saffron">&amp;</span> Meridian
            </span>
            <p className="mt-3.5 text-sm text-ink/55 leading-relaxed max-w-xs">
              Sourcing and exporting spices, pulses and food staples from India to the
              world since 1994.
            </p>
          </div>

          <div>
            <p className="eyebrow text-ink/40 mb-5">Company</p>
            <ul className="space-y-3 text-sm text-ink/70">
              <li><Link href="/#showcase" className="hover:text-saffron transition-colors">Products</Link></li>
              <li><Link href="/#network" className="hover:text-saffron transition-colors">Network</Link></li>
              <li><Link href="/#process" className="hover:text-saffron transition-colors">Process</Link></li>
              <li><Link href="/contact" className="hover:text-saffron transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ink/40 mb-5">Head Office</p>
            <p className="text-sm text-ink/70 leading-relaxed font-mono">
              Willingdon Island
              <br />
              Kochi, Kerala 682003
              <br />
              India
            </p>
          </div>

          <div>
            <p className="eyebrow text-ink/40 mb-5">Trade Desk</p>
            <p className="text-sm text-ink/70 leading-relaxed font-mono">
              +91 484 220 1994
              <br />
              trade@monsoonmeridian.com
              <br />
              Mon–Sat, 9:00–18:00 IST
            </p>
          </div>
        </div>

        <div className="h-px bg-ink/[0.08]" />

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink/40 font-mono">
          <span>© {new Date().getFullYear()} Monsoon &amp; Meridian. All rights reserved.</span>
          <span>FSSAI · APEDA · Spice Board of India Registered Exporter</span>
        </div>
      </div>
    </footer>
  );
}
