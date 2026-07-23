import Link from "next/link";
import Image from "next/image";

const SOLVE_LINKS = [
  { label: "Founder Dependency", href: "/what-we-solve/founder-dependency" },
  { label: "Disorganized Operations", href: "/what-we-solve/disorganized-operations" },
  { label: "Unclear Roles", href: "/what-we-solve/unclear-roles" },
  { label: "Disconnected Systems", href: "/what-we-solve/disconnected-systems" },
  { label: "Limited Visibility", href: "/what-we-solve/limited-visibility" },
  { label: "Scaling & Growth", href: "/what-we-solve/scaling-growth" },
];

const SERVICES_LINKS = [
  { label: "Business Assessment", href: "/services/business-assessment" },
  { label: "Business Architecture", href: "/services/business-architecture" },
  { label: "Process & SOP Design", href: "/services/process-sop-design" },
  { label: "Management Systems", href: "/services/management-systems" },
  { label: "Technology & Automation", href: "/services/technology-automation" },
  { label: "Sales & Marketing Systems", href: "/services/sales-marketing-systems" },
  { label: "Implementation", href: "/services/implementation-transformation" },
];

const COMPANY_LINKS = [
  { label: "How We Work", href: "/method" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

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

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
      <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.274 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-deep-navy" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Bayshire home">
              <Image
                src="/logo.png"
                alt="Bayshire"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-1 text-sm font-medium text-gold/80">
              Business Architecture &amp; Transformation
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              We help growing companies organize how they work — clarifying
              roles, improving processes, connecting systems, and building
              management visibility.
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href="mailto:info@bayshirecorp.com"
                className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
              >
                <EmailIcon />
                info@bayshirecorp.com
              </a>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <LocationIcon />
                Dubai, United Arab Emirates
              </div>
              <p className="text-xs text-white/30 pl-6">
                We normally respond within one business day.
              </p>
            </div>
          </div>

          {/* Link columns */}
          <FooterColumn title="What We Solve" links={SOLVE_LINKS} />
          <FooterColumn title="Services" links={SERVICES_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; 2026 Bayshire. All rights reserved.
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
