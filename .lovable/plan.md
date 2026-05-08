## Contexto

O cliente apontou que o tráfego (especialmente vindo do Google e do mobile) cai na home e não encontra caminho direto para virar **paciente modelo** — hoje só dá pra chegar lá abrindo o menu hambúrguer e navegando até "Seja Um Paciente Modelo". Mesmo problema, em menor grau, para quem busca os **cursos/fellows (alunos)**.

A decisão combinada no WhatsApp foi: ajustar a home para os **dois públicos** (alunos e pacientes modelo), deixando os caminhos visíveis logo na primeira dobra no mobile.

## Objetivo

Garantir que, ao cair na home pelo celular, o visitante consiga em **1 toque**:
1. Se candidatar como **Paciente Modelo** (foco principal de captação)
2. Conhecer / se inscrever como **Aluno** (cursos, fellows, workshops)

Sem mexer na identidade visual atual (taupe #7A7168, Playfair + Inter, estética editorial).

## Mudanças propostas

### 1. Dois CTAs no Hero (mobile + desktop)
Adicionar abaixo do subtítulo "Dermatologia que Transforma Carreiras e Pessoas" dois botões lado a lado:

- **Seja Paciente Modelo** → rola até nova seção "Paciente Modelo" (ou abre o menu de procedimentos)
- **Quero ser Aluno** → rola até a seção de Cursos

No mobile os botões ficam empilhados (full-width), bem acima da dobra, antes dos stats. No desktop ficam lado a lado, mantendo o ar editorial (botão primário taupe + secundário outline).

### 2. Barra fixa inferior (sticky CTA) — só mobile
Barra fina fixa no rodapé do mobile com dois links curtos: **"Paciente Modelo"** | **"Cursos"**. Aparece após rolar o hero, some perto do footer. Resolve o caso de quem rolou e quer agir sem voltar ao topo.

### 3. Nova seção "Dois caminhos" logo após o Hero
Bloco editorial dividido em 2 cards grandes:

```text
┌──────────────────────┬──────────────────────┐
│  PACIENTE MODELO     │   ALUNO              │
│  Procedimentos com   │   Fellows, Workshops │
│  desconto, conduzidos│   e Mentorias        │
│  por especialistas   │   com a Derma Concept│
│  [Ver procedimentos] │   [Ver cursos]       │
└──────────────────────┴──────────────────────┘
```

Cada card leva para a respectiva seção/lista. No mobile vira stack vertical. Esse bloco "intercepta" o visitante antes do AboutSection atual e deixa explícito que existem dois públicos.

### 4. Reordenação leve da home
Ordem nova proposta:

1. Hero (com 2 CTAs)
2. **Dois Caminhos** (novo)
3. AboutSection
4. CoursesSection (com âncora `#alunos`)
5. **PacienteModeloSection** (novo bloco resumo + grid dos procedimentos com link para cada página) — hoje só existe no menu
6. MentoriaSection
7. HowItWorks
8. Testimonials
9. Contato
10. Footer

Hoje não existe nenhuma seção de Paciente Modelo na home — só no menu. Esse é o gap principal.

### 5. Ajustes de menu (opcional, leve)
Manter o menu como está, mas garantir que os textos dos CTAs do hero e da seção nova usem os mesmos rótulos do menu (consistência).

## Detalhes técnicos

- Arquivos novos:
  - `src/components/DoisCaminhosSection.tsx` (cards aluno/paciente)
  - `src/components/PacienteModeloSection.tsx` (resumo + grid linkando para `/paciente-modelo/*`)
  - `src/components/MobileStickyCTA.tsx` (barra inferior, `lg:hidden`, aparece com `IntersectionObserver` após o hero)
- Editar `src/components/HeroSection.tsx`: adicionar bloco de 2 botões entre subtítulo e stats, com `fadeUp` já existente.
- Editar `src/pages/Index.tsx`: incluir as novas seções e o sticky CTA na ordem acima.
- Reusar tokens existentes (taupe, Playfair). Sem cores hardcoded.
- Âncoras: `#paciente-modelo` e `#alunos` (ou `#cursos` que já existe).

## Fora do escopo

- Não mexer no conteúdo das páginas internas de procedimentos.
- Não alterar copy do hero (headline e subtítulo permanecem).
- Não criar landing pages separadas — tudo continua na home.
