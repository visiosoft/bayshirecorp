import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Business Tools — Bayshire",
  description:
    "Interactive tools and frameworks to help you assess and improve your business operations.",
};

export default function ToolsPage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <HeroSection
        variant="navy"
        title="Business Tools"
        description="Interactive tools and frameworks to help you assess and improve your business operations."
      />

      {/* ===== Body ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="max-w-3xl space-y-5 text-slate text-[17px] leading-relaxed">
            <p>
              Interactive tools and frameworks to help you assess and improve
              your business operations will be available here soon.
            </p>

            <p>
              In the meantime, try our free{" "}
              <Link
                href="/health-check"
                className="text-gold font-semibold underline underline-offset-2 hover:text-navy transition-colors"
              >
                Business Health Check
              </Link>{" "}
              — five quick questions to see whether your business has outgrown
              its current operating model.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/health-check"
              className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
            >
              Take the Health Check
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
