import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import type { ProjectCaseStudy } from "@/types/project-case-study";

// Nested metadata fields are shallow-merged, so a page that declares
// `openGraph` replaces the root one outright — each case study therefore
// spells out its own complete object rather than inheriting a partial.
export function caseStudyMetadata(caseStudy: ProjectCaseStudy): Metadata {
  const path = `/projects/${caseStudy.slug}`;
  const fullTitle = `${caseStudy.title} — ${SITE_NAME}`;
  const alt = `${SITE_NAME} — Software Developer`;

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description: caseStudy.summary,
      locale: "en_US",
      // Declaring `openGraph` replaces the root object wholesale, which drops
      // the image the root `opengraph-image` file convention injects.
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: caseStudy.summary,
    },
  };
}
