## Ajustes no Hero (mobile)

Dois ajustes pontuais identificados no print:

### 1. Subir a foto de fundo no mobile
Hoje a `hero-mobile.webp` está com `bg-top` mas o enquadramento ainda deixa o texto sobre os rostos da equipe. Ajustar o `background-position` no mobile para algo como `bg-[center_top_-40px]` (ou usar `object-position` equivalente) puxando a imagem mais para cima, liberando o centro/baixo da composição para a tipografia.

### 2. Remover a borda/separador acima dos números (stats)
No `HeroSection.tsx`, o bloco de stats tem `border-t border-white/20 pt-8`. Remover essa borda e reduzir o `pt-8` para um espaçamento menor (ex.: `pt-4` ou `mt-8`), deixando os números mais próximos do botão "Quero ser Aluno", sem linha divisória.

## Detalhes técnicos

- Arquivo único: `src/components/HeroSection.tsx`
- Mudar `bg-top` → posicionamento customizado só no mobile (ex.: `[background-position:center_-40px] sm:bg-center`)
- Trocar `mt-14 ... border-t border-white/20 pt-8` por `mt-8 pt-0` (sem borda)

Sem mudanças em desktop além do reposicionamento do background, que já estava `sm:bg-center`.
