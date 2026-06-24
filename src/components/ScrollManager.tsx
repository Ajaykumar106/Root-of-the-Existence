"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollManager({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Refresh ScrollTrigger after all content has loaded
    const timer = setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}

export { gsap, ScrollTrigger };
