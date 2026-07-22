"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import { CubeFaceData } from "./cubeFaces";

interface CubeFaceProps {
  face: CubeFaceData;
  rotate: MotionValue<number>;
  spread: MotionValue<number>;
}

export default function CubeFace({
  face,
  rotate,
  spread,
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

  const translateX = useTransform(
    spread,
    [0, 0.5, 1],
    ["0%", `${face.spread.x * 50}%`, `${face.spread.x * 100}%`]
  );

  const translateY = useTransform(
    spread,
    [0, 0.5, 1],
    ["0%", `${face.spread.y * 50}%`, `${face.spread.y * 100}%`]
  );

  const translateZ = useTransform(
    spread,
    [0, 0.7, 0.82, 0.92, 1],
    [
      "0px",
      "0px",
      `calc(var(--cube-depth) * ${face.spread.z * 0.15})`,
      `calc(var(--cube-depth) * ${face.spread.z * 0.35})`,
      `calc(var(--cube-depth) * ${face.spread.z})`,
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
            <h3 className="cube-face-title">
              {face.title}
            </h3>
            <p className="cube-face-description">
              {face.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
