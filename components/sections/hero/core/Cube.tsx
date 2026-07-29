"use client";

import { type MotionValue, motion, useTransform } from "framer-motion";
import "./cube.css";

import CubeFace from "./CubeFace";
import { cubeFaces } from "./cubeFaces";
import { useCubeLayout } from "./useCubeLayout";
import { useViewportSize } from "./useViewportSize";
import { useIsHydrated } from "./useIsHydrated";
import { computeCubeMovement, computeFaceScale, computeInitialNudge } from "./cubeLayout";

interface CubeProps {
  explode: MotionValue<number>;
  settle: MotionValue<number>;
  rotate: MotionValue<number>;
  spread: MotionValue<number>;
  adjust: MotionValue<number>;
  textBottom: number | null;
}

// Card content is bottom-anchored (see .cube-face-content in cube.css), so
// when the card box shrinks (faceScale) but the text stays full-size, the
// top of the content — the icon and the first line of a wrapped title —
// gets pushed above the card and clipped. Scaling the type down with the
// card keeps it fitting instead of getting cut off.
function scaleRem(value: string, factor: number): string {
  return `${parseFloat(value) * factor}rem`;
}

export default function Cube({ explode, settle, rotate, spread, adjust, textBottom }: CubeProps) {
  const { layout, breakpoint } = useCubeLayout();
  const viewport = useViewportSize();

  // The server can't know the real breakpoint/viewport, so it always renders
  // with the desktop fallback. Rather than show that wrong size/position and
  // have it visibly snap into place once the client corrects it, the cube
  // stays invisible until that correction has already happened — it should
  // only ever appear already in its right spot, never move into it. That now
  // also includes the measured hero-text height (see HeroContent), so a
  // longer translation doesn't briefly render at the English-tuned gap
  // before snapping down.
  const ready = useIsHydrated() && textBottom !== null;
  const faceScale = computeFaceScale(breakpoint, viewport.height, layout.faceSize);
  const faceSize = layout.faceSize * faceScale;
  const cubeSize = layout.cubeSize * faceScale;
  const movement = computeCubeMovement(breakpoint, viewport.width, viewport.height, faceSize);
  const depthScale = Math.max(0.65, movement.scaleY);
  const openDepth = layout.depth.open * faceScale * depthScale;
  const offsetY = parseFloat(layout.initialOffsetY) * 16 * Math.max(0.5, movement.scaleY);
  // HeroCore scales the whole flex container that centers this wrapper down
  // to `layout.initialScale` at rest (the pre-scroll "zoomed out" cube), and
  // that scale's transform-origin sits near the same point this offset is
  // measured from — so any raw pixel offset applied here only lands on
  // screen at `initialScale` of its intended size. Dividing by it here
  // keeps the *visual* gap equal to the real, measured distance instead of
  // silently shrinking it (most visible with longer translations: a 75px
  // real difference in text height was only moving the cube ~41px on
  // screen before this correction).
  const initialNudge = computeInitialNudge(breakpoint, viewport.height, layout.cubeSize, layout.initialScale, textBottom) / layout.initialScale;
  // Tied to `settle` (progress 0.1-0.4), not `explode` (0.45-0.54) — the
  // move from resting-near-text to centered-for-rotation needs to happen
  // right as the text fades out, not left parked until the explode/rotate
  // phase starts. See the comment on `settle` in HeroCore.tsx.
  const wrapperY = useTransform(settle, [0, 1], [offsetY + initialNudge, offsetY]);

  const cubeDepth = useTransform(
    explode,
    [0, 1],
    [`${layout.depth.closed * faceScale}px`, `${openDepth}px`]
  );

  return (
    <motion.div
      className="cube-wrapper"
      style={{
        y: wrapperY,
        opacity: ready ? 1 : 0,
        "--cube-size": `${cubeSize}px`,
        "--face-size": `${faceSize}px`,
        "--cube-perspective": `${layout.perspective}px`,
        "--face-padding": scaleRem(layout.facePadding, faceScale),
        "--icon-size": scaleRem(layout.iconSize, faceScale),
        "--title-size": scaleRem(layout.titleSize, faceScale),
        "--description-size": scaleRem(layout.descriptionSize, faceScale),
        "--line-height": layout.lineHeight,
        "--glow-width": `${layout.glowWidth}px`,
        "--glow-height": `${layout.glowHeight}px`,
        "--glow-offset": layout.glowOffset,
      } as unknown as React.CSSProperties}
    >
      <motion.div
        className="cube"
        style={
          {
            "--cube-depth": cubeDepth,
          } as React.CSSProperties
        }
      >
        {cubeFaces.map((face) => (
          <CubeFace
            key={face.id}
            face={face}
            faceSize={faceSize}
            idealFaceSize={layout.faceSize}
            rotate={rotate}
            spread={spread}
            adjust={adjust}
            breakpoint={breakpoint}
            movement={movement}
          />
        ))}
      </motion.div>

      <div className="cube-core" />
      <div className="cube-glow" />
    </motion.div>
  );
}
