# Ajuste da logo no rodapé

## Problema
Atualmente a imagem da logo gigante está posicionada com `-bottom-[2vw]`, fazendo com que ela seja cortada na parte inferior do rodapé.

## Objetivo
Manter a logo posicionada na parte de baixo do rodapé (como referência da imagem enviada), mas exibi-la **inteira**, sem corte.

## Mudanças em `src/components/Footer.tsx`

1. Remover o offset negativo `-bottom-[2vw]` da `<img>` watermark e usar `bottom-0` para que a base da imagem fique alinhada à base do rodapé.
2. Remover `overflow-hidden` do `<footer>` (ou mantê-lo, já que a imagem agora não ultrapassa o limite).
3. Ajustar o `padding-bottom` do conteúdo principal (`pb-40`) para garantir espaço suficiente entre os links e a logo, evitando sobreposição. Provavelmente algo como `pb-8` ou `pb-12`, já que a logo agora ocupa seu próprio espaço abaixo do conteúdo.
4. Reposicionar a logo como um bloco abaixo do conteúdo (não absoluto), centralizada, com `w-[95%]` e `opacity-40`, para garantir que ela apareça por completo independente da altura da viewport.

## Resultado esperado
A logo "DERMA Concept Academy" aparecerá inteira, centralizada e abaixo das colunas de links/identidade, mantendo a estética de marca d'água decorativa no fundo do rodapé.
