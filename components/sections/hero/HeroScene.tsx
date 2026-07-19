"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

// import Connections from "./Connections";
import FloatingCards from "./FloatingCards";

interface HeroSceneProps {
  progress: MotionValue<number>;
}

export default function HeroScene({
  progress,
}: HeroSceneProps) {
  // El ecosistema sube ligeramente
  // const y = useTransform(progress, [0, 1], [0, -40]);

  // // Se hace un poco más grande
  // const scale = useTransform(progress, [0, 1], [1, 1.05]);

  return (
    <motion.div
      // style={{
      //   y,
      //   scale,
      // }}
      className="absolute inset-0"
    >
      {/* Área donde vive el ecosistema */}
      <div className="relative h-full w-full">
        {/* Tarjetas */}
        {/* <FloatingCards /> */}

        {/* Conexiones SVG */}
        {/* <Connections /> */}
      </div>
    </motion.div>
  );
}