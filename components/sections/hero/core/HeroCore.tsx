"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Cube from "./Cube";

interface HeroCoreProps {
  progress: MotionValue<number>;
}

export default function HeroCore({ progress }: HeroCoreProps) {
  const scale = useTransform(
    progress,
    [0.0, 0.45],
    [0.7, 1.3]
  );

  const explode = useTransform(
    progress,
    [0.45, 0.60],
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
    <motion.div
      className="
        absolute
        left-1/2
        top-[60%]
        -translate-x-1/2
        -translate-y-1/2
        z-10
      "
      style={{ scale }}
    >
      <Cube
        explode={explode}
        rotate={rotate}
        spread={spread}
      />
    </motion.div>
  );
}
