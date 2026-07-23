import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionIntro from "@/components/sections/SectionIntro";

export const metadata: Metadata = {
  title: "Diagnose - Stage 01 | The Bayshire Method",
  description:
    "Find the problem worth solving. Bayshire's diagnostic stage uses structured inquiry to reveal root causes, misalignments, and hidden leverage points before any recommendation is made.",
};

const questions = [
  "Where is the business actually making and losing money?",
  "What does the leadership team disagree about, and why?",
  "Which processes are running on habit rather than design?",
  "Where do decisions get stuck, reversed, or avoided?",
  "What do customers experience versus what the business believes they experience?",
  "Which capabilities are missing, misallocated, or underperforming?",
  "What has been tried before, and why did it not stick?",
  "Where is the organisation solving symptoms instead of causes?",
];

const diagnosticInputs = [
  "Financial analysis across business units, products, and customer segments",
  "Leadership interviews and alignment mapping",
  "Process observation and workflow documentation",
  "Customer journey mapping and experience audits",
  "Organisational structure and capability assessment",
  "Technology stack review and integration analysis",
  "Competitive positioning and market context",
  "Decision-rights mapping and governance review",
  "Culture and talent diagnostics",
  "Benchmarking against industry and best-practice standards",
];

const deliverables = [
  {
    title: "Business MRI Report",
    description:
      "A comprehensive diagnostic document that maps the state of the business across commercial, operational, organisational, and strategic dimensions.",
  },
  {
    title: "Root-Cause Map",
    description:
      "A visual and narrative breakdown of how symptoms connect to underlying causes, showing where intervention will have the greatest effect.",
  },
  {
    title: "Stakeholder Alignment Brief",
    description:
      "A summary of where the leadership team agrees, disagrees, and is unaware of disagreement. Critical for sequencing change.",
  },
  {
    title: "Prioritised Opportunity Register",
    description:
      "A ranked list of improvement opportunities scored by impact, feasibility, and interdependence.",
  },
  {
    title: "Quick-Win Identification",
    description:
      "Specific, low-risk actions that can be taken immediately to build momentum and demonstrate diagnostic value.",
  },
  {
    title: "Diagnostic Presentation",
    description:
      "A structured deck designed to align the leadership team around findings and create shared commitment to the path forward.",
  },
  {
    title: "Design-Stage Brief",
    description:
      "A scoping document that defines what the Design stage must address, based on diagnostic findings.",
  },
];

const faqs = [
  {
    question: "How long does the diagnostic stage take?",
    answer:
      "Typically four to eight weeks, depending on the complexity and size of the organisation. We prioritise depth over speed.",
  },
  {
    question: "Do we need to pause operations during the diagnostic?",
    answer:
      "No. The diagnostic runs alongside normal operations. We observe the business as it actually works, not as it performs for consultants.",
  },
  {
    question: "What access does Bayshire need?",
    answer:
      "Access to financial data, key personnel for interviews, customer-facing processes, and relevant documentation. We provide a detailed request list at the start.",
  },
  {
    question: "What if we already know the problem?",
    answer:
      "Most organisations know the symptoms. The diagnostic distinguishes symptoms from root causes. The problem you think you have is rarely the problem worth solving.",
  },
  {
    question: "Can we skip straight to Design or Build?",
    answer:
      "We do not recommend it. Design without diagnosis produces elegant solutions to the wrong problems. Build without design produces activity without architecture.",
  },
  {
    question: "What happens after the diagnostic?",
    answer:
      "The diagnostic concludes with a presentation to the leadership team. If the findings warrant it, we scope the Design stage together. There is no obligation to continue.",
  },
];

