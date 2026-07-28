"use client";

import { useLayoutEffect, useState } from "react";
import { getBreakpoint, type CubeBreakpoint } from "./cubeLayout";

function getCurrentBreakpoint(): CubeBreakpoint {
  if (typeof window === "undefined") {
    return "desktop";
  }

  return getBreakpoint(window.innerWidth);
}

export function useCubeBreakpoint(): CubeBreakpoint {
  // Start from the same "desktop" default on server and client — reading
  // the real breakpoint here would make the client's first render diverge
  // from the server-rendered HTML and trigger a React hydration mismatch.
  // useLayoutEffect corrects it before the browser's next paint instead.
  const [breakpoint, setBreakpoint] = useState<CubeBreakpoint>("desktop");

  useLayoutEffect(() => {
    const update = () => {
      setBreakpoint(getCurrentBreakpoint());
    };

    update();

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return breakpoint;
}
