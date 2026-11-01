"use client";

import { useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

const REVEAL_DURATION_MS = 500;
const REVEAL_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

const buttonClassName =
  "flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        disabled
        className={buttonClassName}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  function toggleTheme(event: React.MouseEvent<HTMLButtonElement>) {
    const next = isDark ? "light" : "dark";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // The button's own center is a stable reveal origin regardless of
    // whether the activation came from a pointer click or a keyboard
    // Enter/Space press on the native <button>.
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const originX = left + width / 2;
    const originY = top + height / 2;

    if (
      prefersReducedMotion ||
      typeof document.startViewTransition !== "function"
    ) {
      setTheme(next);
      return;
    }

    // The circle only needs to reach the furthest viewport corner from
    // the button to be guaranteed to cover the whole screen.
    const endRadius = Math.hypot(
      Math.max(originX, window.innerWidth - originX),
      Math.max(originY, window.innerHeight - originY)
    );

    const transition = document.startViewTransition(() => {
      // View Transitions snapshots the DOM right after this callback
      // returns, so the theme change (including the icon swap) must be
      // committed synchronously rather than left as a pending update —
      // next-themes applies the "dark" class from a passive effect, and
      // flushSync forces that effect to run before this callback resolves.
      flushSync(() => setTheme(next));
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${originX}px ${originY}px)`,
              `circle(${endRadius}px at ${originX}px ${originY}px)`,
            ],
          },
          {
            duration: REVEAL_DURATION_MS,
            easing: REVEAL_EASING,
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {
        // The transition can be skipped (e.g. the tab lost visibility).
        // The theme itself has already been applied above.
      });
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`${buttonClassName} transition-colors duration-150 hover:bg-foreground/5 hover:text-foreground`}
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
