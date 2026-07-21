import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionIntro from "@/components/sections/SectionIntro";

export const metadata: Metadata = {
  title: "Purplebox Storage Case Study — Bayshire",
  description:
    "How Bayshire helped build the operating foundation for a modern self-storage business in the UAE.",
};

/* ---------- Data ---------- */

const challenges = [
  "No centralised booking or inventory management system",
  "Pricing decisions made ad hoc without unit economics visibility",
  "Customer journey fragmented across manual touchpoints",
  "No operational playbook for staff or facility management",
  "Technology decisions deferred, creating growing technical debt",
];

const deliverables = [
  {
    label: "Centralised booking and inventory system",
    status: "Implemented",
  },
  {
    label: "Automated pricing engine calibrated to unit-level economics",
    status: "Implemented",
  },
  {
    label: "Customer lifecycle workflows — onboarding, renewal, and follow-up",
    status: "Implemented",
  },
  {
    label: "Operational playbooks for facility staff",
    status: "Completed",
  },
  {
    label: "Performance dashboards for occupancy, revenue, and retention",
    status: "Implemented",
  },
  {
    label: "Multi-facility expansion model",
    status: "Designed",
  },
];

/* ================================================================
   Page Component
   ================================================================ */

export default function PurpleboxStorageCaseStudyPage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <HeroSection
        variant="navy"
        stageLabel="CASE STUDY — SELF-STORAGE"
        title="Building the operating foundation for a modern self-storage business."
        description="Purplebox Storage needed to move from fragmented operations and manual processes to a structured, technology-enabled storage business ready to scale across the UAE."
      />

      {/* ===== Context ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="CONTEXT" title="Where the business stood" />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              Purplebox Storage entered the UAE self-storage market with a clear
              product concept but without the operational infrastructure to
              support it at scale. Bookings were managed manually, pricing was
              inconsistent, and there was no centralised system for inventory,
              customer management, or facility operations.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              The founding team had deep commercial instinct but recognised that
              growth without structure would create more problems than it solved.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Challenge ===== */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="CHALLENGE" title="What needed to change" />

          <ul className="mt-8 max-w-3xl space-y-4">
            {challenges.map((item) => (
              <li
                key={item}
                className="text-slate text-[17px] leading-relaxed border-l-2 border-gold pl-5"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Diagnose ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="DIAGNOSE" title="Seeing the full picture" />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              Bayshire conducted a full Business MRI across all seven pillars.
              The diagnostic revealed that the core product — storage units and
              customer service — was strong, but the surrounding operational and
              technology infrastructure was not keeping pace with demand.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              Key findings included inconsistent pricing across unit types, no
              automated follow-up for leads or renewals, and facility operations
              that depended entirely on founder involvement.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Design ===== */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="DESIGN" title="Architecting the solution" />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              Bayshire designed an integrated operating model connecting
              inventory management, dynamic pricing, and customer lifecycle
              processes into a single coherent system. The design prioritised
              removing founder dependency from day-to-day operations while
              preserving strategic oversight.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              A technology architecture was mapped to support online booking,
              automated invoicing, occupancy tracking, and facility management
              workflows — all built around the unit economics that would drive
              sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Build ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro
            eyebrow="BUILD"
            title="Implementing the infrastructure"
          />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              Bayshire built and deployed the core operating platform: a
              centralised booking and inventory system, an automated pricing
              engine calibrated to unit-level economics, and a customer
              management layer with structured onboarding, renewal, and
              follow-up workflows.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              Operational playbooks were created for facility staff, covering
              daily routines, customer handoffs, issue escalation, and
              maintenance scheduling. Each process was documented, tested, and
              handed over with training before going live.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Scale ===== */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="SCALE" title="Preparing for growth" />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              With the operating foundation in place, Bayshire embedded
              performance dashboards and reporting loops that give leadership
              real-time visibility into occupancy, revenue per unit, customer
              acquisition cost, and retention rates.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              The system was designed to support multi-facility expansion without
              requiring a proportional increase in administrative overhead. New
              locations can be onboarded using the same playbooks, technology
              stack, and operating procedures — enabling Purplebox Storage to
              scale across the UAE with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Deliverables ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="DELIVERABLES" title="What was produced" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {deliverables.map((item) => (
              <div
                key={item.label}
                className="bg-soft-white rounded-xl p-6"
              >
                <span className={`inline-block text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3 ${
                  item.status === "Implemented" ? "bg-success/10 text-success" :
                  item.status === "Completed" ? "bg-gold/10 text-dark-gold" :
                  "bg-navy/10 text-navy"
                }`}>
                  {item.status}
                </span>
                <p className="text-navy font-heading text-sm font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold font-heading">
            Discuss a similar business challenge
          </h2>

          <p className="text-white/80 text-lg mt-6 max-w-xl mx-auto">
            Every engagement starts with a diagnostic conversation — no pitch
            decks, no generic frameworks. Just an honest look at what needs to
            change and how to change it.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/health-check"
              className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
            >
              Take the Business Health Check
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 border border-white/30 text-white font-semibold text-sm rounded-lg hover:border-white/60 transition-colors"
            >
              Speak With Bayshire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
