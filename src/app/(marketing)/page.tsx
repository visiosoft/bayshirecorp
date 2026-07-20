import Link from "next/link";

/* ================================================================
   Bayshire Homepage  -  Server Component
   ================================================================ */

/* ---------- Icon helpers (inline SVGs to avoid external deps) ---------- */

function IconBottleneck() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#F7F8FA" />
      <path d="M20 12v4m0 8v4m-6-10h12M14 20a6 6 0 1112 0 6 6 0 01-12 0z" stroke="#C3A15A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconVisibility() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#F7F8FA" />
      <path d="M12 20s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="#C3A15A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="2.5" stroke="#C3A15A" strokeWidth="1.5" />
    </svg>
  );
}

function IconFriction() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#F7F8FA" />
      <path d="M14 26l4-4 4 4 4-4 4 4M14 18l4-4 4 4 4-4 4 4" stroke="#C3A15A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDisconnected() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#F7F8FA" />
      <path d="M16 16l-2-2m10 10l2 2M22 16l2-2M16 22l-2 2" stroke="#C3A15A" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="16" y="16" width="8" height="8" rx="2" stroke="#C3A15A" strokeWidth="1.5" />
    </svg>
  );
}

function IconAccountability() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#F7F8FA" />
      <path d="M15 21l3 3 7-7" stroke="#C3A15A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="12" y="12" width="16" height="16" rx="3" stroke="#C3A15A" strokeWidth="1.5" />
    </svg>
  );
}

function IconScalingRisk() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#F7F8FA" />
      <path d="M20 14v6m0 4h.01M13 26h14l-7-14-7 14z" stroke="#C3A15A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Data ---------- */

const symptoms = [
  {
    icon: <IconBottleneck />,
    title: "Founder Bottleneck",
    description:
      "Every decision still passes through one or two people. The business cannot move without them.",
  },
  {
    icon: <IconVisibility />,
    title: "Limited Visibility",
    description:
      "Leadership lacks a clear, real-time view of what is working, what is not, and where the business stands.",
  },
  {
    icon: <IconFriction />,
    title: "Operational Friction",
    description:
      "Teams are busy but output is inconsistent. Processes exist on paper but break down in practice.",
  },
  {
    icon: <IconDisconnected />,
    title: "Disconnected Systems",
    description:
      "Tools and platforms do not talk to each other. Data lives in silos, and reporting is manual.",
  },
  {
    icon: <IconAccountability />,
    title: "Weak Accountability",
    description:
      "Roles are unclear. Ownership is assumed but not defined. Things fall through the cracks regularly.",
  },
  {
    icon: <IconScalingRisk />,
    title: "Scaling Risk",
    description:
      "Revenue is growing, but the operating model was never designed to handle the next stage of scale.",
  },
];

const methodStages = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We assess the business across all seven pillars to identify the root causes of friction, inefficiency, and risk. No assumptions. No templates. Just structured clarity about what needs to change.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We design an operating model that fits the business as it is today and the business it needs to become. Structure, systems, roles, processes, and technology—connected and coherent.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We build the capabilities, processes, and systems required to execute the new design. Not a deck of recommendations—working infrastructure the team can operate from day one.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We embed the systems, transfer ownership to the team, and establish the feedback loops needed to sustain performance as the business grows.",
  },
];

const diagnosticStatements = [
  "Our leadership team spends more time reacting than planning.",
  "We have grown, but our processes have not kept pace.",
  "Customer experience is inconsistent across channels or locations.",
  "We rely on a few key people to hold everything together.",
  "We cannot confidently forecast the next quarter.",
];

const pillars = [
  { key: "strategy", label: "Strategy", description: "Where the business is going and how it will get there." },
  { key: "customers", label: "Customers", description: "How the business attracts, serves, and retains its customers." },
  { key: "sales-marketing", label: "Revenue", description: "How the business generates, converts, and grows revenue." },
  { key: "operations", label: "Operations", description: "How the business delivers its products and services reliably." },
  { key: "finance", label: "Finance", description: "How the business manages cash, cost, and financial clarity." },
  { key: "leadership-governance", label: "Leadership", description: "How decisions are made and who is accountable for what." },
  { key: "technology-data-ai", label: "Technology & AI", description: "How the business uses technology to enable—not complicate—performance." },
];

