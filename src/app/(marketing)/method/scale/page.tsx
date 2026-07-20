import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionIntro from "@/components/sections/SectionIntro";

export const metadata: Metadata = {
  title: "Scale - Stage 04 | The Bayshire Method",
  description:
    "Scale the result, not the disorder that came before it. Bayshire's scale stage ensures that growth amplifies what works rather than replicating what does not.",
};

const scaleQuestions = [
  "Can the current model support two times, five times, or ten times the volume without proportional cost increase?",
  "Which processes will break first under growth pressure?",
  "Does the organisation have the leadership bench to manage a larger operation?",
  "Are the unit economics improving, stable, or deteriorating as volume grows?",
  "Can the customer experience be maintained at higher volume?",
  "Is the governance structure designed for a larger, more complex business?",
  "Which capabilities need to be built, bought, or partnered for the next stage of growth?",
  "What is the right sequence for geographic, product, or segment expansion?",
];

const scaleOutputs = [
  {
    title: "Scale-Readiness Assessment",
    description:
      "A structured evaluation of whether the business is ready to scale, and what must be strengthened before growth is pursued.",
  },
  {
    title: "Replication Playbook",
    description:
      "A documented, tested approach for replicating the operating model in new markets, segments, or geographies.",
  },
  {
    title: "Unit Economics Model",
    description:
      "A financial model that tracks how unit economics behave under different growth scenarios and identifies the inflection points.",
  },
  {
    title: "Capacity Planning Framework",
    description:
      "A tool for forecasting when people, systems, and processes will need to expand, and by how much.",
  },
  {
    title: "Growth Governance Structure",
    description:
      "An updated governance framework designed for a larger, more complex organisation with more moving parts.",
  },
  {
    title: "Leadership Development Plan",
    description:
      "A plan for building the leadership pipeline required to manage operations at a significantly larger scale.",
  },
  {
    title: "Technology Scale Architecture",
    description:
      "A technology roadmap that ensures systems, data, and integrations can support the growth trajectory.",
  },
  {
    title: "Risk and Contingency Framework",
    description:
      "An assessment of what can go wrong at scale and a set of contingency plans for the most critical failure modes.",
  },
];

export default function ScalePage() {
  return (
    <>
      <HeroSection
        variant="navy"
        stageLabel="STAGE 04"
        title="Scale the result—not the disorder that came before it."
        description="Growth is not transformation. Scaling a broken model makes it break faster. The Scale stage ensures that what has been built can grow without losing coherence, quality, or commercial discipline."
        primaryCta={{ label: "Discuss your growth plans", href: "/contact" }}
        secondaryCta={{ label: "Back to Method", href: "/method" }}
      />

      {/* Scale Questions */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Inquiry"
            title="Scale questions"
            description="Before pursuing growth, the business must answer these questions honestly. The answers determine whether scale is an opportunity or a risk."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {scaleQuestions.map((q, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg border border-border p-6"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-xs font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-slate leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale Outputs */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Deliverables"
            title="Scale outputs"
            description="The Scale stage produces the tools and frameworks the business needs to grow with confidence and control."
          />

          <div className="mt-12 space-y-8">
            {scaleOutputs.map((item, i) => (
              <div
                key={i}
                className="grid gap-4 border-t border-border pt-8 md:grid-cols-12"
              >
                <div className="md:col-span-4">
                  <h3 className="font-heading text-lg font-bold text-navy">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-7 md:col-start-6">
                  <p className="leading-relaxed text-slate">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statement */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-[1240px] px-6 text-center md:px-8">
          <blockquote className="mx-auto max-w-3xl font-heading text-2xl font-bold leading-snug text-white md:text-3xl">
            &ldquo;Scale is not about doing more. It is about doing the right
            things in a way that compounds.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 text-center md:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Growth that lasts.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate">
            The Scale stage ensures your business grows from a position of
            strength, with the architecture and discipline to sustain it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-navy px-8 py-4 font-heading text-sm font-semibold text-white transition-colors hover:bg-deep-navy"
            >
              Start a conversation
            </Link>
            <Link
              href="/method"
              className="inline-flex items-center rounded-lg border border-navy/20 px-8 py-4 font-heading text-sm font-semibold text-navy transition-colors hover:border-navy/40"
            >
              Back to Method Overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
