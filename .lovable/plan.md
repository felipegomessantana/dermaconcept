

## Correção: Slider sem recorte de imagem

### Problema
A imagem "antes" usa `object-contain` com `h-full`, o que pode distorcer ou não alinhar corretamente com a imagem "depois". As duas imagens precisam ter exatamente o mesmo dimensionamento.

### Solução
Na imagem "antes" (linha 80-84), trocar `w-full h-full object-contain` por `w-full h-auto` — idêntico à imagem "depois". Isso garante que ambas as imagens mantenham sua proporção original sem crop, dimensionadas pela largura do container.

### Arquivo modificado
- `src/components/procedure/BeforeAfterSlider.tsx` — linha 82: classe da imagem "antes" de `w-full h-full object-contain` para `w-full h-auto`

