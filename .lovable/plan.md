

## Plan: Fix Hero Section Mobile Layout

The screenshot shows two issues on mobile (390px): the headline text is clipped horizontally due to `whitespace-nowrap`, and the background image is cropped (not showing the full photo).

### Changes to `src/components/HeroSection.tsx`

1. **Allow text wrapping on mobile**: Remove `whitespace-nowrap` globally and add it only for larger screens (`sm:whitespace-nowrap`). This lets the headline break naturally on small screens while staying one line on desktop.

2. **Reduce mobile font size**: Lower the base `text-4xl` to `text-2xl` or `text-3xl` so it fits better on 390px screens.

3. **Show full photo on mobile**: On mobile, switch from `bg-cover` (which crops) to `bg-contain` so the full image is visible at the top. Use responsive classes: `bg-contain bg-top sm:bg-cover sm:bg-center`. Add a black background color (`bg-black`) so the area below the contained image is black rather than empty.

4. **Adjust section height on mobile**: Keep `min-h-screen` on desktop but use a smaller min-height on mobile if needed to avoid excessive empty space.

### Technical details

- Line 41: Change `bg-cover bg-center` → `bg-contain bg-top bg-no-repeat bg-black sm:bg-cover sm:bg-center`
- Line 57: Change `whitespace-nowrap ... text-4xl` → `text-2xl sm:text-4xl sm:whitespace-nowrap`

