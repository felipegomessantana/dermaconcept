## Objetivo
Trocar as imagens corporais que hoje escondem a área tratada com roupa ou linguagem de moda por imagens clínicas/procedurais, mostrando com clareza a região anatômica correta e o contexto estético.

## O que vou fazer
1. Auditar todas as áreas corporais compartilhadas usadas nas páginas de procedimento.
2. Substituir os assets problemáticos de `abdomen`, `bracos`, `coxas`, `flancos`, `costas` e, se necessário, `corpo` e `gluteos` por imagens coerentes com procedimento estético.
3. Atualizar o registro central `src/assets/areas/index.ts` para que a correção se propague automaticamente para todas as páginas que reutilizam essas imagens.
4. Revisar as páginas impactadas para garantir que nenhuma seção continue mostrando roupa cobrindo a área tratada ou pose de modelo em vez de contexto clínico.

## Páginas já mapeadas como impactadas
- `Intradermoterapia`
- `Linear Z`
- `Bioestimuladores de Colágeno`
- `Microagulhamento`
- `Peeling Químico`
- `Etherea MX`
- `Mesoject Gun`

## Critério visual de substituição
- Área anatômica claramente visível
- Enquadramento de procedimento estético/dermatológico
- Roupas e styling minimizados ao ponto de não esconder o tratamento
- Imagem funcional e informativa, não editorial de moda
- Consistência visual com o restante do site premium da clínica

## Detalhes técnicos
- A origem do problema está no reuso central de imagens em `src/assets/areas/index.ts`.
- Corrigindo os imports compartilhados, a maior parte das páginas será ajustada sem alterar o conteúdo textual.
- Só farei mudanças de frontend/asset mapping, sem mexer em lógica ou estrutura de páginas além do necessário para a exibição correta.

## Validação
- Conferir visualmente as áreas corporais em todas as páginas afetadas
- Confirmar que abdômen, braços, coxas, flancos e costas aparecem de forma legível e apropriada ao procedimento
- Garantir que não restem cards com aparência de “modelo bonita” em vez de demonstração de tratamento