import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Architecture & Transformation in Dubai | Bayshire",
  description:
    "Bayshire helps growing UAE companies fix disorganized operations, unclear roles, disconnected systems, and founder dependency. Start with a two-minute business health check.",
  openGraph: {
    title: "Business Architecture & Transformation in Dubai | Bayshire",
    description:
      "Bayshire helps growing UAE companies fix disorganized operations, unclear roles, disconnected systems, and founder dependency.",
    url: "https://bayshirecorp.com",
    siteName: "Bayshire",
    type: "website",
  },
};

const problems = [
  {
    title: "Everything depends on the owner",
    description:
      "Employees wait for approval, direction, or problem-solving before they can move forward.",
  },
  {
    title: "Roles are unclear",
    description:
      "Tasks are missed, duplicated, or passed between people because ownership is not defined.",
  },
  {
    title: "Departments do not work together",
    description:
      "Sales, operations, finance, and customer service use different information and follow different priorities.",
  },
  {
    title: "Management lacks visibility",
    description:
      "The company has data, but leaders cannot quickly see what is working, what is late, or where money is being lost.",
  },
  {
    title: "Technology creates more confusion",
    description:
      "Software is added without fixing the process first, creating disconnected tools and duplicate work.",
  },
  {
    title: "Growth increases stress",
    description:
      "More customers and employees create more firefighting instead of a stronger company.",
  },
];

const whatWeDo = [
  {
    title: "Clarify responsibilities",
    description: "Define who owns each result, task, and decision.",
  },
  {
    title: "Improve processes",
    description: "Turn important work into clear, repeatable workflows.",
  },
  {
    title: "Connect systems and data",
    description:
      "Make information move correctly between sales, operations, finance, and management.",
  },
  {
    title: "Build management visibility",
    description:
      "Create dashboards, KPIs, meetings, and accountability routines.",
  },
  {
    title: "Use technology properly",
    description:
      "Implement CRM, automation, custom software, and AI after the process is clear.",
  },
  {
    title: "Support execution",
    description:
      "Help the company move from recommendations to working systems.",
  },
];

const methodStages = [
  {
    number: "01",
    label: "Diagnose",
    href: "/method/diagnose",
    description:
      "Understand what is happening today, where work breaks down, and what should be fixed first.",
  },
  {
    number: "02",
    label: "Design",
    href: "/method/design",
    description:
      "Define the future roles, processes, systems, data, controls, and management structure.",
  },
  {
    number: "03",
    label: "Build",
    href: "/method/build",
    description:
      "Create and implement the required workflows, SOPs, dashboards, software, training, and controls.",
  },
  {
    number: "04",
    label: "Scale",
    href: "/method/scale",
    description:
      "Strengthen management, measure performance, and prepare the company for higher volume, new locations, or expansion.",
  },
];

const idealClients = [
  "Growing service businesses.",
  "Companies where too many decisions depend on the founder.",
  "Businesses preparing for multiple locations or regional expansion.",
  "Companies with disconnected departments, tools, or reporting.",
  "Investors who need a business designed, built, or professionalized.",
  "UAE and GCC companies seeking strategy and implementation from one partner.",
];

