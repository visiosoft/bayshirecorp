import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finance | Bayshire",
  description:
    "Turn financial reporting into executive visibility. Bayshire examines management reporting, profitability, cash flow, unit economics, budgeting, controls, and capital allocation.",
};

const symptoms = [
  "Monthly financials arrive too late to inform decisions",
  "Profitability is reported at the company level but not by product, customer, or channel",
  "Cash flow surprises are frequent despite positive P&L results",
  "Budgets are set annually and never revisited",
  "No one outside finance understands the numbers well enough to act on them",
  "Investment decisions are made on gut feel rather than structured analysis",
];

const diagnoseQuestions = [
  "How quickly after month-end do decision-makers receive management reports?",
  "Can you identify which products, services, or customers are most and least profitable?",
  "Is there a rolling cash flow forecast, and how accurate has it been?",
  "What are your unit economics and how do they change at different volumes?",
  "How is the budget built—top-down target, bottom-up build, or a combination?",
  "What financial controls exist to prevent errors, fraud, or unplanned spending?",
  "How are investment decisions evaluated and approved?",
  "Does leadership have a clear capital allocation framework?",
];

const designOutputs = [
  "Management reporting pack with executive-ready dashboards",
  "Profitability model by product, customer segment, and channel",
  "Cash flow forecasting methodology and template",
  "Unit economics framework with sensitivity analysis",
  "Budgeting and forecasting process redesign",
  "Financial controls matrix with ownership and review cadence",
  "Investment appraisal framework and decision criteria",
  "Capital allocation policy and governance structure",
];

const buildItems = [
  "Automated management reporting pipeline",
  "Profitability dashboards accessible to operational leaders",
  "Rolling cash flow forecast integrated with operations data",
  "Working capital improvement initiatives",
  "Budget-to-actual variance review cadence",
  "Financial controls implementation and audit schedule",
  "Investment decision committee and approval workflow",
  "Scenario-based financial planning models",
];

const scaleItems = [
  "Financial reports reach decision-makers within days of month-end",
  "Every business unit understands its own profitability and cash impact",
  "Cash flow is forecasted, monitored, and managed proactively",
  "Budgets are living tools that adapt to changing conditions",
  "Investment decisions follow a consistent, evidence-based process",
  "Finance is a strategic partner to operations, not just a reporting function",
];

export default function FinancePage() {
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
            <span className="text-gold">Finance</span>
          </nav>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Turn financial reporting into executive visibility.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            How do we create, measure, protect, and allocate economic value? This
            pillar examines management reporting, profitability, cash flow,
            working capital, unit economics, budgeting and forecasting, controls,
            investment decisions, and capital allocation.
          </p>
        </div>
      </section>

      {/* Why This Pillar Matters */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Why Finance matters
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate">
            Finance is not just about keeping the books. It is the language in
            which the business measures whether its strategy is working, its
            operations are efficient, and its customers are worth serving. When
            finance operates as a backward-looking compliance function, leaders
            fly blind. When it operates as a forward-looking decision support
            system, every other pillar gets sharper.
          </p>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="bg-soft-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Common symptoms of a weak finance pillar
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
            See how Bayshire examines Finance as part of the full system.
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
