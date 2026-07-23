export type CubeBreakpoint = "desktop" | "tablet" | "mobile";

export interface CubeDepthRange {
  closed: number;
  open: number;
}

export interface CubeLayoutConfig {
  breakpoint: CubeBreakpoint;
  cubeSize: number;
  faceSize: number;
  depth: CubeDepthRange;
  perspective: number;
  initialScale: number;
  zoomScale: number;
  initialOffsetY: string;
  glowWidth: number;
  glowHeight: number;
  glowOffset: string;
  facePadding: string;
  iconSize: string;
  titleSize: string;
  descriptionSize: string;
  lineHeight: string;
}

export interface CubeMovementConfig {
  targetDistance: number;
  spreadDistance: number;
  depthFactor: number;
}

export const BREAKPOINTS = {
  mobile: 720,
  tablet: 1024,
};

export function getBreakpoint(width: number): CubeBreakpoint {
  if (width < BREAKPOINTS.mobile) {
    return "mobile";
  }

  if (width < BREAKPOINTS.tablet) {
    return "tablet";
  }

  return "desktop";
}

export const cubeLayoutConfig: Record<CubeBreakpoint, CubeLayoutConfig> = {
  desktop: {
    breakpoint: "desktop",
    cubeSize: 200,
    faceSize: 200,
    depth: { closed: 100, open: 170 },
    perspective: 1400,
    initialScale: 0.55,
    zoomScale: 1.12,
    initialOffsetY: "3.5rem",
    glowWidth: 420,
    glowHeight: 210,
    glowOffset: "-90px",
    facePadding: "1rem",
    iconSize: "1.35rem",
    titleSize: "1.05rem",
    descriptionSize: "0.78rem",
    lineHeight: "1.5",
  },
  tablet: {
    breakpoint: "tablet",
    cubeSize: 170,
    faceSize: 170,
    depth: { closed: 85, open: 145 },
    perspective: 1200,
    initialScale: 0.62,
    zoomScale: 1.08,
    initialOffsetY: "3.8rem",
    glowWidth: 360,
    glowHeight: 185,
    glowOffset: "-80px",
    facePadding: "0.95rem",
    iconSize: "1.2rem",
    titleSize: "1rem",
    descriptionSize: "0.75rem",
    lineHeight: "1.45",
  },
  mobile: {
    breakpoint: "mobile",
    cubeSize: 140,
    faceSize: 140,
    depth: { closed: 70, open: 120 },
    perspective: 1000,
    initialScale: 0.8,
    zoomScale: 1.05,
    initialOffsetY: "4.2rem",
    glowWidth: 280,
    glowHeight: 150,
    glowOffset: "-55px",
    facePadding: "0.85rem",
    iconSize: "1rem",
    titleSize: "0.95rem",
    descriptionSize: "0.7rem",
    lineHeight: "1.4",
  },
};

export const cubeMovementConfig: Record<CubeBreakpoint, CubeMovementConfig> = {
  desktop: {
    targetDistance: 0.48,
    spreadDistance: 0.18,
    depthFactor: 0.18,
  },
  tablet: {
    targetDistance: 0.42,
    spreadDistance: 0.16,
    depthFactor: 0.16,
  },
  mobile: {
    targetDistance: 0.34,
    spreadDistance: 0.14,
    depthFactor: 0.14,
  },
};
