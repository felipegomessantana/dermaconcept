import { useState, forwardRef, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type PictureSource = {
  sources: Record<string, string>; // mime -> srcset
  img: { src: string; w: number; h: number };
};

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & {
  /** Output of `import x from "./img.jpg?responsive"` */
  source: PictureSource;
  /** Alt text (required for a11y) */
  alt: string;
  /** Sizes attribute, e.g. "(min-width: 1024px) 50vw, 100vw" */
  sizes?: string;
  /** Mark this as the LCP image: eager + high priority + no lazy */
  priority?: boolean;
  /** Override picture wrapper className */
  pictureClassName?: string;
  /** Show skeleton while loading (default true) */
  showSkeleton?: boolean;
};

/**
 * Responsive <picture> with AVIF/WebP/fallback, skeleton placeholder,
 * and CLS-safe width/height. Use with vite-imagetools:
 *
 *   import hero from "@/assets/hero.jpg?responsive";
 *   <ResponsiveImage source={hero} alt="..." sizes="100vw" priority />
 */
export const ResponsiveImage = forwardRef<HTMLImageElement, ResponsiveImageProps>(
  (
    {
      source,
      alt,
      sizes = "100vw",
      priority = false,
      pictureClassName,
      showSkeleton = true,
      className,
      onLoad,
      ...imgProps
    },
    ref
  ) => {
    const [loaded, setLoaded] = useState(false);
    const { sources, img } = source;

    return (
      <picture className={cn("relative block", pictureClassName)}>
        {Object.entries(sources).map(([mime, srcSet]) => (
          <source key={mime} type={mime} srcSet={srcSet} sizes={sizes} />
        ))}
        {showSkeleton && !loaded && (
          <span
            aria-hidden="true"
            className="absolute inset-0 animate-pulse bg-muted"
          />
        )}
        <img
          ref={ref}
          src={img.src}
          width={img.w}
          height={img.h}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          // @ts-expect-error - fetchpriority is valid HTML5 attr
          fetchpriority={priority ? "high" : "auto"}
          onLoad={(e) => {
            setLoaded(true);
            onLoad?.(e);
          }}
          className={cn(
            "transition-opacity duration-500",
            !loaded && showSkeleton ? "opacity-0" : "opacity-100",
            className
          )}
          {...imgProps}
        />
      </picture>
    );
  }
);

ResponsiveImage.displayName = "ResponsiveImage";
