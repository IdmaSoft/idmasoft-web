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
  targetDistanceX: number;
  targetDistanceY: number;
  spreadDistance: number;
  depthFactor: number;
  scaleX: number;
  scaleY: number;
  // Scale used only for per-face diagonal adjustments (front/back), capped
  // relative to scaleY so those hand-tuned (x, y, z) vectors don't distort.
  // scaleX itself is NOT capped this way — left/right/top/bottom have no
  // such vector to distort, so they should freely use available width.
  adjustScaleX: number;
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

interface CubeMovementBounds {
  idealX: number;
  refWidthAvail: number;
  minScaleX: number;
  maxScaleX: number;
  cardHalfWidthRatio: number;
  idealY: number;
  refHeightAvail: number;
  minScaleY: number;
  cardHalfHeightRatio: number;
  spreadDistance: number;
  depthFactor: number;
  // Per-face adjustments are tuned as a single (x, y, z) vector assuming
  // scaleX and scaleY stay roughly in step. If one axis is far more
  // compressed than the other (e.g. a phone rotated to landscape, where
  // width is generous but height is very tight), the tuned vector gets
  // stretched out of proportion and faces end up overlapping in a way that
  // looks like they "mixed up". This caps how far scaleX can outrun scaleY.
  maxXYRatio: number;
}

// refWidthAvail / refHeightAvail are the "available space" (viewport minus
// navbar/margins) measured at the viewport sizes where these layouts were
// verified to look correct with no clipping and no overlap. Scale is 1 at
// that reference and shrinks/grows from there as the real viewport differs.
// cardHalf*Ratio (times faceSize) approximates the card's own half-size,
// which doesn't shrink with scale, so it's subtracted before ratio-ing the
// available space against the reference — otherwise short/narrow viewports
// don't shrink enough because the fixed card size dominates the budget.
const movementBounds: Record<CubeBreakpoint, CubeMovementBounds> = {
  desktop: {
    idealX: 1.05,
    refWidthAvail: 1440 - 32,
    minScaleX: 0.4,
    maxScaleX: 1.4,
    cardHalfWidthRatio: 0.68,
    idealY: 0.24,
    refHeightAvail: 750 - 64 - 32,
    minScaleY: 0.15,
    cardHalfHeightRatio: 0.8,
    spreadDistance: 0.18,
    depthFactor: 0.13,
    maxXYRatio: 2.5,
  },
  tablet: {
    idealX: 0.68,
    refWidthAvail: 768 - 32,
    minScaleX: 0.45,
    maxScaleX: 1.25,
    cardHalfWidthRatio: 0.68,
    idealY: 0.22,
    refHeightAvail: 700 - 64 - 32,
    minScaleY: 0.15,
    cardHalfHeightRatio: 0.85,
    spreadDistance: 0.16,
    depthFactor: 0.12,
    maxXYRatio: 7,
  },
  mobile: {
    idealX: 0.34,
    refWidthAvail: 375 - 24,
    minScaleX: 0.7,
    maxScaleX: 3.2,
    cardHalfWidthRatio: 0.55,
    idealY: 0.34,
    refHeightAvail: 700 - 64 - 24,
    minScaleY: 0.25,
    cardHalfHeightRatio: 0.9,
    spreadDistance: 0.14,
    depthFactor: 0.14,
    maxXYRatio: 3.5,
  },
};

const NAVBAR_HEIGHT = 64;
const MIN_FACE_SCALE = 0.6;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

// The card's own box doesn't shrink with the position scale above — on very
// short viewports (landscape phones, smart displays) the card alone can be
// taller than the space available below the navbar, regardless of position.
// This scales the face/card size itself down so it always fits.
export function computeFaceScale(
  breakpoint: CubeBreakpoint,
  viewportHeight: number,
  idealFaceSize: number
): number {
  const b = movementBounds[breakpoint];
  const margin = breakpoint === "mobile" ? 12 : 16;
  const rawAvailableHalfH = (viewportHeight - NAVBAR_HEIGHT - margin * 2) / 2;
  const cardHalfH = idealFaceSize * b.cardHalfHeightRatio;

  // Does the card fit at all, on its own, regardless of position?
  const fitScale = clamp(rawAvailableHalfH / cardHalfH, MIN_FACE_SCALE, 1);

  // How compressed does the position spacing (scaleY) end up? If it's very
  // compressed, the fixed-size card needs to shrink too, or 6 of them can't
  // stay apart from each other even though each one individually "fits".
  const availableHalfH = rawAvailableHalfH - cardHalfH;
  const refHalfH = b.refHeightAvail / 2 - cardHalfH;
  const prelimScaleY = clamp(availableHalfH / refHalfH, b.minScaleY, 1);
  const coupledScale = 0.4 + 0.6 * prelimScaleY;

  return clamp(Math.min(fitScale, coupledScale), MIN_FACE_SCALE, 1);
}

export function computeCubeMovement(
  breakpoint: CubeBreakpoint,
  viewportWidth: number,
  viewportHeight: number,
  faceSize: number
): CubeMovementConfig {
  const b = movementBounds[breakpoint];
  const margin = breakpoint === "mobile" ? 12 : 16;

  const cardHalfH = faceSize * b.cardHalfHeightRatio;
  const availableHalfH = (viewportHeight - NAVBAR_HEIGHT - margin * 2) / 2 - cardHalfH;
  const refHalfH = b.refHeightAvail / 2 - cardHalfH;
  const scaleY = clamp(availableHalfH / refHalfH, b.minScaleY, 1);

  const cardHalfW = faceSize * b.cardHalfWidthRatio;
  const availableHalfW = (viewportWidth - margin * 2) / 2 - cardHalfW;
  const refHalfW = b.refWidthAvail / 2 - cardHalfW;
  const scaleX = clamp(availableHalfW / refHalfW, b.minScaleX, b.maxScaleX);
  const adjustScaleX = Math.min(scaleX, scaleY * b.maxXYRatio);

  return {
    targetDistanceX: b.idealX * scaleX,
    targetDistanceY: b.idealY * scaleY,
    spreadDistance: b.spreadDistance,
    depthFactor: b.depthFactor * Math.max(0.65, scaleY),
    scaleX,
    scaleY,
    adjustScaleX,
  };
}

// Estimated bottom edge of the hero's title/description/button block, and
// the gap we want below it, per breakpoint. These are rough constants (not
// measured live) — good enough to keep the closed cube a roughly consistent
// distance under the text on any device height, instead of just sitting at
// dead-center of the viewport (which is what "flex items-center" alone
// gives you, and which drifts wildly between short and tall screens).
const INITIAL_GAP_TUNING: Record<CubeBreakpoint, { textBottom: number; gap: number }> = {
  desktop: { textBottom: 320, gap: 48 },
  tablet: { textBottom: 300, gap: 40 },
  mobile: { textBottom: 370, gap: 28 },
};

export function computeInitialNudge(
  breakpoint: CubeBreakpoint,
  viewportHeight: number,
  cubeSize: number,
  initialScale: number
): number {
  const { textBottom, gap } = INITIAL_GAP_TUNING[breakpoint];
  const cubeHalfHeight = (cubeSize * initialScale) / 2;
  const desiredCubeTop = textBottom + gap;
  const centeredCubeTop = viewportHeight / 2 - cubeHalfHeight;

  return desiredCubeTop - centeredCubeTop;
}
