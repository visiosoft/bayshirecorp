import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionIntro from "@/components/sections/SectionIntro";

export const metadata: Metadata = {
  title: "Build - Stage 03 | The Bayshire Method",
  description:
    "Turn the operating model into the way the business actually works. Bayshire's build stage implements processes, systems, teams, and governance designed in Stage 02.",
};

const buildItems = [
  "Process implementation and workflow deployment",
  "Organisational restructuring and team formation",
  "Recruitment, onboarding, and capability building",
  "Technology implementation and systems integration",
  "Data infrastructure and reporting setup",
  "Governance cadence establishment",
  "Performance management system rollout",
  "Customer experience operationalisation",
  "Commercial model activation",
  "Training and development programmes",
  "Change management and communications execution",
  "Vendor selection and partnership structuring",
  "Policy and procedure documentation",
];

const roles = [
  {
    title: "Programme architect",
    description:
      "Bayshire owns the overall transformation programme structure, sequencing, and interdependency management.",
  },
  {
    title: "Implementation partner",
    description:
      "We work alongside the client's teams to build, not instead of them. Ownership transfers from day one.",
  },
  {
    title: "Capability builder",
    description:
      "We build the skills and confidence the organisation needs to run what we help them create.",
  },
  {
    title: "Quality assurance",
    description:
      "Every workstream is held to the standard defined in the Design stage. We do not lower the bar to hit deadlines.",
  },
  {
    title: "Governance steward",
    description:
      "We establish the cadence and discipline that keeps the transformation on track and accountable.",
  },
  {
    title: "Integration manager",
    description:
      "We ensure that workstreams connect. Isolated improvements that do not integrate are not transformation.",
  },
];

const governanceItems = [
  "Weekly programme status and risk reviews",
  "Fortnightly steering committee briefings",
  "Monthly executive sponsor updates",
  "Workstream dependency tracking and resolution",
  "Decision log and escalation protocol",
  "Budget and resource tracking",
  "Change request management",
  "Quality gates between phases",
  "Stakeholder engagement tracking",
  "Knowledge transfer and documentation milestones",
];

