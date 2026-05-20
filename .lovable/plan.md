# Otimização de imagens — Páginas de procedimento

## Objetivo
Aplicar o mesmo padrão de otimização já implementado em Hero/About/Estrutura/Courses nas páginas de procedimento (`/paciente-modelo/*`) e nos componentes restantes com imagens pesadas. Meta: reduzir peso das imagens em 70–85% e eliminar CLS.

## Escopo

### 1. ProcedurePageLayout (componente compartilhado)
Arquivo: `src/components/procedure/ProcedurePageLayout.tsx`
- Trocar `<img>` de hero, intro, áreas e callouts por `<ResponsiveImage>`.
- Adicionar `priority` apenas na primeira imagem visível (hero da página).
- Definir `sizes` adequado por contexto (hero 100vw, grid de áreas ~33vw em desktop).

### 2. BeforeAfterSlider
Arquivo: `src/components/procedure/BeforeAfterSlider.tsx`
- Migrar para `<picture>` responsivo mantendo o slider funcional.
- Como ambas as imagens precisam ficar sobrepostas no mesmo tamanho, manter dimensões fixas via width/height.

### 3. Páginas de procedimento (imports `?responsive`)
Trocar todos os imports `.webp` por `?w=480;768;1200&responsive` nas páginas:
- `BioestimuladoresColageno.tsx` (12 imagens antes/depois)
- `PeelingQuimico.tsx` (6 imagens)
- `EthereaMX.tsx`, `IPCA.tsx`, `JatoDePlasma.tsx`, `LinearZ.tsx`
- `PreenchimentoAcidoHialuronico.tsx`, `ToxinaBotulinica.tsx`
- `YouseLaserPrime.tsx`, `FiosDePDO.tsx`, `Intradermoterapia.tsx`
- `Liftera.tsx`, `MesojectGun.tsx`, `Microagulhamento.tsx`
- `src/assets/areas/index.ts` (imagens de áreas reutilizadas)

### 4. Seções restantes da home / quem-somos
- `EquipeSection.tsx` — fotos da equipe
- `TestimonialsSection.tsx` — se houver fotos
- `PacienteModeloSection.tsx`, `DoisCaminhosSection.tsx`
- `fellow-semanal/*` e `MentoriaIndividual` (se tiverem imagens)

### 5. CLS / atributos faltantes
Varrer `<img>` restantes sem `width`/`height` e adicionar, mesmo nos que não migrarem para `<picture>` agora (ícones, logos pequenos).

### 6. Validação
- Build local: confirmar que `vite-imagetools` gera variantes sem erro.
- Inspecionar 2–3 páginas no preview: ver no Network que AVIF/WebP servem por largura correta e que LCP do hero baixa.
- Conferir visualmente que slider antes/depois continua alinhado.

## Detalhes técnicos
- Padrão de import: `import x from "@/assets/foo.webp?w=480;768;1200&responsive"` (mantém AVIF+WebP+JPG via `defaultDirectives`).
- `<ResponsiveImage source={x} alt="..." sizes="(min-width:1024px) 33vw, 100vw" />`.
- Para grids de áreas usar `sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"`.
- `areas/index.ts` precisa exportar objetos `PictureSource` em vez de strings; os usos atuais (`<img src={areaImages.rosto}>`) terão de ser substituídos por `<ResponsiveImage source={areaImages.rosto}>`.

## Fora de escopo
- Mudança de CDN, conteúdo, design ou copy.
- Reescrita do slider antes/depois.
- Otimização do vídeo da mentoria (já tem `preload="metadata"`).
