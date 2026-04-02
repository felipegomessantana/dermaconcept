

## Plan: Make BorderBeamButton support full-width

### Problem
The `w-full` class is applied to the outer `<Tag>` wrapper, but the inner `<span>` (the visible button face) doesn't stretch to fill it — it only wraps the text content. This leaves the beam border looking broken/partial.

### Fix
**`src/components/ui/border-beam-button.tsx`** — Add `w-full` to the inner visible `<span>` (line 39) so when the outer container is full-width, the button face stretches accordingly.

Change inner span classes from:
```
flex items-center justify-center gap-2 rounded-[12px] bg-[#E6DFD6] px-8 py-3.5 ...
```
to:
```
w-full flex items-center justify-center gap-2 rounded-[12px] bg-[#E6DFD6] px-8 py-3.5 ...
```

One line change, one file.

