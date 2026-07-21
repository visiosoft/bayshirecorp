import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founder Dependency | What We Solve | Bayshire",
  description:
    "When the business cannot move without the owner, growth stalls. Bayshire helps you build decision systems, role clarity, and a second layer of leadership.",
};

const symptoms = [
  "Staff wait for the owner to approve routine decisions",
  "The owner is the only one who knows certain critical processes",
  "The business slows down when the owner is unavailable",
  "Key client relationships depend entirely on one person",
  "There is no second layer of management that can operate independently",
];

const solutions = [
  "Clarify authority and decision rights so routine decisions happen without the owner",
  "Build role scorecards with measurable responsibilities for every position",
  "Create escalation frameworks that define what goes up and what gets resolved locally",
  "Design management routines — weekly, monthly, quarterly — that maintain alignment",
  "Develop a second layer of leadership capable of owning outcomes",
];

const deliverables = [
  "Authority and decision matrix",
  "Role scorecards",
  "Escalation framework",
  "Management meeting structure",
  "Leadership development plan",
];

export default function FounderDependencyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <p className="mb-4 font-heading text-sm font-semibold tracking-[0.15em] uppercase text-gold">
            What We Solve
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
            Your team cannot move forward without you.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Founder dependency is the most common structural constraint in
            growing businesses. It limits capacity, creates bottlenecks, and
            makes the owner the single point of failure.
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
            If several of these sound familiar, founder dependency is likely
            constraining your business.
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
            As the company adds people, locations, or clients, the number of
            decisions the owner must handle grows faster than their capacity.
            What worked when the team was five people becomes unsustainable at
            twenty. The owner becomes the constraint — not because they lack
            ability, but because the system was never designed to work without
            them.
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
              A moving company owner personally approves every quote, handles
              every complaint, and manages every large client. When they take a
              week off, three quotes are delayed and a service complaint
              escalates because no one has authority to resolve it.
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
            Purplebox Moving
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
            See how Bayshire helped a moving company reduce founder dependency by
            building decision frameworks, role scorecards, and a management
            operating rhythm.
          </p>
          <Link
            href="/case-studies/purplebox-moving"
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
            Ready to reduce founder dependency?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            Start with the Business Health Check to see where your business
            stands — or speak directly with the Bayshire team.
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
