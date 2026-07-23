"use client";

import { useEffect, useState } from "react";
import { BREAKPOINTS, type CubeBreakpoint } from "./cubeLayout";

export function useCubeBreakpoint(): CubeBreakpoint {
  const [breakpoint, setBreakpoint] = useState<CubeBreakpoint>("desktop");

  useEffect(() => {
    const getBreakpoint = (width: number): CubeBreakpoint => {
      if (width < BREAKPOINTS.mobile) {
        return "mobile";
      }

      if (width < BREAKPOINTS.tablet) {
        return "tablet";
      }

      return "desktop";
    };

    const update = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    update();

    const resizeHandler = () => {
      update();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return breakpoint;
}
