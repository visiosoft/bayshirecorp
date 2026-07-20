import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Insights — Bayshire Corp",
  description:
    "Bayshire insights and thought leadership on business transformation, operating models, and scaling strategies.",
};

export default function InsightsPage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <HeroSection
        variant="navy"
        title="Insights"
        description="Thought leadership on business transformation, operating models, and scaling strategies."
      />

      {/* ===== Body ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="max-w-3xl space-y-5 text-slate text-[17px] leading-relaxed">
            <p>
              Bayshire insights and thought leadership content will be published
              here. Check back soon for articles on business transformation,
              operating models, and scaling strategies.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
