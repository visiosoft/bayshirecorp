import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strategy & Direction | Bayshire",
  description:
    "Strategy is the logic that connects purpose, priorities, and resource allocation. Bayshire examines whether your organisation has a clear direction that every team can follow.",
};

const symptoms = [
  "Growth has stalled but leadership cannot agree on why",
  "Strategic priorities shift every quarter without resolution",
  "Resources are spread across too many initiatives",
  "The competitive position is unclear or undifferentiated",
  "Departments pursue conflicting goals",
  "Long-term planning is absent or disconnected from daily operations",
];

const diagnoseQuestions = [
  "Can every senior leader articulate the same strategic priorities?",
  "Is there a documented strategy that is actively referenced?",
  "How are resources allocated—by strategy or by politics?",
  "What is the company’s theory of competitive advantage?",
  "How often is the strategy reviewed and updated?",
  "Are strategic trade-offs made explicit or avoided?",
  "Does the organisation have a planning rhythm that connects long-term goals to short-term execution?",
];

const designOutputs = [
  "Refined strategic narrative and positioning statement",
  "Priority matrix linking initiatives to strategic goals",
  "Resource allocation framework",
  "Competitive landscape analysis and differentiation map",
  "Growth model with clear assumptions and metrics",
  "Strategic planning calendar and review cadence",
  "Risk register aligned to strategic bets",
];

const buildItems = [
  "Quarterly strategic review process",
  "OKR or priority-setting framework",
  "Executive alignment workshops",
  "Strategic dashboard with leading indicators",
  "Initiative portfolio management system",
  "Scenario planning exercises",
  "Board-level strategy reporting template",
];

const scaleItems = [
  "Every team can connect daily work to a strategic priority",
  "Resource allocation follows strategy, not legacy",
  "Trade-offs are explicit and documented",
  "Strategic reviews happen on a fixed rhythm and drive real decisions",
  "The organisation can articulate why it wins and where it is headed",
];

export default function StrategyPage() {
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
            <span className="text-gold">Strategy &amp; Direction</span>
          </nav>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Know where you are going&mdash;and make every resource serve that
            direction.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            Strategy is not a document filed after an offsite. It is the logic
            that connects purpose, priorities, and resource allocation&mdash;so
            that every part of the business moves in the same direction.
          </p>
        </div>
      </section>

      {/* Why This Pillar Matters */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Why Strategy &amp; Direction matters
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate">
            Without a clear strategic direction, every department optimises
            locally. Marketing targets one audience while sales pursues another.
            Product builds features no one asked for. Finance funds initiatives
            that contradict the growth model. Strategy provides the frame that
            makes every other decision coherent.
          </p>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="bg-soft-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Common symptoms of a weak strategy pillar
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
            See how Bayshire examines Strategy &amp; Direction as part of the
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
