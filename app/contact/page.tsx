import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Monsoon & Meridian",
  description: "Get a quote for bulk spice, pulse and food staple exports from Monsoon & Meridian.",
};

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <section className="relative bg-alabaster pt-40 pb-24 bg-grid">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-16">
          <div>
            <p className="eyebrow text-saffron mb-4">Trade Desk</p>
            <h1 className="font-display text-4xl md:text-5xl font-light text-balance mb-8">
              Let&apos;s draft your
              <br />
              <span className="italic text-saffron">first consignment.</span>
            </h1>
            <p className="text-ink/60 leading-relaxed mb-10 max-w-sm">
              Fill in the form and our trade desk will come back with
              indicative pricing, MOQ and lead time — typically within one
              business day.
            </p>

            <div className="space-y-6 font-mono text-sm text-ink/70">
              <div>
                <p className="eyebrow text-ink/40 mb-1">Head Office</p>
                <p>Willingdon Island, Kochi, Kerala 682003, India</p>
              </div>
              <div>
                <p className="eyebrow text-ink/40 mb-1">Phone</p>
                <p>+91 484 220 1994</p>
              </div>
              <div>
                <p className="eyebrow text-ink/40 mb-1">Email</p>
                <p>trade@monsoonmeridian.com</p>
              </div>
              <div>
                <p className="eyebrow text-ink/40 mb-1">Hours</p>
                <p>Mon–Sat, 9:00–18:00 IST</p>
              </div>
            </div>
          </div>

          <div className="border border-ink/10 rounded-3xl p-8 md:p-12 bg-white/40">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
