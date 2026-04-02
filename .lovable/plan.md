

## Plan: Fix Contact Strip Layout + Button Border Beam

### Problem 1: Contact Strip Cramped in One Line
The 5 contact items are squeezed into a single row on desktop (`lg:grid-cols-6`). Split into two rows: first row with 4 items (Phone, WhatsApp, Instagram, Email), second row with Address centered below.

**Fix in `ContactSection.tsx`:**
- Change grid to `lg:grid-cols-4` (4 columns for first 4 items)
- Remove `wide` / `col-span-2` from Address
- Instead, render Address as a separate full-width item below the grid, centered, with the same icon+label+value styling

### Problem 2: "Enviar Mensagem" Button Missing Beam Border
The `BorderBeamButton` has a hardcoded inner `<span>` with `bg-[#E6DFD6]` (beige) and `text-gray-900`. The className passed (`bg-[#7A7168] text-white`) applies to the outer wrapper only, so the visible inner span always shows beige — hiding the beam effect visually because the taupe outer wrapper blends with the beam.

**Fix in `ContactSection.tsx`:**
- Remove the conflicting `bg-[#7A7168] text-white` classes from the `BorderBeamButton` className — let the component use its default beige inner span so the animated border beam is clearly visible against it (matching the other buttons on the site like "QUERO UMA MENTORIA SOB MEDIDA")
- Keep only layout classes: `w-full rounded-xl uppercase tracking-[0.2em] text-xs font-semibold`

### Files Changed
- `src/components/ContactSection.tsx` — restructure contact strip grid + fix button classes

