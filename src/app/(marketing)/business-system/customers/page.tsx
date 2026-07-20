import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customers | Bayshire",
  description:
    "Understand what customers experience—not just what you intend to deliver. Bayshire examines customer segmentation, journeys, service standards, retention, and economics.",
};

const symptoms = [
  "Customer complaints keep recurring but root causes remain unaddressed",
  "There is no shared definition of who the ideal customer is",
  "Retention rates are declining and no one can explain why",
  "The sales team promises things the delivery team cannot fulfil",
  "Customer feedback is collected but never acted upon systematically",
  "Acquisition costs are rising while lifetime value stays flat",
];

const diagnoseQuestions = [
  "Can you name your three most valuable customer segments and what each values most?",
  "Is there a documented customer journey for your core offering?",
  "How do you measure what customers actually experience versus what you intend to deliver?",
  "What is your customer retention rate and how has it changed over the past twelve months?",
  "How are customer complaints captured, categorised, and resolved?",
  "What are the unit economics of acquiring and retaining a customer in each segment?",
  "Do service standards exist, and are frontline teams held accountable to them?",
  "How do you decide which customers to say no to?",
];

const designOutputs = [
  "Customer segmentation model with needs and value profiles",
  "End-to-end customer journey map with pain points and moments of truth",
  "Service standards framework with measurable benchmarks",
  "Voice-of-customer programme design",
  "Customer feedback loop and escalation process",
  "Retention and loyalty strategy with leading indicators",
  "Customer economics model linking acquisition cost to lifetime value",
];

const buildItems = [
  "Customer feedback capture and triage system",
  "Service-level agreements tied to operational processes",
  "Customer health scoring and early-warning dashboard",
  "Onboarding and first-value experience redesign",
  "Complaint resolution workflow with root-cause tracking",
  "Loyalty or retention programme rollout",
  "Regular customer review cadence for account management",
  "Segment-specific value propositions for sales and marketing",
];

const scaleItems = [
  "Every team knows which customer segments matter most and why",
  "Service standards are measured and reviewed on a fixed rhythm",
  "Customer feedback drives product, operations, and policy decisions",
  "Retention and lifetime value improve quarter over quarter",
  "The organisation can describe what customers experience—not just what it intends to deliver",
];

export default function CustomersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 px-6">
        <div className="mx-auto max-w-[1240px]">
          <nav className="mb-8 text-sm">
            <Link href="/business-system" className="text-gold hover:underline">
              Business System
            </Link>
            <span className="mx-2 text-white/50">/</span>
            <span className="text-gold">Customers</span>
          </nav>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Understand what customers experience&mdash;not just what you intend
            to deliver.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            Whom do we serve, what do they value, and what do they experience?
            This pillar examines customer segmentation, needs and jobs to be
            done, customer journey, service standards, feedback and complaints,
            retention and loyalty, and customer economics.
          </p>
        </div>
      </section>

      {/* Why This Pillar Matters */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Why Customers matters
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate">
            Revenue comes from customers, yet most businesses know remarkably
            little about what those customers actually experience. They track
            satisfaction scores but miss the journey. They segment by revenue but
            not by need. They react to complaints but never fix the system that
            produces them. Without a clear view of the customer, every other
            pillar optimises in the dark.
          </p>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="bg-soft-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Common symptoms of a weak customers pillar
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.map((symptom, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-white p-6"
              >
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-navy font-heading text-xs font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="leading-relaxed text-slate">{symptom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions During Diagnose */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Questions Bayshire asks during Diagnose
          </h2>
          <ol className="mt-10 space-y-4 max-w-3xl">
            {diagnoseQuestions.map((question, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-xs font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 leading-relaxed text-slate">{question}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What Is Created During Design */}
      <section className="bg-soft-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            What is created during Design
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 max-w-3xl">
            {designOutputs.map((output, i) => (
              <li key={i} className="flex items-start gap-3 text-slate">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">{output}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What May Be Implemented During Build */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            What may be implemented during Build
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 max-w-3xl">
            {buildItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What Scale Looks Like */}
      <section className="bg-soft-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            What scale looks like
          </h2>
          <ul className="mt-10 space-y-4 max-w-3xl">
            {scaleItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="mx-auto max-w-[1240px]">
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            See how Bayshire examines Customers as part of the full system.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/business-mri"
              className="inline-flex items-center rounded-lg bg-gold px-8 py-4 font-heading text-sm font-semibold text-navy transition-colors hover:bg-dark-gold"
            >
              Explore the Business MRI
            </Link>
          </div>
          <div className="mt-6">
            <Link
              href="/business-system"
              className="text-sm text-white/70 underline hover:text-white"
            >
              Back to the Seven Pillars
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
