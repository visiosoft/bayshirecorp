/* ===== Bayshire Type Definitions ===== */

/** The seven transformation pillars Bayshire operates across. */
export type PillarKey =
  | 'strategy'
  | 'customers'
  | 'sales-marketing'
  | 'operations'
  | 'finance'
  | 'leadership-governance'
  | 'technology-data-ai';

/** The four-stage engagement methodology. */
export type StageKey = 'diagnose' | 'design' | 'build' | 'scale';

/* ---------- Navigation ---------- */

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

/* ---------- Verified Outcomes ---------- */

export interface VerifiedOutcome {
  label: string;
  value: string;
  description: string;
  baseline?: string;
  period: string;
  source: string;
  verifiedBy: string;
  verifiedAt: string; // ISO 8601 date
}

/* ---------- Case Studies ---------- */

export interface CaseStudy {
  slug: string;
  title: string;
  clientName: string;
  sector: string;
  summary: string;
  stages: StageKey[];
  pillars: PillarKey[];
  outcomes: VerifiedOutcome[];
  coverImage?: string;
  featured?: boolean;
  publishedAt: string; // ISO 8601 date
}

/* ---------- Problem Pages ---------- */

export interface ProblemPage {
  slug: string;
  title: string;
  headline: string;
  description: string;
  pillar: PillarKey;
  stages: StageKey[];
  relatedCaseStudies: string[]; // CaseStudy slugs
  publishedAt: string;
}

/* ---------- Insight Articles ---------- */

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // MDX or rich text identifier
  author: string;
  pillar?: PillarKey;
  tags: string[];
  coverImage?: string;
  publishedAt: string;
  readingTimeMinutes: number;
}
