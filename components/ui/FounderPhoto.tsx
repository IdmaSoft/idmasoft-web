import Image from "next/image";

interface FounderPhotoProps {
  src?: string;
  alt: string;
  size: number;
  frameClassName?: string;
  fallback: React.ReactNode;
}

// Frame stays visually identical to today's initials treatment until a real
// photo is available — each caller keeps its own frame styling and fallback
// markup, this just decides whether to show `src` or that fallback.
export function FounderPhoto({ src, alt, size, frameClassName = "", fallback }: FounderPhotoProps) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-3xl ${frameClassName}`}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image src={src} alt={alt} width={size} height={size} className="h-full w-full object-cover" />
      ) : (
        fallback
      )}
    </div>
  );
}
