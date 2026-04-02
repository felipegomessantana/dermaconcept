

## Plan: Fix Mobile Menu Scroll for Long Submenus

### Problem
The mobile navigation menu uses `overflow-hidden` on the `<motion.nav>` container, which prevents scrolling when the expanded submenu content exceeds the viewport height. "Seja Um Paciente Modelo" has 16+ items and gets cut off.

### Fix
Two changes in `src/components/Header.tsx`:

1. **Make the mobile nav scrollable**: Change the `<motion.nav>` container (line 433) to use `max-h-[calc(100vh-80px)] overflow-y-auto` instead of just `overflow-hidden`. This limits the menu height to the viewport minus the header, and enables vertical scrolling.

2. **Keep `overflow-hidden` only during animation**: Use a state or conditional class so `overflow-hidden` applies only during the open/close animation (to prevent visual glitches), then switches to `overflow-y-auto` once the animation completes. Alternatively, simply replace `overflow-hidden` with `overflow-y-auto` since Framer Motion's height animation handles clipping internally.

### Technical Detail
- Line 433: Change `className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"` to `className="lg:hidden overflow-y-auto max-h-[calc(100dvh-80px)] border-t border-gray-100 bg-white"`
- Using `100dvh` (dynamic viewport height) ensures correct behavior on mobile browsers with address bars.

