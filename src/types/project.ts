export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  /** Plain-language availability, e.g. "Live beta" or "In development". */
  status: string;
  summary: string;
  year?: number;
  role?: string;
  technologies?: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
};
