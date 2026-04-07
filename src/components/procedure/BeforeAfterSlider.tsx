import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  label?: string;
}

const TAUPE = "#7A7168";

export default function BeforeAfterSlider({ before, after, label }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

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
        className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* After (background) */}
        <img
          src={after}
          alt="Depois"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={before}
            alt="Antes"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Handle line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-lg"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />

        {/* Handle circle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center"
          style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
        >
          <ChevronLeft className="h-3.5 w-3.5 text-gray-600 -mr-1" />
          <ChevronRight className="h-3.5 w-3.5 text-gray-600 -ml-1" />
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-widest text-white/80 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded">
          Antes
        </span>
        <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-widest text-white/80 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded">
          Depois
        </span>
      </div>
    </div>
  );
}
