

## Plan: Update Texts from DOCX Content

The uploaded document contains updated descriptions for the courses and mentoria. Here's how I'll apply them with proper typography and readability.

### Content Mapping (DOCX → Components)

| DOCX Section | Target Component | Current State |
|---|---|---|
| Dermatologia Estética Semanal | `CoursesSection.tsx` — course[0] | Short generic description |
| Dermatologia Estética Mensal | `CoursesSection.tsx` — course[1] | Short generic description |
| Cirurgia Dermatológica | `CoursesSection.tsx` — course[2] | Title says "Mensal", short desc |
| Mentoria | `MentoriaSection.tsx` | Different text structure |

### Changes

**1. `src/components/CoursesSection.tsx`** — Update the `courses` array:

- **Course 0 (Estética Semanal)**: Replace description with DOCX text, broken into a concise lead paragraph. The long text will be split: a bold opening hook + supporting details. Tag stays "Intensivo".
- **Course 1 (Estética Mensal)**: Same treatment — new description from DOCX. Tag stays "Completo".
- **Course 2 (Cirurgia Dermatológica)**: Fix title (remove "Mensal"), update description from DOCX. Tag stays "Prático".
- **Tricologia (Course 3)**: Keep as-is (not mentioned in the DOCX, so no update needed).

Each description will be edited for readability — not a raw paste. I'll keep them at a similar length (2-3 sentences max for the card format), preserving the key differentiators from the full DOCX text. The longer details are better suited for dedicated course pages.

**2. `src/components/MentoriaSection.tsx`** — Update the intro text:

- Replace the current subtitle/description with the DOCX mentoria text, adapted to the existing layout structure (heading + paragraph + deliverables list).
- The text will be split: main value proposition as the paragraph, key details woven into the existing deliverables format.

### Design Approach

- Descriptions stay concise for card readability (3-4 lines max on desktop)
- Key differentiators from the DOCX are highlighted (e.g., "ÚNICO em BH", "acompanha o paciente durante todo o tratamento")
- No layout changes — only text content updates
- Maintain existing typography classes and spacing

