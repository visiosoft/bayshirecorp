import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scaling & Multi-Location Growth | What We Solve | Bayshire",
  description:
    "When the business cannot repeat its success in a new location or team, growth stalls. Bayshire builds repeatable operating models, playbooks, and training systems.",
};

const symptoms = [
  "Opening a new location requires the founder to be personally involved in every detail",
  "The company cannot maintain quality when the owner is not present",
  "Training new staff takes months because knowledge is not documented",
  "Each location or team develops its own way of working",
  "Growth increases revenue but not profitability",
];

const solutions = [
  "Standardize the operating model across locations so every site runs the same way",
  "Build comprehensive training and onboarding systems that transfer knowledge reliably",
  "Create location launch playbooks that make opening predictable and repeatable",
  "Design centralized management and reporting so leadership has visibility across all sites",
  "Establish quality standards and audit processes that maintain consistency at scale",
];

const deliverables = [
  "Standardized operating model",
  "Training and onboarding system",
  "Location launch playbook",
  "Centralized reporting and management structure",
  "Quality audit and compliance framework",
];

export default function ScalingGrowthPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <p className="mb-4 font-heading text-sm font-semibold tracking-[0.15em] uppercase text-gold">
            What We Solve
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
            The business cannot repeat its success reliably in a new team or
            location.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Scaling is not just about opening more locations or hiring more
            people. It requires a repeatable operating model that works without
            the founder in the room.
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
            If growth feels harder than it should, these patterns suggest a
            scaling problem.
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
            Without a repeatable operating model, each new location or team
            requires the same founder effort as the first. The economics of
            growth break down: revenue scales linearly while management
            complexity scales exponentially. Each new site inherits different
            practices, creating an inconsistent brand and unpredictable quality.
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
              A storage company opens a second facility but struggles because
              all processes were in the first manager's head. The new team makes
              different decisions about pricing, customer service, and
              maintenance, creating an inconsistent brand experience.
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
            See how Bayshire helped a storage company build a repeatable
            operating model, location launch playbook, and centralized reporting
            to support multi-location growth.
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
            Ready to scale with confidence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            Start with the Business Health Check to assess your scaling
            readiness — or speak directly with the Bayshire team.
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
