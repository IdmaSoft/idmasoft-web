"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Cube from "./Cube";
import { useCubeLayout } from "./useCubeLayout";
import { useViewportSize } from "./useViewportSize";

interface HeroCoreProps {
  progress: MotionValue<number>;
  textBottom: number | null;
}

export default function HeroCore({ progress, textBottom }: HeroCoreProps) {
  const { layout, breakpoint } = useCubeLayout();
  const viewport = useViewportSize();
  // Mobile portrait was hand-tuned assuming the base spread stays small
  // (capped) and lets the per-face adjustments do the separating. A rotated
  // (landscape) phone is wide enough that it should reach the full spread
  // instead, to actually use the extra width — capping it there was just
  // wasting the space.
  const isMobilePortrait = breakpoint === "mobile" && viewport.height >= viewport.width;
  const spreadMax = isMobilePortrait ? 0.6 : 1;

  const scale = useTransform(
    progress,
    [0.0, 0.45],
    [layout.initialScale, layout.zoomScale]
  );

  const explode = useTransform(
    progress,
    [0.45, 0.54],
    [0, 1]
  );

  // The cube's resting-to-centered vertical move (see Cube.tsx's wrapperY)
  // used to be tied to `explode`, which only starts at progress 0.45. That
  // left a stretch of scroll where the text was already gone but the cube
  // hadn't moved yet (a slab of empty space above it). Starting this at the
  // same point as the text's own fade (0, see HeroContent's opacity/y
  // transforms) fixes that — both start moving together, no lag.
  //
  // It has to *finish* later than the text's fade (0.25) though, not at the
  // same point: on short/rotated viewports the cube's centered "settled"
  // position can geometrically land right where the text block sits (little
  // vertical room to keep them apart), so if the cube arrives there exactly
  // when text hits 0 opacity, it spends the last stretch of the move
  // visibly crossing through text that's still fading, still small since
  // the separate scale/zoom transform (0 to 0.45) isn't done yet either.
  // Finishing at 0.4 means the cube only reaches that shared zone well after
  // the text is already fully invisible.
  const settle = useTransform(
    progress,
    [0, 0.4],
    [0, 1]
  );

  const rotate = useTransform(
    progress,
    [0.55, 0.62, 0.72, 0.85],
    [0, 0.15, 0.5, 1]
  );

  const clampedRotate = useTransform(
    rotate,
    (latest) => Math.min(1, Math.max(0, latest))
  );

  const spread = useTransform(
    clampedRotate,
    [0.15, 0.5, 0.8, 1],
    [0, 0.2, 0.45, spreadMax]
  );

  const adjust = useTransform(
    clampedRotate,
    [0.86, 0.9, 0.94, 0.98, 1],
    [0, 0.05, 0.18, 0.55, 1]
  );

  return (
    <div className="absolute inset-0 overflow-hidden z-0 isolate">
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{ scale }}
      >
        <Cube
          explode={explode}
          settle={settle}
          rotate={rotate}
          spread={spread}
          adjust={adjust}
          textBottom={textBottom}
        />
      </motion.div>
    </div>
  );
}
