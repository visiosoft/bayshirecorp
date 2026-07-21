import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Case Studies — Bayshire",
  description:
    "Transformation is more useful when the work behind it is visible. Explore how Bayshire has helped businesses redesign their operations.",
};

/* ---------- Data ---------- */

const caseStudies = [
  {
    sector: "Self-Storage",
    title:
      "Building the operating foundation for a modern self-storage business.",
    teaser:
      "From fragmented operations and manual processes to a structured, technology-enabled storage business ready to scale across the UAE.",
    href: "/case-studies/purplebox-storage",
  },
  {
    sector: "Moving & Relocation",
    title:
      "Redesigning the moving experience from first quote to final delivery.",
    teaser:
      "Transforming a traditional moving company into a structured, customer-centric operation with automated quoting, real-time tracking, and predictable unit economics.",
    href: "/case-studies/purplebox-moving",
  },
  {
    sector: "Construction & Contracting",
    title:
      "Bringing financial clarity and project discipline to a growing contracting firm.",
    teaser:
      "From reactive project management and opaque financials to structured delivery, real-time cost tracking, and scalable project operations.",
    href: "/case-studies/centuries-contracting",
  },
];

/* ================================================================
   Page Component
   ================================================================ */

export default function CaseStudiesPage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <HeroSection
        variant="navy"
        eyebrow="CASE STUDIES"
        title="Transformation is more useful when the work behind it is visible."
        description="Each engagement follows the same methodology — Diagnose, Design, Build, Scale — but every business demands a different application. These studies show the work."
      />

      {/* ===== Case Study Cards ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.href}
                href={cs.href}
                className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Placeholder image */}
                <div className="h-48 bg-light-surface" />

                {/* Body */}
                <div className="p-7">
                  <span className="inline-block bg-gold/10 text-gold text-xs font-heading font-semibold tracking-wide uppercase px-3 py-1 rounded-full">
                    {cs.sector}
                  </span>

                  <h3 className="text-navy font-heading text-lg font-semibold mt-4 group-hover:text-gold transition-colors">
                    {cs.title}
                  </h3>

                  <p className="text-slate text-[15px] leading-relaxed mt-3">
                    {cs.teaser}
                  </p>

                  <span className="text-navy font-heading text-sm font-semibold mt-5 inline-block hover:text-gold transition-colors">
                    Read case study &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold font-heading">
            Have a similar challenge?
          </h2>

          <p className="text-white/80 text-lg mt-6 max-w-xl mx-auto text-center">
            Every Bayshire engagement starts with a diagnostic conversation. No
            pitch decks. No generic proposals. Just a clear-eyed look at what
            needs to change and what it will take to change it.
          </p>

          <Link
            href="/health-check"
            className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors mt-10"
          >
            Take the Business Health Check
          </Link>
        </div>
      </section>
    </>
  );
}
