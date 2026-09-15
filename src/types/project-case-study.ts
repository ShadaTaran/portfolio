export type ProjectCaseStudySections = {
  overview?: string[];
  challenge?: string[];
  solution?: string[];
  features?: string[];
  technicalDecisions?: string[];
  outcome?: string[];
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
  sections: ProjectCaseStudySections;
};
