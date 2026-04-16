

## Plan: Move before/after items from YouLaser Prime to Etherea MX

### What changes

**YouLaser Prime** (`YouseLaserPrime.tsx`):
- Remove items 4–9 from the first `beforeAfterGroups` array: Skin Rejuvenation, Benign Pigmented Lesions, Skin Resurfacing, Striae, Acne Scars, Vascular Lesions
- Remove the entire second group: Tattoo Removal, Hair Removal, Acne, Onychomycosis
- Remove the corresponding 20 image imports (lines 12–31)
- Keep only: Cicatriz de acne, Rinofima, Rejuvenescimento (single group, no `beforeAfterGroups` split needed — can switch to single array or keep one group)

**Etherea MX** (`EthereaMX.tsx`):
- Add all 20 image imports from `@/assets/youlaser-prime/...` (same asset paths, no file moves)
- Add `beforeAfterGroups` with two groups:
  - Group 1 (6 items): Skin Rejuvenation, Benign Pigmented Lesions, Skin Resurfacing, Striae, Acne Scars, Vascular Lesions
  - Group 2 (4 items): Tattoo Removal, Hair Removal, Acne, Onychomycosis

### Files modified
1. `src/pages/paciente-modelo/YouseLaserPrime.tsx` — remove imports and before/after entries
2. `src/pages/paciente-modelo/EthereaMX.tsx` — add imports and `beforeAfterGroups`

