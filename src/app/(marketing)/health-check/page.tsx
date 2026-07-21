"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

/* ---------- Types ---------- */

interface Question {
  category: string;
  statement: string;
}

interface LeadInfo {
  firstName: string;
  workEmail: string;
  companyName: string;
  phone: string;
  consent: boolean;
}

/* ---------- Data ---------- */

const STORAGE_KEY = "bayshire-health-check";

const questions: Question[] = [
  { category: "Leadership & Management", statement: "Important decisions can be made without waiting for the owner." },
  { category: "Leadership & Management", statement: "Managers have clear authority and measurable responsibilities." },
  { category: "Leadership & Management", statement: "Leadership meetings result in documented actions and follow-up." },

  { category: "People & Accountability", statement: "Every important result has a clearly assigned owner." },
  { category: "People & Accountability", statement: "Employees understand what good performance looks like." },
  { category: "People & Accountability", statement: "New employees can learn their role through documented training and processes." },

  { category: "Operations", statement: "Our most important work follows clear and repeatable processes." },
  { category: "Operations", statement: "Problems are recorded, assigned, and prevented from happening again." },
  { category: "Operations", statement: "The company can handle higher volume without creating constant emergencies." },

  { category: "Sales & Customer Journey", statement: "Every lead is recorded and followed up consistently." },
  { category: "Sales & Customer Journey", statement: "Sales staff use a defined process, script, and pipeline." },
  { category: "Sales & Customer Journey", statement: "Management can see conversion rates and reasons for lost opportunities." },

  { category: "Finance & Reporting", statement: "Management can quickly see sales, cash, costs, receivables, and profitability." },
  { category: "Finance & Reporting", statement: "Budgets and actual results are reviewed regularly." },
  { category: "Finance & Reporting", statement: "Financial information supports decisions rather than arriving too late." },

  { category: "Customer Experience", statement: "Customers receive a consistent experience from first inquiry through delivery and follow-up." },
  { category: "Customer Experience", statement: "Complaints and service failures are tracked and resolved through a defined process." },
  { category: "Customer Experience", statement: "The company actively measures customer satisfaction and retention." },

  { category: "Technology & Automation", statement: "Our systems share information without unnecessary duplicate entry." },
  { category: "Technology & Automation", statement: "Technology supports a clear process rather than replacing one." },
  { category: "Technology & Automation", statement: "We know which repetitive tasks should be automated first." },
];

const likertOptions = [
  { label: "Strongly Disagree", value: 1 },
  { label: "Disagree", value: 2 },
  { label: "Unsure", value: 3 },
  { label: "Agree", value: 4 },
  { label: "Strongly Agree", value: 5 },
];

const categories = [
  "Leadership & Management",
  "People & Accountability",
  "Operations",
  "Sales & Customer Journey",
  "Finance & Reporting",
  "Customer Experience",
  "Technology & Automation",
];

function getMaturityLabel(score: number): string {
  if (score <= 20) return "Founder-Dependent";
  if (score <= 40) return "Developing";
  if (score <= 60) return "Structured";
  if (score <= 80) return "Managed";
  return "Scalable";
}

function getCategoryScore(answers: Record<number, number>, categoryName: string): number {
  const indices = questions
    .map((q, i) => (q.category === categoryName ? i : -1))
    .filter((i) => i !== -1);
  const total = indices.reduce((sum, i) => sum + (answers[i] || 0), 0);
  return Math.round((total / (indices.length * 5)) * 100);
}

function getOverallScore(answers: Record<number, number>): number {
  const total = Object.values(answers).reduce((sum, v) => sum + v, 0);
  return Math.round((total / (questions.length * 5)) * 100);
}

