"use client";

import "./cube.css";
import CubeFace from "./CubeFace";

export default function Cube() {
  return (
    <div className="cube-wrapper">
      <div className="cube">
        <CubeFace className="front" />
        <CubeFace className="back" />

        <CubeFace className="left" />
        <CubeFace className="right" />

        <CubeFace className="top" />
        <CubeFace className="bottom" />

        {/* Energy core */}
        <div className="cube-core" />

        {/* Reflection */}
        <div className="cube-highlight" />
      </div>

      {/* Bottom glow */}
      <div className="cube-glow" />
    </div>
  );
}