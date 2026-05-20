## Mudanças no Menu (Header)

1. **Remover o submenu "Página Inicial"** do menu desktop e mobile.
   - O logo no canto superior esquerdo continua levando para a Home (já é assim).
   - Remover a função `PaginaInicialContent` e a entrada "Página Inicial" do array `TABS` em `src/components/Header.tsx`.
   - Remover a seção "Página Inicial" de `mobileMenuSections`.

2. **Adicionar "Quem Somos"** como link estático no menu.
   - Desktop: adicionar um `<Link to="/quem-somos">Quem Somos</Link>` no `DesktopNav`, antes do botão "Contato", com o mesmo estilo dos outros itens (sem dropdown, sem chevron).
   - Mobile: adicionar um link "Quem Somos" antes do CTA "Contato".

3. **Versão Clássica (`/v2`)**: como o submenu Página Inicial era o único acesso a essa rota, ela ficará sem link no menu. A rota continua existindo, apenas não fica visível.

## Atualizar credenciais dos médicos (Quem Somos)

Em `src/components/quem-somos/EquipeSection.tsx`, atualizar o campo `credentials`:

- **Dra. Ana Vitória**: `CRM-MG 64836 · RQE 44348`
- **Dra. Erika Freira**: `CRM-MG 63788 · RQE 42041`
- **Dr. Leonardo Almeida**: `CRM-MG 69784 · RQE 49951` (adicionar campo `credentials`, que hoje não existe nesse cadastro)

Os demais médicos permanecem inalterados.
