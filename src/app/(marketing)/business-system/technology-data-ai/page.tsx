import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology, Data & AI | Bayshire",
  description:
    "Use technology to improve the business—not to avoid designing it. Bayshire examines tech architecture, CRM/ERP, integrations, data, dashboards, cybersecurity, automation, and AI.",
};

const symptoms = [
  "Systems were purchased to solve problems that were never clearly defined",
  "Data lives in disconnected spreadsheets and no one trusts the numbers",
  "The business has multiple tools doing overlapping jobs with no integration",
  "Cybersecurity is handled reactively—patching after incidents rather than preventing them",
  "AI is discussed enthusiastically but no one can point to a use case that is live and delivering value",
  "Technology decisions are made by vendors or IT alone, without business involvement",
];

const diagnoseQuestions = [
  "What is the current technology architecture and how well do systems talk to each other?",
  "Is there a single source of truth for customer, financial, and operational data?",
  "Who owns data quality, and how are errors detected and corrected?",
  "What dashboards or reports exist, and do leaders actually use them to make decisions?",
  "What is the cybersecurity posture—access controls, backup, incident response?",
  "Where is automation already in place and where are the most manual, repetitive processes?",
  "Has the organisation identified specific AI use cases tied to business outcomes?",
  "How are technology vendors and products selected, evaluated, and managed?",
];

const designOutputs = [
  "Technology architecture map with integration points and data flows",
  "Data model and ownership framework",
  "CRM/ERP assessment with gap analysis",
  "Dashboard and reporting specification for key decision-makers",
  "Cybersecurity and access control policy framework",
  "Automation opportunity register prioritised by impact and feasibility",
  "AI use-case evaluation matrix linked to business objectives",
  "Vendor and product selection criteria and governance process",
];

const buildItems = [
  "System integration projects to eliminate data silos",
  "Master data management and data quality routines",
  "Executive and operational dashboard rollout",
  "CRM or ERP implementation, migration, or optimisation",
  "Cybersecurity hardening—access controls, backups, monitoring",
  "Process automation for high-volume, repetitive workflows",
  "AI pilot projects with defined success criteria and measurement",
  "Technology governance committee and vendor review cadence",
];

const scaleItems = [
  "Technology decisions are driven by business needs, not vendor pitches",
  "Data is trusted, accessible, and used to make decisions at every level",
  "Systems are integrated so information flows without manual re-entry",
  "Automation handles repetitive work, freeing people for judgment-based tasks",
  "AI is applied to specific, measurable use cases—not treated as a magic solution",
  "Cybersecurity is proactive, with clear policies and regular review",
];

export default function TechnologyDataAIPage() {
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
            <span className="text-gold">Technology, Data &amp; AI</span>
          </nav>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Use technology to improve the business&mdash;not to avoid designing
            it.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            What information and systems improve execution, control, and
            decisions? This pillar examines tech architecture, CRM/ERP,
            integrations, data model and ownership, dashboards, cybersecurity and
            access controls, automation, AI use cases, and vendor and product
            selection.
          </p>
        </div>
      </section>

      {/* Why This Pillar Matters */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Why Technology, Data &amp; AI matters
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate">
            Technology is an accelerant, not a foundation. When the underlying
            business system is unclear, technology amplifies the
            confusion&mdash;automating broken processes, generating dashboards no
            one reads, and creating integration projects that never end. When the
            system is clear, the right technology makes execution faster, data
            more trustworthy, and decisions more informed. The question is never
            &ldquo;what technology should we buy?&rdquo; but &ldquo;what problem
            are we solving and does technology help?&rdquo;
          </p>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="bg-soft-white py-16 px-6">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Common symptoms of a weak technology, data &amp; AI pillar
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
            See how Bayshire examines Technology, Data &amp; AI as part of the
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