function getRecommendations(answers: Record<number, number>): { category: string; score: number; text: string }[] {
  const scored = categories.map((cat) => ({
    category: cat,
    score: getCategoryScore(answers, cat),
  }));
  scored.sort((a, b) => a.score - b.score);

  const recommendationMap: Record<string, string> = {
    "Leadership & Management":
      "Your leadership structure may be over-reliant on the founder or a small number of individuals. Decisions stall when those people are unavailable, and meetings lack clear outcomes. Start by documenting the three most frequent decisions that currently require the owner and assign explicit authority to the appropriate manager for each.",
    "People & Accountability":
      "Roles and responsibilities lack the clarity needed for consistent performance. Without defined standards and training processes, employee output varies and onboarding takes longer than necessary. Define written performance criteria for your three most critical roles this week and review them with the people in those positions.",
    "Operations":
      "Core operations depend on institutional memory rather than documented processes. When problems arise they tend to be fought repeatedly rather than solved permanently. Identify the single process that causes the most rework or customer complaints and document it end-to-end, including the escalation path.",
    "Sales & Customer Journey":
      "Leads and opportunities are not being tracked systematically, which means revenue is being left on the table. Without a defined sales process, performance is difficult to measure or improve. Implement a single shared pipeline — even a spreadsheet — and require every lead to be logged with a status and next action within 24 hours.",
    "Finance & Reporting":
      "Financial visibility is limited, which forces management to make decisions on intuition rather than data. Reports either arrive too late or lack the detail needed for action. Set up a weekly one-page dashboard covering revenue, cash position, receivables, and top five cost lines so leadership has a consistent view.",
    "Customer Experience":
      "Customer experience is inconsistent, and complaints are handled reactively rather than through a structured process. This erodes trust and increases churn. Create a simple complaint log that tracks issue type, resolution time, and root cause, and review it in your weekly leadership meeting.",
    "Technology & Automation":
      "Systems are fragmented, requiring manual data entry across multiple tools and creating errors. Technology has been adopted without first defining the process it should support. Audit your top five workflows for duplicate data entry and prioritise eliminating the one that consumes the most staff time.",
  };

  return scored.slice(0, 3).map((item) => ({
    ...item,
    text: recommendationMap[item.category],
  }));
}

/* ---------- Sub-components ---------- */

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-heading font-semibold text-navy">
          Question {current} of {total}
        </span>
        <span className="text-sm font-heading font-semibold text-gold">{pct}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-light-surface">
        <div
          className="h-2 rounded-full bg-gold transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function CategoryBar({ label, score }: { label: string; score: number }) {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-heading font-semibold text-navy">{label}</span>
        <span className="text-sm font-heading font-bold text-gold">{score}%</span>
      </div>
      <div className="h-3 w-full rounded-full bg-light-surface">
        <div
          className="h-3 rounded-full bg-gold transition-all duration-500"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

/* ================================================================
   Page Component
   ================================================================ */

type Phase = "intro" | "quiz" | "gate" | "results";

