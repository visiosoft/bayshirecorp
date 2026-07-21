import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import DiagnosisForm from "@/components/forms/DiagnosisForm";

export const metadata: Metadata = {
  title: "Start Your Diagnosis — Bayshire",
  description:
    "Tell us what the business is trying to achieve — and what is getting in the way. Begin your Business MRI application.",
};

export default function StartPage() {
  return (
    <>
      <HeroSection
        variant="navy"
        eyebrow="START YOUR DIAGNOSIS"
        title="Tell us what the business is trying to achieve — and what is getting in the way."
        description="This application takes 5-10 minutes. The information you provide helps us assess whether the Business MRI is the right starting point for your business."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <DiagnosisForm />
        </div>
      </section>
    </>
  );
}
