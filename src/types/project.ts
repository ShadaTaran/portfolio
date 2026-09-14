export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  year?: number;
  role?: string;
  technologies?: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
};
