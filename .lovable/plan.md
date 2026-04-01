

# Plano: Adicionar efeito Text Parallax Content na seção de Cursos

## O que será feito

Reescrever `CoursesSection.tsx` para implementar o efeito **Text Parallax Content** — onde a imagem de cada curso fica "sticky" (fixa) enquanto o conteúdo textual rola por cima, criando um efeito de parallax por scroll. Esse é o padrão visual mostrado no screenshot.

## Como funciona o efeito

Cada curso é uma seção full-width com:
- **Imagem de fundo sticky** que ocupa a viewport enquanto o usuário scrolla
- **Overlay com gradiente** para legibilidade
- **Conteúdo textual** (tag, título, descrição, botão BorderBeam) que aparece sobre a imagem com `useScroll` + `useTransform` do framer-motion para criar movimento parallax no texto

A alternância visual (imagem esquerda/direita) é substituída por blocos empilhados full-bleed, cada um com sua imagem de fundo e o texto sobreposto com animação de scroll.

## Implementação técnica

**`src/components/CoursesSection.tsx`**:
- Importar `useScroll`, `useTransform`, `useRef` do framer-motion
- Criar um sub-componente `TextParallaxBlock` que:
  - Usa `position: sticky` na imagem de fundo
  - Aplica `useScroll` no container do bloco
  - Transforma opacidade e posição Y do texto baseado no scroll progress
- Manter header "Nossos Cursos" com `AnimatedSection`
- Cada curso renderizado como um `TextParallaxBlock` com altura suficiente para o efeito (ex: `min-h-[150vh]`)
- Conteúdo inclui: tag, contador, título serif, descrição, `BorderBeamButton`
- Preservar os mesmos dados de cursos e imagens

## Arquivo modificado

| Arquivo | Ação |
|---------|------|
| `src/components/CoursesSection.tsx` | Reescrever com efeito Text Parallax Content via framer-motion |

