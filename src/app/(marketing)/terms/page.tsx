import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Terms of Service — Bayshire",
  description:
    "Terms and conditions governing the use of Bayshire services and website.",
};

export default function TermsPage() {
  return (
    <>
      <HeroSection
        variant="white"
        eyebrow="LEGAL"
        title="Terms of Service"
        description="Terms and conditions governing the use of Bayshire services and website."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <p className="text-slate text-[17px] leading-relaxed">
            Terms of service will be published before the site goes live.
          </p>
        </div>
      </section>
    </>
  );
}
