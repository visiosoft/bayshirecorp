import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Bayshire",
  description:
    "Share the main challenge you are facing. We will review your message and respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Contact
          </p>
          <h1 className="text-white font-heading text-4xl sm:text-5xl font-bold max-w-3xl leading-tight mb-6">
            Tell Us What Is Not Working Inside Your Business
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            Share the main challenge you are facing. We will review your message
            and respond within one business day.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact details */}
            <div className="lg:col-span-2">
              <div className="bg-soft-white rounded-xl p-8 border border-border">
                <h2 className="font-heading text-xl font-semibold text-navy mb-6">
                  Other Ways to Reach Us
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-navy mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@bayshirecorp.com"
                      className="text-gold text-sm hover:text-dark-gold transition-colors"
                    >
                      info@bayshirecorp.com
                    </a>
                  </div>

                  <div>
                    <h3 className="font-heading text-sm font-semibold text-navy mb-1">
                      Location
                    </h3>
                    <p className="text-slate text-sm">
                      Dubai, United Arab Emirates
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-sm font-semibold text-navy mb-1">
                      Response Time
                    </h3>
                    <p className="text-slate text-sm">
                      We normally respond within one business day.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-sm font-semibold text-navy mb-1">
                      Prefer a Quick Assessment First?
                    </h3>
                    <p className="text-slate text-sm mb-3">
                      Take a two-minute business health check and receive your
                      score before we speak.
                    </p>
                    <Link
                      href="/health-check"
                      className="text-gold text-sm font-semibold hover:text-dark-gold transition-colors inline-flex items-center gap-1"
                    >
                      Start the Health Check
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
