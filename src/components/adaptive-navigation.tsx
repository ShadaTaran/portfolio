"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { activeSectionIds } from "@/lib/nav-items";
import { SiteHeader } from "@/components/site-header";
import { FloatingDock } from "@/components/floating-dock";

const ENTER_DOCK_THRESHOLD = 96;
const RETURN_HEADER_THRESHOLD = 32;
const DESKTOP_QUERY = "(min-width: 640px)";

// The header/dock morph itself is pure CSS (`sm:` breakpoint + a
// `data-scrolled` attribute) so it never risks a hydration mismatch. This
// hook is only consulted for `inert` — whichever surface is faded out via
// opacity/pointer-events still needs to be pulled out of the tab order, and
// that decision is genuinely viewport-dependent (mobile never hides either
// surface). Defaulting to `false` on the server means focus is merely
// under-restricted for one paint after hydration, never mismatched visually.
function useIsDesktop() {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(DESKTOP_QUERY);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false
  );
}

// Hysteresis, not a single scrollY > 0 check: without two distinct
// thresholds, trackpad micro-scrolls right at the boundary flip the state
// back and forth every frame.
function useScrolledState() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    function evaluate() {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > ENTER_DOCK_THRESHOLD) return true;
        if (prev && y < RETURN_HEADER_THRESHOLD) return false;
        return prev;
      });
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(evaluate);
    }

    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
}

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

export function AdaptiveNavigation() {
  const pathname = usePathname();
  const scrolled = useScrolledState();
  const activeSection = useActiveSection(pathname);
  const isDesktop = useIsDesktop();

  return (
    <>
      <SiteHeader scrolled={scrolled} inert={isDesktop && scrolled} />
      <FloatingDock
        scrolled={scrolled}
        activeSection={activeSection}
        inert={isDesktop && !scrolled}
      />
    </>
  );
}
