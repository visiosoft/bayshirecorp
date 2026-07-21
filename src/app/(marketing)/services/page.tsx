import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Services | Bayshire",
  description:
    "Practical services that move your business forward. Assessment, architecture, process design, management systems, technology, sales systems, and implementation.",
};

const services = [
  {
    title: "Business Assessment",
    description:
      "Assess the company and identify priorities across all seven business areas.",
    deliverables: "Current-state report, priority matrix, 90-day roadmap",
    href: "/services/business-assessment",
  },
  {
    title: "Business Architecture",
    description:
      "Design how departments, roles, processes, systems, rules, and data should work together.",
    deliverables:
      "Target operating model, org design, process architecture",
    href: "/services/business-architecture",
  },
  {
    title: "Process & SOP Design",
    description:
      "Create clear workflows, checklists, standards, controls, and training materials.",
    deliverables: "Process maps, SOPs, checklists, training guides",
    href: "/services/process-sop-design",
  },
  {
    title: "Management Systems",
    description:
      "Build KPIs, dashboards, meetings, accountability, action tracking, and decision structures.",
    deliverables:
      "KPI framework, dashboard specs, meeting structure, action tracking",
    href: "/services/management-systems",
  },
  {
    title: "Technology & Automation",
    description:
      "Design and build CRM, custom software, integrations, AI workflows, and automations around a clear process.",
    deliverables:
      "Technology assessment, system architecture, CRM implementation",
    href: "/services/technology-automation",
  },
  {
    title: "Sales & Marketing Systems",
    description:
      "Define market approach, lead generation, CRM, scripts, follow-up, conversion reporting, and campaign execution.",
    deliverables:
      "Lead generation system, sales process, CRM setup, conversion reporting",
    href: "/services/sales-marketing-systems",
  },
  {
    title: "Implementation & Transformation",
    description:
      "Support execution, change management, training, testing, rollout, and performance improvement.",
    deliverables:
      "Implementation plan, change management, training program, rollout support",
    href: "/services/implementation-transformation",
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        variant="navy"
        eyebrow="Services"
        title="Practical Services That Move Your Business Forward"
        description="Every service is designed to address a specific operational challenge. We do not sell packages — we scope work based on what your business needs."
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group border border-border rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col"
              >
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-xs text-muted mt-auto pt-4 border-t border-border">
                  <span className="font-semibold text-navy">
                    Key deliverables:
                  </span>{" "}
                  {service.deliverables}
                </p>
                <span className="inline-flex items-center text-gold text-sm font-semibold mt-4 group-hover:translate-x-1 transition-transform">
                  Learn more
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-white py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-slate max-w-2xl mx-auto mb-8">
            The Business Health Check gives you a clear picture of where your
            business stands across all seven areas — so you can focus on what
            matters most.
          </p>
          <Link
            href="/health-check"
            className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
          >
            Take the Business Health Check
          </Link>
        </div>
      </section>
    </>
  );
}
