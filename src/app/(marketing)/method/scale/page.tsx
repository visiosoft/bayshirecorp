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

      {/* Example Scenario */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="In Practice"
            title="Example: Scaling From One Location to Three"
            description="A self-storage business had built a working operating model for its first facility. The Scale stage focused on turning that single success into a repeatable, manageable multi-site operation."
          />

          <div className="mt-12 space-y-6">
            {[
              {
                title: "Location Launch Playbook",
                detail:
                  "Created a comprehensive playbook covering site selection criteria, fit-out standards, staffing plan, marketing activation, and technology setup—so every new facility opens with the same rigour as the first.",
              },
              {
                title: "Facility Manager Role Design",
                detail:
                  "Standardised the facility manager role with a scorecard, authority limits, and escalation rules, giving each manager clear ownership without requiring founder involvement in daily decisions.",
              },
              {
                title: "Multi-Facility Dashboard",
                detail:
                  "Built a dashboard showing occupancy, revenue, customer acquisition cost, and maintenance status across all locations, enabling leadership to spot trends and intervene early.",
              },
              {
                title: "Monthly Business Review Cadence",
                detail:
                  "Established a monthly review where each facility manager presents performance against targets, creating accountability and a structured forum for problem-solving.",
              },
              {
                title: "Franchise-Ready Operations Manual",
                detail:
                  "Designed a complete operations manual suitable for potential third-party operators, documenting every process, standard, and decision framework required to run a facility independently.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-soft-white p-6"
              >
                <h3 className="font-heading text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Timeline */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Duration"
            title="Typical Timeline"
            description="The Scale stage follows a structured cadence that moves from stabilising the current model to launching and supporting expansion."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                period: "Months 1–2",
                label: "Baseline & Routine Design",
                items: [
                  "Performance baseline",
                  "Management routine design",
                  "Optimisation priorities",
                ],
              },
              {
                period: "Months 3–4",
                label: "Replication Planning",
                items: [
                  "Replication planning",
                  "Playbook development",
                  "Expansion preparation",
                ],
              },
              {
                period: "Months 5–6",
                label: "Launch & Support",
                items: [
                  "New location or team launch support",
                  "Monitoring and adjustment",
                ],
              },
              {
                period: "Ongoing",
                label: "Continuous Improvement",
                items: [
                  "Quarterly reviews",
                  "Continuous improvement",
                  "Strategic alignment checks",
                ],
              },
            ].map((phase, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-white p-6"
              >
                <span className="inline-block rounded-full bg-navy px-3 py-1 font-heading text-xs font-bold text-gold">
                  {phase.period}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                  {phase.label}
                </h3>
                <ul className="mt-3 space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Gate */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Decision Gate"
            title="Scale-Ready Assessment"
            description="Before growth is pursued, the business must meet these criteria. Each item represents a condition that must be true for scaling to succeed."
          />

          <div className="mt-12 rounded-lg border border-border border-l-gold border-l-4 bg-soft-white p-8">
            <ul className="space-y-5">
              {[
                "The operating model produces consistent results without founder involvement in daily operations.",
                "Management team can identify, escalate, and resolve problems using defined processes.",
                "Financial and operational reporting supports data-driven decisions at every level.",
                "New locations or teams can be launched using documented playbooks and standards.",
                "Continuous improvement is embedded through regular reviews and measured outcomes.",
              ].map((criterion, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-navy/30">
                    <svg
                      className="h-3 w-3 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="leading-relaxed text-slate">{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-soft-white py-20 md:py-28">
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
