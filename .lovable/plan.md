

## Plan: Reduce parallax image height and constrain to container width

### Problem
The sticky background images in the "Como Funciona?" section are full-viewport height (`h-screen`) and full-width, making them feel oversized.

### Changes — `src/components/HowItWorksSection.tsx`

1. **Reduce image height to ~1/3 of viewport**: Change `StickyImage` from `h-screen` to `h-[33vh]` and the parent `TextParallaxContent` relative container from `h-[150vh]` to `h-[50vh]` to maintain the parallax scroll ratio.

2. **Constrain width to container**: Wrap the sticky image area in a `max-w-7xl mx-auto` container so it respects the site's content width instead of spanning full-width.

3. **Adjust OverlayCopy height**: Match the overlay text container height to the new reduced image height (`h-[33vh]` instead of `h-screen`).

4. **Keep all Framer Motion logic intact**: `useScroll`, `useTransform`, scale and opacity transforms remain unchanged.

### Technical details
- `StickyImage`: `h-screen` → `h-[33vh]`, add `max-w-7xl mx-auto` wrapper
- `OverlayCopy`: `h-screen` → `h-[33vh]`
- `TextParallaxContent`: `h-[150vh]` → `h-[50vh]`
- All rounded corners, dark overlay, and padding preserved

