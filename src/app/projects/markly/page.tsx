import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study/case-study-page";
import { markly } from "@/data/project-case-studies";

export const metadata: Metadata = {
  title: "Markly — Charles Cahilig",
  description: markly.summary,
};

export default function Page() {
  return <CaseStudyPage caseStudy={markly} />;
}
