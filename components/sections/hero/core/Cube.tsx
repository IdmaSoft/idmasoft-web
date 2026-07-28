"use client";

import { type MotionValue, motion, useTransform } from "framer-motion";
import "./cube.css";

import CubeFace from "./CubeFace";
import { cubeFaces } from "./cubeFaces";
import { useCubeLayout } from "./useCubeLayout";
import { useViewportSize } from "./useViewportSize";
import { computeCubeMovement, computeFaceScale } from "./cubeLayout";

interface CubeProps {
  explode: MotionValue<number>;
  rotate: MotionValue<number>;
  spread: MotionValue<number>;
  adjust: MotionValue<number>;
}

export default function Cube({ explode, rotate, spread, adjust }: CubeProps) {
  const { layout, breakpoint } = useCubeLayout();
  const viewport = useViewportSize();
  const faceScale = computeFaceScale(breakpoint, viewport.height, layout.faceSize);
  const faceSize = layout.faceSize * faceScale;
  const cubeSize = layout.cubeSize * faceScale;
  const movement = computeCubeMovement(breakpoint, viewport.width, viewport.height, faceSize);
  const depthScale = Math.max(0.65, movement.scaleY);
  const openDepth = layout.depth.open * faceScale * depthScale;
  const offsetY = parseFloat(layout.initialOffsetY) * 16 * Math.max(0.5, movement.scaleY);

  const cubeDepth = useTransform(
    explode,
    [0, 1],
    [`${layout.depth.closed * faceScale}px`, `${openDepth}px`]
  );

  return (
    <div
      className="cube-wrapper"
      style={{
        transform: `translateY(${offsetY}px)`,
        "--cube-size": `${cubeSize}px`,
        "--face-size": `${faceSize}px`,
        "--cube-perspective": `${layout.perspective}px`,
        "--face-padding": layout.facePadding,
        "--icon-size": layout.iconSize,
        "--title-size": layout.titleSize,
        "--description-size": layout.descriptionSize,
        "--line-height": layout.lineHeight,
        "--glow-width": `${layout.glowWidth}px`,
        "--glow-height": `${layout.glowHeight}px`,
        "--glow-offset": layout.glowOffset,
      } as React.CSSProperties}
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
    </div>
  );
}
