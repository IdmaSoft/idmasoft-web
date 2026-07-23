"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Cube from "./Cube";
import { useCubeBreakpoint } from "./useCubeBreakpoint";
import { cubeLayoutConfig } from "./cubeLayout";

interface HeroCoreProps {
  progress: MotionValue<number>;
}

export default function HeroCore({ progress }: HeroCoreProps) {
  const breakpoint = useCubeBreakpoint();
  const layout = cubeLayoutConfig[breakpoint];

  const scale = useTransform(
    progress,
    [0.0, 0.45],
    [layout.initialScale, layout.zoomScale]
  );

  const explode = useTransform(
    progress,
    [0.45, 0.6],
    [0, 1]
  );

  const rotate = useTransform(
    progress,
    [0.55, 0.62, 0.72, 0.85],
    [0, 0.15, 0.5, 1]
  );

  const spread = useTransform(
    progress,
    [0.68, 0.75, 0.82, 0.92],
    [0, 0.2, 0.6, 1]
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{ scale }}
      >
        <Cube
          explode={explode}
          rotate={rotate}
          spread={spread}
        />
      </motion.div>
    </div>
  );
}
