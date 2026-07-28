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
  rotate: MotionValue<number>;
  spread: MotionValue<number>;
  adjust: MotionValue<number>;
}

// Card content is bottom-anchored (see .cube-face-content in cube.css), so
// when the card box shrinks (faceScale) but the text stays full-size, the
// top of the content — the icon and the first line of a wrapped title —
// gets pushed above the card and clipped. Scaling the type down with the
// card keeps it fitting instead of getting cut off.
function scaleRem(value: string, factor: number): string {
  return `${parseFloat(value) * factor}rem`;
}

export default function Cube({ explode, rotate, spread, adjust }: CubeProps) {
  const { layout, breakpoint } = useCubeLayout();
  const viewport = useViewportSize();

  // The server can't know the real breakpoint/viewport, so it always renders
  // with the desktop fallback. Rather than show that wrong size/position and
  // have it visibly snap into place once the client corrects it, the cube
  // stays invisible until that correction has already happened — it should
  // only ever appear already in its right spot, never move into it.
  const ready = useIsHydrated();
  const faceScale = computeFaceScale(breakpoint, viewport.height, layout.faceSize);
  const faceSize = layout.faceSize * faceScale;
  const cubeSize = layout.cubeSize * faceScale;
  const movement = computeCubeMovement(breakpoint, viewport.width, viewport.height, faceSize);
  const depthScale = Math.max(0.65, movement.scaleY);
  const openDepth = layout.depth.open * faceScale * depthScale;
  const offsetY = parseFloat(layout.initialOffsetY) * 16 * Math.max(0.5, movement.scaleY);
  const initialNudge = computeInitialNudge(breakpoint, viewport.height, layout.cubeSize, layout.initialScale);
  const wrapperY = useTransform(explode, [0, 1], [offsetY + initialNudge, offsetY]);

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
