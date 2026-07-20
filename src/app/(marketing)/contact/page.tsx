import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import SectionIntro from "@/components/sections/SectionIntro";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Bayshire Corp",
  description:
    "Start with the reason for the conversation. Whether you are exploring transformation, partnerships, or general inquiries.",
};

const routingCards = [
  {
    title: "Business transformation inquiry",
    description:
      "You are considering a structured diagnostic or transformation engagement. Start with the application.",
    href: "/start",
    linkLabel: "Begin application",
    type: "link" as const,
    primary: true,
  },
  {
    title: "Partnership or specialist collaboration",
    description:
      "You represent an organisation interested in collaborating with Bayshire — referral partnerships, co-delivery, or ecosystem opportunities.",
    href: "mailto:partnerships@bayshire.com",
    linkLabel: "partnerships@bayshire.com",
    type: "email" as const,
    primary: false,
  },
  {
    title: "Speaking or media",
    description:
      "You are inviting Bayshire to speak at an event, contribute to a publication, or participate in a podcast or interview.",
    href: "mailto:media@bayshire.com",
    linkLabel: "media@bayshire.com",
    type: "email" as const,
    primary: false,
  },
  {
    title: "General company inquiry",
    description:
      "Your question does not fit the categories above. Use the form below to get in touch.",
    href: "#contact-form",
    linkLabel: "Go to form",
    type: "anchor" as const,
    primary: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        variant="navy"
        eyebrow="CONTACT"
        title="Start with the reason for the conversation."
        description="Different inquiries require different starting points. Choose the path that best describes your situation."
      />

      {/* Routing options */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {routingCards.map((card) => (
              <div
                key={card.title}
                className={
                  card.primary
                    ? "bg-navy text-white rounded-xl p-8"
                    : "bg-white border border-border rounded-xl p-8"
                }
              >
                <h3
                  className={
                    card.primary
                      ? "text-white font-heading text-lg font-semibold"
                      : "text-navy font-heading text-lg font-semibold"
                  }
                >
                  {card.title}
                </h3>
                <p
                  className={
                    card.primary ? "text-white/70 mt-3" : "text-slate mt-3"
                  }
                >
                  {card.description}
                </p>
                {card.primary ? (
                  <Link
                    href={card.href}
                    className="inline-block mt-6 bg-gold text-navy px-6 py-3 rounded-lg font-heading text-sm font-semibold hover:bg-dark-gold transition-colors"
                  >
                    {card.linkLabel}
                  </Link>
                ) : card.type === "email" ? (
                  <a
                    href={card.href}
                    className="inline-block mt-6 text-gold font-heading text-sm font-semibold hover:text-dark-gold transition-colors"
                  >
                    {card.linkLabel}
                  </a>
                ) : (
                  <a
                    href={card.href}
                    className="inline-block mt-6 text-gold font-heading text-sm font-semibold hover:text-dark-gold transition-colors"
                  >
                    {card.linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact-form" className="bg-soft-white py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <SectionIntro
            eyebrow="GENERAL INQUIRY"
            title="Send us a message"
          />

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
