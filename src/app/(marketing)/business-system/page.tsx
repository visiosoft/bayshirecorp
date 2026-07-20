import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "The Seven Pillars | Business System Thinking | Bayshire",
  description:
    "Bayshire examines seven connected pillars that shape how a business actually works — from strategy to technology. Each pillar interacts with every other.",
};

const pillars = [
  {
    number: "01",
    title: "Strategy & Direction",
    href: "/business-system/strategy",
    question:
      "Where are we going, why will we win, and what must we prioritise?",
    scope: [
      "Vision & mission clarity",
      "Strategic priorities & resource allocation",
      "Competitive positioning",
      "Growth model & market focus",
      "Strategic planning rhythm",
      "Business model design",
      "Risk appetite & strategic trade-offs",
      "Long-range scenario planning",
    ],
  },
  {
    number: "02",
    title: "Customers & Customer Experience",
    href: "/business-system/customers",
    question:
      "Whom do we serve, what do they value, and what do they experience?",
    scope: [
      "Customer segmentation & targeting",
      "End-to-end customer journey",
      "Voice of Customer & feedback loops",
      "Service delivery & support quality",
      "Net Promoter Score & retention metrics",
      "Customer success practices",
      "Complaint resolution & escalation",
      "Brand perception & trust",
    ],
  },
  {
    number: "03",
    title: "Sales & Marketing",
    href: "/business-system/sales-marketing",
    question:
      "How do we create demand, convert it, and build predictable revenue?",
    scope: [
      "Go-to-market strategy",
      "Lead generation & pipeline management",
      "Sales process & conversion",
      "Pricing strategy & packaging",
      "Brand & content strategy",
      "Marketing ROI & attribution",
      "Channel strategy & partnerships",
      "Revenue forecasting & targets",
    ],
  },
  {
    number: "04",
    title: "Operations",
    href: "/business-system/operations",
    question:
      "How do we deliver the promise consistently, efficiently, and at the required quality?",
    scope: [
      "Process design & standardisation",
      "Quality management",
      "Supply chain & vendor management",
      "Capacity planning & utilisation",
      "Operational KPIs & dashboards",
      "Continuous improvement practices",
      "Compliance & regulatory adherence",
      "Scalability of delivery model",
    ],
  },
  {
    number: "05",
    title: "Finance",
    href: "/business-system/finance",
    question:
      "How do we create, measure, protect, and allocate economic value?",
    scope: [
      "Financial planning & budgeting",
      "Cash flow management",
      "Unit economics & margin analysis",
      "Management reporting & dashboards",
      "Cost structure optimisation",
      "Capital allocation & investment criteria",
      "Financial controls & audit readiness",
      "Scenario modelling & sensitivity analysis",
    ],
  },
  {
    number: "06",
    title: "Leadership, People & Governance",
    href: "/business-system/leadership-governance",
    question:
      "Who owns the outcome, who decides, and how does the organisation stay accountable?",
    scope: [
      "Organisational structure & spans of control",
      "Decision rights & authority matrix",
      "Leadership capability & development",
      "Talent acquisition & retention",
      "Performance management & incentives",
      "Culture & values alignment",
      "Board & governance framework",
      "Management operating rhythm",
      "Succession planning",
    ],
  },
  {
    number: "07",
    title: "Technology, Data & AI",
    href: "/business-system/technology-data-ai",
    question:
      "What information and systems improve execution, control, and decisions?",
    scope: [
      "Core systems architecture",
      "Data governance & quality",
      "Business intelligence & reporting",
      "Automation & workflow",
      "AI readiness & use cases",
      "Cybersecurity & data protection",
      "Technology roadmap & investment",
      "Integration & interoperability",
      "Digital capability & literacy",
    ],
  },
];

const crossPillarCauses = [
  "An unclear strategy that attracted the wrong customer segment",
  "A sales process that over-promised",
  "An operations gap that delayed delivery",
  "A finance decision that cut service capacity",
  "A technology failure that lost the order",
];

export default function BusinessSystemPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <h1 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            The business is a system.
            <br className="hidden sm:block" /> The departments are only its
            visible parts.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Most consulting starts with a department. We start with the system.
            Bayshire examines seven connected pillars that shape how a business
            actually works — from strategy to technology. Each pillar interacts
            with every other. A weakness in one will surface as a symptom in
            another.
          </p>
        </div>
      </section>

      {/* Seven Pillars Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
              The Seven Pillars
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate">
              Each pillar represents a dimension of the business that must be
              examined, not in isolation, but as part of the whole.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Link
                key={pillar.number}
                href={pillar.href}
                className="group rounded-xl border border-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="font-heading text-3xl font-bold text-gold">
                  {pillar.number}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold text-navy transition-colors group-hover:text-gold">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm italic leading-relaxed text-slate">
                  {pillar.question}
                </p>
                <ul className="mt-5 space-y-2">
                  {pillar.scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Pillar Example */}
      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Why systems thinking matters
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
            A customer complaint is rarely only a customer-service problem. It
            may originate in:
          </p>

          <ul className="mt-8 space-y-4">
            {crossPillarCauses.map((cause) => (
              <li
                key={cause}
                className="flex items-start gap-3 text-lg text-ink"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                {cause}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-navy">
            Bayshire traces the complaint to its origin — across all seven
            pillars.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6 text-center md:px-8">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            See how we examine the full system
          </h2>
          <Link
            href="/business-mri"
            className="mt-10 inline-flex items-center rounded-lg bg-gold px-8 py-4 font-heading text-sm font-semibold text-navy transition-colors hover:bg-dark-gold"
          >
            See How the Business MRI Examines the System
          </Link>
        </div>
      </section>
    </>
  );
}
