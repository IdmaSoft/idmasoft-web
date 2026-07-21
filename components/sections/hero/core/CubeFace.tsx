import { MotionValue } from "framer-motion";
import { CubeFaceData } from "./cubeFaces";

interface CubeFaceProps {
  face: CubeFaceData;
  progress: MotionValue<number>;
}

export default function CubeFace({ face }: CubeFaceProps) {
  return (
    <div className={`cube-face-wrapper ${face.side}`}>
      <div className="cube-face" />
    </div>
  );
}