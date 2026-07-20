"use client";

import { useState } from "react";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";

/* ---------- Data ---------- */

const statements = [
  "Our leadership team spends more time reacting than planning.",
  "We have grown, but our processes have not kept pace.",
  "Customer experience is inconsistent across channels or locations.",
  "We rely on a few key people to hold everything together.",
  "We cannot confidently forecast the next quarter.",
];

const options = [
  { label: "Strongly disagree", value: 1 },
  { label: "Disagree", value: 2 },
  { label: "Agree", value: 3 },
  { label: "Strongly agree", value: 4 },
];

function getInterpretation(score: number) {
  if (score <= 9) {
    return {
      heading: "Relatively healthy",
      description:
        "Your operating model appears relatively healthy. You may still benefit from a diagnostic to confirm there are no hidden inefficiencies, but the foundations seem solid.",
    };
  }
  if (score <= 14) {
    return {
      heading: "Signs of strain",
      description:
        "There are signs of strain worth investigating. Businesses at this stage often have specific bottlenecks that, once resolved, unlock significant capacity and clarity.",
    };
  }
  return {
    heading: "Outgrown the current model",
    description:
      "Your business has likely outgrown its current operating model. The patterns you are experiencing are common in businesses at a growth inflection point — and they are fixable with the right approach.",
  };
}

/* ================================================================
   Page Component
   ================================================================ */

export default function HealthCheckPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = statements.every((_, i) => answers[i] !== undefined);
  const score = Object.values(answers).reduce((sum, v) => sum + v, 0);

  function handleSelect(questionIndex: number, value: number) {
    setAnswers((prev) => ({ ...prev, [questionIndex]: value }));
  }

  function handleSubmit() {
    if (allAnswered) setSubmitted(true);
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <>
      {/* ===== Hero ===== */}
      <HeroSection
        variant="navy"
        eyebrow="FREE TOOL"
        title="How healthy is the way your business operates?"
        description="Answer five quick questions to see whether your business has outgrown its current operating model. It takes less than two minutes."
      />

      {/* ===== Quiz ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          {!submitted ? (
            <>
              <div className="max-w-3xl space-y-10">
                {statements.map((statement, qi) => (
                  <div key={qi}>
                    <p className="text-navy font-heading text-base font-semibold">
                      {qi + 1}. {statement}
                    </p>

                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                      {options.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => handleSelect(qi, opt.value)}
                          className={`rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                            answers[qi] === opt.value
                              ? "bg-navy text-white border-navy"
                              : "bg-soft-white text-slate border-border hover:border-navy/30"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!allAnswered}
                  className={`inline-flex items-center justify-center h-12 px-8 font-semibold text-sm rounded-lg transition-colors ${
                    allAnswered
                      ? "bg-gold text-navy hover:bg-dark-gold cursor-pointer"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  See Your Results
                </button>
              </div>
            </>
          ) : (
            <div className="max-w-3xl">
              <div className="bg-soft-white rounded-xl p-8 border border-border">
                <p className="text-gold font-heading text-4xl font-bold">
                  {score} / 20
                </p>

                <h3 className="text-navy font-heading text-xl font-semibold mt-4">
                  {getInterpretation(score).heading}
                </h3>

                <p className="text-slate text-[17px] leading-relaxed mt-3">
                  {getInterpretation(score).description}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/start"
                  className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
                >
                  Start Your Diagnosis
                </Link>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center h-12 px-8 bg-white text-navy font-semibold text-sm rounded-lg border border-border hover:bg-soft-white transition-colors"
                >
                  Retake the Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
