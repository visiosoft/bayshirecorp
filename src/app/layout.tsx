import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Business Architecture & Transformation in Dubai | Bayshire",
    template: "%s | Bayshire",
  },
  description:
    "Bayshire helps growing UAE companies fix disorganized operations, unclear roles, disconnected systems, and founder dependency. Start with a two-minute business health check.",
  metadataBase: new URL("https://bayshirecorp.com"),
  openGraph: {
    type: "website",
    siteName: "Bayshire",
    locale: "en_AE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-ink bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              name: "Bayshire",
              url: "https://bayshirecorp.com",
              logo: "https://bayshirecorp.com/logo.png",
              description:
                "Bayshire helps growing companies organize how they work — clarifying roles, improving processes, connecting systems, and building management visibility.",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 25.2048,
                  longitude: 55.2708,
                },
                geoRadius: "2000",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              email: "info@bayshirecorp.com",
              founder: {
                "@type": "Person",
                name: "Mase Rasti",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
