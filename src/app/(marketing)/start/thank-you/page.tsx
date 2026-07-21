import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application Received — Bayshire",
  description:
    "Thank you for your application. We will review it and respond within 48 hours.",
};

const valueLinks = [
  {
    href: "/health-check",
    label: "Take the Business Health Check",
  },
  {
    href: "/method/diagnose",
    label: "Read about our diagnostic methodology",
  },
  {
    href: "/case-studies/purplebox-storage",
    label: "See how we helped Purplebox Storage",
  },
];

export default function ThankYouPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-2xl mx-auto text-center px-6">
        {/* Checkmark icon */}
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
          <span className="text-gold text-2xl font-bold">&#10003;</span>
        </div>

        <h1 className="text-navy font-heading text-3xl md:text-4xl font-bold mt-8">
          Your information has been received.
        </h1>
        <p className="text-slate text-lg leading-relaxed mt-6">
          Thank you for taking the time to complete the application. We will
          review your submission and respond within 48 hours with a fit
          assessment and recommended next steps.
        </p>

        {/* While you wait */}
        <div className="mt-12 bg-soft-white rounded-xl p-8 text-left">
          <h2 className="text-navy font-heading text-xl font-semibold">
            While you wait
          </h2>

          <div className="mt-6 space-y-4">
            {valueLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-border hover:border-gold transition-colors group"
              >
                <span className="text-navy font-heading text-sm font-semibold">
                  {link.label}
                </span>
                <span className="text-gold group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