export default function DiagnosePage() {
  return (
    <>
      <HeroSection
        variant="navy"
        stageLabel="STAGE 01"
        title="Find the problem worth solving."
        description="Most organisations treat symptoms. The diagnostic stage uses structured inquiry to reveal root causes, misalignments, and hidden leverage points before a single recommendation is made."
        primaryCta={{ label: "Request a Business MRI", href: "/contact" }}
        secondaryCta={{ label: "Back to Method", href: "/method" }}
      />

      {/* Questions */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Inquiry"
            title="What we seek to understand"
            description="The diagnostic is structured around questions, not assumptions. These are the questions that guide every engagement."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {questions.map((q, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg border border-border p-6"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-xs font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-slate leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Inputs */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Inputs"
            title="Diagnostic inputs"
            description="We gather evidence from multiple sources to build a complete picture. No single data point tells the story."
          />

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {diagnosticInputs.map((input, i) => (
              <li key={i} className="flex items-start gap-3 text-slate">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">{input}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Deliverables"
            title="What the client receives"
            description="Every diagnostic produces tangible, actionable outputs. These are not reports that sit on shelves."
          />

          <div className="mt-12 space-y-8">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="grid gap-4 border-t border-border pt-8 md:grid-cols-12"
              >
                <div className="md:col-span-4">
                  <h3 className="font-heading text-lg font-bold text-navy">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-7 md:col-start-6">
                  <p className="leading-relaxed text-slate">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Statement */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-[1240px] px-6 text-center md:px-8">
          <blockquote className="mx-auto max-w-3xl font-heading text-2xl font-bold leading-snug text-white md:text-3xl">
            &ldquo;The diagnostic does not tell you what to do. It tells you
            what is actually happening. That is where transformation begins.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Example: What a Diagnostic Reveals */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Real Example"
            title="What a diagnostic reveals"
            description="A concrete scenario showing what the diagnostic process uncovers beneath the surface."
          />

          <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-border bg-soft-white p-8 md:p-10">
            <p className="font-heading text-lg font-bold text-navy">
              The Scenario
            </p>
            <p className="mt-3 leading-relaxed text-slate">
              A moving company with 40 employees had grown from one city to
              three. Revenue was up, but margins were shrinking and the founder
              was working 14-hour days. He still approved every discount, hired
              every driver, and handled every customer complaint personally. He
              assumed the problem was &ldquo;lazy managers.&rdquo;
            </p>

            <p className="mt-8 font-heading text-lg font-bold text-navy">
              What the Diagnostic Revealed
            </p>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-slate">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">
                  <strong className="text-navy">No defined authority levels.</strong>{" "}
                  Staff escalated everything because nobody knew what they were
                  allowed to decide. The managers were not lazy — they were
                  never given authority.
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">
                  <strong className="text-navy">No documented sales process.</strong>{" "}
                  Each salesperson quoted differently. Discounts ranged from 5%
                  to 30% with no logic. The founder was the only pricing
                  control.
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">
                  <strong className="text-navy">Three disconnected systems.</strong>{" "}
                  CRM, accounting, and WhatsApp each held different pieces of
                  customer data. No information flowed between them. Nobody had
                  a complete picture.
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="leading-relaxed">
                  <strong className="text-navy">No management reporting.</strong>{" "}
                  The founder checked each system manually every morning. There
                  were no dashboards, no KPIs, and no way for managers to see
                  their own performance.
                </span>
              </li>
            </ul>

            <p className="mt-8 leading-relaxed text-slate">
              The problem was never &ldquo;lazy managers.&rdquo; It was an
              organisation that had outgrown its founder-led operating model but
              never built the structures to replace it.
            </p>
          </div>
        </div>
      </section>

      {/* Typical Timeline */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Timeline"
            title="Typical timeline"
            description="A standard diagnostic engagement follows four phases over five to six weeks."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-white p-6">
              <span className="inline-block rounded-full bg-navy px-3 py-1 font-heading text-xs font-bold text-gold">
                Week 1
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-navy">
                Preparation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Document collection, stakeholder mapping, interview scheduling,
                and diagnostic scope confirmation.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <span className="inline-block rounded-full bg-navy px-3 py-1 font-heading text-xs font-bold text-gold">
                Weeks 2–3
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-navy">
                Discovery
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Leadership interviews, staff interviews, process observation,
                and on-the-ground data gathering.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <span className="inline-block rounded-full bg-navy px-3 py-1 font-heading text-xs font-bold text-gold">
                Week 4
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-navy">
                Analysis
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Systems review, data analysis, cross-department mapping, and
                root-cause identification.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <span className="inline-block rounded-full bg-navy px-3 py-1 font-heading text-xs font-bold text-gold">
                Weeks 5–6
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-navy">
                Synthesis
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Findings synthesis, priority matrix construction, roadmap
                development, and leadership presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Gate: Ready for Design? */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="Decision Gate"
            title="Ready for Design?"
            description="The diagnostic concludes with a clear decision point. These criteria must be met before moving to the Design stage."
          />

          <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-border border-l-4 border-l-gold bg-soft-white p-8 md:p-10">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border bg-white text-xs text-gold">
                  ✓
                </span>
                <span className="leading-relaxed">
                  Root causes are identified and distinguished from symptoms
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border bg-white text-xs text-gold">
                  ✓
                </span>
                <span className="leading-relaxed">
                  Leadership team has reviewed and accepted the findings
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border bg-white text-xs text-gold">
                  ✓
                </span>
                <span className="leading-relaxed">
                  Priority areas are agreed and sequenced
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border bg-white text-xs text-gold">
                  ✓
                </span>
                <span className="leading-relaxed">
                  Scope and boundaries for the Design stage are defined
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border bg-white text-xs text-gold">
                  ✓
                </span>
                <span className="leading-relaxed">
                  Quick wins have been identified for immediate action
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-soft-white py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <SectionIntro
            eyebrow="FAQ"
            title="Common questions about the diagnostic"
            centered
          />

          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 font-heading text-base font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="ml-4 shrink-0 text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="leading-relaxed text-slate">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 text-center md:px-8">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Clarity before action.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            The Business MRI is the starting point. A structured diagnostic that
            reveals where the real problems are and what to do about them.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-gold px-8 py-4 font-heading text-sm font-semibold text-navy transition-colors hover:bg-[#d4b76e]"
            >
              Request a Business MRI
            </Link>
            <Link
              href="/method/design"
              className="inline-flex items-center rounded-lg border border-white/30 px-8 py-4 font-heading text-sm font-semibold text-white transition-colors hover:border-white/60"
            >
              Next: Design Stage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
