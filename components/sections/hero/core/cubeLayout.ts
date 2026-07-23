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
  glowWidth: number;
  glowHeight: number;
  glowOffset: string;
  facePadding: string;
  iconSize: string;
  titleSize: string;
  descriptionSize: string;
  lineHeight: string;
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
    cubeSize: 260,
    faceSize: 260,
    depth: { closed: 130, open: 210 },
    perspective: 1400,
    initialScale: 0.75,
    zoomScale: 1.3,
    glowWidth: 500,
    glowHeight: 240,
    glowOffset: "-90px",
    facePadding: "1rem",
    iconSize: "1.35rem",
    titleSize: "1.05rem",
    descriptionSize: "0.78rem",
    lineHeight: "1.5",
  },
  tablet: {
    breakpoint: "tablet",
    cubeSize: 220,
    faceSize: 220,
    depth: { closed: 110, open: 180 },
    perspective: 1200,
    initialScale: 0.8,
    zoomScale: 1.2,
    glowWidth: 430,
    glowHeight: 210,
    glowOffset: "-80px",
    facePadding: "0.95rem",
    iconSize: "1.2rem",
    titleSize: "1rem",
    descriptionSize: "0.75rem",
    lineHeight: "1.45",
  },
  mobile: {
    breakpoint: "mobile",
    cubeSize: 180,
    faceSize: 180,
    depth: { closed: 90, open: 140 },
    perspective: 1000,
    initialScale: 0.92,
    zoomScale: 1.08,
    glowWidth: 320,
    glowHeight: 170,
    glowOffset: "-55px",
    facePadding: "0.85rem",
    iconSize: "1rem",
    titleSize: "0.95rem",
    descriptionSize: "0.7rem",
    lineHeight: "1.4",
  },
};
