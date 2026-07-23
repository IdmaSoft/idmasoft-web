"use client";

import { useEffect, useState } from "react";
import { cubeLayoutConfig, type CubeBreakpoint } from "./cubeLayout";
import { useCubeBreakpoint } from "./useCubeBreakpoint";

export function useCubeLayout(): {
  layout: typeof cubeLayoutConfig[CubeBreakpoint];
  breakpoint: CubeBreakpoint;
} {
  const breakpoint = useCubeBreakpoint();

  return {
    layout: cubeLayoutConfig[breakpoint],
    breakpoint,
  };
}
