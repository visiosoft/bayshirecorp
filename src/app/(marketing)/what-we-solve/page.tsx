import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What We Solve | Bayshire",
  description:
    "Six structural problems that hold growing companies back. These are system issues, not effort issues — and Bayshire helps you resolve them.",
};

const problems = [
  {
    title: "Founder Dependency",
    href: "/what-we-solve/founder-dependency",
    description:
      "Your team cannot move forward without you approving, deciding, or intervening.",
  },
  {
    title: "Disorganized Operations",
    href: "/what-we-solve/disorganized-operations",
    description:
      "Work depends on memory, WhatsApp messages, and individual effort rather than process.",
  },
  {
    title: "Unclear Roles",
    href: "/what-we-solve/unclear-roles",
    description:
      "Tasks fall through the cracks because nobody knows who owns the result.",
  },
  {
    title: "Disconnected Systems",
    href: "/what-we-solve/disconnected-systems",
    description:
      "Sales, operations, finance, and management each use different information.",
  },
  {
    title: "Limited Visibility",
    href: "/what-we-solve/limited-visibility",
    description:
      "Leaders discover problems after they have already caused damage.",
  },
  {
    title: "Scaling & Multi-Location Growth",
    href: "/what-we-solve/scaling-growth",
    description:
      "The business cannot repeat its success reliably in a new team or location.",
  },
];

export default function WhatWeSolvePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <p className="mb-4 font-heading text-sm font-semibold tracking-[0.15em] uppercase text-gold">
            What We Solve
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
            Common Problems That Hold Growing Companies Back
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            These are not effort problems. Your team is working hard. These are
            structural issues — gaps in how the business is organised, how
            decisions are made, and how information flows. They do not fix
            themselves with more effort. They require deliberate design.
          </p>
        </div>
      </section>

      {/* Problem Cards Grid */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
              Six problems we see most often
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate">
              Each problem is interconnected. Solving one often reveals or
              partially resolves another. Click through to understand the
              symptoms, consequences, and how Bayshire addresses each one.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <Link
                key={problem.title}
                href={problem.href}
                className="group rounded-xl border border-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-heading text-xl font-bold text-navy transition-colors group-hover:text-gold">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {problem.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold">
                  Learn more
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-6 text-center md:px-8">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Not sure which problem to start with?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            The Business Health Check helps you identify which structural issues
            are most urgent in your company — in under ten minutes.
          </p>
          <Link
            href="/health-check"
            className="mt-10 inline-flex items-center rounded-lg bg-gold px-8 py-4 font-heading text-sm font-semibold text-navy transition-colors hover:bg-dark-gold"
          >
            Take the Business Health Check
          </Link>
        </div>
      </section>
    </>
  );
}
