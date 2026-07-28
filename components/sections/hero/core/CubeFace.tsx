"use client";

import { type MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { type CubeBreakpoint, type CubeMovementConfig } from "./cubeLayout";
import { type CubeFaceData } from "./cubeFaces";

interface CubeFaceProps {
  face: CubeFaceData;
  faceSize: number;
  rotate: MotionValue<number>;
  spread: MotionValue<number>;
  adjust: MotionValue<number>;
  breakpoint: CubeBreakpoint;
  movement: CubeMovementConfig;
}

const faceDirections: Record<CubeFaceData["side"], { x: number; y: number }> = {
  front: { x: 0, y: 0 },
  back: { x: 0, y: 0 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
  top: { x: 0, y: -1 },
  bottom: { x: 0, y: 1 },
};

export default function CubeFace({
  face,
  faceSize,
  rotate,
  spread,
  adjust,
  breakpoint,
  movement,
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

  const direction = faceDirections[face.side];
  const adjustment = face.adjustments?.[breakpoint] ?? { x: 0, y: 0, z: 0 };

  const translateX = useTransform(
    spread,
    [0, 0.62, 1],
    [
      "0px",
      `calc(var(--face-size) * ${direction.x * movement.spreadDistance * 0.35})`,
      `calc(var(--face-size) * ${direction.x * movement.targetDistanceX})`,
    ]
  );

  const translateY = useTransform(
    spread,
    [0, 0.62, 1],
    [
      "0px",
      `calc(var(--face-size) * ${direction.y * movement.spreadDistance * 0.35})`,
      `calc(var(--face-size) * ${direction.y * movement.targetDistanceY})`,
    ]
  );

  const translateZ = useTransform(
    spread,
    [0, 0.7, 0.82, 0.92, 1],
    [
      "0px",
      "0px",
      `calc(var(--cube-depth) * ${movement.depthFactor * 0.15})`,
      `calc(var(--cube-depth) * ${movement.depthFactor * 0.35})`,
      `calc(var(--cube-depth) * ${movement.depthFactor})`,
    ]
  );

  const adjusted = useSpring(adjust, {
    stiffness: 120,
    damping: 24,
    mass: 0.8,
  });

  const adjustX = useTransform(
    adjusted,
    [0, 1],
    [
      0,
      faceSize * adjustment.x * movement.scaleX,
    ]
  );

  const adjustY = useTransform(
    adjusted,
    [0, 1],
    [
      0,
      faceSize * adjustment.y * movement.scaleY,
    ]
  );

  const adjustZ = useTransform(
    adjusted,
    [0, 1],
    [
      0,
      faceSize * adjustment.z,
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
        }}
      >
        <motion.div
          className="cube-face-translate"
          style={{
            translateX,
            translateY,
            translateZ,
          }}
        >
          <motion.div
            className="cube-face-adjust"
            style={{
              translateX: adjustX,
              translateY: adjustY,
              translateZ: adjustZ,
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
        </motion.div>
      </motion.div>
    </div>
  );
}