const caseStudies = [
  {
    slug: "purplebox-storage",
    category: "Operations & Technology",
    title: "Purplebox Storage",
    teaser:
      "Transformed fragmented warehouse operations into a connected, technology-enabled storage platform across multiple facilities.",
    cta: "Read the case study",
  },
  {
    slug: "purplebox-moving",
    category: "Customer Experience & Revenue",
    title: "Purplebox Moving",
    teaser:
      "Redesigned the end-to-end customer journey from quote to delivery, replacing manual coordination with structured systems.",
    cta: "Read the case study",
  },
  {
    slug: "centuries-contracting",
    category: "Finance & Governance",
    title: "Centuries Contracting",
    teaser:
      "Built financial visibility and project-level accountability into a fast-growing contracting business that had outpaced its controls.",
    cta: "Read the case study",
  },
];

const outcomes = [
  {
    title: "Clarity",
    description: "Everyone in the business knows the plan, the priorities, and where they fit.",
  },
  {
    title: "Control",
    description: "Leaders manage by system, not by firefighting. Decisions are data-informed.",
  },
  {
    title: "Accountability",
    description: "Every function has clear ownership. Nothing falls through the cracks.",
  },
  {
    title: "Visibility",
    description: "Real-time dashboards and reporting replace guesswork and manual tracking.",
  },
  {
    title: "Customer Consistency",
    description: "Every customer touchpoint delivers the same standard, every time.",
  },
  {
    title: "Scale Readiness",
    description: "The business can grow without breaking what already works.",
  },
];

/* ================================================================
   Page Component
   ================================================================ */

