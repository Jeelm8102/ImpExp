"use client";

const PILLARS = [
  {
    num: "01",
    title: "Premium Product Quality",
    desc: "Every product is carefully sourced and inspected to meet international quality benchmarks.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Global Export Expertise",
    desc: "Deep understanding of international markets, customs regulations, and logistics.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Reliable Supply Chain",
    desc: "Efficient sourcing, processing, and delivery network ensuring consistent supply.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Customer-Centric Approach",
    desc: "Building lasting partnerships through transparency, communication, and service.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const ACCREDITATIONS = [
  "DGFT (IEC)",
  "APEDA Registered",
  "Spice Board of India",
  "FSSAI Licensed",
  "FIEO Member",
  "SGCCI Surat Member",
];

export default function About() {
  return (
    <section id="about" className="relative bg-alabaster pt-14 md:pt-18 pb-20 md:pb-24 border-b border-ink/10 scroll-mt-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="eyebrow text-saffron mb-2 font-semibold">About Us</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-ink leading-tight mb-4">
            About <span className="text-saffron font-medium">ALPHA IMPEXX</span>
          </h2>
          <p className="text-ink/80 text-base sm:text-lg md:text-xl font-light leading-relaxed">
            A fast-growing export company based in Surat, Gujarat, specializing in the global supply of premium-quality agricultural products and commodities.
          </p>

          {/* Location / Gateways Pill */}
          <div className="mt-5 pt-4 border-t border-ink/10 flex flex-wrap items-center gap-y-2 gap-x-4 font-mono text-xs text-ink/65 uppercase tracking-wider">
            <div>HQ: <span className="text-ink font-semibold">Surat, Gujarat, India</span></div>
            <span className="text-ink/30">·</span>
            <div>GATEWAYS: <span className="text-ink font-semibold">Hazira, Mundra, Mumbai &amp; Chennai</span></div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p) => (
            <div
              key={p.num}
              className="bg-white border border-ink/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-saffron/60 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-saffron tracking-widest font-bold">
                    {p.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-alabaster flex items-center justify-center text-saffron border border-ink/5 group-hover:bg-saffron group-hover:text-ink transition-colors">
                    {p.icon}
                  </div>
                </div>
                <h3 className="font-display text-lg sm:text-xl text-ink font-medium mb-2.5 group-hover:text-paprika transition-colors">
                  {p.title}
                </h3>
                <p className="text-ink/75 text-xs sm:text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statutory Compliance Badges */}
        <div className="mt-10 pt-6 border-t border-ink/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="eyebrow text-ink/50 font-semibold text-xs">Statutory Registrations &amp; Compliance</span>
          <div className="flex flex-wrap gap-2">
            {ACCREDITATIONS.map((acc) => (
              <span
                key={acc}
                className="bg-white border border-ink/12 px-3.5 py-1.5 rounded-full text-xs text-ink/80 font-mono font-medium shadow-2xs"
              >
                {acc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
