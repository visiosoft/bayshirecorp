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

      {/* Example: Designing the Operating Model */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Example"
            title="Designing the operating model"
            description="A self-storage company expanding from one facility to three. The diagnostic showed the founder managed all pricing, customer inquiries, and facility checks personally. Here is what the Design stage produced."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-soft-white p-6">
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Organisational Design
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-navy">
                Three-tier structure
              </h3>
              <p className="mt-2 leading-relaxed text-slate">
                Facility managers at each site, a sales coordinator handling all
                inbound inquiries, and a central operations lead reporting to the
                founder. Clear reporting lines replaced the founder doing
                everything.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-soft-white p-6">
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Customer Journey
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-navy">
                End-to-end experience map
              </h3>
              <p className="mt-2 leading-relaxed text-slate">
                Every step from online inquiry through move-in, payment,
                renewal, and move-out was documented with owners, handoffs, and
                response-time targets at each stage.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-soft-white p-6">
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Pricing Architecture
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-navy">
                Dynamic pricing model
              </h3>
              <p className="mt-2 leading-relaxed text-slate">
                Pricing tied to unit size, occupancy rate, and seasonal demand.
                Rules replaced gut-feel decisions, so facility managers could
                quote prices without calling the founder.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-soft-white p-6">
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Dashboard Specifications
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-navy">
                Four key metrics
              </h3>
              <p className="mt-2 leading-relaxed text-slate">
                Occupancy rate, revenue per unit, customer acquisition cost, and
                retention rate. Each metric had a target, a data source, and a
                refresh frequency defined.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-soft-white p-6 sm:col-span-2 lg:col-span-2">
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Authority Matrix
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-navy">
                Decision-rights clarity
              </h3>
              <p className="mt-2 leading-relaxed text-slate">
                A clear matrix defining what facility managers could decide
                autonomously — unit allocation, day-to-day maintenance, standard
                pricing — versus what required head office approval: capital
                expenditure, discount authority above a threshold, and staffing
                changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Timeline */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Timeline"
            title="Typical timeline"
            description="The Design stage typically runs over eight weeks, structured into four focused phases."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <span className="inline-block rounded-full bg-gold/10 px-3 py-1 font-heading text-xs font-bold text-gold">
                Weeks 1–2
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                Structure and roles
              </h3>
              <p className="mt-2 leading-relaxed text-slate">
                Role design, organisational structure, and decision-rights
                mapping.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <span className="inline-block rounded-full bg-gold/10 px-3 py-1 font-heading text-xs font-bold text-gold">
                Weeks 3–4
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                Process architecture
              </h3>
              <p className="mt-2 leading-relaxed text-slate">
                Process architecture, workflow design, and handoff
                specifications.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <span className="inline-block rounded-full bg-gold/10 px-3 py-1 font-heading text-xs font-bold text-gold">
                Weeks 5–6
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                Systems and data
              </h3>
              <p className="mt-2 leading-relaxed text-slate">
                System requirements, data flow, dashboard specifications, and
                technology selection.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-white p-6">
              <span className="inline-block rounded-full bg-gold/10 px-3 py-1 font-heading text-xs font-bold text-gold">
                Weeks 7–8
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                Documentation and planning
              </h3>
              <p className="mt-2 leading-relaxed text-slate">
                Operating model documentation, implementation plan, and change
                management approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Gate: Ready for Build? */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Decision Gate"
            title="Ready for Build?"
            description="Before moving to the Build stage, the following criteria must be met. This gate protects the client from building on incomplete foundations."
          />

          <div className="mt-12 rounded-lg border border-border border-l-4 border-l-gold bg-soft-white p-8">
            <ul className="space-y-4">
              {[
                "Target operating model is documented and approved by leadership",
                "Process designs include owners, inputs, outputs, and exception handling",
                "System requirements are specified with integration points defined",
                "Implementation sequence and priorities are agreed",
                "Change management risks are identified with mitigation plans",
              ].map((criterion, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-gold/40 bg-gold/10">
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
