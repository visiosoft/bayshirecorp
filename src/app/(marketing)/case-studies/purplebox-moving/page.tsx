import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionIntro from "@/components/sections/SectionIntro";

export const metadata: Metadata = {
  title: "Purplebox Moving Case Study — Bayshire",
  description:
    "How Bayshire helped transform a logistics and moving services business from manual coordination to a scalable, technology-enabled operation.",
};

/* ---------- Data ---------- */

const challenges = [
  "Manual coordination of jobs across multiple teams and vehicles",
  "Inconsistent customer experience depending on the crew assigned",
  "No real-time visibility into job status or fleet utilisation",
  "Quoting process was slow, manual, and prone to errors",
  "No structured onboarding process for new drivers or crews",
];

const deliverables = [
  {
    label: "Company operating model and departmental capability matrix",
    status: "Completed",
  },
  {
    label: "Sales process, scripts, and follow-up sequences",
    status: "Implemented",
  },
  {
    label: "End-to-end customer journey — quote to delivery to follow-up",
    status: "Implemented",
  },
  {
    label: "Operational checklists and team responsibilities",
    status: "Implemented",
  },
  {
    label: "CRM configuration and pipeline management",
    status: "Implemented",
  },
  {
    label: "Multi-city expansion playbook",
    status: "Designed",
  },
];

/* ================================================================
   Page Component
   ================================================================ */

export default function PurpleboxMovingCaseStudyPage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <HeroSection
        variant="navy"
        stageLabel="CASE STUDY — LOGISTICS & MOVING SERVICES"
        title="Transforming a moving business from manual coordination to scalable operations."
        description="Purplebox Moving needed to replace fragmented, manual processes with a connected operating model that could deliver a consistent customer experience and support multi-city expansion."
      />

      {/* ===== Context ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="CONTEXT" title="Where the business stood" />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              Purplebox Moving had built a strong reputation for reliable moving
              services, but the operational model behind the brand was manual,
              reactive, and heavily dependent on a small number of experienced
              coordinators. As demand grew, the cracks became more visible —
              missed communications, inconsistent service quality, and an
              inability to see the full picture across active jobs.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              The leadership team knew that scaling to new cities without fixing
              the foundation would only amplify existing problems.
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
          <SectionIntro eyebrow="DIAGNOSE" title="Mapping the customer journey and process gaps" />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              Bayshire conducted end-to-end customer journey mapping, a
              detailed process audit across quoting, scheduling, execution, and
              follow-up, and a technology assessment of existing tools and data
              flows.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              The diagnostic revealed that the majority of operational friction
              stemmed from disconnected communication channels, manual
              scheduling that could not adapt to real-time changes, and a
              complete absence of job-level performance data.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Design ===== */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="DESIGN" title="Designing the end-to-end digital flow" />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              Bayshire designed an end-to-end digital booking flow that
              connected the customer-facing experience to internal operations
              seamlessly. This included real-time job tracking for both the
              operations team and customers, and automated communications at
              every stage of the moving journey.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              The design prioritised removing manual handoffs and giving
              leadership a single view of all active jobs, crew utilisation,
              and customer satisfaction in real time.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Build ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="BUILD" title="Implementing the connected platform" />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              Bayshire implemented a CRM configured for the moving industry,
              a driver app for real-time job updates and proof of delivery, a
              customer portal for booking, tracking, and post-move feedback,
              and an automated quoting engine that reduced response times
              dramatically.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              Each component was built to integrate with the others, creating
              a single source of truth for every job from initial enquiry
              through to completion and follow-up.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Scale ===== */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="SCALE" title="Multi-city expansion playbook" />

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-slate text-[17px] leading-relaxed">
              With the operating foundation proven in the home market, Bayshire
              developed a multi-city expansion playbook covering market entry
              checklists, crew recruitment and training standards, fleet
              onboarding procedures, and local marketing activation.
            </p>
            <p className="text-slate text-[17px] leading-relaxed">
              A franchisee onboarding system was designed to allow new
              operators to launch using the same technology, processes, and
              quality standards — reducing time to operational readiness and
              ensuring brand consistency across locations.
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
