import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionIntro from "@/components/sections/SectionIntro";

export const metadata: Metadata = {
  title: "Business Problems We Solve — Bayshire",
  description:
    "The patterns we see most often in growing businesses — and how Bayshire helps resolve them.",
};

/* ---------- Data ---------- */

const problems = [
  {
    title: "Founder Bottleneck",
    description:
      "The business cannot move without the founder involved in every decision. Growth is limited by one person's capacity, and the team waits instead of acts.",
  },
  {
    title: "Operational Friction",
    description:
      "Processes that worked at an earlier stage now create drag. Tasks take longer than they should, handoffs break down, and the team spends more time managing work than doing it.",
  },
  {
    title: "Revenue Plateau",
    description:
      "Top-line growth has stalled despite continued effort. The business is busy but not scaling — new revenue replaces lost revenue instead of compounding.",
  },
  {
    title: "Scaling Risk",
    description:
      "The business is growing but the infrastructure underneath is not keeping pace. Each new customer, hire, or location adds complexity without corresponding capability.",
  },
  {
    title: "Talent & Culture Gaps",
    description:
      "Key roles are unfilled or filled with the wrong people. Institutional knowledge lives in a few heads, and culture erodes as the team grows beyond the founder's direct reach.",
  },
  {
    title: "Technology Debt",
    description:
      "Systems were chosen for convenience, not strategy. Data lives in spreadsheets and disconnected tools, and the cost of catching up grows every quarter.",
  },
  {
    title: "Financial Blind Spots",
    description:
      "The business knows it is making money but cannot see where, how much, or for how long. Forecasting is guesswork, and margin erosion goes unnoticed until cash flow tightens.",
  },
  {
    title: "Customer Inconsistency",
    description:
      "The customer experience depends on which person handles it. There is no repeatable standard, and quality varies across channels, locations, or team members.",
  },
];

/* ================================================================
   Page Component
   ================================================================ */

export default function ProblemsPage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <HeroSection
        variant="navy"
        title="Business Problems We Solve"
        description="Growth creates complexity. These are the patterns we see most often in businesses that have outgrown their current operating model."
      />

      {/* ===== Problem Grid ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro
            eyebrow="COMMON CHALLENGES"
            title="The patterns we see most often in growing businesses"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {problems.map((p) => (
              <div
                key={p.title}
                className="bg-soft-white rounded-xl p-7 border border-border"
              >
                <h3 className="text-navy font-heading text-base font-semibold">
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

      {/* ===== CTA ===== */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold font-heading">
            Recognise any of these patterns?
          </h2>

          <p className="text-white/80 text-lg mt-6 max-w-xl mx-auto">
            Every engagement starts with a diagnostic conversation — no pitch
            decks, no generic frameworks. Just an honest look at what needs to
            change and how to change it.
          </p>

          <Link
            href="/health-check"
            className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors mt-10"
          >
            Take the Business Health Check
          </Link>
        </div>
      </section>
    </>
  );
}
