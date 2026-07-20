import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionIntro from "@/components/sections/SectionIntro";

export const metadata: Metadata = {
  title: "Business MRI — Bayshire Corp",
  description:
    "A structured diagnostic that examines seven pillars of your business before recommending change. See what is working, what is not, and where to start.",
};

const pillars = [
  {
    number: "01",
    title: "Strategy & Positioning",
    description:
      "Is the business competing on the right terms? Is the value proposition clear, differentiated, and aligned with market reality?",
  },
  {
    number: "02",
    title: "Customer Acquisition & Retention",
    description:
      "Is the pipeline predictable? Are acquisition costs sustainable? Is the business retaining and expanding its best accounts?",
  },
  {
    number: "03",
    title: "Sales & Marketing",
    description:
      "Are sales and marketing operating as a system? Is messaging consistent, and does the funnel move prospects to revenue efficiently?",
  },
  {
    number: "04",
    title: "Operations & Delivery",
    description:
      "Is the business delivering consistently? Are workflows documented, repeatable, and free of unnecessary friction?",
  },
  {
    number: "05",
    title: "Financial Health & Unit Economics",
    description:
      "Does leadership have real-time visibility into financial performance? Are margins healthy? Is pricing aligned with value delivered?",
  },
  {
    number: "06",
    title: "Leadership, Governance & People",
    description:
      "Is decision-making structured? Are roles clear? Does the team operate with accountability and without founder bottlenecks?",
  },
  {
    number: "07",
    title: "Technology, Data & AI Readiness",
    description:
      "Is the tech stack enabling or constraining the business? Is data accessible, accurate, and used for decisions?",
  },
];

const deliverables = [
  {
    title: "Executive Business Health Score",
    description:
      "A single, defensible score across all seven pillars — with a breakdown showing relative strength and weakness.",
  },
  {
    title: "Root-Cause Map",
    description:
      "A visual diagnostic showing how issues across pillars are connected — and which root causes are creating the most downstream drag.",
  },
  {
    title: "Priority Matrix",
    description:
      "A clear ranking of what to fix first based on impact, effort, and risk — so leadership can act without second-guessing.",
  },
  {
    title: "Data & Technology Opportunity Map",
    description:
      "An assessment of where automation, integration, and AI can eliminate waste and unlock new capability.",
  },
  {
    title: "Founder Dependency Analysis",
    description:
      "A structured view of where the business relies too heavily on one person — and what it would take to distribute those functions.",
  },
  {
    title: "90-Day Action Plan",
    description:
      "A phased roadmap of the first 90 days — with specific initiatives, owners, and measurable outcomes.",
  },
];

const steps = [
  {
    title: "Application",
    description:
      "Submit a short application describing your business and the challenge you are facing.",
  },
  {
    title: "Fit Assessment",
    description:
      "We review the application and confirm whether the MRI is the right starting point.",
  },
  {
    title: "Kickoff Call",
    description:
      "A 60-minute call to align on objectives, scope, and access requirements.",
  },
  {
    title: "Data & Document Review",
    description:
      "We examine financials, org charts, tech stack, customer data, and operational workflows.",
  },
  {
    title: "Stakeholder Interviews",
    description:
      "Structured interviews with founders, leadership, and key team members.",
  },
  {
    title: "Pillar-by-Pillar Analysis",
    description:
      "Each of the seven pillars is assessed independently using Bayshire's diagnostic framework.",
  },
  {
    title: "Synthesis & Scoring",
    description:
      "Findings are mapped together, scored, and translated into a coherent diagnostic narrative.",
  },
  {
    title: "Readout & Recommendations",
    description:
      "A 90-minute session to walk through findings, answer questions, and agree on next steps.",
  },
];

const goodFit = [
  "Revenue between $1M and $30M",
  "Founder-led or family-owned business",
  "Experiencing growth but feeling operational drag",
  "Willing to examine all areas of the business",
  "Open to structural change, not just surface fixes",
  "Committed to a 90-day engagement minimum",
];

const poorFit = [
  "Looking for a quick audit or checklist",
  "Not willing to share financial or operational data",
  "Expecting results without internal involvement",
  "Seeking validation rather than honest diagnosis",
  "Pre-revenue or pre-product businesses",
  "Already working with another transformation partner",
];

export default function BusinessMRIPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        eyebrow="BUSINESS MRI"
        title="See the business clearly before deciding what to change."
        description="The Business MRI is a structured diagnostic that examines seven pillars of your company — so you can see what is working, what is not, and where to focus first."
        primaryCta={{ label: "Apply for a Business MRI", href: "/start" }}
        secondaryCta={{ label: "See case studies", href: "/case-studies" }}
        variant="navy"
      />

      {/* What is examined */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro
            eyebrow="THE SEVEN PILLARS"
            title="What is examined"
            description="Each pillar is assessed independently, then mapped together to reveal how issues in one area are creating drag across the business."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white border border-border rounded-xl p-7"
              >
                <span className="text-gold font-heading text-sm font-bold">
                  {pillar.number}
                </span>
                <h3 className="text-navy font-heading text-lg font-semibold mt-3">
                  {pillar.title}
                </h3>
                <p className="text-slate text-[15px] leading-relaxed mt-2">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the client receives */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro
            eyebrow="DELIVERABLES"
            title="What the client receives"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-7 border border-border"
              >
                <h3 className="text-navy font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-slate text-[15px] leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro
            eyebrow="PROCESS"
            title="How it works"
            description="The MRI follows a structured eight-step process designed to minimise disruption while maximising diagnostic depth."
          />
          <div className="mt-14 space-y-6">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy text-white font-heading text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-navy font-heading text-base font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-slate text-[15px] leading-relaxed mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Good fit / Poor fit */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro
            eyebrow="IS THIS RIGHT FOR YOU"
            title="Good fit vs. poor fit"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {/* Good fit */}
            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-navy font-heading text-xl font-semibold mb-6">
                Good fit
              </h3>
              <ul className="space-y-3">
                {goodFit.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-slate text-[15px]"
                  >
                    <span className="text-gold font-bold">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Poor fit */}
            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-navy font-heading text-xl font-semibold mb-6">
                Poor fit
              </h3>
              <ul className="space-y-3">
                {poorFit.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-slate text-[15px]"
                  >
                    <span className="text-muted font-bold">&#10007;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-white font-heading text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
            Ready to see what is really happening inside the business?
          </h2>
          <p className="text-white/80 text-lg mt-6 max-w-xl mx-auto">
            The MRI is where every Bayshire engagement begins. Apply now and we
            will schedule a fit assessment within 48 hours.
          </p>
          <Link
            href="/start"
            className="bg-gold text-navy px-7 py-3.5 rounded-lg font-heading text-sm font-semibold hover:bg-[#d4b76e] transition-colors inline-flex mt-8"
          >
            Apply for a Business MRI
          </Link>
        </div>
      </section>
    </>
  );
}
