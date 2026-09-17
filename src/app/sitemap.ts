import type { MetadataRoute } from "next";
import {
  bouvetQueueingSystem,
  mansarTruckingSystem,
  markly,
} from "@/data/project-case-studies";
import { SITE_URL } from "@/lib/site";

// Public HTML routes only — no PDF, no 404, no hash fragments. lastModified
// is deliberately omitted rather than inventing an edit history.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, priority: 1 },
    ...[markly, bouvetQueueingSystem, mansarTruckingSystem].map(
      (caseStudy) => ({
        url: `${SITE_URL}/projects/${caseStudy.slug}`,
        priority: 0.8,
      })
    ),
  ];
}
