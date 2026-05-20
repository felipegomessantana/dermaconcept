# Plano de otimização de performance de imagens

## Diagnóstico

O projeto tem **29 MB de imagens** em `src/assets/`, com vários arquivos entre 400 KB e 830 KB — mesmo já em `.webp`. As imagens são servidas **em tamanho/peso únicos** independente do dispositivo (um celular baixa o mesmo arquivo de 800 KB que um desktop 4K). Não há `width`/`height` em várias `<img>`, o que causa **CLS** (layout shift, ruim para Core Web Vitals e SEO).

**Sobre skeleton e SEO:** skeleton **não atrapalha SEO**. O Googlebot indexa o HTML, e as tags `<img src=... alt=...>` continuam presentes. Skeleton é puramente visual — melhora a percepção de velocidade, mas **não resolve o peso real** das imagens. Precisa ser combinado com otimização verdadeira.

## O que será feito

### 1. Otimização real de imagens (impacto maior)
- Instalar `vite-imagetools` (plugin oficial Vite) para gerar variantes responsivas e formatos modernos em build time
- Criar um helper `<ResponsiveImage>` que emite `<picture>` com:
  - `<source type="image/avif" srcset="...">` (formato mais leve, ~30% menor que WebP)
  - `<source type="image/webp" srcset="...">`
  - `<img>` fallback com `width`, `height`, `loading`, `decoding`
- Tamanhos gerados: 480w, 768w, 1200w, 1920w → browser baixa só o necessário
- Resultado esperado: imagens de 500 KB → 60–120 KB no mobile

### 2. Preload do LCP (Largest Contentful Paint)
- Identificar a imagem do Hero da home (`HeroSection`) e adicionar `<link rel="preload" as="image" fetchpriority="high">` em `index.html`
- Marcar essa imagem com `fetchpriority="high"` e `loading="eager"`
- Todas as demais imagens abaixo da dobra: `loading="lazy"` + `decoding="async"`

### 3. Skeleton + blur placeholder (percepção)
- Estender `<ResponsiveImage>` com:
  - Skeleton (`animate-pulse bg-muted`) com aspect-ratio reservado enquanto `onLoad` não dispara
  - LQIP opcional: versão miniatura blur (10px) renderizada por trás via CSS `filter: blur(20px)` que some quando a real carrega
- Aplicar nas seções pesadas: `AboutSection`, `NossaEstruturaSection`, `EquipeSection`, páginas de procedimentos

### 4. Width/height em todas as `<img>` (corrige CLS)
- Auditar componentes que usam `<img>` direto sem dimensões e adicionar atributos explícitos
- Manter `aspect-ratio` no CSS pra responsividade

### 5. Vídeo do `MentoriaSection`
- Já está com `preload="metadata"` ✓
- Adicionar `poster` (frame estático) para ele não ficar preto antes do play

## Detalhes técnicos

```ts
// vite.config.ts
import { imagetools } from "vite-imagetools";
plugins: [react(), imagetools()]
```

```tsx
// uso
import hero from "@/assets/hero.jpg?w=480;768;1200;1920&format=avif;webp;jpg&as=picture";
<ResponsiveImage {...hero} alt="..." width={1200} height={800} priority />
```

```html
<!-- index.html -->
<link rel="preload" as="image" href="/hero-1200.avif" type="image/avif" fetchpriority="high" />
```

## Ordem de execução

1. Instalar `vite-imagetools` + criar `<ResponsiveImage>` com skeleton/blur
2. Migrar Hero da home + preload LCP (maior ganho percebido)
3. Migrar `AboutSection`, `NossaEstruturaSection` (carrosséis pesados)
4. Migrar páginas de procedimentos (`paciente-modelo/*`)
5. Auditar `width`/`height` faltantes
6. Validar com Lighthouse / `browser--performance_profile`

## Fora do escopo
- Mudança de CDN ou hospedagem de imagens (Cloudflare Images etc.) — pode ser feito depois se necessário
- Reescrever animações/Motion existentes
- Mudanças de conteúdo ou design

Quer que eu siga com tudo, ou prefere começar só pelo passo 1+2 (Hero + helper) pra você ver o ganho antes?
