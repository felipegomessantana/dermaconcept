

## Plano: Atualizar Áreas de Aplicação e Ajustar Slider

### 3 mudanças

1. **Áreas de Aplicação — trocar placeholders pelas fotos reais**
   - Copiar as 5 imagens enviadas para `src/assets/youlaser-prime/`: `rosto.webp`, `pescoço.webp`, `colo.webp`, `mãos.jpg`, `corpo.jpg`
   - Atualizar `YouseLaserPrime.tsx` para importar e usar essas imagens no array `areas`

2. **Slider antes/depois — posição inicial em 20%**
   - Em `BeforeAfterSlider.tsx`, alterar `useState(50)` para `useState(20)` para que a divisão comece a 20% da esquerda

3. **Slider — imagem inteira sem recorte**
   - Trocar `object-cover` por `object-contain` e adicionar `bg-black` (ou `bg-gray-100`) no container para que as imagens apareçam por inteiro sem crop
   - Remover `aspect-[3/4]` fixo — usar `aspect-auto` para que o container se adapte à proporção natural da imagem

### Arquivos modificados
- `src/assets/youlaser-prime/rosto.webp` — novo (cópia)
- `src/assets/youlaser-prime/pescoço.webp` — novo (cópia)
- `src/assets/youlaser-prime/colo.webp` — novo (cópia)
- `src/assets/youlaser-prime/mãos.jpg` — novo (cópia)
- `src/assets/youlaser-prime/corpo.jpg` — novo (cópia)
- `src/pages/paciente-modelo/YouseLaserPrime.tsx` — importar imagens reais nas áreas
- `src/components/procedure/BeforeAfterSlider.tsx` — posição inicial 20%, `object-contain` sem crop

