"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import "./cube.css";

import CubeFace from "./CubeFace";
import { cubeFaces } from "./cubeFaces";

interface CubeProps {
  explode: MotionValue<number>;
  rotate: MotionValue<number>;
  spread: MotionValue<number>;
}

export default function Cube({ explode, rotate, spread }: CubeProps) {
  const cubeDepth = useTransform(
      explode,
      [0,1],
      ["90px","140px"]
  );

  return (
    <div className="cube-wrapper">
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
          />
        ))}
      </motion.div>

      {/* Energy core */}
      <div className="cube-core" />

      {/* Bottom glow */}
      <div className="cube-glow" />
    </div>
  );
}
