import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Operations | Bayshire",
  description:
    "Make reliable execution the normal way of working. Bayshire examines workflow, capacity, scheduling, quality, service delivery, controls, SOPs, and continuous improvement.",
};

const symptoms = [
  "Quality is inconsistent and depends on which team member is working",
  "Deadlines are routinely missed without early warning",
  "Processes exist on paper but are not followed in practice",
  "The same operational problems recur month after month",
  "Capacity is either overstretched or underutilised with no visibility into which",
  "Handoffs between teams create delays, errors, and finger-pointing",
];

const diagnoseQuestions = [
  "Are your core delivery processes documented and followed consistently?",
  "How do you know whether today’s workload matches available capacity?",
  "What happens when quality falls below standard—is there a defined escalation path?",
  "How are scheduling conflicts and resource bottlenecks surfaced and resolved?",
  "Do you have standard operating procedures for your most critical workflows?",
  "How is continuous improvement structured—or does it happen only after a crisis?",
  "What controls exist to prevent errors before they reach the customer?",
  "How do you measure operational efficiency and where are the biggest losses?",
];

const designOutputs = [
  "Process maps for core delivery workflows",
  "Capacity planning model with demand and supply variables",
  "Quality management framework with inspection and prevention controls",
  "Standard operating procedures for critical processes",
  "Scheduling and resource allocation methodology",
  "Continuous improvement programme design",
  "Operational KPI dashboard specification",
  "Handoff and escalation protocols between teams",
];

const buildItems = [
  "Workflow management system implementation",
  "Capacity and scheduling dashboards",
  "Quality checklists and inspection routines",
  "SOP library with version control and training integration",
  "Daily and weekly operational review cadence",
  "Root-cause analysis process for recurring issues",
  "Inventory or asset tracking system",
  "Operational controls and exception-handling procedures",
];

const scaleItems = [
  "Delivery quality is consistent regardless of which team member is involved",
  "Capacity is visible and managed proactively, not reactively",
  "Standard operating procedures are living documents that teams actually use",
  "Continuous improvement is a regular rhythm, not a reaction to failure",
  "Operational metrics are reviewed weekly and drive real decisions",
  "The organisation can scale output without proportionally scaling headcount",
];

export default function OperationsPage() {
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
            <span className="text-gold">Operations</span>
          </nav>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Make reliable execution the normal way of working.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            How do we deliver the promise consistently, efficiently, and at the
            required quality? This pillar examines workflow, capacity,
            scheduling, quality, service delivery, inventory and assets,
            controls, SOPs, and continuous improvement.
          </p>
        </div>
      </section>

      {/* Why This Pillar Matters */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Why Operations matters
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate">
            Strategy sets the direction and customers define the standard, but
            operations is where the promise is kept or broken every day. When
            operations are weak, the business survives on heroics&mdash;individual
            effort that cannot scale, cannot be measured, and cannot be
            transferred. Reliable execution is not about perfection; it is about
            building a system that delivers consistently and improves
            deliberately.
          </p>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="bg-soft-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Common symptoms of a weak operations pillar
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
            See how Bayshire examines Operations as part of the full system.
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
