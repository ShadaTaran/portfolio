import type { ProjectCaseStudy } from "@/types/project-case-study";

export const markly: ProjectCaseStudy = {
  slug: "markly",
  number: "01",
  title: "Markly",
  subtitle: "Universal Personal Library",
  summary:
    "A personal library for tracking websites, anime, manga, novels, games, movies, and series — built around one goal: never lose your place again.",
  role: "Personal Project / Software Developer",
  context: "Personal Project",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Browser Extension",
    "PWA",
  ],
  liveUrl: "https://markly-lime.vercel.app",
  repositoryUrl: "https://github.com/ShadaTaran/markly",
  sections: {
    overview: [
      "Markly brings everything you're reading, watching, or playing into one library, instead of scattering progress across separate apps and sites for anime, manga, books, movies, series, games, and bookmarked websites.",
      "Progress and library state sync across devices when you sign in, or stay local-only in the browser if you'd rather not create an account.",
    ],
    challenge: [
      "Tracking progress across many separate apps and sites — one for anime, another for books, bookmarks scattered across browsers — makes it easy to lose track of where you left off.",
    ],
    features: [
      "A unified library across seven content types, with one dashboard and one search.",
      "Progress tracking that resumes where you left off, per item.",
      "Catalog metadata lookup (AniList for anime/manga, Open Library for books) to avoid manual entry.",
      "A companion browser extension that advances progress automatically on supported sites, with manual entry always available as a fallback.",
      "An installable PWA with offline access to already-loaded content.",
      "Account-based cloud sync via Supabase, alongside a local-only mode that requires no account.",
    ],
    technicalDecisions: [
      "A canonical library-item model supports multiple tracking sources per entry, rather than one rigid source of truth.",
      "Cloud persistence is handled through Supabase, with a local-only mode available for use without an account.",
      "Automatic tracking is implemented as a separate browser extension, kept decoupled from the core web app.",
      "Automatic progress updates are treated as opt-in and conservative — a wrong automatic update is treated as worse than a missed one, so the app favors manual fallback over guessing.",
    ],
    outcome: [
      "Markly is live and deployed, currently shared directly with recruiters and interviewers rather than opened for public signup.",
      "All core content types are supported end to end, including catalog search, manual entry, backup and restore, and account-based cloud sync.",
    ],
  },
};

export const bouvetQueueingSystem: ProjectCaseStudy = {
  slug: "bouvet-queueing-system",
  number: "02",
  title: "Bouvet Queueing System",
  subtitle: "Software Development Internship Project",
  summary:
    "A queue administration and operations system developed during a software development internship, including authentication, user and department management, queue configuration, search, pagination, validation, and REST API integration.",
  role: "Software Developer Intern",
  context: "Software Development Internship Project",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "REST APIs",
    "MSSQL",
  ],
  sections: {
    overview: [
      "A queue administration and operations system built during a software development internship, for managing queues, departments, and day-to-day administrative workflows.",
    ],
    features: [
      "Authentication and access to administrative screens.",
      "User and department management, including purpose assignment.",
      "Queue and display configuration.",
      "Search, pagination, and form validation across administrative screens.",
      "REST API integration through a Backend-for-Frontend architecture backed by Microsoft SQL Server.",
    ],
  },
};

export const mansarTruckingSystem: ProjectCaseStudy = {
  slug: "mansar-trucking-system",
  number: "03",
  title: "Mansar Trucking Management System",
  subtitle: "Capstone Project",
  summary:
    "A mobile and web fleet-management system for coordinating drivers, trips, maintenance, expenses, and GPS-based location tracking.",
  role: "Software Developer / Capstone Developer",
  context: "Capstone Project",
  technologies: [
    "React Native",
    "PHP",
    "MySQL",
    "Firebase Realtime Database",
    "Leaflet",
  ],
  sections: {
    overview: [
      "A mobile and web fleet-management system built as a capstone project, for coordinating drivers, trips, maintenance, and expenses.",
    ],
    features: [
      "Driver and trip management.",
      "Maintenance and expense tracking.",
      "Mobile GPS-based location tracking for drivers.",
      "A web dashboard displaying live location updates alongside trip and fleet data.",
    ],
  },
};
