## Objetivo
Substituir as 7 ilustrações em linha dourada (abdômen, braços, coxas, flancos, costas, glúteos, corpo) por **fotografias clínicas reais** no mesmo padrão da imagem de "Couro cabeludo" e da página YouLaser Prime: pessoa real em ambiente de clínica, área anatômica visível e, sempre que possível, equipamento ou mãos profissionais aplicando o procedimento.

## Padrão visual (referência)
- Enquadramento fechado na área tratada (não modelo de corpo inteiro)
- Ambiente de clínica de dermatologia ao fundo (desfocado)
- Mãos profissionais (com luva ou aplicador) interagindo com a região
- Quando fizer sentido, equipamento estético em uso (caneta de mesoterapia, aplicador de ultrassom, ponteira de laser, dermaroller etc.)
- Iluminação natural e suave, paleta taupe/bege coerente com o site
- Estilo editorial premium, real, não ilustrado

## Imagens a regenerar
1. `abdomen.jpg` — close do abdômen com aplicador estético em uso
2. `bracos.jpg` — close do braço com aplicador/agulha de mesoterapia
3. `coxas.jpg` — close da coxa com ponteira de equipamento corporal
4. `flancos.jpg` — close lateral do flanco com aplicador
5. `costas.jpg` — close da parte superior das costas em maca clínica com aplicador
6. `gluteos.jpg` — close do quadril/glúteo com ponteira de ultrassom/radiofrequência
7. `corpo.jpg` — paciente em maca recebendo tratamento corporal em ambiente de clínica

## Estratégia técnica
- Cada imagem será gerada com enquadramento muito fechado na área e foco no equipamento/mão profissional, no mesmo enquadramento clínico que a imagem de couro cabeludo já aprovada.
- Geração feita pelo gerador de imagens premium para realismo. Caso alguma imagem específica seja barrada por moderação por excesso de pele exposta, será adaptada com aplicação de drapeado clínico branco visível no quadro, mantendo o foco na área tratada e no equipamento.
- Substituição direta dos arquivos em `src/assets/areas/`. Como o `index.ts` já está apontando para esses arquivos, todas as páginas (Intradermoterapia, Linear Z, Bioestimuladores, Microagulhamento, Peeling Químico, Etherea MX, Mesoject Gun) recebem a atualização sem mudança de código.

## Validação
- Conferir cada imagem gerada visualmente
- Garantir: área visível, equipamento ou mão profissional presente, ambiente clínico, sem look de moda editorial
- Refazer individualmente qualquer imagem que ainda transmita "modelo posando" em vez de "procedimento"