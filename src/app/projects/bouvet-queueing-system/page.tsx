import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study/case-study-page";
import { bouvetQueueingSystem } from "@/data/project-case-studies";

export const metadata: Metadata = {
  title: "Bouvet Queueing System — Charles Cahilig",
  description: bouvetQueueingSystem.summary,
};

export default function Page() {
  return <CaseStudyPage caseStudy={bouvetQueueingSystem} />;
}
