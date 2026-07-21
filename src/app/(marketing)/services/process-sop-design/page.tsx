import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Process & SOP Design | Bayshire",
  description:
    "Create clear workflows, checklists, standards, controls, and training materials. Eliminate inconsistency and reduce onboarding time.",
};

export default function ProcessSopDesignPage() {
  return (
    <>
      <HeroSection
        variant="navy"
        eyebrow="Services"
        title="Process & SOP Design"
        description="Create clear workflows, checklists, standards, controls, and training materials."
      />

      {/* Problems This Service Solves */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8">
            Problems This Service Solves
          </h2>
          <ul className="space-y-4">
            {[
              "Work depends on individual memory and experience",
              "Quality varies by who performs the task",
              "Training new staff takes too long",
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
              "Map current processes and identify gaps",
              "Design standardized workflows with clear steps",
              "Create SOPs, checklists, and quality standards",
              "Build training materials for each process",
              "Define exception handling and escalation procedures",
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
              "Process maps and workflow diagrams",
              "Standard operating procedures",
              "Checklists and quality standards",
              "Training guides",
              "Exception handling protocols",
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
              "Access to staff performing the work",
              "Existing documentation",
              "Time for process walkthroughs",
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
              Covers process design and documentation — technology
              implementation handled separately.
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
              &ldquo;A storage company&rsquo;s check-in process varied by staff
              member. Bayshire mapped the current process, identified 12
              inconsistencies, and created a standardized workflow with
              checklist, quality gates, and training guide.&rdquo;
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
