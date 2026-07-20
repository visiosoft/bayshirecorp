import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership & Governance | Bayshire",
  description:
    "Make accountability, decisions, and management rhythms explicit. Bayshire examines org structure, leadership capability, decision rights, culture, performance management, and governance.",
};

const symptoms = [
  "Decisions stall because no one is sure who has the authority to make them",
  "Accountability is diffuse—when something fails, ownership is unclear",
  "Meetings happen frequently but rarely produce decisions or follow-through",
  "The organisation depends on one or two individuals for critical knowledge",
  "New hires take too long to become productive and often leave early",
  "Culture is described in aspirational terms that do not match daily behaviour",
];

const diagnoseQuestions = [
  "Is there a clear organisational chart and do people actually follow it?",
  "How are decisions made—who decides what, and is that documented?",
  "What is the management meeting rhythm and does it drive accountability?",
  "How are roles and responsibilities defined, and are there gaps or overlaps?",
  "What does the recruitment process look like and how long does onboarding take?",
  "How is individual and team performance measured and reviewed?",
  "Are incentives aligned with the behaviours the business actually needs?",
  "What governance structures exist for policies, compliance, and risk oversight?",
];

const designOutputs = [
  "Organisational structure review with reporting lines and spans of control",
  "Decision rights framework (RACI or equivalent) for key decisions",
  "Management meeting rhythm with agenda templates and accountability rules",
  "Role descriptions with clear ownership boundaries",
  "Leadership capability assessment and development plan",
  "Recruitment and onboarding process design",
  "Performance management framework with review cadence",
  "Governance and policy review structure",
];

const buildItems = [
  "Decision rights register published and communicated across the organisation",
  "Weekly, monthly, and quarterly management meeting cadence",
  "Updated role descriptions with measurable accountabilities",
  "Leadership development programme or coaching engagements",
  "Structured recruitment and onboarding workflow",
  "Performance review cycle with calibration process",
  "Incentive and recognition programme aligned to strategy",
  "Policy register with ownership, review dates, and compliance tracking",
];

const scaleItems = [
  "Every decision has a clear owner and a defined process",
  "Management meetings follow a rhythm that drives accountability and resolution",
  "New hires reach productivity quickly through a structured onboarding process",
  "Leadership capability is developed deliberately, not left to chance",
  "Culture is reinforced through systems—incentives, reviews, and governance—not just words",
  "The organisation can operate effectively even when key individuals are absent",
];

export default function LeadershipGovernancePage() {
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
            <span className="text-gold">Leadership &amp; Governance</span>
          </nav>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Make accountability, decisions, and management rhythms explicit.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            Who owns the outcome, who decides, and how does the organisation stay
            accountable? This pillar examines org structure, leadership
            capability, roles and responsibilities, decision rights, recruitment
            and development, culture and incentives, performance management,
            meeting rhythms, policies, and governance.
          </p>
        </div>
      </section>

      {/* Why This Pillar Matters */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Why Leadership &amp; Governance matters
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate">
            Every business system ultimately depends on people making decisions
            and being held accountable for outcomes. When leadership is informal
            and governance is absent, the organisation drifts. Priorities
            conflict, authority is ambiguous, and talented people leave because
            they cannot see how their work connects to anything larger. This
            pillar makes the invisible architecture of accountability visible and
            deliberate.
          </p>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="bg-soft-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Common symptoms of a weak leadership &amp; governance pillar
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
            See how Bayshire examines Leadership &amp; Governance as part of the
            full system.
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
