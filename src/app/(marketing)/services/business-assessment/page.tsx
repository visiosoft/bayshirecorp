import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Business Assessment | Bayshire",
  description:
    "Assess the company and identify priorities across all seven business areas. Get an objective view of operations with a prioritized improvement roadmap.",
};

export default function BusinessAssessmentPage() {
  return (
    <>
      <HeroSection
        variant="navy"
        eyebrow="Services"
        title="Business Assessment"
        description="Assess the company and identify priorities."
      />

      {/* Problems This Service Solves */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8">
            Problems This Service Solves
          </h2>
          <ul className="space-y-4">
            {[
              "Not knowing where to start improving",
              "Suspecting problems but lacking evidence",
              "Needing an objective view of operations before investing",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
                <span className="text-slate leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What Bayshire Does */}
      <section className="bg-soft-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8">
            What Bayshire Does
          </h2>
          <div className="space-y-4">
            {[
              "Structured interviews with leadership and key staff",
              "Review of processes, systems, data, and financial controls",
              "Assessment across all seven business areas",
              "Identification of root causes behind recurring issues",
              "Prioritized findings and improvement roadmap",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-lg p-4 border border-border"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
                <span className="text-ink leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Deliverables */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8">
            Typical Deliverables
          </h2>
          <ul className="space-y-3">
            {[
              "Current-state assessment report",
              "Risk and opportunity map",
              "Priority matrix",
              "90-day improvement roadmap",
              "Recommended next-phase scope",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="mt-1 w-5 h-5 text-gold shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What the Client Provides */}
      <section className="bg-soft-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8">
            What the Client Provides
          </h2>
          <ul className="space-y-3">
            {[
              "Access to leadership for interviews",
              "Access to key systems and documents",
              "2–3 weeks of staff availability",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-navy shrink-0" />
                <span className="text-slate leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Project Boundaries */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8">
            Project Boundaries
          </h2>
          <div className="bg-soft-white border border-border rounded-xl p-6">
            <p className="text-slate leading-relaxed">
              Does not include implementation — focused on assessment and
              planning.
            </p>
          </div>
        </div>
      </section>

      {/* Example Scenario */}
      <section className="bg-soft-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8">
            Example
          </h2>
          <blockquote className="border-l-4 border-gold pl-6">
            <p className="text-ink leading-relaxed italic">
              &ldquo;A logistics company growing at 30% per year suspected its
              operations were not keeping pace. Bayshire assessed all seven
              business areas and identified that 60% of recurring issues stemmed
              from undefined handoff points between sales and
              operations.&rdquo;
            </p>
          </blockquote>
          <div className="mt-8">
            <p className="text-xs text-muted font-semibold tracking-[0.2em] uppercase mb-2">
              Related Case Study
            </p>
            <Link
              href="/case-studies/purplebox-storage"
              className="text-gold font-semibold hover:text-dark-gold transition-colors"
            >
              Purplebox Storage &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Find out where your business stands today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/health-check"
              className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
            >
              Take the Business Health Check
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 border border-white/30 text-white font-semibold text-sm rounded-lg hover:border-white/60 transition-colors"
            >
              Speak With Bayshire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
