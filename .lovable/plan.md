

# Plano: Restaurar Hero ao estilo anterior

## Mudanças em `src/components/HeroSection.tsx`

### 1. Remover escala da imagem de fundo
- Linha 117: remover `scale: 1.1` do style do `motion.div` da imagem

### 2. Substituir overlays por gradiente apenas inferior (preto)
- Linha 121: trocar `from-foreground/70 via-foreground/20 to-foreground` por `from-transparent via-transparent to-black/90`
- Linha 122: remover o overlay lateral (`bg-gradient-to-r from-foreground/40...`)

### 3. Ajustar fundo da section
- Linha 108: trocar `bg-foreground` por `bg-black` para consistência com a referência

### 4. Ajustar cores do texto
- Substituir `text-primary-foreground` por `text-white` e variantes (`text-white/60`, `text-white/80`, `text-white/50`, `text-white/20`) para corresponder à referência original

| Arquivo | Ação |
|---------|------|
| `src/components/HeroSection.tsx` | Remover scale, trocar overlays por gradiente inferior preto, ajustar cores de texto |

