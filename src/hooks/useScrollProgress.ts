"use client";

import { useRef, useEffect, useState } from "react";

/**
 * Returns a scroll progress value (0→1) for the given element ref.
 * Uses IntersectionObserver + scroll listener for GSAP-free progress tracking.
 */
export function useScrollProgress(threshold = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );
    observer.observe(el);

    const onScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when bottom of element enters viewport, 1 when top leaves
      const raw = 1 - (rect.bottom / (vh + rect.height));
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return { ref, progress, isVisible };
}
