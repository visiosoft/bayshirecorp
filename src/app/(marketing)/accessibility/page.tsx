import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Accessibility — Bayshire Corp",
  description:
    "Bayshire is committed to making our website accessible to all users.",
};

export default function AccessibilityPage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <HeroSection variant="navy" title="Accessibility" description="Bayshire is committed to making our website accessible to all users." />

      {/* ===== Body ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="max-w-3xl space-y-5 text-slate text-[17px] leading-relaxed">
            <p>
              Bayshire is committed to making our website accessible to all
              users. This page will be updated with our full accessibility
              statement before the site goes live.
            </p>

            <p>
              If you have any accessibility concerns or need assistance accessing
              content on this website, please{" "}
              <Link
                href="/contact"
                className="text-gold font-semibold underline underline-offset-2 hover:text-navy transition-colors"
              >
                contact us
              </Link>{" "}
              and we will do our best to help.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
