import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionIntro from "@/components/sections/SectionIntro";

export const metadata: Metadata = {
  title: "About — Bayshire Corp",
  description:
    "Businesses improve when the whole system becomes visible. Learn why Bayshire exists and the principles that guide every engagement.",
};

/* ---------- Data ---------- */

const principles = [
  {
    title: "Diagnose before prescribing",
    description:
      "Every engagement begins with a structured diagnostic. We do not assume the problem is what it appears to be.",
  },
  {
    title: "Make the system visible",
    description:
      "Most businesses have never seen their own operating model laid out clearly. Visibility is the first step toward improvement.",
  },
  {
    title: "Fix root causes, not symptoms",
    description:
      "Surface-level fixes create the illusion of progress. We trace problems to their origin and address them there.",
  },
  {
    title: "Build capability, not dependency",
    description:
      "Our goal is to make ourselves unnecessary. Every system we build is designed to be owned and operated by the client.",
  },
  {
    title: "Measure what matters",
    description:
      "We define outcomes before we begin and verify them after. If it cannot be measured, it cannot be managed.",
  },
  {
    title: "Respect the founder's context",
    description:
      "Every business exists in a specific context — market, culture, stage, resources. Solutions must fit reality, not theory.",
  },
  {
    title: "Operate with transparency",
    description:
      "We share what we find — including the uncomfortable parts. Trust requires honesty, not diplomacy.",
  },
  {
    title: "Stay until it works",
    description:
      "We do not hand off a plan and disappear. We stay through implementation and verify that changes hold.",
  },
];

/* ================================================================
   Page Component
   ================================================================ */

export default function AboutPage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <HeroSection
        variant="navy"
        eyebrow="ABOUT BAYSHIRE"
        title="Businesses improve when the whole system becomes visible."
        description="Bayshire helps founder-led businesses diagnose what is actually happening, design what should happen, build the infrastructure to make it work, and scale without losing control."
        primaryCta={{ label: "See our case studies", href: "/case-studies" }}
      />

      {/* ===== Why Bayshire Exists ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro eyebrow="PURPOSE" title="Why Bayshire exists" />

          <div className="mt-8 max-w-3xl space-y-5 text-slate text-[17px] leading-relaxed">
            <p>
              Most businesses do not fail because of a lack of ambition. They
              stall because the internal systems — operations, finance,
              technology, governance — cannot keep pace with growth.
            </p>

            <p>
              Bayshire was built to close that gap. We work with founder-led and
              family-owned businesses that have outgrown their current operating
              model but have not yet built the infrastructure to support the next
              stage.
            </p>

            <p>
              We are not a consulting firm that delivers reports and leaves. We
              embed inside the business, diagnose the root causes of drag,
              design the systems that should exist, build them alongside the
              team, and stay until the business can operate them independently.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Operating Principles ===== */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro
            eyebrow="PRINCIPLES"
            title="How we think about the work"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-7 border border-border"
              >
                <span className="text-gold font-heading text-sm font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="text-navy font-heading text-base font-semibold mt-3">
                  {p.title}
                </h3>

                <p className="text-slate text-[15px] leading-relaxed mt-2">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Real Operating Experience ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro
            eyebrow="EXPERIENCE"
            title="Built from real operating experience"
          />

          <div className="mt-8 text-slate max-w-3xl space-y-5 text-[17px] leading-relaxed">
            <p>
              Bayshire is not an advisory firm built on frameworks borrowed from
              textbooks. It was founded by an operator who has built,
              restructured, and scaled businesses across multiple sectors —
              including technology, logistics, professional services, and
              construction.
            </p>

            <p>
              That operating background means we understand what it takes to
              implement change in businesses where resources are limited, teams
              are stretched, and the founder is still the most critical person in
              every decision.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold font-heading">
            See the work in practice
          </h2>

          <p className="text-white/80 text-lg mt-6 max-w-xl mx-auto text-center">
            Every engagement follows the same methodology, but every business
            demands a different application. See how Bayshire has helped
            businesses redesign their operations from the inside out.
          </p>

          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors mt-10"
          >
            View Case Studies
          </Link>
        </div>
      </section>
    </>
  );
}
