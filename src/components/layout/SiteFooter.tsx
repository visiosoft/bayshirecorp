import Link from "next/link";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Footer link data                                                   */
/* ------------------------------------------------------------------ */

const METHOD_LINKS = [
  { label: "Diagnose", href: "/method/diagnose" },
  { label: "Design", href: "/method/design" },
  { label: "Build", href: "/method/build" },
  { label: "Scale", href: "/method/scale" },
  { label: "Business MRI", href: "/method" },
];

const SYSTEM_LINKS = [
  { label: "Seven Pillars", href: "/business-system" },
  { label: "Strategy & Direction", href: "/business-system/strategy" },
  { label: "Customers & CX", href: "/business-system/customers" },
  { label: "Sales & Marketing", href: "/business-system/sales-marketing" },
  { label: "Operations", href: "/business-system/operations" },
  { label: "Finance", href: "/business-system/finance" },
  { label: "Leadership & Governance", href: "/business-system/leadership" },
  { label: "Technology, Data & AI", href: "/business-system/technology" },
];

const EXPLORE_LINKS = [
  { label: "Case Studies", href: "/proof" },
  { label: "Business Problems", href: "/intelligence/problems" },
  { label: "Insights", href: "/intelligence/insights" },
  { label: "Tools", href: "/intelligence/tools" },
  { label: "About", href: "/company" },
  { label: "Contact", href: "/contact" },
];

/* ------------------------------------------------------------------ */
/*  Social icons                                                       */
/* ------------------------------------------------------------------ */

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer link column                                                 */
/* ------------------------------------------------------------------ */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SiteFooter                                                         */
/* ------------------------------------------------------------------ */

export default function SiteFooter() {
  return (
    <footer className="bg-deep-navy" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---- Main grid ---- */}
        <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <Link href="/" aria-label="Bayshire home">
              <Image
                src="/logo.png"
                alt="Bayshire"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Premium business transformation consulting. We help ambitious
              companies diagnose challenges, design solutions, build
              capabilities, and scale for lasting growth.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bayshire on LinkedIn"
                className="text-white/40 transition-colors hover:text-gold"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bayshire on YouTube"
                className="text-white/40 transition-colors hover:text-gold"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bayshire on Instagram"
                className="text-white/40 transition-colors hover:text-gold"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <FooterColumn title="Method" links={METHOD_LINKS} />
          <FooterColumn title="Business System" links={SYSTEM_LINKS} />
          <FooterColumn title="Explore" links={EXPLORE_LINKS} />
        </div>

        {/* ---- Bottom bar ---- */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; 2026 Bayshire Management Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
