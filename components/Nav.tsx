"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#showcase", label: "Products" },
  { href: "/#network", label: "Network" },
  { href: "/#process", label: "Process" },
  { href: "/#insights", label: "Insights" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-colors duration-500 ${scrolled ? "bg-alabaster/85 backdrop-blur-xl border-b border-ink/[0.08]" : "bg-transparent"
        }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-[64px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group py-1" aria-label="ALPHA IMPEXX Home">
          <img
            src="/logo.png"
            alt="ALPHA IMPEXX - Empowering Global Trade"
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 eyebrow">
          {links.map((l) => (
            <li key={l.label} className="relative group">
              <a href={l.href} className="opacity-75 group-hover:opacity-100 transition-opacity">
                {l.label}
              </a>
              <span className="absolute left-0 -bottom-1.5 h-px w-0 bg-saffron transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <a
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 border border-saffron/60 text-saffron px-5 py-2 rounded-full eyebrow hover:bg-saffron hover:text-ink transition-colors font-semibold shadow-2xs"
        >
          Request Quote
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-ink cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bottom-0 bg-alabaster/98 backdrop-blur-xl px-7 py-8 border-t border-ink/10 flex flex-col justify-between">
          <div className="space-y-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-display text-2xl hover:text-saffron transition-colors text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-ink/10">
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-saffron text-ink py-3.5 rounded-full font-medium text-sm hover:bg-ink hover:text-alabaster transition-colors shadow-sm"
            >
              Request a Quote →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
