"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Navigation data                                                    */
/* ------------------------------------------------------------------ */

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Method",
    href: "/method",
    children: [
      { label: "The Bayshire Method", href: "/method" },
      { label: "Diagnose", href: "/method/diagnose" },
      { label: "Design", href: "/method/design" },
      { label: "Build", href: "/method/build" },
      { label: "Scale", href: "/method/scale" },
    ],
  },
  {
    label: "Business System",
    href: "/business-system",
    children: [
      { label: "Seven Pillars", href: "/business-system" },
      { label: "Strategy & Direction", href: "/business-system/strategy" },
      { label: "Customers & Customer Experience", href: "/business-system/customers" },
      { label: "Sales & Marketing", href: "/business-system/sales-marketing" },
      { label: "Operations", href: "/business-system/operations" },
      { label: "Finance", href: "/business-system/finance" },
      { label: "Leadership, People & Governance", href: "/business-system/leadership" },
      { label: "Technology, Data & AI", href: "/business-system/technology" },
    ],
  },
  {
    label: "Proof",
    href: "/proof",
    children: [
      { label: "Case Studies", href: "/proof" },
      { label: "Purplebox Storage", href: "/proof/purplebox-storage" },
      { label: "Purplebox Moving", href: "/proof/purplebox-moving" },
      { label: "Centuries Contracting", href: "/proof/centuries-contracting" },
    ],
  },
  {
    label: "Intelligence",
    href: "/intelligence",
    children: [
      { label: "Business Problems", href: "/intelligence/problems" },
      { label: "Insights", href: "/intelligence/insights" },
      { label: "Business Tools", href: "/intelligence/tools" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "About Bayshire", href: "/company" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "How We Work", href: "/company/how-we-work" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Chevron icon                                                       */
/* ------------------------------------------------------------------ */

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop dropdown                                                   */
/* ------------------------------------------------------------------ */

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };

  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  /* Close on Escape */
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={enter}
      onMouseLeave={leave}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && item.children && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-1 min-w-[240px] rounded-lg bg-white py-2 shadow-xl"
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              className="block px-4 py-2.5 text-sm text-navy transition-colors hover:bg-soft-white hover:text-gold focus-visible:outline-none focus-visible:bg-soft-white focus-visible:text-gold"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile accordion group                                             */
/* ------------------------------------------------------------------ */

function MobileNavGroup({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="block px-6 py-3 text-lg font-medium text-white transition-colors hover:text-gold"
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        aria-expanded={open}
        className="flex w-full items-center justify-between px-6 py-3 text-lg font-medium text-white transition-colors hover:text-gold"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="pb-2">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-10 py-2.5 text-base text-white/70 transition-colors hover:text-gold"
              onClick={onNavigate}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SiteHeader                                                         */
/* ------------------------------------------------------------------ */

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-navy">
      {/* ---- Desktop + Mobile top bar ---- */}
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="Bayshire home"
        >
          <Image
            src="/logo.png"
            alt="Bayshire"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-1"
        >
          {NAV_ITEMS.map((item) => (
            <DesktopDropdown key={item.label} item={item} />
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/diagnosis"
            className="hidden sm:inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-dark-gold hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Start Your Diagnosis
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ---- Mobile overlay ---- */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-navy lg:hidden"
        >
          <div className="flex flex-col pt-4 pb-8">
            {NAV_ITEMS.map((item) => (
              <MobileNavGroup
                key={item.label}
                item={item}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}

            {/* Mobile CTA */}
            <div className="mt-8 px-6">
              <Link
                href="/diagnosis"
                className="flex w-full items-center justify-center rounded-full bg-gold px-6 py-3.5 text-base font-semibold text-navy transition-all hover:bg-dark-gold hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Start Your Diagnosis
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
