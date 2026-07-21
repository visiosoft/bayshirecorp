import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disorganized Operations | What We Solve | Bayshire",
  description:
    "When work depends on memory and individual effort instead of process, quality becomes inconsistent and growth creates chaos. Bayshire builds the operational backbone.",
};

const symptoms = [
  "Important steps are missed because there is no checklist or workflow",
  "Different team members do the same task differently",
  "Problems are solved reactively with no prevention system",
  "Quality depends on who is working, not on the process",
  "Handoffs between departments cause delays and information loss",
];

const solutions = [
  "Map and document critical workflows end to end",
  "Create SOPs and checklists for repeatable tasks",
  "Build handoff protocols between departments so nothing falls through",
  "Implement quality controls and exception handling at key process steps",
  "Design operational dashboards that surface performance in real time",
];

const deliverables = [
  "Process maps for critical workflows",
  "SOPs and checklists",
  "Handoff protocols",
  "Quality control frameworks",
  "Operational performance dashboard",
];

export default function DisorganizedOperationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <p className="mb-4 font-heading text-sm font-semibold tracking-[0.15em] uppercase text-gold">
            What We Solve
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
            Work depends on memory, WhatsApp messages, and individual effort.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            When there are no documented processes, quality is inconsistent,
            handoffs fail, and the business cannot scale beyond the capacity of
            its best individuals.
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
            If these patterns are familiar, your operations likely need
            structural design.
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
            More volume means more exceptions, more handoffs, and more places
            where informal processes fail silently. What feels like a minor
            inefficiency at ten jobs per week becomes a systemic risk at fifty.
            Each new person added without clear process creates another variation
            in how work gets done.
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
              A self-storage facility has no standard check-in process. One
              staff member collects ID, another forgets. Gate codes are shared
              via WhatsApp. Unit inspections happen inconsistently, and move-out
              charges are disputed because there is no documented condition
              report.
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
            See how Bayshire helped a storage company replace informal processes
            with documented workflows, SOPs, and quality controls across
            multiple locations.
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
            Ready to build operational structure?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            Start with the Business Health Check to identify your most critical
            process gaps — or speak directly with the Bayshire team.
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
