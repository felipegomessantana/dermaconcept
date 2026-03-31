

## Plan: Update Header Button Name & Set 12px Border Radius on All Buttons

### Changes

**1. Header CTA button — rename "Contatos" → "Contato"** (`src/components/Header.tsx`)
- Line 251: change text from `Contatos` to `Contato`
- Line 249: change `rounded-full` to `rounded-[12px]` on the CTA link

**2. BorderBeamButton — change border-radius to 12px** (`src/components/ui/border-beam-button.tsx`)
- Line 22: change `rounded-full` to `rounded-[12px]` on the outer wrapper
- Line 35: change `rounded-full` to `rounded-[12px]` on the inner span

This applies the 12px radius to all BorderBeamButton instances site-wide (Hero CTA, Course CTAs, Contact form submit button).

