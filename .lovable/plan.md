## Diagnóstico

Os botões já apontam para seções existentes na home:
- "Ver procedimentos" → `#paciente-modelo` (existe em `PacienteModeloSection`)
- "Ver cursos" → `#cursos` (existe em `CoursesSection`)

O problema é técnico: em `DoisCaminhosSection.tsx` os cards usam `<Link to="#cursos">` do react-router. O `Link` trata isso como rota, não dispara o scroll para a âncora, e o `ScrollToTop` global ainda força o topo a cada mudança de URL. Por isso o clique parece "não fazer nada".

**Não é necessário criar páginas novas** — as seções de Paciente Modelo e Cursos já existem na home (e cada procedimento/curso já tem sua própria página interna acessível a partir dessas seções).

## Plano

1. Em `src/components/DoisCaminhosSection.tsx`:
   - Trocar `<Link to="#...">` por `<a href="/#paciente-modelo">` e `<a href="/#cursos">`, mantendo todo o estilo atual dos cards.
   - Isso garante que o navegador role até a seção correta quando estiver na home, e que páginas internas naveguem de volta para a home no ponto certo.

2. Ajustar `ScrollToTop` (se necessário) para não anular o scroll quando a URL contém hash — preservando comportamento de âncora.

3. Testar:
   - Estando em `/`, clicar nos dois botões e confirmar que rolam até as seções corretas.
   - Estando em uma página interna (ex.: `/paciente-modelo/linear-z`), clicar e confirmar que volta para a home e rola.

## Fora de escopo

- Criação de páginas dedicadas "/procedimentos" ou "/cursos" (as seções existentes já cumprem o papel; cada item já tem sua página).