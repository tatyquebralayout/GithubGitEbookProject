# Estrutura de Componentes

O GitSheet organiza seus componentes React de forma hierárquica e modular, visando a reutilização, manutenibilidade e clareza. A abordagem principal combina princípios do Design Atômico com a praticidade de componentes de UI pré-construídos (como os inspirados por `shadcn/ui`) e uma clara separação por features.

## Diretório Principal de Componentes (`src/components`)

Localizado em `src/components/`, este diretório contém componentes React reutilizáveis que não são específicos de uma única feature e podem ser usados em várias partes da aplicação.

### Subpastas em `src/components/`:

*   **`atoms/`**: Contém os menores blocos de construção da UI, seguindo o conceito de "átomos" do Design Atômico.
    *   **Exemplos:** `LoadingFallback.tsx`, `Button.tsx` (embora o `Button.tsx` principal resida em `ui/`, um átomo de botão mais simples poderia estar aqui se não fosse de `shadcn/ui`).
    *   São componentes geralmente indivisíveis e altamente reutilizáveis.

*   **`molecules/`**: Combinações de átomos que funcionam juntos como uma unidade.
    *   **Exemplos:** `SocialLinks.tsx` (agrupa vários ícones/links de redes sociais), um campo de busca com um input (átomo) e um botão (átomo).
    *   Representam unidades funcionais um pouco mais complexas.

*   **`organisms/`**: Seções mais complexas da UI, compostas por átomos, moléculas e, às vezes, outros organismos.
    *   **Exemplos:** `AuthorProfileCard.tsx`, `MermaidGitGraph.tsx`, `FAQSection.tsx` (se fosse genérico).
    *   Formam partes distintas de uma interface.

*   **`layout/`**: Componentes responsáveis pela estrutura e layout geral das páginas.
    *   **Exemplos:** `AppLayout.tsx` (estrutura principal da aplicação), `Navbar.tsx`, `Footer.tsx`.
    *   Definem onde o conteúdo das páginas e outros componentes serão renderizados.

*   **`ui/`**: Esta pasta desempenha um papel especial, abrigando componentes de UI genéricos que são frequentemente inspirados ou diretamente adaptados de bibliotecas como `shadcn/ui`. Eles são blocos de construção visuais consistentes e estilizados com Tailwind CSS.
    *   **Exemplos:** `Button.tsx`, `Card.tsx`, `Dialog.tsx`, `Input.tsx`, `Label.tsx`, `Select.tsx`, `Sheet.tsx`, `Tabs.tsx`, `Textarea.tsx`, `Tooltip.tsx`.
    *   Muitos desses componentes utilizam a função `cn` (de `clsx` e `tailwind-merge`) para aplicar classes condicionalmente e mesclar classes do Tailwind de forma inteligente.
    *   Eles frequentemente utilizam variáveis CSS (definidas em `tokens.css` ou similar) para theming, permitindo fácil customização visual (ex: modo claro/escuro, cores primárias).

*   **`common/`**: Destinado a componentes comuns que não se encaixam perfeitamente nas outras categorias mais estruturadas (atualmente parece conter `MermaidDiagram.tsx`, que poderia também ser um organismo dependendo do uso).

*   **`icons/`**: Contém ícones SVG importados como componentes React (usando `vite-plugin-svgr`) ou componentes React que renderizam SVGs.
    *   **Exemplos:** `GitOfficialLogo.tsx`, `TailwindCssLogo.tsx`.

*   **`index.ts`**: Um arquivo de barril que reexporta os componentes mais importantes de `src/components/`, facilitando sua importação em outras partes da aplicação.
    *   Exemplo: `export * from './ui/Button';`

## Componentes Específicos de Features (`src/features/<nome-da-feature>/components/`)

Cada feature dentro de `src/features/` (ex: `landing/`, `gitCommands/`, `game/`) possui sua própria subpasta `components/`.

*   Estes componentes são **específicos para a lógica e a apresentação daquela feature em particular**.
*   Eles podem ser compostos por componentes genéricos de `src/components/` (átomos, moléculas, UI) ou serem totalmente customizados para a feature.
*   **Exemplos:**
    *   `src/features/landing/components/HeroSection.tsx`
    *   `src/features/gitCommands/components/basic/BasicCommands.tsx`
    *   `src/features/game/components/GameStats.tsx`

Esta abordagem promove o encapsulamento: a lógica e a apresentação de uma feature ficam contidas dentro de seu próprio módulo, tornando o sistema mais fácil de entender e modificar.

## `shadcn/ui` e Componentes de UI

O projeto adota uma abordagem similar à `shadcn/ui` para seus componentes em `src/components/ui/`. Isso significa:

1.  **Não é uma biblioteca de componentes tradicional:** Você não instala `shadcn/ui` como uma dependência direta. Em vez disso, os componentes são copiados (ou inspirados) para dentro do seu projeto.
2.  **Propriedade do Código:** Os componentes (`Button.tsx`, `Card.tsx`, etc.) existem diretamente no seu codebase, permitindo total customização e controle.
3.  **Estilização com Tailwind CSS:** Os componentes são estilizados primariamente com Tailwind CSS.
4.  **Acessibilidade:** Geralmente construídos sobre primitivas de UI acessíveis (como as do Radix UI).
5.  **Composição:** Focados em serem blocos de construção que você pode compor para criar interfaces complexas.

## Fluxo e Composição

*   **Páginas (`src/pages/` ou arquivos de página dentro de features):** Orquestram e montam as features e componentes para formar uma visão completa.
*   **Layout (`src/components/layout/AppLayout.tsx`):** Define a estrutura global onde as páginas são renderizadas (geralmente via `<Outlet />` do React Router).
*   **Features (`src/features/`):** Contêm a lógica de negócio e os componentes específicos para uma determinada funcionalidade. Usam componentes de `src/components/ui/` e `src/components/atoms/` etc., para construir sua UI.
*   **Componentes de UI (`src/components/ui/`):** Fornecem os blocos de construção visuais básicos e consistentes.

A estrutura visa um equilíbrio entre reutilização (componentes genéricos) e especificidade (componentes de feature), facilitando o desenvolvimento e a manutenção da interface do usuário. 