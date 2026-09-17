import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study/case-study-page";
import { markly } from "@/data/project-case-studies";
import { caseStudyMetadata } from "@/lib/case-study-metadata";

export const metadata: Metadata = caseStudyMetadata(markly);

export default function Page() {
  return <CaseStudyPage caseStudy={markly} />;
}
