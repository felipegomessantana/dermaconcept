

## Plan: Fix Hero — Show Full Image & Remove Excess Gap

**Problem**: The image is cropped by `object-cover` and the left text column (`flex-1`) stretches too wide, creating a large gap between text and image.

### Changes to `src/components/HeroSection.tsx`

1. **Switch from Flex to CSS Grid** with defined columns: `lg:grid-cols-[1fr_1fr]` — this gives equal space to both sides without `flex-1` stretching the text column excessively.

2. **Image display**: Change from `object-cover` to `object-contain` so the full team photo is visible without cropping. Set the image container background to match the image edges (warm tone or transparent).

3. **Remove excessive spacing**: Drop `min-h-screen` in favor of `min-h-[85vh]` so the section doesn't force unnecessary vertical space. Reduce left column padding slightly.

4. **Mobile**: Keep vertical stack (`flex-col` on small screens) with image at `h-[50vh]` using `object-contain`.

### Technical Summary

```
section: flex-col lg:grid lg:grid-cols-2 min-h-[85vh]
  left col: justify-center, moderate padding
  right col: flex items-center justify-center, p-0
    img: w-full h-full object-contain (full image visible)
```

