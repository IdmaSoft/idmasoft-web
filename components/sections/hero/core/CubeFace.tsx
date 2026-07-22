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
  data,
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
    [0, 1],
    [0, face.spread.x]
  );

  const translateY = useTransform(
    spread,
    [0, 1],
    [0, face.spread.y]
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
