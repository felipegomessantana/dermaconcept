

## Plan: Áreas de Aplicação com Cards de Foto de Fundo

### O que muda
A seção "Áreas de Aplicação" deixará de usar chips com ícones e passará a exibir cards maiores com foto de fundo e o nome da área sobreposto em texto elegante.

### Abordagem técnica

1. **Atualizar interface `ProcedureArea`** em `ProcedurePageLayout.tsx`:
   - Adicionar campo opcional `image?: string` para URL da foto de fundo

2. **Redesenhar a seção de Áreas** no layout:
   - Grid responsivo: 2 colunas mobile, 3 colunas md, 5 colunas lg
   - Cada card: `aspect-[3/4]`, `rounded-2xl`, `overflow-hidden`
   - Foto como background com `object-cover`
   - Overlay escuro com gradiente na parte inferior
   - Nome da área em texto branco sobre o overlay
   - Efeito hover com leve zoom na imagem

3. **Atualizar `YouseLaserPrime.tsx`** com imagens para cada área (Rosto, Pescoço, Colo, Mãos, Corpo)
   - Usaremos imagens placeholder por enquanto — você poderá enviar fotos reais depois

### Arquivos modificados
- `src/components/procedure/ProcedurePageLayout.tsx` — interface + novo visual da seção
- `src/pages/paciente-modelo/YouseLaserPrime.tsx` — adicionar URLs de imagens às áreas

