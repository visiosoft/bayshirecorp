import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionIntro from "@/components/sections/SectionIntro";

export const metadata: Metadata = {
  title: "The Bayshire Method | Business Transformation Consulting",
  description:
    "A four-stage method for business transformation: Diagnose, Design, Build, Scale. Bayshire helps companies move from disorder to durable operating performance.",
};

const stages = [
  {
    number: "01",
    name: "Diagnose",
    href: "/method/diagnose",
    question: "What is actually going on?",
    outputs: [
      "Business MRI report",
      "Root-cause map",
      "Stakeholder alignment brief",
      "Prioritised opportunity register",
      "Diagnostic summary deck",
    ],
  },
  {
    number: "02",
    name: "Design",
    href: "/method/design",
    question: "What should the business look like when it works?",
    outputs: [
      "Target operating model",
      "Capability architecture",
      "Commercial model",
      "Governance framework",
      "Transformation roadmap",
    ],
  },
  {
    number: "03",
    name: "Build",
    href: "/method/build",
    question: "How do we make it real?",
    outputs: [
      "Implemented processes and systems",
      "Recruited or restructured teams",
      "Embedded governance cadence",
      "Performance dashboards",
      "Knowledge transfer packs",
    ],
  },
  {
    number: "04",
    name: "Scale",
    href: "/method/scale",
    question: "How do we grow without breaking what works?",
    outputs: [
      "Scale-readiness assessment",
      "Playbook for replication",
      "Unit economics model",
      "Capacity planning framework",
      "Growth governance structure",
    ],
  },
];

const differentiators = [
  {
    title: "Sequence matters",
    description:
      "Each stage unlocks the next. Skipping ahead is how most transformations fail.",
  },
  {
    title: "Diagnosis before prescription",
    description:
      "We do not begin with a solution. We begin with the problem worth solving.",
  },
  {
    title: "Ownership transfers",
    description:
      "The method is designed to leave. Clients run the result, not Bayshire.",
  },
  {
    title: "Evidence over intuition",
    description:
      "Every recommendation is grounded in data, interviews, and observed behaviour.",
  },
  {
    title: "Operator mindset",
    description:
      "We build what we would want to run. No theoretical frameworks disconnected from operations.",
  },
  {
    title: "Commercial rigour",
    description:
      "Every design decision links to a commercial outcome. Transformation that does not improve the business is decoration.",
  },
];

export default function MethodPage() {
  return (
    <>
      <HeroSection
        variant="navy"
        eyebrow="The Bayshire Method"
        title="Transformation without sequence becomes activity."
        description="Most businesses know something needs to change. Few know where to start, what to change first, or how to make it last. The Bayshire Method is a four-stage discipline that turns diagnosis into design, design into build, and build into scale."
        primaryCta={{ label: "Start with a Business MRI", href: "/contact" }}
        secondaryCta={{ label: "Explore Stage 01", href: "/method/diagnose" }}
      />

      {/* Four-Stage Narrative */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Four stages"
            title="A method, not a menu"
            description="The stages are sequential by design. Each one produces the inputs the next requires. Skipping a stage does not save time; it creates debt that compounds."
            centered
          />

          <div className="mt-16 space-y-16 md:mt-20">
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="grid gap-8 border-t border-border pt-10 md:grid-cols-12"
              >
                <div className="md:col-span-1">
                  <span className="font-heading text-sm font-bold tracking-[0.2em] text-gold">
                    {stage.number}
                  </span>
                </div>

                <div className="md:col-span-5">
                  <Link href={stage.href} className="group">
                    <h3 className="font-heading text-2xl font-bold text-navy group-hover:text-gold transition-colors">
                      {stage.name}
                    </h3>
                  </Link>
                  <p className="mt-2 text-lg italic text-slate">
                    {stage.question}
                  </p>
                </div>

                <div className="md:col-span-5 md:col-start-8">
                  <p className="mb-3 text-xs font-semibold tracking-[0.1em] uppercase text-muted">
                    Key outputs
                  </p>
                  <ul className="space-y-2">
                    {stage.outputs.map((output) => (
                      <li
                        key={output}
                        className="flex items-start gap-2 text-slate"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {output}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={stage.href}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold transition-colors"
                  >
                    Explore {stage.name}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Why it works"
            title="What makes the method different"
            centered
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 text-center md:px-8">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Every transformation begins with clarity.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            The Business MRI is a structured diagnostic that reveals where the
            real problems are, before a single recommendation is made.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center rounded-lg bg-gold px-8 py-4 font-heading text-sm font-semibold text-navy transition-colors hover:bg-[#d4b76e]"
          >
            Request a Business MRI
          </Link>
        </div>
      </section>
    </>
  );
}
