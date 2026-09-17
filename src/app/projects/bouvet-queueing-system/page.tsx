import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study/case-study-page";
import { bouvetQueueingSystem } from "@/data/project-case-studies";
import { caseStudyMetadata } from "@/lib/case-study-metadata";

export const metadata: Metadata = caseStudyMetadata(bouvetQueueingSystem);

export default function Page() {
  return <CaseStudyPage caseStudy={bouvetQueueingSystem} />;
}
