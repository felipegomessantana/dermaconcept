

# Plano: Ajustar Hero e Cursos da Versão Atual

## 1. HeroSection — Remover CTA e reforçar overlay

**`src/components/HeroSection.tsx`**:
- Remover o bloco do botão "Conheça os cursos" (linhas 170-183)
- Intensificar o gradient overlay inferior: trocar `from-foreground/30` por algo mais forte como `from-foreground/70` e `to-foreground/95` por `to-foreground` para o conteúdo (texto, stats) ter mais contraste sobre a imagem

## 2. CoursesSection — Layout imagem esquerda + texto direita com BorderBeamButton

**`src/components/CoursesSection.tsx`** — Reescrever para o layout visto no screenshot:
- Cada curso renderizado como uma row de 2 colunas (`grid-cols-1 md:grid-cols-2`): imagem à esquerda, conteúdo à direita
- Conteúdo inclui: contador (`01 / 04`), titulo serif, descrição, e `BorderBeamButton` como CTA com texto "ACESSE O PROGRAMA"
- Manter `AnimatedSection` para animação de entrada por scroll
- Cursos empilhados verticalmente (cada um ocupando a largura total), não em grid 2x2
- Usar os mesmos dados de cursos e imagens já existentes

## Arquivos modificados

| Arquivo | Ação |
|---------|------|
| `src/components/HeroSection.tsx` | Remover botão CTA, intensificar overlay |
| `src/components/CoursesSection.tsx` | Reescrever layout: imagem esquerda + texto direita + BorderBeamButton |

