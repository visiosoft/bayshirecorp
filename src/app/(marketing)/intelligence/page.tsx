import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Intelligence — Bayshire Corp",
  description:
    "Explore Bayshire's library of business problems, insights, and tools designed to help ambitious companies operate better.",
};

const sections = [
  {
    title: "Business Problems",
    description:
      "The patterns we see most often in growing businesses — and how we approach solving them.",
    href: "/intelligence/problems",
    cta: "Explore Problems",
  },
  {
    title: "Insights",
    description:
      "Thought leadership on business transformation, operating models, and scaling strategies.",
    href: "/intelligence/insights",
    cta: "Read Insights",
  },
  {
    title: "Business Tools",
    description:
      "Interactive tools and frameworks to help you assess and improve how your business operates.",
    href: "/intelligence/tools",
    cta: "View Tools",
  },
];

export default function IntelligencePage() {
  return (
    <>
      <HeroSection
        variant="navy"
        eyebrow="Intelligence"
        title="Ideas, tools, and frameworks for business leaders."
        description="Everything we publish is drawn from real engagements, not theory. Use it to sharpen your thinking before, during, or after working with Bayshire."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-2xl border border-border bg-soft-white p-8 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-heading text-xl font-bold text-navy">
                  {s.title}
                </h3>
                <p className="mt-3 text-slate leading-relaxed">
                  {s.description}
                </p>
                <span className="mt-6 inline-block font-heading text-sm font-semibold text-gold group-hover:underline">
                  {s.cta} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Ready to go beyond reading?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Start with a Business MRI to see exactly where your business stands
            today.
          </p>
          <Link
            href="/start"
            className="mt-8 inline-flex items-center rounded-lg bg-gold px-7 py-3.5 font-heading text-sm font-semibold text-navy transition-colors hover:bg-[#d4b76e]"
          >
            Start Your Diagnosis
          </Link>
        </div>
      </section>
    </>
  );
}
