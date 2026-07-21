"use client";

import { MotionValue, motion } from "framer-motion";
import "./cube.css";
import CubeFace from "./CubeFace";
import { cubeFaces } from "./cubeFaces";

interface CubeProps {
  open: MotionValue<number>;
}

export default function Cube({ open }: CubeProps) {
  return (
    <div className="cube-wrapper">

      <motion.div
        className="cube"
        style={{
        }}
      >
        {cubeFaces.map((face) => (
          <CubeFace
            key={face.id}
            face={face}
            progress={open}
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