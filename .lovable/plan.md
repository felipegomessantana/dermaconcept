

# Plano: Criar Página Inicial 2 para Validação A/B

## Resumo

Criar uma segunda versão da página inicial com o hero banner e cursos anteriores (sem as animações premium recentes), acessível via submenu no header.

## O que será feito

### 1. Criar componentes "clássicos" (versões anteriores)

- **`src/components/HeroSectionClassic.tsx`** — Hero simples sem parallax, sem animação por letra, sem contadores animados. Imagem de fundo estática com fade-in básico, headline direto, CTA simples.
- **`src/components/CoursesSectionClassic.tsx`** — Cards de cursos sem hover premium (sem scale na imagem, sem underline animado, sem número flutuante). Layout grid limpo com `AnimatedSection` básico.

### 2. Criar página Index2

- **`src/pages/Index2.tsx`** — Mesma estrutura da Index, mas usando `HeroSectionClassic` e `CoursesSectionClassic`. Mantém About, HowItWorks, Testimonials, Contact e Footer iguais.

### 3. Adicionar rota `/v2`

- **`src/App.tsx`** — Nova rota `<Route path="/v2" element={<Index2 />} />`.

### 4. Atualizar navegação no Header

- **Desktop**: Transformar "Página Inicial" de link estático em dropdown com duas opções:
  - "Versão Atual" → `href="/"`
  - "Versão Clássica" → `href="/v2"`
- **Mobile**: Transformar "Página Inicial" em um `MobileSubmenu` com os mesmos dois links.

## Arquivos modificados/criados

| Arquivo | Ação |
|---------|------|
| `src/components/HeroSectionClassic.tsx` | Criar — hero simples com fade-in |
| `src/components/CoursesSectionClassic.tsx` | Criar — cards sem efeitos premium |
| `src/pages/Index2.tsx` | Criar — página com componentes clássicos |
| `src/App.tsx` | Editar — adicionar rota `/v2` |
| `src/components/Header.tsx` | Editar — submenu "Página Inicial" |

