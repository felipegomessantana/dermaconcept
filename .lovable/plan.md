

## Plano: Antes e Depois com Slider Interativo em 3 Colunas

### O que muda
1. Adicionar terceiro par antes/depois com label "Rejuvenescimento" usando as imagens enviadas
2. Substituir o layout lado-a-lado (antes | depois) por um **slider interativo de arrastar** (image comparison slider) em cada card
3. Grid passa para **3 colunas** no desktop

### Abordagem técnica

1. **Salvar imagens** `rejuvenescimento-antes.webp` e `rejuvenescimento-depois.webp` em `src/assets/youlaser-prime/`

2. **Criar componente `BeforeAfterSlider`** — componente com drag handle:
   - Imagem "depois" como fundo, imagem "antes" com `clip-path` controlado por posição do mouse/touch
   - Handle vertical arrastável com ícone de setas
   - Suporte a mouse e touch events

3. **Atualizar `ProcedurePageLayout.tsx`**:
   - Importar e usar `BeforeAfterSlider` no lugar do grid de 2 imagens
   - Grid responsivo: `grid-cols-1 md:grid-cols-3`
   - Remover labels "Antes"/"Depois" abaixo (o slider já mostra visualmente)

4. **Atualizar `YouseLaserPrime.tsx`**:
   - Importar novas imagens e adicionar terceiro item ao array `beforeAfter`

### Arquivos
- `src/assets/youlaser-prime/rejuvenescimento-antes.webp` — novo
- `src/assets/youlaser-prime/rejuvenescimento-depois.webp` — novo
- `src/components/procedure/BeforeAfterSlider.tsx` — novo componente
- `src/components/procedure/ProcedurePageLayout.tsx` — usar slider + 3 colunas
- `src/pages/paciente-modelo/YouseLaserPrime.tsx` — adicionar 3º par

