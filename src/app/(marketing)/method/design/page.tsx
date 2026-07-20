import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionIntro from "@/components/sections/SectionIntro";

export const metadata: Metadata = {
  title: "Design - Stage 02 | The Bayshire Method",
  description:
    "Design the business before building the solution. Bayshire's design stage creates the operating model, governance, and commercial architecture that make transformation durable.",
};

const designItems = [
  "Target operating model",
  "Organisational structure and role architecture",
  "Governance and decision-rights framework",
  "Commercial model and pricing architecture",
  "Customer experience blueprint",
  "Process architecture and workflow design",
  "Technology and data strategy",
  "Performance measurement framework",
  "Capability development plan",
  "Change management and communications strategy",
  "Risk and dependency mapping",
];

const principles = [
  {
    number: "01",
    title: "Design for the operator, not the consultant",
    description:
      "Every design must be usable by the people who will run it after we leave.",
  },
  {
    number: "02",
    title: "Commercial logic first",
    description:
      "If a design element does not link to a commercial outcome, it does not belong.",
  },
  {
    number: "03",
    title: "Fewer, better decisions",
    description:
      "Good design reduces the number of decisions that need to be made, not increases them.",
  },
  {
    number: "04",
    title: "Clarity over cleverness",
    description:
      "A design that cannot be explained in plain language is not finished.",
  },
  {
    number: "05",
    title: "Build what you can sustain",
    description:
      "Design accounts for the organisation's real capacity, not its aspirational capacity.",
  },
  {
    number: "06",
    title: "Governance is not bureaucracy",
    description:
      "Good governance accelerates decisions. Bad governance exists to diffuse accountability.",
  },
  {
    number: "07",
    title: "Sequence the transformation",
    description:
      "Not everything can change at once. Design includes the order in which change happens.",
  },
];

const outputs = [
  "Target operating model document",
  "Organisational design with role profiles",
  "Governance framework and decision-rights matrix",
  "Commercial model with unit economics",
  "Customer experience design and journey maps",
  "Process maps for core and enabling processes",
  "Technology roadmap and integration architecture",
  "KPI framework and dashboard specifications",
  "Transformation roadmap with phasing and dependencies",
  "Build-stage brief with scope, sequence, and success criteria",
];

export default function DesignPage() {
  return (
    <>
      <HeroSection
        variant="navy"
        stageLabel="STAGE 02"
        title="Design the business before building the solution."
        description="Diagnosis reveals the problem. Design creates the architecture for the business that solves it. This is where the operating model, governance, commercial structure, and capability plan take shape."
        primaryCta={{ label: "Discuss your design needs", href: "/contact" }}
        secondaryCta={{ label: "Back to Method", href: "/method" }}
      />

      {/* What is designed */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Scope"
            title="What is designed"
            description="The design stage addresses every dimension of the business that must change for the transformation to hold. Nothing is left to improvisation during Build."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {designItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-border p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 font-heading text-xs font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Principles"
            title="Design principles"
            description="These principles govern every design decision. They exist to protect the client from solutions that look good on paper but fail in practice."
          />

          <div className="mt-14 space-y-8">
            {principles.map((p) => (
              <div
                key={p.number}
                className="grid gap-4 border-t border-border pt-8 md:grid-cols-12"
              >
                <div className="md:col-span-1">
                  <span className="font-heading text-sm font-bold tracking-[0.2em] text-gold">
                    {p.number}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-heading text-lg font-bold text-navy">
                    {p.title}
                  </h3>
                </div>
                <div className="md:col-span-6 md:col-start-7">
                  <p className="leading-relaxed text-slate">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Deliverables"
            title="Outputs"
            description="The design stage produces the complete blueprint for the business the client is building. Every output feeds directly into the Build stage."
          />

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {outputs.map((output, i) => (
              <li key={i} className="flex items-start gap-3 text-slate">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">{output}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key Statement */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-[1240px] px-6 text-center md:px-8">
          <blockquote className="mx-auto max-w-3xl font-heading text-2xl font-bold leading-snug text-white md:text-3xl">
            &ldquo;A business that is well-designed is easier to build, cheaper
            to run, and simpler to scale.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 text-center md:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Design is where the blueprint takes shape.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate">
            Before building anything, the business needs an architecture that
            connects commercial logic to operational reality.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-navy px-8 py-4 font-heading text-sm font-semibold text-white transition-colors hover:bg-deep-navy"
            >
              Start a conversation
            </Link>
            <Link
              href="/method/build"
              className="inline-flex items-center rounded-lg border border-navy/20 px-8 py-4 font-heading text-sm font-semibold text-navy transition-colors hover:border-navy/40"
            >
              Next: Build Stage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
