"use client";

import { type MotionValue, motion, useTransform } from "framer-motion";
import { type CubeBreakpoint } from "./cubeLayout";
import { type CubeFaceData } from "./cubeFaces";

interface CubeFaceProps {
  face: CubeFaceData;
  rotate: MotionValue<number>;
  spread: MotionValue<number>;
  breakpoint: CubeBreakpoint;
}

export default function CubeFace({
  face,
  rotate,
  spread,
  breakpoint,
}: CubeFaceProps) {
  const rotateX = useTransform(
    rotate,
    [0, 1],
    [0, face.rotateToFront.x]
  );

  const rotateY = useTransform(
    rotate,
    [0, 1],
    [0, face.rotateToFront.y]
  );

  const resolvedSpread = face.spread[breakpoint];
  const resolvedTarget = face.target[breakpoint];

  const translateX = useTransform(
    spread,
    [0, 0.62, 1],
    [
      "0px",
      `calc(var(--face-size) * ${resolvedSpread.x * 0.35})`,
      `calc(var(--face-size) * ${resolvedTarget.x})`,
    ]
  );

  const translateY = useTransform(
    spread,
    [0, 0.62, 1],
    [
      "0px",
      `calc(var(--face-size) * ${resolvedSpread.y * 0.35})`,
      `calc(var(--face-size) * ${resolvedTarget.y})`,
    ]
  );

  const translateZ = useTransform(
    spread,
    [0, 0.7, 0.82, 0.92, 1],
    [
      "0px",
      "0px",
      `calc(var(--cube-depth) * ${resolvedSpread.z * 0.15})`,
      `calc(var(--cube-depth) * ${resolvedSpread.z * 0.35})`,
      `calc(var(--cube-depth) * ${resolvedSpread.z})`,
    ]
  );

  const Icon = face.icon;

  return (
    <div className={`cube-face-wrapper ${face.side}`}>
      <motion.div
        className="cube-face-transform"
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
          translateZ,
        }}
      >
        <div className="cube-face">
          <div className="cube-face-content">
            <Icon className="cube-face-icon" />
            <h3 className="cube-face-title">{face.title}</h3>
            <p className="cube-face-description">{face.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}