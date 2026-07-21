"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "w-full rounded-lg border border-border bg-white px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors placeholder:text-muted";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-soft-white p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gold">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-semibold text-navy mb-2">
          Message Sent
        </h3>
        <p className="text-slate text-base">
          Thank you for reaching out. We will review your message and respond
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
            Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">
            Company <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className={inputClass}
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
            Work Email <span className="text-error">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
            Phone or WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={inputClass}
            placeholder="+971 ..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="challenge" className="block text-sm font-medium text-navy mb-1.5">
          Primary Challenge <span className="text-error">*</span>
        </label>
        <textarea
          id="challenge"
          name="challenge"
          required
          rows={4}
          className={`${inputClass} resize-y`}
          placeholder="Describe the main challenge you are facing..."
        />
      </div>

      <div>
        <label htmlFor="contact-method" className="block text-sm font-medium text-navy mb-1.5">
          Preferred Contact Method
        </label>
        <select
          id="contact-method"
          name="contact-method"
          className={inputClass}
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-border text-gold focus:ring-gold"
        />
        <label htmlFor="consent" className="text-sm text-slate leading-relaxed">
          I agree to Bayshire collecting and processing my information to respond
          to this inquiry. See our{" "}
          <a href="/privacy" className="text-gold hover:text-dark-gold underline">
            privacy policy
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
      >
        Send My Inquiry
      </button>
    </form>
  );
}
