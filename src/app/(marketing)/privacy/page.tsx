import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Privacy Policy — Bayshire",
  description:
    "How Bayshire collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <HeroSection
        variant="white"
        eyebrow="LEGAL"
        title="Privacy Policy"
        description="How Bayshire collects, uses, and protects your information."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <p className="text-slate text-[17px] leading-relaxed">
            This privacy policy will be published before the site goes live.
          </p>
        </div>
      </section>
    </>
  );
}
