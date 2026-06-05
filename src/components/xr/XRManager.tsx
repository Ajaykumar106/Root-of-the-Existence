"use client";

import { useEffect, useState } from "react";
import { XR, createXRStore } from "@react-three/xr";

let globalStore: any = null;

export const getXRStore = () => {
  if (!globalStore && typeof window !== "undefined") {
    globalStore = createXRStore();
  }
  return globalStore;
};

export function XRButtonOverlay() {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined" && "xr" in navigator) {
      navigator.xr?.isSessionSupported("immersive-vr").then((supported) => {
        setIsSupported(supported);
      });
    }
  }, []);

  if (!isSupported) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <button
        onClick={() => getXRStore()?.enterVR()}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-space font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-colors"
      >
        Enter Observatory (VR)
      </button>
    </div>
  );
}

export function XREnvironment({ children }: { children: React.ReactNode }) {
  const store = getXRStore();
  if (!store) return <>{children}</>;
  return <XR store={store}>{children}</XR>;
}
