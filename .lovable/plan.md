

## Plan: Create "Nossa Estrutura" Section on Quem Somos Page

### What
A new section showcasing the clinic's premium infrastructure with all 10 uploaded photos in an interactive slider/carousel, positioned between MissaoVisaoValores and EquipeSection.

### Implementation

**1. Copy all 10 images to `src/assets/estrutura/`**

Files to copy:
- `WhatsApp_Image_2026-04-02_at_16.24.21.jpeg` -> `estrutura-recepcao.jpg`
- `WhatsApp_Image_2026-04-02_at_16.24.54.jpeg` -> `estrutura-cafe.jpg`
- `WhatsApp_Image_2026-04-02_at_16.24.55_1.jpeg` -> `estrutura-bar.jpg`
- `WhatsApp_Image_2026-04-02_at_16.24.55.jpeg` -> `estrutura-lounge.jpg`
- `WhatsApp_Image_2026-04-02_at_16.25.11.jpeg` -> `estrutura-lobby.jpg`
- `WhatsApp_Image_2026-04-02_at_16.25.12_1.jpeg` -> `estrutura-varanda.jpg`
- `WhatsApp_Image_2026-04-02_at_16.25.12-2.jpeg` -> `estrutura-recepcao2.jpg`
- `WhatsApp_Image_2026-04-02_at_16.23.46-2.jpeg` -> `estrutura-sala-aula.jpg`
- `WhatsApp_Image_2026-04-02_at_16.23.56-2.jpeg` -> `estrutura-procedimentos.jpg`
- `WhatsApp_Image_2026-04-02_at_16.24.06.jpeg` -> `estrutura-procedimentos2.jpg`

**2. Create `src/components/quem-somos/NossaEstruturaSection.tsx`**

- Section header: "Nossa Estrutura" label + heading text
- Embla Carousel (same pattern as EquipeSection) with autoplay, loop, navigation dots
- Each slide shows a full-width image with `aspect-video`, `object-cover`, `rounded-2xl`
- Show 1 slide on mobile, 2 on tablet, 3 on desktop via `slidesToScroll` config
- Glass-morphism prev/next arrows
- Framer Motion scroll-in animation consistent with the page

**3. Update `src/pages/QuemSomos.tsx`**

- Import and add `<NossaEstruturaSection />` between `<MissaoVisaoValores />` and `<EquipeSection />`

### Technical Details
- Reuse `embla-carousel-react` + `embla-carousel-autoplay` (already in project from EquipeSection)
- Background: `bg-white` to contrast with adjacent `bg-[#F8F5F1]` sections
- Typography follows existing pattern: `text-sm tracking-[0.3em] uppercase text-muted-foreground` for label

