

## Plan: Add "Indicações" Section to YouLaser Prime Page

### What's being added
A new "Indicações" (Indications) section showing three categories of treatment indications, based on the reference image. The section will display three elegant cards with category titles and bullet-point lists, adapted to the site's premium editorial aesthetic (no purple background — using the existing cream/white palette).

### Content (from reference image)

**Dermatologia e cirurgia dermatológica:** Ceratose, Fibroma, Siringoma, Verrugas, Rinofima, Blefaroplastia, Condiloma, Molusco, Granuloma piogênico, Neurofibroma, Lesões cutâneas sólidas

**Rejuvenescimento:** Rugas, Flacidez da pele, Discromia da pele, Cicatrizes de acne, Cicatrizes hipertróficas, Cicatrizes atróficas, Poros aumentados

**Íntimo:** Atrofia Vaginal, Flacidez Vaginal, Rejuvenescimento e remodelação vulvar, Incontinência Urinária de Esforço (IUE)

### Technical approach

1. **Add `indications` field to `ProcedurePageData`** in `ProcedurePageLayout.tsx`:
   ```ts
   indications?: { category: string; items: string[] }[];
   ```

2. **Add Indications section** in `ProcedurePageLayout.tsx` (rendered after Benefits, before Areas):
   - Three cards in a responsive grid (1 col mobile, 3 cols desktop)
   - Each card: white bg, rounded-2xl, subtle shadow, taupe accent top border
   - Category title in serif font, bullet list below
   - Section title: "Indicações"
   - Background: `bg-[#FAF8F5]` or white, consistent with existing sections

3. **Update `YouseLaserPrime.tsx`** to pass the indications data with all three categories.

### Files modified
- `src/components/procedure/ProcedurePageLayout.tsx` — new interface field + new section
- `src/pages/paciente-modelo/YouseLaserPrime.tsx` — pass indications data

