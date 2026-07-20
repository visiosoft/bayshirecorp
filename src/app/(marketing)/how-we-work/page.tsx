import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionIntro from "@/components/sections/SectionIntro";

export const metadata: Metadata = {
  title: "How We Work — Bayshire Corp",
  description:
    "What to expect from an engagement with Bayshire. A structured approach to diagnosing, designing, building, and scaling business systems.",
};

/* ---------- Data ---------- */

const engagementSections = [
  {
    number: "01",
    title: "We begin with the objective",
    description:
      "Every engagement starts by defining the outcome the business is trying to achieve. We do not begin with a solution — we begin with a clear understanding of where the business needs to go and what is preventing it from getting there. This ensures that every decision, system, and process we build is anchored to a measurable objective.",
  },
  {
    number: "02",
    title: "We define the evidence",
    description:
      "Before any work begins, we establish how success will be measured. This means identifying the specific metrics, indicators, and benchmarks that will tell us — and the client — whether the engagement is producing results. If we cannot define the evidence of progress, we do not proceed.",
  },
  {
    number: "03",
    title: "We work with the people responsible",
    description:
      "Transformation does not happen in a boardroom. It happens in the teams that execute daily. We embed alongside the people who own the processes, make the decisions, and deliver the work. This is not a top-down mandate — it is a structured collaboration with the people who will operate the systems after we leave.",
  },
  {
    number: "04",
    title: "We make decisions visible",
    description:
      "Most businesses struggle not because of a lack of effort but because of a lack of visibility. We surface the decisions that are being made — and the ones that are not — so the leadership team can see the operating model as it actually functions. Dashboards, reports, and governance structures replace guesswork and gut feel.",
  },
  {
    number: "05",
    title: "We build internal capability",
    description:
      "Our goal is to make ourselves unnecessary. Every system we design is built to be owned and operated by the client. Every process includes documentation, training, and handover. We do not create dependency — we build the internal capability for the business to sustain the change independently.",
  },
  {
    number: "06",
    title: "We measure the change",
    description:
      "At the end of every engagement, we return to the evidence defined at the start. We verify whether the objectives have been met, document what changed, and identify any remaining gaps. This is not a subjective assessment — it is a structured review against the benchmarks we established together.",
  },
];

const clientExpectations = [
  "A clear diagnostic before any recommendations are made",
  "Transparent communication — including the uncomfortable findings",
  "Structured deliverables at every stage with defined timelines",
  "Systems designed to be owned by your team, not dependent on ours",
  "Measurable outcomes verified against agreed benchmarks",
  "A partner who stays through implementation, not just planning",
];

const bayshireExpectations = [
  "Active participation from the founder or primary decision-maker",
  "Access to the people, data, and systems needed to diagnose accurately",
  "Willingness to act on findings, even when they challenge assumptions",
  "Commitment to the timeline and process agreed at the start",
  "Honest communication about constraints, concerns, and changing priorities",
  "Internal ownership of the systems we build together",
];

/* ================================================================
   Page Component
   ================================================================ */

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        variant="navy"
        eyebrow="HOW WE WORK"
        title="What to expect from an engagement with Bayshire."
        description="Every engagement follows a structured methodology — from diagnosis to verified outcome. Here is how the work unfolds."
        primaryCta={{ label: "Start your diagnosis", href: "/start" }}
      />

      {/* Six engagement sections */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro
            eyebrow="OUR APPROACH"
            title="Six principles that guide every engagement"
          />

          <div className="mt-14 space-y-8">
            {engagementSections.map((section) => (
              <div
                key={section.number}
                className="bg-soft-white rounded-xl p-8 md:p-10"
              >
                <span className="text-gold font-heading text-sm font-bold tracking-[0.15em]">
                  {section.number}
                </span>
                <h3 className="text-navy font-heading text-xl md:text-2xl font-bold mt-3">
                  {section.title}
                </h3>
                <p className="text-slate text-[16px] leading-relaxed mt-4 max-w-3xl">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What clients should expect */}
            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-navy font-heading text-xl font-semibold">
                What clients should expect
              </h3>
              <ul className="mt-6 space-y-4">
                {clientExpectations.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate text-[15px] leading-relaxed"
                  >
                    <span className="text-gold mt-[2px] shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Bayshire expects */}
            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-navy font-heading text-xl font-semibold">
                What Bayshire expects
              </h3>
              <ul className="mt-6 space-y-4">
                {bayshireExpectations.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate text-[15px] leading-relaxed"
                  >
                    <span className="text-gold mt-[2px] shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold font-heading">
            Ready to begin?
          </h2>
          <p className="text-white/80 text-lg mt-6 max-w-xl mx-auto text-center">
            Every engagement starts with the Business MRI. Apply now to begin
            the diagnostic process.
          </p>
          <Link
            href="/start"
            className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors mt-10"
          >
            Start Your Diagnosis
          </Link>
        </div>
      </section>
    </>
  );
}
