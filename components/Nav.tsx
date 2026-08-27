"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#showcase", label: "Products" },
  { href: "/#network", label: "Network" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" },
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
      className={`fixed top-0 inset-x-0 z-[100] transition-colors duration-500 ${scrolled ? "bg-alabaster/75 backdrop-blur-xl border-b border-ink/[0.08]" : "bg-transparent"
        }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-display text-[1.15rem]">
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none" className="text-saffron">
            <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="1" />
            <path d="M20 8 L24 19 L20 32 L16 19 Z" fill="currentColor" />
            <circle cx="20" cy="20" r="2.4" fill="#F7F3EA" />
          </svg>
          <span>
            Monsoon <span className="italic text-saffron">&amp;</span> Meridian
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10 eyebrow">
          {links.map((l) => (
            <li key={l.label} className="relative group">
              <Link href={l.href} className="opacity-75 group-hover:opacity-100 transition-opacity">
                {l.label}
              </Link>
              <span className="absolute left-0 -bottom-1.5 h-px w-0 bg-saffron transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 border border-saffron/50 text-saffron px-5 py-2.5 rounded-full eyebrow hover:bg-saffron hover:text-ink transition-colors"
        >
          Request Quote
        </Link>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-ink"
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

      {open && (
        <div className="md:hidden fixed inset-x-0 top-[88px] bottom-0 bg-alabaster/98 px-7 py-10">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-display text-2xl mb-6 hover:text-saffron transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
