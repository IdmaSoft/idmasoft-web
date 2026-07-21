import FloatingCards from "./FloatingCards";
import { useTransform, type MotionValue, motion } from "framer-motion";

interface HeroCardsProps {
  progress: MotionValue<number>;
}

export default function HeroCards({
  progress,
}: HeroCardsProps) {
    const opacity = useTransform(
        progress,
        [0.55, 0.75],
        [0, 1]
    );

    const scale = useTransform(
        progress,
        [0.55, 0.75],
        [0.8, 1]
    );
    return (
    <motion.div
        style={{
            opacity,
            scale,
        }}
    >
        <FloatingCards />
    </motion.div>
);
}