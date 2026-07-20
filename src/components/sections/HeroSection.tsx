import Link from "next/link";

interface CtaProps {
  label: string;
  href: string;
}

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: CtaProps;
  secondaryCta?: CtaProps;
  variant: "navy" | "white";
  stageLabel?: string;
}

export default function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  variant,
  stageLabel,
}: HeroSectionProps) {
  const isNavy = variant === "navy";

  return (
    <section
      className={`${isNavy ? "bg-navy" : "bg-white"} py-24 md:py-32 lg:py-40`}
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        {stageLabel && (
          <span
            className={`mb-4 inline-block font-heading text-sm font-bold tracking-[0.2em] uppercase ${
              isNavy ? "text-gold" : "text-gold"
            }`}
          >
            {stageLabel}
          </span>
        )}

        {eyebrow && (
          <p
            className={`mb-4 font-heading text-sm font-semibold tracking-[0.15em] uppercase ${
              isNavy ? "text-gold" : "text-gold"
            }`}
          >
            {eyebrow}
          </p>
        )}

        <h1
          className={`max-w-3xl font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-[3.25rem] ${
            isNavy ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h1>

        {description && (
          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed md:text-xl ${
              isNavy ? "text-white/80" : "text-slate"
            }`}
          >
            {description}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className={`inline-flex items-center rounded-lg px-7 py-3.5 font-heading text-sm font-semibold transition-colors ${
                  isNavy
                    ? "bg-gold text-navy hover:bg-[#d4b76e]"
                    : "bg-navy text-white hover:bg-deep-navy"
                }`}
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`inline-flex items-center rounded-lg border px-7 py-3.5 font-heading text-sm font-semibold transition-colors ${
                  isNavy
                    ? "border-white/30 text-white hover:border-white/60"
                    : "border-navy/20 text-navy hover:border-navy/40"
                }`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
