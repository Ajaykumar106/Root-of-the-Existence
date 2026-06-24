"use client";

import { useState, useEffect } from "react";

interface PerformanceConfig {
  isMobile: boolean;
  particleScale: number;
  dpr: [number, number];
  prefersReducedMotion: boolean;
  isTabVisible: boolean;
}

export function usePerformance(): PerformanceConfig {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  useEffect(() => {
    // Mobile Check
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    // Reduced Motion Check
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    // Tab Visibility Check
    const handleVisibilityChange = () => setIsTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Debounced Resize
    let timeout: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(checkMobile, 150);
    };
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      motionQuery.removeEventListener("change", handleMotionChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(timeout);
    };
  }, []);

  return {
    isMobile,
    particleScale: isMobile ? 0.4 : 1.0,
    dpr: isMobile ? [1, 1] : [1, 2],
    prefersReducedMotion,
    isTabVisible,
  };
}
