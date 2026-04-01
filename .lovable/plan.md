

## Plan: Add scroll-driven zoom to course images

### Change — `src/components/CoursesSection.tsx`

Add a `useTransform`-based scale to the course images that zooms in (1 → 1.15) as you scroll down past each course block, and zooms back out when scrolling up.

1. Add a new transform: `const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])`
2. Convert the `<img>` to a `<motion.img>` and apply `style={{ scale: imageScale }}`
3. The parent `motion.div` already has `overflow-hidden rounded-2xl`, so the zoom stays clipped

Single file edit, ~3 lines changed.

