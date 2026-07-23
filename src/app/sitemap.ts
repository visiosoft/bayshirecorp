import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bayshirecorp.com";

  const routes = [
    "",
    "/what-we-solve",
    "/what-we-solve/founder-dependency",
    "/what-we-solve/disorganized-operations",
    "/what-we-solve/unclear-roles",
    "/what-we-solve/disconnected-systems",
    "/what-we-solve/limited-visibility",
    "/what-we-solve/scaling-growth",
    "/method",
    "/method/diagnose",
    "/method/design",
    "/method/build",
    "/method/scale",
    "/services",
    "/services/business-assessment",
    "/services/business-architecture",
    "/services/process-sop-design",
    "/services/management-systems",
    "/services/technology-automation",
    "/services/sales-marketing-systems",
    "/services/implementation-transformation",
    "/case-studies",
    "/case-studies/purplebox-storage",
    "/case-studies/purplebox-moving",
    "/case-studies/centuries-contracting",
    "/business-mri",
    "/health-check",
    "/about",
    "/leadership",
    "/business-system",
    "/business-system/strategy",
    "/business-system/customers",
    "/business-system/sales-marketing",
    "/business-system/operations",
    "/business-system/finance",
    "/business-system/leadership-governance",
    "/business-system/technology-data-ai",
    "/contact",
    "/privacy",
    "/terms",
    "/accessibility",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
