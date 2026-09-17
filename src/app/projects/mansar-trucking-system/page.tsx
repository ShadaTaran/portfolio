import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study/case-study-page";
import { mansarTruckingSystem } from "@/data/project-case-studies";
import { caseStudyMetadata } from "@/lib/case-study-metadata";

export const metadata: Metadata = caseStudyMetadata(mansarTruckingSystem);

export default function Page() {
  return <CaseStudyPage caseStudy={mansarTruckingSystem} />;
}
