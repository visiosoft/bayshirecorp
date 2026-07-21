import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Health Check | Bayshire",
  description:
    "Answer a short set of questions about how your company is managed. Receive an overall score, scores for each business area, and practical recommendations.",
};

export default function HealthCheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
