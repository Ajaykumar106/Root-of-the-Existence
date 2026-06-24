"use client";

import { useState, useEffect } from "react";

interface MobileConfig {
  isMobile: boolean;
  particleScale: number;
  dpr: [number, number];
}

export function useIsMobile(): MobileConfig {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();

    let timeout: ReturnType<typeof setTimeout>;
    const debounced = () => {
      clearTimeout(timeout);
      timeout = setTimeout(check, 150);
    };

    window.addEventListener("resize", debounced);
    return () => {
      window.removeEventListener("resize", debounced);
      clearTimeout(timeout);
    };
  }, []);

  return {
    isMobile,
    particleScale: isMobile ? 0.4 : 1.0,
    dpr: isMobile ? [1, 1] : [1, 2],
  };
}
