interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionIntroProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p className="mb-3 font-heading text-sm font-semibold tracking-[0.15em] uppercase text-gold">
          {eyebrow}
        </p>
      )}

      <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed text-slate ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
