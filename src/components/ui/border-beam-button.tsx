import React from "react";
import { cn } from "@/lib/utils";

interface BorderBeamButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "a";
  href?: string;
  duration?: number;
}

const BorderBeamButton = React.forwardRef<
  HTMLElement,
  BorderBeamButtonProps
>(function BorderBeamButton({ className, children, as = "button", href, duration = 3.5, style, ...props }, ref) {
  const Tag = as === "a" ? "a" : "button";

  return (
    <Tag
      ref={ref as any}
      href={as === "a" ? href : undefined}
      className={cn(
        "border-beam-btn group relative inline-flex items-center justify-center overflow-hidden rounded-[12px] p-[1.5px] transition-all duration-300",
        className,
      )}
      style={{ "--beam-speed": `${duration}s`, ...style } as React.CSSProperties}
      {...(props as any)}
    >
      <span
        className="absolute inset-[-150%] animate-border-beam"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, transparent 70%, hsl(var(--brand)) 78%, hsl(var(--primary)) 82%, transparent 90%, transparent 100%)",
        }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2 rounded-full bg-card px-8 py-3.5 text-sm tracking-widest uppercase text-foreground transition-colors duration-300 group-hover:bg-accent">
        {children}
      </span>
    </Tag>
  );
});

export { BorderBeamButton };
export default BorderBeamButton;
