"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function FormContent() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [productVal, setProductVal] = useState("");

  useEffect(() => {
    const p = searchParams.get("product");
    if (p) {
      setProductVal(p);
    }
  }, [searchParams]);

  if (submitted) {
    return (
      <div className="border border-saffron/40 rounded-2xl p-10 text-center">
        <span className="text-saffron w-14 h-14 mx-auto flex items-center justify-center text-[10px] font-mono mb-6 rounded-full border border-saffron/60">
          SENT
        </span>
        <h3 className="font-display text-2xl mb-2">Inquiry logged.</h3>
        <p className="text-ink/60 text-sm">
          Our trade desk will respond to your inquiry within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-8"
    >
      <div className="grid sm:grid-cols-2 gap-8">
        <Field label="Full name" name="name" placeholder="Jane Müller" required />
        <Field label="Company" name="company" placeholder="Global Foods GmbH" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        <Field label="Email" name="email" type="email" placeholder="jane@globalfoods.com" required />
        <Field label="Destination port" name="port" placeholder="Rotterdam, NL" />
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="products" className="eyebrow text-ink/50 block mb-3">
            Product(s) of interest
          </label>
          <input
            id="products"
            name="products"
            type="text"
            value={productVal}
            onChange={(e) => setProductVal(e.target.value)}
            placeholder="e.g. Powder Spices, Whole Spices, Dried Herbs"
            className="w-full bg-transparent border-b border-ink/25 focus:border-saffron outline-none py-2 text-ink placeholder:text-ink/30 transition-colors"
          />
        </div>
        <Field label="Estimated volume" name="volume" placeholder="1x 20ft container / month" />
      </div>
      <div>
        <label className="eyebrow text-ink/50 block mb-3">Message / Specifications</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your target grading, packaging requirements, target price and shipment timeline."
          className="w-full bg-transparent border-b border-ink/25 focus:border-saffron outline-none py-2 text-ink placeholder:text-ink/30 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="bg-saffron text-ink px-8 py-4 rounded-full font-medium text-sm hover:bg-ink hover:text-alabaster transition-colors"
      >
        Submit Inquiry
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="py-12 text-center text-ink/40 font-mono text-xs">Loading form...</div>}>
      <FormContent />
    </Suspense>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-ink/50 block mb-3">
        {label}
        {required && <span className="text-saffron"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-ink/25 focus:border-saffron outline-none py-2 text-ink placeholder:text-ink/30 transition-colors"
      />
    </div>
  );
}
