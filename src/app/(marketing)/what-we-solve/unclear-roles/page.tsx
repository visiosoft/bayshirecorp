import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unclear Roles | What We Solve | Bayshire",
  description:
    "When nobody knows who owns the result, tasks are missed and accountability breaks down. Bayshire builds role clarity, scorecards, and performance frameworks.",
};

const symptoms = [
  "Multiple people think someone else is responsible for a task",
  "Work falls through the cracks between departments",
  "Performance reviews have no clear criteria",
  "People are busy but key results are not improving",
  "New hires are unclear about what success looks like in their role",
];

const solutions = [
  "Build a capability map of all business functions to identify gaps and overlaps",
  "Create role scorecards with measurable KPIs for every position",
  "Define a responsibility and authority matrix so every task has a clear owner",
  "Design performance review processes tied to role expectations",
  "Establish accountability routines — weekly, monthly, quarterly — that reinforce ownership",
];

const deliverables = [
  "Capability and function map",
  "Role scorecards with KPIs",
  "RACI or responsibility matrix",
  "Performance management framework",
  "Team accountability structure",
];

export default function UnclearRolesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <p className="mb-4 font-heading text-sm font-semibold tracking-[0.15em] uppercase text-gold">
            What We Solve
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
            Tasks are missed because nobody knows who owns the result.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            When roles are undefined, adding people multiplies confusion rather
            than capacity. Work falls through the cracks, accountability
            disappears, and performance becomes impossible to measure.
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
            If these patterns are common in your company, role clarity is likely
            a root cause.
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
            Adding staff without clear role definitions multiplies confusion
            rather than capacity. Each new hire inherits ambiguity. Overlapping
            responsibilities create friction. Gaps in ownership mean critical
            tasks have no one accountable. The larger the team, the more
            expensive this confusion becomes — in wasted effort, missed
            deadlines, and employee frustration.
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
              In a contracting company, both the project manager and the site
              supervisor believe the other is responsible for ordering materials.
              Delays occur repeatedly, but neither person is held accountable
              because the responsibility was never formally assigned.
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
            Centuries Contracting
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
            See how Bayshire helped a contracting company eliminate role
            ambiguity by building capability maps, role scorecards, and a
            responsibility matrix.
          </p>
          <Link
            href="/case-studies/centuries-contracting"
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
            Ready to build role clarity?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            Start with the Business Health Check to see where accountability
            gaps exist — or speak directly with the Bayshire team.
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