export default function HomePage() {
  return (
    <>
      {/* ===== SECTION 1 — Hero ===== */}
      <section className="relative bg-navy overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-[1240px] mx-auto px-6 py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left copy */}
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                Business Transformation, Engineered Around Reality
              </p>

              <h1 className="text-white font-heading text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] font-bold mb-6">
                Your business has grown.
                <br />
                Has the way it runs?
              </h1>

              <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-10">
                Bayshire diagnoses what is holding performance back, designs a
                stronger operating model, builds the systems required to execute
                it, and scales what works.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
                >
                  Start Your Diagnosis
                </Link>
                <Link
                  href="/method"
                  className="inline-flex items-center justify-center h-12 px-8 border border-white/30 text-white font-semibold text-sm rounded-lg hover:border-white/60 transition-colors"
                >
                  See How Bayshire Works
                </Link>
              </div>

              <p className="text-white/40 text-sm tracking-wide">
                Strategy. Customers. Revenue. Operations. Finance. Leadership.
                Technology&nbsp;&amp;&nbsp;AI.
              </p>
            </div>

            {/* Right — abstract visual placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Concentric rings */}
                <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
                <div className="absolute inset-6 rounded-full border border-white/[0.08]" />
                <div className="absolute inset-12 rounded-full border border-white/[0.10]" />
                <div className="absolute inset-18 rounded-full border border-gold/20" />
                <div className="absolute inset-24 rounded-full border border-gold/30" />
                {/* Center accent */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gold/30" />
                  </div>
                </div>
                {/* Floating dots */}
                <div className="absolute top-[15%] right-[20%] w-2 h-2 rounded-full bg-gold/50" />
                <div className="absolute bottom-[25%] left-[15%] w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="absolute top-[40%] left-[10%] w-2.5 h-2.5 rounded-full bg-gold/20" />
                <div className="absolute bottom-[15%] right-[25%] w-2 h-2 rounded-full bg-white/15" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — Recognition ===== */}
      <section className="bg-white">
        <div className="max-w-[1240px] mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              When Growth Outpaces the Business System
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              The business is moving. The organization is struggling to keep up.
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              These are the patterns we see most often in growing businesses that
              have outpaced their operating model.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map((s) => (
              <div
                key={s.title}
                className="border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                  {s.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-muted text-base mb-6">
              If more than two of these sound familiar, the issue is not
              effort—it is structure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
            >
              Talk to Bayshire
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 — Method ===== */}
      <section className="bg-soft-white">
        <div className="max-w-[1240px] mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              The Bayshire Method
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Do not automate confusion.
              <br />
              Do not scale inconsistency.
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Every engagement follows a structured, four-stage method that
              connects diagnosis to measurable outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodStages.map((stage) => (
              <div
                key={stage.number}
                className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <span className="text-gold font-heading text-2xl font-bold mb-3 block">
                  {stage.number}
                </span>
                <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                  {stage.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/method"
              className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
            >
              Explore the Full Method
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — Business Health Check ===== */}
      <section className="bg-navy">
        <div className="max-w-[1240px] mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
              How healthy is the way your business operates?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Answer five quick questions and get an honest snapshot of where
              your business operating model stands today.
            </p>

            <div className="space-y-4 max-w-2xl mx-auto mb-12">
              {diagnosticStatements.map((statement, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.08] rounded-lg px-6 py-4 text-left"
                >
                  <span className="text-gold font-heading font-bold text-sm mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {statement}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/health-check"
              className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
            >
              Take the Business Health Check
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5 — Seven Pillars ===== */}
      <section className="bg-white">
        <div className="max-w-[1240px] mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              The Seven Pillars
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              A business is only as strong as the system connecting its parts.
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Bayshire works across seven interconnected pillars. Weakness in one
              creates drag on all the others.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.key}
                className={`border border-border rounded-xl p-6 hover:shadow-md transition-shadow ${
                  i === pillars.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  <h3 className="font-heading text-lg font-semibold text-navy">
                    {pillar.label}
                  </h3>
                </div>
                <p className="text-slate text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Connection line visual */}
          <div className="flex items-center justify-center mt-10 gap-1">
            {pillars.map((_, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-gold/20 border border-gold/40" />
                {i < pillars.length - 1 && (
                  <div className="w-8 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — Point of View ===== */}
      <section className="bg-soft-white">
        <div className="max-w-[1240px] mx-auto px-6 py-24 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-snug">
              &ldquo;We do not start with software. We start with the business
              problem that determines whether software is needed.&rdquo;
            </blockquote>
            <div className="w-12 h-px bg-gold mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* ===== SECTION 7 — Proof ===== */}
      <section className="bg-white">
        <div className="max-w-[1240px] mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Proof of Work
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Built in operating companies—not only in presentations.
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Every method and framework we use has been tested inside real
              businesses with real constraints.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.slug}
                className="border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Placeholder image area */}
                <div className="h-48 bg-soft-white flex items-center justify-center">
                  <span className="text-muted text-sm">{cs.title}</span>
                </div>
                <div className="p-6">
                  <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                    {cs.category}
                  </p>
                  <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                    {cs.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed mb-4">
                    {cs.teaser}
                  </p>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="text-gold text-sm font-semibold hover:text-dark-gold transition-colors inline-flex items-center gap-1"
                  >
                    {cs.cta}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 8 — Outcomes ===== */}
      <section className="bg-soft-white">
        <div className="max-w-[1240px] mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              What Changes
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Transformation should be visible in the way the business performs.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                  {outcome.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9 — Final CTA ===== */}
      <section className="relative bg-navy overflow-hidden">
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

        <div className="max-w-[1240px] mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
              You do not need another disconnected initiative. You need clarity
              about what to change first.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you are ready to start or simply want to understand where
              you stand, Bayshire can help.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
              >
                Start Your Diagnosis
              </Link>
              <Link
                href="/health-check"
                className="inline-flex items-center justify-center h-12 px-8 border border-white/30 text-white font-semibold text-sm rounded-lg hover:border-white/60 transition-colors"
              >
                Take the Free Health Check
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
