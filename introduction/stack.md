# Tecnologias Utilizadas (Stack Principal)

O projeto GitSheet é construído utilizando um stack moderno de tecnologias JavaScript/TypeScript, escolhidas para fornecer uma base robusta, eficiente e agradável para o desenvolvimento.

## Frontend

*   **Framework Principal:** [React](https://react.dev/) (v18+)
    *   Uma biblioteca JavaScript declarativa, eficiente e flexível para construir interfaces de usuário.
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
    *   Um superset tipado do JavaScript que adiciona tipos estáticos opcionais, melhorando a manutenibilidade e a detecção de erros em tempo de desenvolvimento.
*   **Build Tool e Servidor de Desenvolvimento:** [Vite](https://vitejs.dev/)
    *   Uma ferramenta de build extremamente rápida que oferece Hot Module Replacement (HMR) instantâneo e otimizações de build eficientes.
*   **Roteamento:** [React Router DOM](https://reactrouter.com/) (v6+)
    *   Para navegação e gerenciamento de rotas na Single Page Application (SPA).
*   **Gerenciamento de Estado:**
    *   [Zustand](https://zustand-demo.pmnd.rs/): (Incluído como dependência) Um gerenciador de estado pequeno, rápido e escalável usando hooks simplificados. *Atualmente, a implementação de um store global está pendente.*
    *   Estado Local do React (useState, useReducer) e Context API: Para gerenciamento de estado em escopo de componente ou features específicas.
*   **Formulários e Validação:**
    *   [React Hook Form](https://react-hook-form.com/): Para gerenciamento de formulários performático e flexível.
    *   [Zod](https://zod.dev/): Para validação de esquemas de dados, usado em conjunto com React Hook Form.
*   **Estilização:**
    *   [Tailwind CSS](https://tailwindcss.com/): Um framework CSS utility-first para construir rapidamente interfaces customizadas.
    *   [PostCSS](https://postcss.org/): Ferramenta para transformar CSS com plugins JavaScript (usado com Tailwind e Autoprefixer).
    *   [Autoprefixer](https://github.com/postcss/autoprefixer): Adiciona prefixos de fornecedores ao CSS.
*   **Componentes de UI Primitivos e Ícones:**
    *   [Radix UI](https://www.radix-ui.com/): Fornece primitivos de UI acessíveis e não estilizados (usado como base para componentes em `src/components/ui/`, seguindo uma abordagem similar a `shadcn/ui`).
    *   [Lucide React](https://lucide.dev/): Biblioteca de ícones SVG.
    *   [@primer/octicons-react](https://primer.style/octicons/): Ícones Octicons do GitHub.
*   **Animações:**
    *   [Framer Motion](https://www.framer.com/motion/): Biblioteca de animação para React.
*   **Diagramas (Client-side):**
    *   [Mermaid.js](https://mermaid.js.org/): Para gerar diagramas (como fluxogramas, grafos Git) a partir de texto, usado nos componentes `MermaidBase.tsx` e `MermaidGitGraph.tsx`.
*   **Carrosséis/Sliders:**
    *   [Swiper](https://swiperjs.com/): Biblioteca para sliders e carrosséis (usada na apresentação de flashcards).

## Desenvolvimento e Qualidade de Código

*   **Linting de Código JavaScript/TypeScript:** [ESLint](https://eslint.org/)
    *   Configurado com plugins para TypeScript (`@typescript-eslint/eslint-plugin`), React (`eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`), Prettier (`eslint-plugin-prettier`), e para imports não utilizados (`eslint-plugin-unused-imports`).
    *   Utiliza o formato de configuração "flat config" (`eslint.config.js`).
*   **Formatação de Código:** [Prettier](https://prettier.io/)
    *   Formatador de código opinativo, integrado com ESLint e com plugin para Tailwind CSS (`prettier-plugin-tailwindcss`).
*   **Linting de CSS:** [Stylelint](https://stylelint.io/)
    *   Para garantir a qualidade e consistência dos estilos CSS, configurado com `stylelint-config-standard` e integrações com Prettier e Tailwind CSS.
*   **Testes:** [Vitest](https://vitest.dev/)
    *   Framework de teste unitário rápido, compatível com a API do Jest, integrado ao ambiente Vite.
    *   [Testing Library](https://testing-library.com/): (`@testing-library/react`, `@testing-library/jest-dom`) Para escrever testes que interagem com os componentes da forma como um usuário faria.

## Ambiente Node.js (Tooling)

*   As configurações de build (Vite), linting (ESLint), etc., são escritas e executadas em ambiente Node.js, utilizando TypeScript ou JavaScript moderno. 