import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disconnected Systems | What We Solve | Bayshire",
  description:
    "When departments use different information, decisions conflict and reporting becomes manual. Bayshire designs integrated information architecture and automated reporting.",
};

const symptoms = [
  "The same data is entered in multiple places",
  "Reports require manual compilation from different tools",
  "Departments make decisions based on different versions of the truth",
  "Customer information is scattered across spreadsheets, email, and messaging apps",
  "No one has a single view of business performance",
];

const solutions = [
  "Design an integrated information architecture that connects all departments",
  "Define the source of truth for each data type so there is one correct version",
  "Specify system integration requirements to eliminate duplicate entry",
  "Implement CRM and operational tools that work together",
  "Build automated reporting that replaces manual compilation",
];

const deliverables = [
  "Information architecture diagram",
  "Data flow and integration specification",
  "CRM and system requirements",
  "Automated reporting setup",
  "Technology implementation roadmap",
];

export default function DisconnectedSystemsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <p className="mb-4 font-heading text-sm font-semibold tracking-[0.15em] uppercase text-gold">
            What We Solve
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
            Sales, operations, finance, and management use different
            information.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            When every department has its own spreadsheet, its own tool, and its
            own version of the truth, decisions conflict and leadership flies
            blind.
          </p>
        </div>
      </section>

      {/* Symptoms */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Recognizable symptoms
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
            If your team spends more time compiling data than acting on it,
            disconnected systems are likely the cause.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.map((symptom) => (
              <div
                key={symptom}
                className="rounded-xl border border-border p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <p className="text-base leading-relaxed text-ink">
                    {symptom}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Gets Worse */}
      <section className="bg-soft-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Why this gets worse as you grow
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            Every new tool or department adds another silo unless information
            architecture is designed deliberately. What starts as two
            spreadsheets becomes ten tools with no integration. The cost of
            reconciliation grows exponentially, and the risk of decisions made on
            wrong data increases with every new data source.
          </p>
        </div>
      </section>

      {/* Real Example */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <div className="rounded-xl border border-border bg-soft-white p-8 md:p-12">
            <p className="mb-3 font-heading text-sm font-semibold tracking-[0.15em] uppercase text-gold">
              Real Example
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-ink">
              A service company tracks leads in a spreadsheet, jobs in a project
              tool, invoices in accounting software, and customer feedback in
              email. The owner spends two hours each week manually building a
              report that is already outdated.
            </p>
          </div>
        </div>
      </section>

      {/* How Bayshire Addresses This */}
      <section className="bg-soft-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            How Bayshire addresses this
          </h2>
          <ul className="mt-10 space-y-5">
            {solutions.map((solution) => (
              <li
                key={solution}
                className="flex items-start gap-3 text-lg text-ink"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                {solution}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Typical deliverables
          </h2>
          <ul className="mt-10 space-y-4">
            {deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-lg text-ink"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Case Study */}
      <section className="bg-soft-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <p className="mb-3 font-heading text-sm font-semibold tracking-[0.15em] uppercase text-gold">
            Related Case Study
          </p>
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Purplebox Storage
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
            See how Bayshire helped a storage company replace disconnected tools
            with an integrated information architecture and automated reporting.
          </p>
          <Link
            href="/case-studies/purplebox-storage"
            className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold hover:text-dark-gold"
          >
            Read the case study
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTAs */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-6 text-center md:px-8">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Ready to connect your systems?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            Start with the Business Health Check to identify your information
            gaps — or speak directly with the Bayshire team.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/health-check"
              className="inline-flex items-center rounded-lg bg-gold px-8 py-4 font-heading text-sm font-semibold text-navy transition-colors hover:bg-dark-gold"
            >
              Take the Business Health Check
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-white/30 px-8 py-4 font-heading text-sm font-semibold text-white transition-colors hover:border-white/60"
            >
              Speak With Bayshire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
