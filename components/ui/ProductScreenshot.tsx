import Image from "next/image";

interface ProductScreenshotProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackIcon: React.ReactNode;
}

// Ready to hold a real product screenshot/mockup; without `src` it renders a
// subtle placeholder (not a broken image) so the layout looks intentional
// before a real asset exists.
export function ProductScreenshot({ src, alt, className = "", fallbackIcon }: ProductScreenshotProps) {
  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-lg ${className}`}
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" />
      ) : (
        <div className="flex h-full items-center justify-center text-zinc-700">
          {fallbackIcon}
        </div>
      )}
    </div>
  );
}
