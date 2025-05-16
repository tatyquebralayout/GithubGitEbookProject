# Lista de Tarefas para Melhorias do Projeto

## 1. Estrutura de Pastas e Organização
- [X] **Atomic Design**: Reestruturar a pasta `components/` em subpastas como `atoms/`, `molecules/`, e `organisms/`.
  - [X] Criar `src/components/atoms/`
  - [X] Criar `src/components/molecules/`
  - [X] Criar `src/components/organisms/`
  - [X] Mover componentes existentes (`AuthorProfileCard.tsx`, `LoadingFallback.tsx`, `AuthorProfile.tsx`, `AuthorProfiles.tsx`, `MermaidGitGraph.tsx` de `common/`) para as subpastas apropriadas.
- [X] **Padronização de Features**: Certificar-se de que cada feature em `features/` tenha uma estrutura consistente.
  - [X] Feature `author`:
    - [X] Criar `components/`, `hooks/`, `utils/`, `constants.ts`, `README.md`
  - [X] Feature `demo`:
    - [X] Criar `components/`, `hooks/`, `utils/`, `constants.ts`, `README.md`
  - [X] Feature `ebook`:
    - [X] Criar `components/`, `hooks/`, `utils/`, `constants.ts`, `README.md`
  - [X] Feature `faq`:
    - [X] Criar `components/`, `hooks/`, `utils/`, `constants.ts`, `README.md`
  - [X] Feature `game`:
    - [X] Criar `hooks/`, `utils/`, `constants.ts`, `README.md`
  - [X] Feature `gitCommands`:
    - [X] Criar `utils/`, `constants.ts`, `README.md`
  - [X] Feature `landing`:
    - [X] Criar `hooks/`, `utils/`, `constants.ts`, `README.md`
  - [X] Implementar um padrão de `index.ts` em cada feature para exportações centralizadas.

## 2. Separação de UI e Lógica de Negócios
- [ ] **Container/Presentational Pattern**: Aplicar o padrão mais consistentemente em todo o projeto. (Analisar componentes em `features` e `organisms` para identificar candidatos. Aplicar conforme necessário durante desenvolvimento e refatoração.)

## 3. Melhorias no `AuthorProfileCard.tsx` (`src/components/organisms/AuthorProfileCard.tsx`)
- [X] Extrair a lógica de renderização de links sociais para um componente `SocialLinks` (`src/components/molecules/SocialLinks.tsx`).
- [X] Utilizar um mapa de ícones para reduzir a repetição de código no componente `SocialLinks`.

## 4. Estilos e Design Tokens
- [X] Implementar um sistema de design tokens para cores, espaçamentos, etc. (`src/styles/tokens.ts` criado)
- [X] Utilizar CSS Modules ou Styled Components para estilos com escopo local **apenas se necessário**. O padrão do projeto é Tailwind CSS, que já provê escopo local e atomicidade. CSS Modules podem ser usados pontualmente caso surja uma limitação real do Tailwind (ex: animações complexas, pseudo-elementos avançados, etc.).

## 5. Testes e Acessibilidade
- [X] Implementar testes unitários para componentes e hooks críticos. (Ex: `LoadingFallback.test.tsx` criado e passando)
- [ ] Adicionar testes de integração para fluxos importantes do usuário.
- [In Progress] Realizar uma auditoria de acessibilidade e implementar melhorias (ARIA labels, contraste de cores, navegação por teclado). (Ex: `aria-pressed` adicionado ao `AuthorProfileCard`, `role` e `aria-label` ao `LoadingFallback`)

## 6. Internacionalização e Performance
- [X] Implementar i18n para suportar múltiplos idiomas (`src/i18n/index.ts` criado), especialmente para strings visíveis ao usuário.
- [X] Implementar Code Splitting para carregar componentes sob demanda. (Já implementado com `React.lazy` no router e `Suspense` no `main.tsx`)
- [In Progress] Otimizar imagens e assets para carregamento mais rápido. (Usar `loading="lazy"`, formatos modernos como WebP. Plugin `vite-plugin-imagemin` instalado e configurado em `vite.config.ts` para otimizar e gerar WebP).

## 7. Documentação e Estado Global
- [In Progress] Melhorar a documentação in-code com JSDoc. (Ex: `SocialLinks.tsx` documentado, `src/lib/utils/index.ts` documentado, `src/lib/mermaid/**` documentado)
- [X] Melhorar os `README.md` de cada feature explicando sua função e como ela se integra ao resto da aplicação (placeholders criados).
- [X] Avaliar o uso de Zustand e considerar implementar um padrão de gerenciamento de estado mais robusto para partes complexas da aplicação (`src/store/index.ts` criado).

## 8. Lib
- [In Progress] Adicionar documentação clara para cada utilitário/biblioteca personalizada em `src/lib/`.
  - [X] `src/lib/utils/index.ts` (já estava documentado)
  - [X] `src/lib/mermaid/**` (documentação JSDoc adicionada/melhorada para todos os componentes e `index.ts`)

## 9. Pages
- [X] Garantir que cada página seja leve, delegando lógica complexa para os componentes em `features/`.

## 10. Router
- [X] Implementar lazy loading para rotas menos frequentes (`src/router/index.tsx`) para melhorar o desempenho inicial. (Já implementado)

## 11. Types
- [X] Organizar tipos por domínio em `src/types/`, similar à estrutura de `features/`.
- [X] Aumentar o uso de tipos mais estritos (ex: 'const assertions', 'literal types') para maior segurança.

## 12. Componentes Genéricos
- [X] Criar um componente `GitChallenge` base que possa ser extendido para diferentes tipos de desafios.

## 13. Modularização
- [X] Dividir `GitCommandsVisualizer.tsx` (se existir, ou componente similar) em subcomponentes como `DiagramControls`, `VisualizationArea`, etc.

## 14. Configurações
- [X] Implementar um sistema de configuração global usando Context API (`src/context/index.ts` criado) (se aplicável, após avaliação do Zustand). 