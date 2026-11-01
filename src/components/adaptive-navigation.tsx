"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { activeSectionIds } from "@/lib/nav-items";
import { SiteHeader } from "@/components/site-header";
import { FloatingDock } from "@/components/floating-dock";

function useActiveSection(pathname: string) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = activeSectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActive(topMost.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Section ids only exist on the homepage. On a case-study route there is
  // nothing to mark active regardless of the last-observed homepage value,
  // and showing one would misrepresent the page the visitor is actually on.
  return pathname === "/" ? active : null;
}

// Desktop gets a sticky text header; small screens, where those links don't
// fit, get the same sections in a labeled bottom bar. Each surface is hidden
// with display:none at the other breakpoint, so only one is ever exposed to
// keyboard and assistive technology.
export function AdaptiveNavigation() {
  const pathname = usePathname();
  const activeSection = useActiveSection(pathname);

  return (
    <>
      <SiteHeader activeSection={activeSection} />
      <FloatingDock activeSection={activeSection} />
    </>
  );
}
