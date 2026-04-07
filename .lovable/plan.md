

## Correção: Inverter lógica do slider antes/depois

### Problema
Com a posição inicial em 20%, a imagem base (visível) é a "depois" e apenas 20% da "antes" aparece à esquerda. O usuário vê o "depois" como imagem principal, dando a impressão de que estão invertidas.

### Solução
Inverter a renderização no `BeforeAfterSlider.tsx`:
- A imagem **base** (que define o tamanho natural) passa a ser a `before`
- A imagem **recortada** (absolute, com clipPath) passa a ser a `after`, revelada da direita para a esquerda
- O clipPath muda de `inset(0 ${100-position}% 0 0)` para `inset(0 0 0 ${position}%)` — revelando o "depois" do lado direito
- Labels permanecem: "Antes" à esquerda, "Depois" à direita

### Arquivo
- `src/components/procedure/BeforeAfterSlider.tsx`

### Mudanças específicas
1. Linha 62-67: trocar `after` por `before` (imagem base)
2. Linha 70-76: trocar `before` por `after`, e ajustar clipPath para `inset(0 0 0 ${position}%)` — mostra o "depois" apenas do ponto do handle para a direita

