import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLayoutEffect, useRef } from "react";

interface HeroContentProps {
  progress: MotionValue<number>;
  onTextBottomChange?: (bottom: number) => void;
}

export default function HeroContent({ progress, onTextBottomChange }: HeroContentProps) {
  const t = useTranslations("home.hero");
  const contentRef = useRef<HTMLDivElement>(null);
  const y = useTransform(progress, [0, 0.25, 1], [0, -80, -80]);

  const opacity = useTransform(progress, [0, 0.25, 1], [1, 0, 0]);

  // Report the real (untransformed) bottom edge of the title/subtitle/
  // buttons block so the cube can rest a consistent gap below it — text
  // length varies by locale (Spanish wraps to more lines than English for
  // the same copy), so a hardcoded guess drifts once translated. Subtract
  // the current scroll-driven `y` so the reading reflects the resting
  // (progress = 0) position even if measured mid-scroll.
  useLayoutEffect(() => {
    const node = contentRef.current;
    if (!node || !onTextBottomChange) return;

    function measure() {
      const rect = node!.getBoundingClientRect();
      onTextBottomChange!(rect.bottom - y.get());
    }

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [onTextBottomChange, y]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      className="absolute inset-0 z-20 pointer-events-none"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center px-6">
        {/* Top content */}
        <div ref={contentRef} className="pt-24 flex max-w-3xl flex-col items-center text-center">

          {/* Títle */}
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
            {t("title")}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            {t("subtitle")}
          </p>

          {/* Buttons */}
          <div className="pointer-events-auto mt-10 flex flex-wrap justify-center gap-4">
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="lg"
              className="bg-zinc-50 text-zinc-950 hover:bg-zinc-200 transition-colors"
            >
              {t("primaryCta")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              render={<Link href="/services" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="border-zinc-700 bg-zinc-900/40 text-zinc-100 backdrop-blur hover:bg-zinc-900/70 hover:text-white transition-colors"
            >
              {t("secondaryCta")}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}