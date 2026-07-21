import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Bayshire — Business Architecture & Transformation",
  description:
    "Bayshire is an operator-led business architecture and transformation partner. We help founder-led companies in the UAE and GCC build clearer, stronger, and more scalable operations.",
};

const principles = [
  {
    title: "Practical, not theoretical",
    description:
      "Every recommendation is tested against the reality of the business. We build solutions that work with the team you have, not the team a textbook assumes.",
  },
  {
    title: "Evidence-based",
    description:
      "We diagnose before we prescribe. Decisions are driven by data, interviews, and direct observation — not assumptions.",
  },
  {
    title: "Confidential",
    description:
      "All documents, interviews, and business information are treated with strict confidentiality.",
  },
  {
    title: "Accountable",
    description:
      "We define outcomes before we begin and verify them after. If it cannot be measured, it cannot be managed.",
  },
  {
    title: "Strategy and implementation together",
    description:
      "We do not hand off a plan and disappear. We stay through implementation and verify that changes hold.",
  },
  {
    title: "Build capability, not dependency",
    description:
      "Our goal is to make ourselves unnecessary. Every system we build is designed to be owned and operated by the client.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            About Bayshire
          </p>
          <h1 className="text-white font-heading text-4xl sm:text-5xl font-bold max-w-3xl leading-tight mb-6">
            An Operator-Led Approach to Business Transformation
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            Bayshire helps founder-led and investor-backed companies in the UAE
            and GCC build clearer, stronger, and more scalable operations.
          </p>
        </div>
      </section>

      {/* Why Bayshire Exists */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Why We Exist
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
                Many Companies Grow Faster Than Their Ability to Operate
              </h2>
            </div>
            <div className="space-y-5 text-slate text-[17px] leading-relaxed">
              <p>
                Most businesses do not fail because of a lack of ambition. They
                stall because the internal systems — operations, finance,
                technology, people — cannot keep pace with growth.
              </p>
              <p>
                Bayshire was created to solve that problem. We work with
                companies that have real demand and growth potential, but need a
                stronger operating structure — clearer roles, better processes,
                connected systems, and management visibility.
              </p>
              <p>
                We do not only give advice. We diagnose problems, design the
                operating model, build the required systems, and support
                implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Bayshire Works */}
      <section className="bg-soft-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Our Approach
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
              Strategy and Implementation From One Partner
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Bayshire combines the strategic perspective of a consulting firm
              with the hands-on execution of an operating partner. We stay from
              diagnosis through implementation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Experience */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Experience
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
                Built Across Real Businesses and Real Constraints
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Bayshire&rsquo;s methods were developed through direct operating
                experience — building, managing, and improving businesses across
                multiple sectors and geographies.
              </p>
              <ul className="space-y-3 text-slate text-base">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  Business setup, construction, and facility development
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  Self-storage operations and expansion
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  Moving and logistics services
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  Sales, marketing, and customer journey design
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  Financial controls and management reporting
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  Technology, CRM, and custom software development
                </li>
              </ul>
            </div>
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Geographic Focus
              </p>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">
                UAE and GCC
              </h3>
              <p className="text-slate text-base leading-relaxed mb-8">
                Bayshire is based in Dubai, United Arab Emirates, and serves
                companies across the GCC region. We understand the local
                business environment, regulatory landscape, and the specific
                challenges facing growing companies in this market.
              </p>

              <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Relevant Sectors
              </p>
              <ul className="space-y-2 text-slate text-base">
                <li>Self-storage</li>
                <li>Moving and logistics</li>
                <li>Construction and contracting</li>
                <li>Multi-location service businesses</li>
                <li>Operationally complex founder-led companies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-soft-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Founder
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
                Built by an Operator Who Has Faced the Same Problems
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Mase Rasti is a founder and business operator with more than 15
                years of experience building, managing, and improving businesses
                across Canada and Dubai. His work has included business setup,
                construction, self-storage, moving services, sales, marketing,
                financial management, technology, and operational systems.
              </p>
              <p className="text-slate text-lg leading-relaxed mb-8">
                Bayshire was created to help other founders build companies that
                are clearer, stronger, and less dependent on one person.
              </p>
              <Link
                href="/leadership"
                className="inline-flex items-center justify-center h-12 px-8 border border-navy/20 text-navy font-semibold text-sm rounded-lg hover:border-navy/40 transition-colors"
              >
                Meet the Founder
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm aspect-[3/4] rounded-2xl bg-navy/5 flex items-center justify-center">
                <span className="text-navy/30 font-heading text-sm">
                  Founder Portrait
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-white font-heading text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
            Ready to Build a Stronger Operating Foundation?
          </h2>
          <p className="text-white/60 text-lg mt-6 max-w-xl mx-auto">
            Start with a two-minute health check to see where your business
            stands, or get in touch to discuss your situation directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/health-check"
              className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
            >
              Take the Business Health Check
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 border border-white/30 text-white font-semibold text-sm rounded-lg hover:border-white/60 transition-colors"
            >
              Speak With Bayshire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
