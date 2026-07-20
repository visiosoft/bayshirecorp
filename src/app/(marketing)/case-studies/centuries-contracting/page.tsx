import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionIntro from "@/components/sections/SectionIntro";

export const metadata: Metadata = {
  title: "Centuries Contracting Case Study — Bayshire Corp",
  description:
    "How Bayshire helped a construction and contracting business gain financial visibility, project-level profitability, and governance structure for growth.",
};

/* ---------- Data ---------- */

const challenges = [
  "Project-level profitability was invisible — the business knew total revenue but not which projects made money",
  "Cash flow was unpredictable, with payment cycles and cost overruns creating constant pressure",
  "Governance gaps emerged as the team grew beyond the founder's direct oversight",
  "No structured management reporting — decisions were based on instinct rather than data",
  "Approval workflows were informal, creating risk as project values and team size increased",
];

const outcomes = [
  {
    label: "Project profitability visibility",
    value: "[VERIFY METRIC]",
    description:
      "Percentage of active projects with real-time P&L tracking.",
  },
  {
    label: "Cash flow forecasting",
    value: "[VERIFY METRIC]",
    description:
      "Improvement in forecast accuracy over a rolling 90-day window.",
  },
  {
    label: "Reporting cadence",
    value: "[VERIFY METRIC]",
    description:
      "Time from month-end close to management report delivery.",
  },
  {
    label: "Governance compliance",
    value: "[VERIFY METRIC]",
    description:
      "Adoption rate of structured approval workflows across all projects.",
  },
];

/* ================================================================
   Page Component
   ================================================================ */

export default function CenturiesContractingCaseStudyPage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <HeroSection
        variant="navy"
        stageLabel="CASE STUDY — CONSTRUCTION & CONTRACTING"
        title="Bringing financial visibility and governance to a growing contracting business."
        description="Centuries Contracting needed to move from instinct-driven decisions to structured financial reporting, project-level profitability tracking, and governance that could support a growing team and project portfolio."
      />

      {/* ===== Context ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="CONTEXT" title="Where the business stood" />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              Centuries Contracting had grown steadily on the strength of its
              reputation and the founder's deep industry expertise. But as the
              number of concurrent projects increased and the team expanded,
              the informal systems that had worked at a smaller scale began to
              break down.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              The business was profitable in aggregate, but nobody could say
              with confidence which projects were making money, where cash
              was being consumed, or whether the current trajectory was
              sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Challenge ===== */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="CHALLENGE" title="What needed to change" />

          <ul className="mt-8 max-w-3xl space-y-4">
            {challenges.map((item) => (
              <li
                key={item}
                className="text-slate text-[17px] leading-relaxed border-l-2 border-gold pl-5"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Diagnose ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="DIAGNOSE" title="Understanding the financial and governance gaps" />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              Bayshire conducted a comprehensive financial process review,
              project costing analysis across active and recently completed
              projects, and a governance assessment covering decision-making
              authority, approval workflows, and risk management practices.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              The diagnostic revealed that cost allocation was inconsistent
              across projects, there was no standard method for tracking
              variations and change orders, and the business lacked the
              reporting infrastructure to support timely decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Design ===== */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="DESIGN" title="Designing the reporting and governance framework" />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              Bayshire designed a management reporting framework that gave
              leadership monthly visibility into project-level P&L, company-wide
              cash flow, and key operational metrics. A project-level P&L
              structure was created to standardise how costs, revenue, and
              margin were tracked across all engagements.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              Approval workflows were designed with clear thresholds —
              procurement, variation orders, subcontractor commitments, and
              payment authorisations each had defined approval paths based on
              value and risk.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Build ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="BUILD" title="Implementing the financial infrastructure" />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              Bayshire configured the ERP system to support project-level cost
              tracking, automated invoice matching, and real-time budget
              monitoring. Dashboards were implemented to give the founder and
              project managers immediate visibility into project health,
              cash position, and margin performance.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              A monthly reporting cadence was established with standardised
              templates covering project performance, cash flow forecasts, and
              exception reporting. Each report was designed to drive decisions,
              not just document history.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Scale ===== */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="SCALE" title="Building for portfolio-level management" />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              With project-level visibility established, Bayshire built a
              multi-project portfolio view that aggregates performance data
              across all active engagements. This allows leadership to see
              total exposure, resource allocation, and margin trends across
              the entire business — not just project by project.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              Risk-adjusted forecasting was introduced to account for the
              inherent variability in construction projects, and a board
              reporting package was created to support governance as the
              business grows beyond founder-led decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Outcomes ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="OUTCOMES" title="Verified results" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {outcomes.map((outcome) => (
              <div
                key={outcome.label}
                className="bg-soft-white rounded-xl p-6"
              >
                <p className="text-gold font-heading text-2xl font-bold">
                  {outcome.value}
                </p>
                <p className="text-navy font-heading text-sm font-semibold mt-2">
                  {outcome.label}
                </p>
                <p className="text-slate text-sm mt-1">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-muted text-sm italic mt-6">
            All metrics are pending final verification. Bayshire does not publish
            unverified outcomes.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold font-heading">
            Discuss a similar business challenge
          </h2>

          <p className="text-white/80 text-lg mt-6 max-w-xl mx-auto">
            Every engagement starts with a diagnostic conversation — no pitch
            decks, no generic frameworks. Just an honest look at what needs to
            change and how to change it.
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