export default function HomePage() {
  return (
    <>
      {/* ===== SECTION 1 — Hero ===== */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-[1240px] mx-auto px-6 md:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Business Architecture &amp; Transformation
            </p>

            <h1 className="text-white font-heading text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] font-bold mb-6">
              Build a Business That Can Run and Grow Without Depending on You
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-4">
              We help growing companies fix disorganized operations, unclear
              responsibilities, disconnected systems, and owner dependency.
            </p>

            <p className="text-white/50 text-base mb-10">
              From diagnosis and strategy to processes, software, dashboards,
              training, and implementation.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/health-check"
                className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
              >
                Take the 2-Minute Business Health Check
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 border border-white/30 text-white font-semibold text-sm rounded-lg hover:border-white/60 transition-colors"
              >
                Speak With Bayshire
              </Link>
            </div>

            <p className="text-white/40 text-sm tracking-wide">
              Operator-led &nbsp;|&nbsp; Strategy + Implementation &nbsp;|&nbsp;
              UAE &amp; GCC
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — Problem Recognition ===== */}
      <section className="bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              When Growth Outpaces the Way Your Company Works
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
              The Business Gets Bigger. The Problems Get Harder to Control.
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Many companies grow through the founder&rsquo;s energy and
              experience. But as the team, customers, and workload increase,
              informal ways of working begin to break down.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div
                key={p.title}
                className="border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                  {p.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 — What Bayshire Does ===== */}
      <section className="bg-soft-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
              We Organize the Business Behind the Business
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Bayshire studies how your company currently operates, identifies
              the problems holding it back, and designs a practical operating
              system for the next stage of growth. We then help build the
              processes, responsibilities, technology, reporting, and management
              routines required to make the new model work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  <h3 className="font-heading text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — Method ===== */}
      <section className="bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
              A Practical Path From Business Problems to a Working System
            </h2>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-0 relative">
            <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-px bg-border" />
            {methodStages.map((stage) => (
              <Link
                key={stage.number}
                href={stage.href}
                className="relative text-center group px-4"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors relative z-10 bg-white">
                  <span className="text-gold font-heading text-lg font-bold">
                    {stage.number}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors">
                  {stage.label}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {stage.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden space-y-8">
            {methodStages.map((stage, i) => (
              <Link
                key={stage.number}
                href={stage.href}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <span className="text-gold font-heading text-base font-bold">
                      {stage.number}
                    </span>
                  </div>
                  {i < methodStages.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-heading text-xl font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                    {stage.label}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/method"
              className="inline-flex items-center justify-center h-12 px-8 border border-navy/20 text-navy font-semibold text-sm rounded-lg hover:border-navy/40 transition-colors"
            >
              Learn More About Our Method
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5 — Real Work and Proof ===== */}
      <section className="bg-soft-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
              Built From Real Operating Experience
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Bayshire&rsquo;s approach was developed through building and
              operating real businesses. Our work includes company setup,
              facility development, operations, sales, marketing, financial
              controls, customer journeys, SOPs, management systems, and custom
              technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/case-studies/purplebox-storage"
              className="border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white group"
            >
              <div className="h-48 bg-navy/5 flex items-center justify-center">
                <span className="text-navy/40 font-heading font-semibold">
                  Purplebox Storage
                </span>
              </div>
              <div className="p-6">
                <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                  Completed
                </p>
                <h3 className="font-heading text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors">
                  Purplebox Storage
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Full business setup including facility development, operations,
                  sales systems, CRM, financial controls, and management
                  processes.
                </p>
              </div>
            </Link>

            <Link
              href="/case-studies/purplebox-moving"
              className="border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white group"
            >
              <div className="h-48 bg-navy/5 flex items-center justify-center">
                <span className="text-navy/40 font-heading font-semibold">
                  Purplebox Moving
                </span>
              </div>
              <div className="p-6">
                <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                  Implemented
                </p>
                <h3 className="font-heading text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors">
                  Purplebox Moving
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Operating model, departmental capabilities, sales procedures,
                  customer journey, and service delivery workflows.
                </p>
              </div>
            </Link>

            <Link
              href="/case-studies/centuries-contracting"
              className="border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white group"
            >
              <div className="h-48 bg-navy/5 flex items-center justify-center">
                <span className="text-navy/40 font-heading font-semibold">
                  Centuries Contracting
                </span>
              </div>
              <div className="p-6">
                <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                  In Progress
                </p>
                <h3 className="font-heading text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors">
                  Centuries Contracting
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Financial visibility, project-level accountability, and
                  management controls for a fast-growing contracting business.
                </p>
              </div>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/case-studies"
              className="text-gold text-sm font-semibold hover:text-dark-gold transition-colors inline-flex items-center gap-1"
            >
              View All Case Studies
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — Ideal Clients ===== */}
      <section className="bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
                Who We Work With
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-8">
                Bayshire is designed for founder-led and investor-backed
                companies that have real demand and growth potential, but need a
                stronger operating structure.
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                {idealClients.map((client) => (
                  <li key={client} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                    <span className="text-slate text-base leading-relaxed">
                      {client}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7 — Business Health Check CTA ===== */}
      <section className="bg-navy">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
              How Strong Is the Business Behind Your Growth?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Answer a short set of questions and receive a practical assessment
              of your company&rsquo;s management, operations, sales, finance,
              people, customer experience, and technology.
            </p>

            <Link
              href="/health-check"
              className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
            >
              Start My Business Health Check
            </Link>

            <p className="text-white/40 text-sm mt-6">
              Takes approximately two minutes. Receive your score and priority
              recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8 — Founder Credibility ===== */}
      <section className="bg-soft-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                About the Founder
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
                Advice From an Operator, Not Only a Consultant
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Bayshire was founded by Mase Rasti after more than 15 years of
                building, managing, and improving businesses across Canada and
                Dubai. The company combines practical operating experience with
                business design, technology, sales, marketing, finance, and
                implementation.
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

      {/* ===== SECTION 9 — Final CTA ===== */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

        <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
              Your Business Does Not Need More Complexity. It Needs a Clearer
              Way to Work.
            </h2>

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
                Book a 20-Minute Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
