

## Plan: Add Equipment Image and Before/After Section to YouLaser Prime Page

### What changes

1. **Copy the 4 uploaded images** into `src/assets/youlaser-prime/`:
   - `image-12.png` — full equipment photo
   - `Design_sem_nome_1.png` — close-up equipment photo
   - `YOULASER-PRIME-Antes2.webp` — before photo
   - `YOULASER-PRIME-Depois2.webp` — after photo

2. **Add optional fields to `ProcedurePageData`** interface in `ProcedurePageLayout.tsx`:
   - `equipmentImages?: string[]` — array of imported image paths for the equipment showcase
   - `beforeAfter?: { before: string; after: string; label?: string }[]` — before/after pairs

3. **Add two new sections to `ProcedurePageLayout.tsx`** (rendered between Intro and Benefits):
   - **Equipment section**: displays the equipment images side-by-side in a elegant layout with a title like "O Equipamento". Full-body shot on the left, close-up on the right, on a clean white/cream background.
   - **Before & After section**: displays the before/after pair side-by-side with "Antes" and "Depois" labels, rounded corners, subtle shadow. Title: "Resultados Reais".

4. **Update `YouseLaserPrime.tsx`** to import the images and pass them via the new data fields.

### Layout details

- Equipment section: white background, max-w-4xl, two images in a responsive grid (stack on mobile)
- Before/After section: bg-[#FAF8F5], max-w-3xl, two images side-by-side with labels, equal sizing, rounded-xl with shadow-sm

### Files modified
- `src/components/procedure/ProcedurePageLayout.tsx` — interface + 2 new sections
- `src/pages/paciente-modelo/YouseLaserPrime.tsx` — import images and pass data

### Files created
- `src/assets/youlaser-prime/` — 4 image files copied from uploads