export default function HealthCheckPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [lead, setLead] = useState<LeadInfo>({
    firstName: "",
    workEmail: "",
    companyName: "",
    phone: "",
    consent: false,
  });
  const [gateError, setGateError] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.answers) setAnswers(parsed.answers);
        if (typeof parsed.currentQ === "number") setCurrentQ(parsed.currentQ);
        if (parsed.phase && parsed.phase !== "intro") setPhase(parsed.phase as Phase);
      }
    } catch {
      // ignore
    }
  }, []);

  const persist = useCallback(
    (patch: { answers?: Record<number, number>; currentQ?: number; phase?: Phase }) => {
      try {
        const current = { answers, currentQ, phase };
        const merged = { ...current, ...patch };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      } catch {
        // ignore
      }
    },
    [answers, currentQ, phase],
  );

  function startAssessment() {
    setPhase("quiz");
    setCurrentQ(0);
    setAnswers({});
    persist({ phase: "quiz", currentQ: 0, answers: {} });
  }

  function selectAnswer(value: number) {
    const next = { ...answers, [currentQ]: value };
    setAnswers(next);
    persist({ answers: next });
  }

  function goNext() {
    if (answers[currentQ] === undefined) return;
    if (currentQ < questions.length - 1) {
      const nextQ = currentQ + 1;
      setCurrentQ(nextQ);
      persist({ currentQ: nextQ });
    } else {
      setPhase("gate");
      persist({ phase: "gate" });
    }
  }

  function goBack() {
    if (currentQ > 0) {
      const prevQ = currentQ - 1;
      setCurrentQ(prevQ);
      persist({ currentQ: prevQ });
    }
  }

  function submitLead() {
    if (!lead.firstName.trim() || !lead.workEmail.trim() || !lead.companyName.trim()) {
      setGateError("Please complete the required fields.");
      return;
    }
    if (!lead.consent) {
      setGateError("Please confirm you consent to receive your results.");
      return;
    }
    setGateError("");
    setPhase("results");
    persist({ phase: "results" });
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  function restart() {
    setPhase("intro");
    setCurrentQ(0);
    setAnswers({});
    setLead({ firstName: "", workEmail: "", companyName: "", phone: "", consent: false });
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  const overallScore = getOverallScore(answers);
  const maturity = getMaturityLabel(overallScore);

  /* ---------- Intro ---------- */

  if (phase === "intro") {
    return (
      <>
        <section className="bg-navy py-24 md:py-32 lg:py-40">
          <div className="max-w-[1240px] mx-auto px-6 md:px-8">
            <p className="mb-4 font-heading text-sm font-semibold tracking-[0.15em] uppercase text-gold">
              Free Assessment
            </p>
            <h1 className="text-white font-heading text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.15] font-extrabold max-w-3xl">
              Find Out What Is Holding Your Company Back
            </h1>
            <p className="mt-6 text-white/70 text-[17px] leading-relaxed max-w-2xl">
              Answer 21 questions across seven core business areas. In under ten minutes you will
              receive an overall health score, a breakdown by category, and practical
              recommendations you can act on immediately.
            </p>
            <p className="mt-4 text-white/50 text-sm">
              Your answers are confidential and will not be shared.
            </p>
            <button
              type="button"
              onClick={startAssessment}
              className="mt-10 inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors cursor-pointer"
            >
              Start the Assessment
            </button>
          </div>
        </section>
      </>
    );
  }

  /* ---------- Quiz ---------- */

  if (phase === "quiz") {
    const q = questions[currentQ];
    return (
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mx-auto">
            <ProgressBar current={currentQ + 1} total={questions.length} />

            <p className="text-gold font-heading text-xs font-bold tracking-[0.15em] uppercase mb-3">
              {q.category}
            </p>

            <h2 className="text-navy font-heading text-xl md:text-2xl font-bold leading-snug mb-8">
              {q.statement}
            </h2>

            <div className="space-y-3">
              {likertOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => selectAnswer(opt.value)}
                  className={`w-full text-left rounded-lg border px-5 py-4 text-[15px] font-medium transition-colors ${
                    answers[currentQ] === opt.value
                      ? "bg-navy text-white border-navy"
                      : "bg-soft-white text-slate border-border hover:border-navy/30"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-between">
              <button
                type="button"
                onClick={goBack}
                disabled={currentQ === 0}
                className={`inline-flex items-center justify-center h-11 px-6 text-sm font-semibold rounded-lg border transition-colors ${
                  currentQ === 0
                    ? "border-border text-muted cursor-not-allowed"
                    : "border-border text-navy hover:bg-soft-white cursor-pointer"
                }`}
              >
                Back
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={answers[currentQ] === undefined}
                className={`inline-flex items-center justify-center h-11 px-8 text-sm font-semibold rounded-lg transition-colors ${
                  answers[currentQ] !== undefined
                    ? "bg-gold text-navy hover:bg-dark-gold cursor-pointer"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {currentQ === questions.length - 1 ? "See My Score" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- Lead capture gate ---------- */

  if (phase === "gate") {
    return (
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="max-w-xl mx-auto">
            <div className="bg-soft-white rounded-xl p-8 border border-border text-center mb-10">
              <p className="text-gold font-heading text-5xl font-bold">{overallScore}</p>
              <p className="text-navy font-heading text-lg font-semibold mt-2">out of 100</p>
              <p className="text-muted text-sm mt-1">{maturity}</p>
            </div>

            <h2 className="text-navy font-heading text-xl md:text-2xl font-bold text-center mb-3">
              See Your Detailed Breakdown
            </h2>
            <p className="text-slate text-[15px] leading-relaxed text-center mb-8">
              To see your detailed breakdown by business area and recommendations, enter your
              details below.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="hc-first-name" className="block text-sm font-semibold text-navy mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="hc-first-name"
                  type="text"
                  value={lead.firstName}
                  onChange={(e) => setLead({ ...lead, firstName: e.target.value })}
                  className="w-full h-11 px-4 rounded-lg border border-border bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                />
              </div>

              <div>
                <label htmlFor="hc-email" className="block text-sm font-semibold text-navy mb-1">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="hc-email"
                  type="email"
                  value={lead.workEmail}
                  onChange={(e) => setLead({ ...lead, workEmail: e.target.value })}
                  className="w-full h-11 px-4 rounded-lg border border-border bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                />
              </div>

              <div>
                <label htmlFor="hc-company" className="block text-sm font-semibold text-navy mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="hc-company"
                  type="text"
                  value={lead.companyName}
                  onChange={(e) => setLead({ ...lead, companyName: e.target.value })}
                  className="w-full h-11 px-4 rounded-lg border border-border bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                />
              </div>

              <div>
                <label htmlFor="hc-phone" className="block text-sm font-semibold text-navy mb-1">
                  Phone <span className="text-muted font-normal">(optional)</span>
                </label>
                <input
                  id="hc-phone"
                  type="tel"
                  value={lead.phone}
                  onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                  className="w-full h-11 px-4 rounded-lg border border-border bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                />
              </div>

              <label className="flex items-start gap-3 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={lead.consent}
                  onChange={(e) => setLead({ ...lead, consent: e.target.checked })}
                  className="mt-0.5 h-4 w-4 rounded border-border text-gold accent-gold"
                />
                <span className="text-sm text-slate leading-snug">
                  I consent to Bayshire processing my details to deliver the assessment results and
                  related follow-up communications. I can unsubscribe at any time.
                </span>
              </label>
            </div>

            {gateError && (
              <p className="mt-4 text-sm text-red-600 font-medium">{gateError}</p>
            )}

            <button
              type="button"
              onClick={submitLead}
              className="mt-8 w-full inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors cursor-pointer"
            >
              View My Full Results
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- Results ---------- */

  const recommendations = getRecommendations(answers);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Overall score */}
          <div className="bg-soft-white rounded-xl p-8 md:p-10 border border-border text-center mb-12">
            <p className="text-gold font-heading text-6xl font-bold">{overallScore}</p>
            <p className="text-navy font-heading text-lg font-semibold mt-2">out of 100</p>
            <p className="mt-2 inline-block bg-navy text-white text-xs font-heading font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full">
              {maturity}
            </p>
          </div>

          {/* Category breakdown */}
          <h3 className="text-navy font-heading text-xl font-bold mb-6">
            Score by Business Area
          </h3>
          <div className="mb-12">
            {categories.map((cat) => (
              <CategoryBar key={cat} label={cat} score={getCategoryScore(answers, cat)} />
            ))}
          </div>

          {/* Recommendations */}
          <h3 className="text-navy font-heading text-xl font-bold mb-6">
            Priority Recommendations
          </h3>
          <div className="space-y-6 mb-12">
            {recommendations.map((rec, i) => (
              <div key={rec.category} className="bg-soft-white rounded-xl p-7 border border-border">
                <p className="text-gold font-heading text-xs font-bold tracking-[0.15em] uppercase mb-1">
                  Priority {i + 1} &mdash; {rec.category} ({rec.score}%)
                </p>
                <p className="text-slate text-[15px] leading-relaxed">{rec.text}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
            >
              Book a 20-Minute Review
            </Link>
            <Link
              href="/business-mri"
              className="inline-flex items-center justify-center h-12 px-8 bg-white text-navy font-semibold text-sm rounded-lg border border-border hover:bg-soft-white transition-colors"
            >
              Apply for a Business MRI
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-muted text-xs leading-relaxed">
            This assessment is a self-reported diagnostic tool and does not constitute professional
            advice. Scores are indicative and based solely on the answers provided. For a
            comprehensive evaluation of your business, contact Bayshire to discuss a formal
            diagnostic engagement.
          </p>

          <div className="mt-8 pt-6 border-t border-border">
            <button
              type="button"
              onClick={restart}
              className="text-sm font-semibold text-navy hover:text-gold transition-colors cursor-pointer"
            >
              Retake the Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
