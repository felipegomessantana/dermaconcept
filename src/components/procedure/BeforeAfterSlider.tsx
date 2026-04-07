import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  label?: string;
}

const TAUPE = "#7A7168";

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
      {/* Wrapper: sized by the "after" image naturally */}
      <div
        ref={containerRef}
        className="relative rounded-xl overflow-hidden shadow-sm cursor-ew-resize select-none bg-gray-100"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{ touchAction: "none" }}
      >
        {/* After (defines the natural size) */}
        <img
          src={before}
          alt="Antes"
          className="w-full h-auto block"
          draggable={false}
        />

        {/* After (absolute, clipped, revealed from right) */}
        <img
          src={after}
          alt="Depois"
          className="absolute top-0 left-0 w-full h-auto block"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          draggable={false}
        />

        {/* Handle line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-lg pointer-events-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />

        {/* Handle circle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center pointer-events-none"
          style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
        >
          <ChevronLeft className="h-3.5 w-3.5 text-gray-600 -mr-1" />
          <ChevronRight className="h-3.5 w-3.5 text-gray-600 -ml-1" />
        </div>

        {/* Labels */}
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
