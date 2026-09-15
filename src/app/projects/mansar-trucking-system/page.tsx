import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study/case-study-page";
import { mansarTruckingSystem } from "@/data/project-case-studies";

export const metadata: Metadata = {
  title: "Mansar Trucking Management System — Charles Cahilig",
  description: mansarTruckingSystem.summary,
};

export default function Page() {
  return <CaseStudyPage caseStudy={mansarTruckingSystem} />;
}
