"use client";

import { motion } from "framer-motion";
import Cube from "./Cube";

export default function HeroCore() {
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
      animate={{
        rotateY: [0, 8, 0, -8, 0],
        rotateX: [-2, 2, -2],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Cube />
    </motion.div>
  );
}