export default function BuildPage() {
  return (
    <>
      <HeroSection
        variant="navy"
        stageLabel="STAGE 03"
        title="Turn the operating model into the way the business actually works."
        description="Design without implementation is a presentation. The Build stage is where processes are deployed, teams are formed, systems go live, and governance becomes a habit."
        primaryCta={{ label: "Discuss your build needs", href: "/contact" }}
        secondaryCta={{ label: "Back to Method", href: "/method" }}
      />

      {/* What Build may include */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Scope"
            title="What Build may include"
            description="Every build programme is different. The scope is determined by the Design stage outputs. These are the categories of work that Build typically covers."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {buildItems.map((item, i) => (
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

      {/* Bayshire's Role */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Our role"
            title="Bayshire's role during Build"
            description="We do not hand over a plan and disappear. We do not take over and create dependency. The role is designed to build capability while building the business."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, i) => (
              <div key={i} className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-navy">
                  {role.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Governance */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Governance"
            title="Build governance"
            description="Transformation programmes fail when governance is weak. These are the mechanisms that keep Build on track, on budget, and on standard."
          />

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {governanceItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key Statement */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-[1240px] px-6 text-center md:px-8">
          <blockquote className="mx-auto max-w-3xl font-heading text-2xl font-bold leading-snug text-white md:text-3xl">
            &ldquo;Build is not about launching. It is about embedding. The
            measure of success is what endures after the programme ends.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Example: Building the Sales and Operations Platform */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Example"
            title="Building the Sales and Operations Platform"
            description="A contracting company where project managers tracked jobs on spreadsheets, quoted from memory, and submitted invoices weeks late. Here is what the Build stage delivered."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-soft-white p-7">
              <h3 className="font-heading text-base font-bold text-navy">
                CRM with pipeline stages
              </h3>
              <p className="mt-3 leading-relaxed text-slate">
                A configured CRM with pipeline stages matching the actual sales
                process: inquiry, site visit, quote, negotiation, won/lost.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-soft-white p-7">
              <h3 className="font-heading text-base font-bold text-navy">
                Project-level cost tracking
              </h3>
              <p className="mt-3 leading-relaxed text-slate">
                Project-level cost tracking in the accounting system with
                automated budget alerts when spend approached thresholds.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-soft-white p-7">
              <h3 className="font-heading text-base font-bold text-navy">
                Standard operating procedures
              </h3>
              <p className="mt-3 leading-relaxed text-slate">
                SOPs for site handover, material procurement, variation
                approvals, and progress reporting, documented and adopted.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-soft-white p-7">
              <h3 className="font-heading text-base font-bold text-navy">
                Weekly project review dashboard
              </h3>
              <p className="mt-3 leading-relaxed text-slate">
                A weekly project review dashboard showing margin, schedule, and
                cash position per project, reviewed by leadership.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-soft-white p-7">
              <h3 className="font-heading text-base font-bold text-navy">
                Training sessions
              </h3>
              <p className="mt-3 leading-relaxed text-slate">
                Training sessions for project managers, the finance team, and the
                sales coordinator to operate the new systems independently.
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
            title="Typical Timeline"
            description="A standard Build engagement runs ten to twelve weeks. The exact duration depends on scope, but the structure follows a consistent pattern."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-7 shadow-sm">
              <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 font-heading text-xs font-bold text-gold">
                Weeks 1–3
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-navy">
                Foundation
              </h3>
              <p className="mt-3 leading-relaxed text-slate">
                Core system configuration, CRM setup, initial process
                documentation.
              </p>
            </div>
            <div className="rounded-xl bg-white p-7 shadow-sm">
              <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 font-heading text-xs font-bold text-gold">
                Weeks 4–6
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-navy">
                Implementation
              </h3>
              <p className="mt-3 leading-relaxed text-slate">
                Workflow implementation, form and template creation, integration
                testing.
              </p>
            </div>
            <div className="rounded-xl bg-white p-7 shadow-sm">
              <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 font-heading text-xs font-bold text-gold">
                Weeks 7–9
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-navy">
                Validation
              </h3>
              <p className="mt-3 leading-relaxed text-slate">
                Dashboard development, reporting setup, user acceptance testing.
              </p>
            </div>
            <div className="rounded-xl bg-white p-7 shadow-sm">
              <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 font-heading text-xs font-bold text-gold">
                Weeks 10–12
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-navy">
                Handover
              </h3>
              <p className="mt-3 leading-relaxed text-slate">
                Training delivery, parallel running, go-live support, handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Gate: Ready for Scale? */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Decision gate"
            title="Ready for Scale?"
            description="Before moving to the Scale stage, these criteria must be met. This is the quality gate between Build and Scale."
          />

          <div className="mt-12 rounded-xl border border-border border-l-4 border-l-gold bg-soft-white p-8 md:p-10">
            <ul className="space-y-5">
              {[
                "All priority processes are documented, tested, and in daily use",
                "Systems are configured, integrated, and producing accurate data",
                "Team members are trained and can operate without consultant support",
                "Dashboards and reports are reviewed in scheduled management meetings",
                "Quick wins and early improvements are measured and documented",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-gold/10">
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
                  <span className="leading-relaxed">{item}</span>
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
            Implementation that sticks.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate">
            The Build stage turns design into daily operations. Processes,
            teams, systems, and governance, implemented to last.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-navy px-8 py-4 font-heading text-sm font-semibold text-white transition-colors hover:bg-deep-navy"
            >
              Start a conversation
            </Link>
            <Link
              href="/method/scale"
              className="inline-flex items-center rounded-lg border border-navy/20 px-8 py-4 font-heading text-sm font-semibold text-navy transition-colors hover:border-navy/40"
            >
              Next: Scale Stage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
