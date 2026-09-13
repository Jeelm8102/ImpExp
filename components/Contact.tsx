"use client";

import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-alabaster pt-24 md:pt-32 pb-24 border-b border-ink/10 bg-grid scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
        {/* Left Column: Organization & Trade Desk Info */}
        <div>
          <p className="eyebrow text-saffron mb-3 font-semibold">Trade Desk · Surat Headquarters</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-balance mb-5 text-ink leading-tight">
            Let&apos;s draft your
            <br />
            <span className="italic text-saffron">first consignment.</span>
          </h2>
          <p className="text-ink/75 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            Fill in the form with your product requirements or connect directly with our export desk. We respond with indicative pricing, MOQ, and COA details within one business day.
          </p>

          <div className="space-y-5 font-mono text-xs sm:text-sm text-ink/80 bg-white/60 p-6 rounded-2xl border border-ink/10 shadow-2xs">
            <div>
              <p className="eyebrow text-ink/40 mb-1">Company</p>
              <p className="font-semibold text-ink text-base">ALPHA IMPEXX</p>
              <p className="text-xs text-ink/60 font-sans">Export &amp; Trading Company</p>
            </div>

            <div>
              <p className="eyebrow text-ink/40 mb-1">Registered Address</p>
              <p className="leading-relaxed">
                C-905 Green Paradise, Gaurav Path,
                <br />
                Bhesan Road, Jahangirabad,
                <br />
                Surat – 395005, Gujarat, India
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-ink/8">
              <div>
                <p className="eyebrow text-ink/40 mb-1">Direct Phone</p>
                <a
                  href="tel:+919879825777"
                  className="hover:text-saffron transition-colors font-medium inline-block"
                >
                  +91 9879825777
                </a>
              </div>

              <div>
                <p className="eyebrow text-ink/40 mb-1">WhatsApp Chat</p>
                <a
                  href="https://api.whatsapp.com/send?phone=91%209879825777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-cardamom font-semibold hover:underline"
                >
                  <span>+91 9879825777</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-ink/8">
              <div>
                <p className="eyebrow text-ink/40 mb-1">Email ID</p>
                <a
                  href="mailto:info@alphaimpexx.in"
                  className="hover:text-saffron transition-colors font-medium break-all"
                >
                  info@alphaimpexx.in
                </a>
              </div>

              <div>
                <p className="eyebrow text-ink/40 mb-1">Operating Hours</p>
                <p>Mon–Sat, 9:00–18:00 IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="border border-ink/10 rounded-3xl p-6 sm:p-10 md:p-12 bg-white/80 shadow-md">
          <div className="mb-6 pb-4 border-b border-ink/8">
            <h3 className="font-display text-2xl font-medium text-ink">Request a Proforma Quote</h3>
            <p className="text-xs text-ink/60 font-mono mt-1">Specify destination port, commodity, and target volume</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
