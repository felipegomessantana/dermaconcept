import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PictureSource } from "@/components/ui/responsive-image";

interface BeforeAfterSliderProps {
  before: PictureSource;
  after: PictureSource;
  label?: string;
}

const TAUPE = "#7A7168";

function Picture({
  source,
  alt,
  className,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  style,
}: {
  source: PictureSource;
  alt: string;
  className: string;
  sizes?: string;
  style?: React.CSSProperties;
}) {
  const { sources, img } = source;
  return (
    <picture>
      {Object.entries(sources).map(([mime, srcSet]) => (
        <source key={mime} type={mime} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={img.src}
        width={img.w}
        height={img.h}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className={className}
        style={style}
      />
    </picture>
  );
}

export default function BeforeAfterSlider({ before, after, label }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(20);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div>
      {label && (
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-4 text-center"
          style={{ color: TAUPE }}
        >
          {label}
        </p>
      )}
      <div
        ref={containerRef}
        className="relative rounded-xl overflow-hidden shadow-sm cursor-ew-resize select-none bg-gray-100"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{ touchAction: "none" }}
      >
        <Picture source={before} alt="Antes" className="w-full h-auto block" />
        <Picture
          source={after}
          alt="Depois"
          className="absolute top-0 left-0 w-full h-auto block"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-lg pointer-events-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center pointer-events-none"
          style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
        >
          <ChevronLeft className="h-3.5 w-3.5 text-gray-600 -mr-1" />
          <ChevronRight className="h-3.5 w-3.5 text-gray-600 -ml-1" />
        </div>

        <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-widest text-white/80 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded pointer-events-none">
          Antes
        </span>
        <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-widest text-white/80 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded pointer-events-none">
          Depois
        </span>
      </div>
    </div>
  );
}
