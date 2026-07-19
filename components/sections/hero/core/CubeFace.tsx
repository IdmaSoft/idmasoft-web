interface CubeFaceProps {
  className: string;
}

export default function CubeFace({ className }: CubeFaceProps) {
  return <div className={`cube-face ${className}`} />;
}