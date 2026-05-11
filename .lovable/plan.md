# Imagens nas "Áreas de Aplicação" (todas as páginas Paciente Modelo)

Hoje só **YouLaser Prime** e **IPCA** mostram imagens nos cards. Nas outras 12 páginas o card aparece com fundo cinza. Vou padronizar: todo card de "Áreas de Aplicação" terá uma imagem ilustrativa coerente com o procedimento + a área do corpo, no mesmo estilo do exemplo enviado.

## Estratégia de imagens

Para evitar inflar o projeto com dezenas de fotos quase iguais, vou usar **dois níveis**:

1. **Reaproveitar imagens já existentes** (`src/assets/ipca/area-*.webp` e `src/assets/youlaser-prime/*.webp`) sempre que o rótulo do card corresponder a uma área já fotografada (Rosto, Pescoço, Colo, Mãos, Corpo, Abdômen, Glúteos, Braços, Coxas).
2. **Gerar novas imagens (AI, premium)** para áreas específicas que ainda não existem no projeto — sempre fotografias realistas de clínica/procedimento, mesma estética editorial taupe/clean das atuais.

Imagens novas a gerar (≈18 únicas, reutilizadas entre páginas quando o rótulo se repete):

- **Faciais detalhadas** (preenchimento / toxina / fios / jato de plasma): Lábios, Olheiras, Bigode chinês, Linhas de marionete, Maçãs do rosto, Mandíbula, Queixo, Nariz, Têmporas, Testa, Glabela, Pés de galinha, Sobrancelhas, Pálpebras, Ao redor dos lábios, Bandas do pescoço, Papada, Face completa.
- **Corpo / capilar**: Couro cabeludo, Flancos, Costas.

Cada imagem nova vai para `src/assets/areas/<slug>.webp` (pasta nova compartilhada entre páginas).

## Páginas a atualizar

| Página | Áreas |
|---|---|
| BioestimuladoresColageno | Rosto, Pescoço, Colo, Mãos, Braços, Abdômen, Glúteos |
| EthereaMX | Rosto, Pescoço, Colo, Mãos, Corpo |
| FiosDePDO | Rosto, Pescoço, Papada, Sobrancelhas, Mandíbula |
| Intradermoterapia | Couro cabeludo, Abdômen, Flancos, Coxas, Braços, Glúteos |
| JatoDePlasma | Pálpebras, Região dos olhos, Ao redor dos lábios, Face |
| Liftera | Face, Papada, Sobrancelhas, Pescoço |
| LinearZ | Face completa, Papada, Mandíbula, Pescoço, Abdômen, Flancos |
| MesojectGun | Rosto, Pescoço, Couro cabeludo, Corpo |
| Microagulhamento | Rosto, Pescoço, Colo, Costas, Corpo |
| PeelingQuimico | Rosto, Pescoço, Colo, Mãos, Costas |
| PreenchimentoAcidoHialuronico | Lábios, Olheiras, Bigode chinês, Linhas de marionete, Maçãs, Mandíbula, Queixo, Nariz, Têmporas, Mãos |
| ToxinaBotulinica | Testa, Glabela, Pés de galinha, Sobrancelhas, Nariz, Queixo, Pescoço |

## Detalhes técnicos

- Criar `src/assets/areas/` com um único set compartilhado de imagens (importações ES6).
- Criar um helper `src/assets/areas/index.ts` que exporta cada imagem por chave (`rosto`, `pescoco`, `labios`…), evitando duplicar imports em cada página.
- Em cada um dos 12 arquivos, alterar apenas o array `areas: [...]` adicionando `image: areas.<chave>` em cada item. Nenhum outro código muda.
- Layout/estilo do card já existe em `ProcedurePageLayout.tsx` (não precisa alterar) — quando há `image`, o componente já renderiza a foto com gradiente preto inferior e o label sobreposto, exatamente como o exemplo anexado.
- Geração das imagens novas via `imagegen` em qualidade `standard` (ou `premium` apenas se necessário), formato vertical 3:4 (864×1152) salvas como `.webp` para casar com o restante.

## O que NÃO muda

- Textos, títulos, labels, ordem dos cards.
- Layout do `ProcedurePageLayout`.
- Páginas YouseLaserPrime e IPCA (já estão corretas).