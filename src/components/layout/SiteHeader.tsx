"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "What We Solve",
    href: "/what-we-solve",
    children: [
      { label: "Overview", href: "/what-we-solve" },
      { label: "Founder Dependency", href: "/what-we-solve/founder-dependency" },
      { label: "Disorganized Operations", href: "/what-we-solve/disorganized-operations" },
      { label: "Unclear Roles & Accountability", href: "/what-we-solve/unclear-roles" },
      { label: "Disconnected Systems", href: "/what-we-solve/disconnected-systems" },
      { label: "Limited Management Visibility", href: "/what-we-solve/limited-visibility" },
      { label: "Scaling & Multi-Location Growth", href: "/what-we-solve/scaling-growth" },
    ],
  },
  {
    label: "How We Work",
    href: "/method",
    children: [
      { label: "The Bayshire Method", href: "/method" },
      { label: "Diagnose", href: "/method/diagnose" },
      { label: "Design", href: "/method/design" },
      { label: "Build", href: "/method/build" },
      { label: "Scale", href: "/method/scale" },
      { label: "Business MRI", href: "/business-mri" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Business Assessment", href: "/services/business-assessment" },
      { label: "Business Architecture", href: "/services/business-architecture" },
      { label: "Process & SOP Design", href: "/services/process-sop-design" },
      { label: "Management Systems", href: "/services/management-systems" },
      { label: "Technology & Automation", href: "/services/technology-automation" },
      { label: "Sales & Marketing Systems", href: "/services/sales-marketing-systems" },
      { label: "Implementation & Transformation", href: "/services/implementation-transformation" },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    children: [
      { label: "All Case Studies", href: "/case-studies" },
      { label: "Purplebox Storage", href: "/case-studies/purplebox-storage" },
      { label: "Purplebox Moving", href: "/case-studies/purplebox-moving" },
      { label: "Centuries Contracting", href: "/case-studies/centuries-contracting" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Bayshire", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "How We Work", href: "/how-we-work" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
    </svg>
  );
}

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

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="flex items-center px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded"
      >
        {item.label}
      </Link>
    );
  }

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
          className="absolute left-0 top-full z-50 mt-1 min-w-[260px] rounded-lg bg-white py-2 shadow-xl"
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

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-navy transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? "h-[60px]" : "h-[72px]"}`}>
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
            className={`w-auto transition-all duration-300 ${scrolled ? "h-8" : "h-10"}`}
            priority
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden xl:flex items-center gap-0.5"
        >
          {NAV_ITEMS.map((item) => (
            <DesktopDropdown key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+971000000000"
            aria-label="Call Bayshire"
            className="hidden md:flex items-center gap-1.5 text-white/60 hover:text-gold transition-colors text-sm"
          >
            <PhoneIcon className="h-4 w-4" />
          </a>

          <Link
            href="/health-check"
            className="hidden sm:inline-flex items-center rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition-all hover:bg-dark-gold hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Business Health Check
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="xl:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
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

      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className={`fixed inset-0 z-40 overflow-y-auto bg-navy xl:hidden ${scrolled ? "top-[60px]" : "top-[72px]"}`}
        >
          <div className="flex flex-col pt-4 pb-8">
            {NAV_ITEMS.map((item) => (
              <MobileNavGroup
                key={item.label}
                item={item}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}

            <div className="mt-8 px-6 space-y-3">
              <Link
                href="/health-check"
                className="flex w-full items-center justify-center rounded-full bg-gold px-6 py-3.5 text-base font-semibold text-navy transition-all hover:bg-dark-gold hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Business Health Check
              </Link>
              <a
                href="tel:+971000000000"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-base font-medium text-white transition-all hover:border-white/40"
                onClick={() => setMobileOpen(false)}
              >
                <PhoneIcon className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
