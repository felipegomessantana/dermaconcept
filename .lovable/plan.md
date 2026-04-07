
Objetivo: corrigir o corte visual no slider de antes/depois e melhorar a diagramação do texto introdutório, destacando “Exclusivo em Belo Horizonte”.

1. Corrigir o slider sem recorte
- Ajustar `src/components/procedure/BeforeAfterSlider.tsx` para que o container não “corte” a camada da imagem antes.
- Em vez de usar a camada recortada ocupando `absolute inset-0`, fazer a imagem “antes” seguir o tamanho natural da imagem renderizada.
- Aplicar o recorte sobre um wrapper com largura/altura reais da própria imagem, evitando a sobra/sombra que hoje denuncia o crop.
- Manter a posição inicial em 20% da esquerda.

2. Garantir alinhamento perfeito entre antes/depois
- Deixar as duas imagens com a mesma lógica de renderização (`w-full h-auto block`) e encapsular ambas em uma estrutura que preserve a altura natural.
- Posicionar a linha e o handle com base na área visível real da imagem, não numa caixa maior que a foto.

3. Melhorar a diagramação do texto
- Em `src/pages/paciente-modelo/YouseLaserPrime.tsx`, reestruturar apenas visualmente o `intro`, sem alterar o texto.
- Dar destaque à frase “Exclusivo em Belo Horizonte...” usando um bloco de destaque editorial, mantendo o conteúdo intacto.
- Separar melhor os parágrafos com hierarquia visual mais elegante.

4. Refinar a composição da seção intro + equipamento
- Em `src/components/procedure/ProcedurePageLayout.tsx`, ajustar espaçamento, largura máxima e ritmo visual da coluna de texto para leitura mais premium.
- Manter o layout atual em duas colunas, mas com melhor equilíbrio entre texto e imagem do equipamento.

Arquivos a alterar
- `src/components/procedure/BeforeAfterSlider.tsx`
- `src/pages/paciente-modelo/YouseLaserPrime.tsx`
- `src/components/procedure/ProcedurePageLayout.tsx`

Resultado esperado
- O slider passa a mostrar a imagem inteira, sem corte perceptível nas bordas ou sombra “sobrando”.
- O antes/depois continua começando em 20%.
- O texto fica mais bem diagramado, com destaque claro para “Exclusivo em Belo Horizonte”, sem reescrever o conteúdo.
