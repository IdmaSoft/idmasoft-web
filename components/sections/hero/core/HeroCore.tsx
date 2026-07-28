"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Cube from "./Cube";
import { useCubeLayout } from "./useCubeLayout";

interface HeroCoreProps {
  progress: MotionValue<number>;
}

export default function HeroCore({ progress }: HeroCoreProps) {
  const { layout, breakpoint } = useCubeLayout();

  const scale = useTransform(
    progress,
    [0.0, 0.45],
    [layout.initialScale, layout.zoomScale]
  );

  const explode = useTransform(
    progress,
    [0.45, 0.54],
    [0, 1]
  );

  const rotate = useTransform(
    progress,
    [0.55, 0.62, 0.72, 0.85],
    [0, 0.15, 0.5, 1]
  );

  const clampedRotate = useTransform(
    rotate,
    (latest) => Math.min(1, Math.max(0, latest))
  );

  const spreadMax = breakpoint === "mobile" ? 0.6 : 1;

  const spread = useTransform(
    clampedRotate,
    [0.15, 0.5, 0.8, 1],
    [0, 0.2, 0.45, spreadMax]
  );

  const adjust = useTransform(
    clampedRotate,
    [0.86, 0.9, 0.94, 0.98, 1],
    [0, 0.05, 0.18, 0.55, 1]
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
          adjust={adjust}
        />
      </motion.div>
    </div>
  );
}
