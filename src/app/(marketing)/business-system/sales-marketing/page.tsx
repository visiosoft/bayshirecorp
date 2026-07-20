import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sales & Marketing | Bayshire",
};

const symptoms = [
  "Revenue is unpredictable from quarter to quarter",
  "Marketing generates leads that sales does not convert",
  "The sales process is informal or inconsistent",
  "Pricing decisions are reactive rather than strategic",
  "There is no clear pipeline or conversion metrics",
  "Customer acquisition cost is unknown or rising",
];

const diagnoseQuestions = [
  "Is there a documented sales process with defined stages?",
  "How are leads generated, qualified, and handed off?",
  "What are the conversion rates at each stage of the pipeline?",
  "How is pricing determined and reviewed?",
  "Is marketing activity measured by contribution to revenue?",
  "How accurate is the revenue forecast?",
  "Are sales and marketing aligned on target segments and messaging?",
];

const designOutputs = [
  "Go-to-market strategy aligned to customer segments",
  "Sales process map with stage definitions and criteria",
  "Lead scoring and qualification framework",
  "Pricing architecture and packaging strategy",
  "Marketing-to-sales handoff protocol",
  "Revenue forecasting model",
  "Channel strategy and partner programme design",
];

const buildItems = [
  "CRM pipeline configuration and adoption programme",
  "Sales playbook and objection-handling guides",
  "Marketing automation and campaign infrastructure",
  "Pricing review and adjustment process",
  "Sales enablement content library",
  "Revenue dashboard with leading and lagging indicators",
  "Sales and marketing alignment meetings and shared KPIs",
];

const scaleItems = [
  "Revenue is predictable and forecasts are reliable",
  "Sales and marketing operate as a single revenue function",
  "Pipeline health is visible and reviewed weekly",
  "Pricing is strategic and regularly validated",
  "Customer acquisition cost is known and managed",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-slate">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SalesMarketingPage() {
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
            <span className="text-gold">Sales &amp; Marketing</span>
          </nav>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl max-w-3xl">
            Build a revenue engine that converts consistently and forecasts
            reliably.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Revenue is not the responsibility of one team. It is the output of a
            system that creates demand, qualifies it, converts it, and retains
            it. When the system is broken, no amount of sales pressure
            compensates.
          </p>
        </div>
      </section>

      {/* Why This Pillar Matters */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy">
            Why Sales &amp; Marketing matters
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate">
            Many businesses treat marketing as brand awareness and sales as
            closing deals. The gap between is where revenue dies. A functioning
            revenue engine connects positioning to demand generation to pipeline
            management to conversion -- with clear handoffs, shared metrics, and
            predictable output.
          </p>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="bg-soft-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy">
            Common symptoms of a weak sales and marketing pillar
          </h2>
          <div className="mt-8">
            <BulletList items={symptoms} />
          </div>
        </div>
      </section>

      {/* Questions During Diagnose */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy">
            Questions Bayshire asks during Diagnose
          </h2>
          <div className="mt-8">
            <BulletList items={diagnoseQuestions} />
          </div>
        </div>
      </section>

      {/* What Is Created During Design */}
      <section className="bg-soft-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy">
            What is created during Design
          </h2>
          <div className="mt-8">
            <BulletList items={designOutputs} />
          </div>
        </div>
      </section>

      {/* What May Be Implemented During Build */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy">
            What may be implemented during Build
          </h2>
          <div className="mt-8">
            <BulletList items={buildItems} />
          </div>
        </div>
      </section>

      {/* What Scale Looks Like */}
      <section className="bg-soft-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy">
            What scale looks like
          </h2>
          <div className="mt-8">
            <BulletList items={scaleItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 px-6 text-center">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-lg text-white/80">
            See how Bayshire examines Sales &amp; Marketing as part of the full
            system.
          </p>
          <div className="mt-8">
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
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Back to the Seven Pillars
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
