"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-saffron/40 rounded-2xl p-10 text-center">
        <span className="text-saffron w-14 h-14 mx-auto flex items-center justify-center text-[10px] font-mono mb-6 rounded-full border border-saffron/60">
          SENT
        </span>
        <h3 className="font-display text-2xl mb-2">Inquiry logged.</h3>
        <p className="text-alabaster/60 text-sm">
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
        <Field label="Product(s) of interest" name="products" placeholder="Cardamom, Turmeric powder" />
        <Field label="Estimated volume" name="volume" placeholder="1x 20ft container / month" />
      </div>
      <div>
        <label className="eyebrow text-alabaster/50 block mb-3">Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your requirement, target price and timeline."
          className="w-full bg-transparent border-b border-alabaster/25 focus:border-saffron outline-none py-2 text-alabaster placeholder:text-alabaster/30 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="bg-saffron text-ink px-8 py-4 rounded-full font-medium text-sm hover:bg-alabaster transition-colors"
      >
        Submit Inquiry
      </button>
    </form>
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
      <label htmlFor={name} className="eyebrow text-alabaster/50 block mb-3">
        {label}
        {required && <span className="text-saffron"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-alabaster/25 focus:border-saffron outline-none py-2 text-alabaster placeholder:text-alabaster/30 transition-colors"
      />
    </div>
  );
}
