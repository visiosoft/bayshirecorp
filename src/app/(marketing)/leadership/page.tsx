import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionIntro from "@/components/sections/SectionIntro";

export const metadata: Metadata = {
  title: "Leadership — Bayshire Corp",
  description:
    "Meet the founder behind Bayshire Corp. Meisam Rasti brings real operating experience to every engagement.",
};

/* ---------- Data ---------- */

const quotes = [
  "Most businesses do not have a strategy problem. They have a visibility problem. Once the founder can see the whole system, the right decisions become obvious.",
  "I am not interested in building dependency. Every system we design is meant to be owned by the client. If we have done our job, the business should not need us.",
  "The hardest part of transformation is not designing the solution — it is earning the trust required to implement it. That trust is built through transparency and follow-through, not credentials.",
];

/* ================================================================
   Page Component
   ================================================================ */

export default function LeadershipPage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <HeroSection
        variant="navy"
        eyebrow="LEADERSHIP"
        title="See the system. Make the decision. Build the capability."
        description="Bayshire was founded on the belief that businesses improve when they stop guessing and start seeing. That belief shapes every engagement."
      />

      {/* ===== Founder Profile ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-light-surface rounded-xl aspect-[3/4] flex items-center justify-center">
                <span className="text-muted text-sm">
                  Professional photography — coming soon
                </span>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3">
              <h2 className="text-navy font-heading text-3xl font-bold">
                Meisam Rasti Talkhoncheh
              </h2>

              <p className="text-gold font-heading text-base font-semibold mt-2">
                Founder &amp; Business Transformation Strategist
              </p>

              <div className="mt-6 space-y-5 text-slate text-[17px] leading-relaxed">
                <p>
                  Meisam founded Bayshire after spending over a decade building,
                  restructuring, and scaling businesses across technology,
                  logistics, construction, and professional services.
                </p>

                <p>
                  His approach is rooted in direct operating experience — not
                  theory. Before advising founders, he was one. He has built
                  teams, designed operational systems, managed P&amp;Ls, and
                  navigated the specific pressures that come with scaling a
                  business where the founder is still the most important person
                  in the room.
                </p>

                <p>
                  Bayshire exists because Meisam saw the same pattern repeatedly:
                  ambitious founders with strong commercial instincts but without
                  the internal infrastructure to support sustainable growth. The
                  Business MRI — Bayshire&apos;s diagnostic methodology — was
                  developed to give these businesses the visibility they need
                  before making high-stakes decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Point of View ===== */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro
            eyebrow="POINT OF VIEW"
            title="How Meisam thinks about the work"
          />

          <div className="mt-10 space-y-8">
            {quotes.map((quote) => (
              <div
                key={quote}
                className="bg-white rounded-xl p-8 border-l-4 border-gold"
              >
                <blockquote className="text-navy font-heading text-lg md:text-xl leading-relaxed italic">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                <p className="text-muted text-sm mt-4">
                  — Meisam Rasti, Founder
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
            Start a conversation
          </h2>

          <p className="text-white/80 text-lg mt-6 max-w-xl mx-auto text-center">
            Every engagement begins with a diagnostic. If you are considering
            transformation, the first step is a conversation.
          </p>

          <Link
            href="/start"
            className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors mt-10"
          >
            Begin Your Diagnosis
          </Link>
        </div>
      </section>
    </>
  );
}
