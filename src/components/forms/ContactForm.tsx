"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-border bg-white px-4 py-3 text-ink text-[15px] focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors";

const labelClass = "block text-navy font-heading text-sm font-semibold mb-2";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-2xl rounded-xl bg-soft-white p-8 text-center">
        <p className="text-navy font-heading text-lg font-semibold">
          Message sent.
        </p>
        <p className="text-slate text-[15px] mt-3">
          Thank you for reaching out. We will respond within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Full name
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email address
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="bg-navy text-white px-7 py-3.5 rounded-lg font-heading text-sm font-semibold hover:bg-deep-navy transition-colors"
      >
        Send message
      </button>
    </form>
  );
}
