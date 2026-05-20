## Navegação entre médicos no modal

Adicionar navegação entre médicos quando o modal de currículo estiver aberto, em `src/components/quem-somos/EquipeSection.tsx`.

### Comportamento

- **Setas laterais** (esquerda/direita) sobrepostas ao modal, com ícones `ChevronLeft`/`ChevronRight` do lucide-react, em estilo discreto (botão circular taupe `#7A7168` com hover).
- **Teclado**: setas `←` e `→` navegam; `Esc` continua fechando (já é nativo do Dialog).
- **Touch/swipe**: gesto horizontal no conteúdo do modal alterna para o médico anterior/próximo.
- **Loop**: ao chegar no último, volta para o primeiro (e vice-versa).
- O carrossel de fundo do Embla continua pausado enquanto o modal está aberto (o autoplay já para com `stopOnInteraction: false` + foco do dialog; vou parar explicitamente o autoplay enquanto o modal estiver aberto para evitar conflito).

### Implementação técnica

1. Trocar o state `activeMember: TeamMember | null` por `activeIndex: number | null`.
2. Derivar `activeMember = activeIndex !== null ? teamMembers[activeIndex] : null`.
3. Funções `goPrev()` / `goNext()` com lógica de loop modular.
4. `useEffect` ao abrir o modal: adicionar listener `keydown` para `ArrowLeft`/`ArrowRight`.
5. Swipe via handlers `onTouchStart` / `onTouchEnd` no container do conteúdo (threshold ~50px).
6. Dois botões absolutos posicionados em `left-2` / `right-2` dentro do `DialogContent`, com `aria-label` ("Médico anterior" / "Próximo médico"), visíveis em mobile e desktop.
7. Adicionar uma transição suave (fade curto) ao trocar de médico, usando uma `key={activeIndex}` em um wrapper com `motion.div`.

Sem mudanças em outros arquivos.
