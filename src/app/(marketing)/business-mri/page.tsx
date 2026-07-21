import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Assessment and Operating Review | Bayshire Business MRI",
  description:
    "A detailed review of your company's people, processes, systems, sales, finance, management, customer journey, and technology, with a prioritized roadmap for improvement.",
};

const whoIsItFor = [
  "Growing businesses facing owner dependency and unclear roles.",
  "Companies with repeated operational problems and weak reporting.",
  "Businesses with disconnected systems or departments.",
  "Companies under expansion pressure or preparing for new locations.",
  "Investor-backed businesses that need professional operating structures.",
];

const whatWeExamine = [
  "Leadership and decision-making",
  "People, roles, and accountability",
  "Operations and service delivery",
  "Sales and customer journey",
  "Customer experience and retention",
  "Finance and management information",
  "Technology, automation, and data",
  "Cross-department handoffs and communication",
];

const howItWorks = [
  { title: "Preparation", description: "We align on objectives, scope, access requirements, and timeline." },
  { title: "Document Review", description: "We examine financials, org charts, process documentation, system landscape, and existing reports." },
  { title: "Leadership Interviews", description: "Structured conversations with founders and senior leadership to understand priorities, frustrations, and goals." },
  { title: "Staff Interviews", description: "Selected interviews with operational staff to understand how work actually happens day to day." },
  { title: "Process Review", description: "Direct observation and mapping of critical workflows, handoffs, and decision points." },
  { title: "Systems and Data Review", description: "Assessment of technology, integrations, data quality, and information flow." },
  { title: "Findings Workshop", description: "A working session to present findings, validate observations, and discuss priorities." },
  { title: "Final Roadmap", description: "Delivery of the complete assessment report with prioritized improvement roadmap." },
];

const clientReceives = [
  { title: "Current-State Findings", description: "A clear picture of how the business operates today, including strengths, weaknesses, and root causes behind recurring problems." },
  { title: "Risk and Opportunity Map", description: "Identification of the highest-impact risks to address and opportunities to capture." },
  { title: "Priority Matrix", description: "A ranked list of what to fix first, based on impact, effort, and urgency." },
  { title: "Operating-Model Recommendations", description: "Specific recommendations for roles, processes, systems, data, and management structure." },
  { title: "Process and System Requirements", description: "Specifications for the workflows, tools, and integrations needed to support the recommended model." },
  { title: "90-Day Action Plan", description: "A phased roadmap with specific initiatives, owners, and measurable outcomes for the first 90 days." },
];

export default function BusinessMRIPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Business MRI
          </p>
          <h1 className="text-white font-heading text-4xl sm:text-5xl font-bold max-w-3xl leading-tight mb-6">
            See What Is Working, What Is Broken, and What to Fix First
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10">
            The Bayshire Business MRI is a detailed assessment of how your
            company operates. We examine the company across its key business
            areas, identify the causes behind recurring problems, and produce a
            practical improvement roadmap.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/health-check"
              className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
            >
              Apply for a Business MRI
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 border border-white/30 text-white font-semibold text-sm rounded-lg hover:border-white/60 transition-colors"
            >
              Book a Short Introduction Call
            </Link>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Who It Is For
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
                Built for Companies That Have Outgrown Their Current Way of
                Working
              </h2>
            </div>
            <div>
              <ul className="space-y-4">
                {whoIsItFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                    <span className="text-slate text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we examine */}
      <section className="bg-soft-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Scope
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              What We Examine
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {whatWeExamine.map((item) => (
              <div
                key={item}
                className="bg-white border border-border rounded-xl p-5 text-center"
              >
                <div className="w-2 h-2 rounded-full bg-gold mx-auto mb-3" />
                <p className="text-navy font-heading text-sm font-semibold">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Process
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              How It Works
            </h2>
          </div>
          <div className="space-y-6 max-w-3xl">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy text-white font-heading text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-navy font-heading text-base font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the client receives */}
      <section className="bg-soft-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Deliverables
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              What You Receive
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientReceives.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-7 border border-border"
              >
                <h3 className="text-navy font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important details */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-soft-white rounded-xl p-8 border border-border">
              <h3 className="text-navy font-heading text-lg font-semibold mb-4">
                No Obligation to Continue
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                The Business MRI is a standalone engagement. You may use the
                findings independently. Continuing to Design or Build with
                Bayshire is entirely optional.
              </p>
            </div>
            <div className="bg-soft-white rounded-xl p-8 border border-border">
              <h3 className="text-navy font-heading text-lg font-semibold mb-4">
                Confidentiality
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                All documents, interviews, and business information shared during
                the MRI are treated with strict confidentiality and protected
                under a formal agreement.
              </p>
            </div>
            <div className="bg-soft-white rounded-xl p-8 border border-border">
              <h3 className="text-navy font-heading text-lg font-semibold mb-4">
                Investment
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                The Business MRI is a fixed-fee engagement. The exact scope and
                fee are confirmed after an initial qualification conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-white font-heading text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
            Ready to See What Is Really Happening Inside Your Business?
          </h2>
          <p className="text-white/60 text-lg mt-6 max-w-xl mx-auto">
            Apply for a Business MRI and we will schedule a qualification
            conversation to confirm fit and scope.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/health-check"
              className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
            >
              Apply for a Business MRI
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 border border-white/30 text-white font-semibold text-sm rounded-lg hover:border-white/60 transition-colors"
            >
              Book a Short Introduction Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
