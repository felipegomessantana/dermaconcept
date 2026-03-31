

## Plan: Redesign Hero Overlay & Text Layout

### Changes to `src/components/HeroSection.tsx`

1. **Overlay**: Replace the full-screen `bg-background/80` overlay with a gradient that goes from transparent at the top to black at the bottom (covering roughly the bottom half). This reveals more of the background image at the top while keeping text readable at the bottom.
   - Use `bg-gradient-to-b from-transparent via-transparent to-black/70` or similar.

2. **Text positioning**: Change `justify-center` to `justify-end` so all content sits at the bottom of the section. Add bottom padding (`pb-12`).

3. **Center text**: Add `text-center items-center` to center all content horizontally.

4. **Single-line headline**: Remove the `<br />` tags from "APRENDA, PRATIQUE, IMPACTE." so it renders on one line. Use `whitespace-nowrap` if needed.

5. **Single-line subtitle**: Remove the `<br>` from "Dermatologia que Transforma Carreiras e Pessoas." so it's one line. Remove `max-w-md` constraint.

6. **Stats**: Center the stats row and remove `max-w-md` so it spans naturally.

7. **Text colors**: Since overlay is now dark/transparent, ensure text uses `text-white` and subtitle uses `text-white/80` for visibility against the gradient.

