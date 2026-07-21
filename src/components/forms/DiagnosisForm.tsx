"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const inputClass =
  "w-full rounded-lg border border-border bg-white px-4 py-3 text-ink text-[15px] focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors";

const labelClass = "block text-navy font-heading text-sm font-semibold mb-2";

const sectionHeadingClass =
  "text-navy font-heading text-xl font-semibold border-b border-border pb-3 mb-6";

const pillars = [
  "Strategy & Vision",
  "Customers & Market",
  "Sales & Marketing",
  "Operations & Delivery",
  "Finance & Cash Flow",
  "Leadership & Governance",
  "Technology, Data & AI",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin: string;
  companyName: string;
  website: string;
  country: string;
  industry: string;
  revenueRange: string;
  employees: string;
  locations: string;
  roleTitle: string;
  decisionMaker: string;
  goals: string;
  problems: string;
  selectedPillars: string[];
  whatTried: string;
  whyNow: string;
  whenToBegin: string;
  consent: boolean;
}

export default function DiagnosisForm() {
  const router = useRouter();

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    companyName: "",
    website: "",
    country: "",
    industry: "",
    revenueRange: "",
    employees: "",
    locations: "",
    roleTitle: "",
    decisionMaker: "",
    goals: "",
    problems: "",
    selectedPillars: [],
    whatTried: "",
    whyNow: "",
    whenToBegin: "",
    consent: false,
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function handlePillarToggle(pillar: string) {
    setForm((prev) => ({
      ...prev,
      selectedPillars: prev.selectedPillars.includes(pillar)
        ? prev.selectedPillars.filter((p) => p !== pillar)
        : [...prev.selectedPillars, pillar],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/start/thank-you");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {/* Section 1: Contact Information */}
      <h3 className={sectionHeadingClass}>Contact Information</h3>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={form.firstName}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={form.lastName}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="linkedin" className={labelClass}>
            LinkedIn profile URL
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/..."
            className={inputClass}
          />
        </div>
      </div>

      {/* Section 2: Company Information */}
      <h3 className={`${sectionHeadingClass} mt-12`}>Company Information</h3>

      <div className="space-y-6">
        <div>
          <label htmlFor="companyName" className={labelClass}>
            Company name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={form.companyName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="website" className={labelClass}>
            Website URL
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={form.website}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="country" className={labelClass}>
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              required
              value={form.country}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="industry" className={labelClass}>
              Industry / Sector
            </label>
            <input
              type="text"
              id="industry"
              name="industry"
              required
              value={form.industry}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="revenueRange" className={labelClass}>
              Annual revenue range
            </label>
            <select
              id="revenueRange"
              name="revenueRange"
              value={form.revenueRange}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select...</option>
              <option value="Under $1M">Under $1M</option>
              <option value="$1M - $5M">$1M - $5M</option>
              <option value="$5M - $15M">$5M - $15M</option>
              <option value="$15M - $30M">$15M - $30M</option>
              <option value="$30M+">$30M+</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          <div>
            <label htmlFor="employees" className={labelClass}>
              Number of employees
            </label>
            <select
              id="employees"
              name="employees"
              value={form.employees}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select...</option>
              <option value="1-10">1-10</option>
              <option value="11-25">11-25</option>
              <option value="26-50">26-50</option>
              <option value="51-100">51-100</option>
              <option value="100+">100+</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="locations" className={labelClass}>
            Number of locations / offices
          </label>
          <input
            type="text"
            id="locations"
            name="locations"
            value={form.locations}
            onChange={handleChange}
            placeholder="e.g. 3 offices across UAE and KSA"
            className={inputClass}
          />
        </div>
      </div>

      {/* Section 3: Your Role */}
      <h3 className={`${sectionHeadingClass} mt-12`}>Your Role</h3>

      <div className="space-y-6">
        <div>
          <label htmlFor="roleTitle" className={labelClass}>
            Your role / title
          </label>
          <input
            type="text"
            id="roleTitle"
            name="roleTitle"
            required
            value={form.roleTitle}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="decisionMaker" className={labelClass}>
            Are you the primary decision-maker for this engagement?
          </label>
          <select
            id="decisionMaker"
            name="decisionMaker"
            value={form.decisionMaker}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Shared">Shared decision-making</option>
          </select>
        </div>
      </div>

      {/* Section 4: Objective */}
      <h3 className={`${sectionHeadingClass} mt-12`}>Objective</h3>

      <div className="space-y-6">
        <div>
          <label htmlFor="goals" className={labelClass}>
            What is the business trying to achieve in the next 12 months?
          </label>
          <textarea
            id="goals"
            name="goals"
            rows={4}
            required
            value={form.goals}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="problems" className={labelClass}>
            What is currently getting in the way?
          </label>
          <textarea
            id="problems"
            name="problems"
            rows={4}
            required
            value={form.problems}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>
            Which pillars feel most relevant? (select all that apply)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {pillars.map((pillar) => (
              <label
                key={pillar}
                className="flex items-center gap-3 cursor-pointer rounded-lg border border-border px-4 py-3 hover:border-gold/40 transition-colors has-[:checked]:border-gold has-[:checked]:bg-gold/5"
              >
                <input
                  type="checkbox"
                  checked={form.selectedPillars.includes(pillar)}
                  onChange={() => handlePillarToggle(pillar)}
                  className="h-4 w-4 rounded border-border text-gold focus:ring-gold/40"
                />
                <span className="text-ink text-[15px]">{pillar}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="whatTried" className={labelClass}>
            What have you already tried to address this?
          </label>
          <textarea
            id="whatTried"
            name="whatTried"
            rows={3}
            value={form.whatTried}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="whyNow" className={labelClass}>
            Why is now the right time to address this?
          </label>
          <textarea
            id="whyNow"
            name="whyNow"
            rows={3}
            value={form.whyNow}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="whenToBegin" className={labelClass}>
            When would you like to begin?
          </label>
          <select
            id="whenToBegin"
            name="whenToBegin"
            value={form.whenToBegin}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option value="Immediately">Immediately</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="Within 3 months">Within 3 months</option>
            <option value="Still exploring">Still exploring</option>
          </select>
        </div>
      </div>

      {/* Privacy consent */}
      <div className="mt-12">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
            required
            className="mt-1 h-4 w-4 rounded border-border text-gold focus:ring-gold/40"
          />
          <span className="text-slate text-sm leading-relaxed">
            I consent to Bayshire collecting and processing this
            information to assess my application. See our{" "}
            <Link
              href="/privacy"
              className="text-gold hover:text-dark-gold underline"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="bg-gold text-navy px-8 py-4 rounded-lg font-heading text-sm font-bold hover:bg-[#d4b76e] transition-colors w-full md:w-auto mt-8"
      >
        Submit Application
      </button>
    </form>
  );
}
