export type ProjectCaseStudySection = {
  title: string;
  items: string[];
  variant?: "paragraphs" | "list";
  narrow?: boolean;
};

export type ProjectCaseStudy = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  context: string;
  technologies: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  tldr?: string[];
  sections: ProjectCaseStudySection[];
};
