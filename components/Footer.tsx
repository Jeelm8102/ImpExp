import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-alabaster-dim border-t border-ink/[0.08] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-12 pb-14">
          <div>
            <Link href="/" className="inline-block mb-3.5 group" aria-label="ALPHA IMPEXX Home">
              <img
                src="/logo.png"
                alt="ALPHA IMPEXX - Empowering Global Trade"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </Link>
            <p className="text-xs text-ink/50 font-mono uppercase tracking-wider">Export &amp; Trading Company</p>
            <p className="mt-3 text-sm text-ink/55 leading-relaxed max-w-xs">
              Sourcing and exporting premium spices, powders, herbs and culinary essentials from India to global destinations.
            </p>
          </div>

          <div>
            <p className="eyebrow text-ink/40 mb-5">Quick Links</p>
            <ul className="space-y-3 text-sm text-ink/70">
              <li><a href="/#about" className="hover:text-saffron transition-colors">About Us</a></li>
              <li><a href="/#showcase" className="hover:text-saffron transition-colors">Products</a></li>
              <li><a href="/#network" className="hover:text-saffron transition-colors">Network</a></li>
              <li><a href="/#process" className="hover:text-saffron transition-colors">Process</a></li>
              <li><a href="/#insights" className="hover:text-saffron transition-colors">Insights</a></li>
              <li><a href="/#contact" className="hover:text-saffron transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ink/40 mb-5">Registered Address</p>
            <p className="text-sm text-ink/70 leading-relaxed font-mono">
              C-905 Green Paradise,
              <br />
              Gaurav Path, Bhesan Road,
              <br />
              Jahangirabad, Surat – 395005,
              <br />
              Gujarat, India
            </p>
          </div>

          <div>
            <p className="eyebrow text-ink/40 mb-5">Trade Desk</p>
            <div className="text-sm text-ink/70 leading-relaxed font-mono space-y-1.5 flex flex-col">
              <a href="tel:+919879825777" className="hover:text-saffron transition-colors">
                Phone: +91 9879825777
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=91%209879825777"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cardamom hover:underline font-semibold"
              >
                WhatsApp: +91 9879825777 ↗
              </a>
              <a href="mailto:info@alphaimpexx.in" className="hover:text-saffron transition-colors">
                info@alphaimpexx.in
              </a>
              <span className="text-ink/40 text-xs mt-1">Mon–Sat, 9:00–18:00 IST</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-ink/[0.08]" />

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink/40 font-mono">
          <span>© {new Date().getFullYear()} ALPHA IMPEXX. All rights reserved.</span>
          <span>FSSAI · APEDA · Spice Board of India Registered Exporter</span>
        </div>
      </div>
    </footer>
  );
}
