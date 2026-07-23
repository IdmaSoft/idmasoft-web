"use client";

import { type MotionValue, motion, useTransform } from "framer-motion";
import "./cube.css";

import CubeFace from "./CubeFace";
import { cubeFaces } from "./cubeFaces";
import { useCubeLayout } from "./useCubeLayout";

interface CubeProps {
  explode: MotionValue<number>;
  rotate: MotionValue<number>;
  spread: MotionValue<number>;
}

export default function Cube({ explode, rotate, spread }: CubeProps) {
  const { layout, breakpoint } = useCubeLayout();

  const cubeDepth = useTransform(
    explode,
    [0, 1],
    [`${layout.depth.closed}px`, `${layout.depth.open}px`]
  );

  return (
    <div
      className="cube-wrapper"
      style={{
        transform: `translateY(${layout.initialOffsetY})`,
        "--cube-size": `${layout.cubeSize}px`,
        "--face-size": `${layout.faceSize}px`,
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
            rotate={rotate}
            spread={spread}
            breakpoint={breakpoint}
          />
        ))}
      </motion.div>

      <div className="cube-core" />
      <div className="cube-glow" />
    </div>
  );
}
