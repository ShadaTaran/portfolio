import {
  BriefcaseBusiness,
  FileText,
  FolderKanban,
  GitBranch,
  Mail,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { GITHUB_URL, RESUME_URL } from "@/lib/site";

export type InternalNavItem = {
  type: "internal";
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
};

export type ExternalNavItem = {
  type: "external";
  label: string;
  href: string;
  icon: LucideIcon;
};

export const internalNavItems: InternalNavItem[] = [
  { type: "internal", id: "projects", label: "Projects", href: "/#projects", icon: FolderKanban },
  { type: "internal", id: "experience", label: "Experience", href: "/#experience", icon: BriefcaseBusiness },
  { type: "internal", id: "about", label: "About", href: "/#about", icon: UserRound },
  { type: "internal", id: "contact", label: "Contact", href: "/#contact", icon: Mail },
];

export const externalNavItems: ExternalNavItem[] = [
  { type: "external", label: "GitHub", href: GITHUB_URL, icon: GitBranch },
];

export const resumeNavItem: ExternalNavItem = {
  type: "external",
  label: "Resume",
  href: RESUME_URL,
  icon: FileText,
};

export const activeSectionIds = internalNavItems.map((item) => item.id);
