"use client";

import { useLayoutEffect, useState } from "react";

export interface ViewportSize {
  width: number;
  height: number;
}

const FALLBACK_SIZE: ViewportSize = { width: 1440, height: 900 };

function getViewportSize(): ViewportSize {
  if (typeof window === "undefined") {
    return FALLBACK_SIZE;
  }

  return { width: window.innerWidth, height: window.innerHeight };
}

export function useViewportSize(): ViewportSize {
  // Start from the same fallback on server and client — reading the real
  // window size here would make the client's first render diverge from
  // the server-rendered HTML and trigger a React hydration mismatch.
  // useLayoutEffect corrects it before the browser's next paint instead.
  const [size, setSize] = useState<ViewportSize>(FALLBACK_SIZE);

  useLayoutEffect(() => {
    const update = () => {
      setSize(getViewportSize());
    };

    update();

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return size;
}
