# Visão Geral da Estrutura de Pastas

O projeto GitSheet adota uma estrutura de pastas organizada para promover modularidade, escalabilidade e facilidade de navegação. A estrutura principal é baseada em features, com componentes e lógica relacionados agrupados.

```
projeto_git/
├── .vscode/ # Configurações do VS Code
├── introduction/ # Documentação: Introdução ao projeto
│ ├── overview.md
│ ├── purpose.md
│ └── stack.md
├── setup/ # Documentação: Configuração do ambiente
│ ├── README.md
│ ├── installation.md
│ ├── prerequisites.md
│ ├── running.md
│ └── scripts.md
├── architecture/ # Documentação: Arquitetura do projeto
│ ├── README.md
│ ├── folder-structure.md
│ ├── project-config/
│ │ ├── README.md
│ │ ├── vite.md
│ │ ├── typescript.md
│ │ ├── tailwind.md
│ │ ├── eslint.md
│ │ ├── prettier.md
│ │ └── stylelint.md
│ ├── frontend/
│ │ ├── README.md
│ │ ├── component-structure.md
│ │ ├── routing.md
│ │ ├── state-management.md
│ │ ├── features.md
│ │ └── styling.md
│ └── testing.md
├── features-docs/ # Documentação: Detalhes das Features
│ ├── README.md
│ ├── landing.md
│ ├── git-commands.md
│ ├── game.md
│ ├── author.md
│ ├── faq.md
│ ├── ebook.md
│ └── demo.md
├── public/ # Arquivos estáticos servidos diretamente
│ └── vite.svg
├── src/ # Código fonte da aplicação
│ ├── assets/ # Imagens, fontes, etc.
│ ├── components/ # Componentes React reutilizáveis (Pattern Atômico)
│ │ ├── atoms/ # Componentes atômicos (ex: Button, Input)
│ │ ├── molecules/ # Grupos de átomos (ex: SearchForm)
│ │ ├── organisms/ # Seções maiores da UI (ex: Header, Sidebar)
│ │ ├── layout/ # Componentes de estrutura da página (AppLayout, Navbar, Footer)
│ │ ├── ui/ # Componentes de UI genéricos, wrappers de bibliotecas (ex: shadcn/ui)
│ │ ├── common/ # Componentes comuns que não se encaixam em outras categorias
│ │ ├── data/ # Componentes relacionados a exibição de dados (vazio atualmente)
│ │ ├── icons/ # Ícones SVG como componentes React
│ │ └── index.ts # Reexporta componentes importantes
│ ├── context/ # React Context API (atualmente com exemplo)
│ │ └── index.ts
│ ├── features/ # Módulos de features da aplicação
│ │ ├── author/ # Feature: Informações sobre o autor
│ │ │ ├── components/
│ │ │ ├── hooks/
│ │ │ ├── utils/
│ │ │ ├── AboutAuthorPage.tsx
│ │ │ └── GuestAuthorPage.tsx
│ │ ├── demo/ # Feature: Demonstrações (ex: UI, Mermaid)
│ │ │ ├── components/
│ │ │ ├── hooks/
│ │ │ └── utils/
│ │ ├── ebook/ # Feature: Ebook (placeholder)
│ │ ├── faq/ # Feature: Perguntas Frequentes
│ │ │ ├── components/
│ │ │ ├── data/
│ │ │ ├── hooks/
│ │ │ ├── types/
│ │ │ └── utils/
│ │ ├── game/ # Feature: Git Challenge/Game
│ │ │ ├── components/
│ │ │ ├── data/
│ │ │ ├── hooks/
│ │ │ ├── utils/
│ │ │ └── GamePage.tsx
│ │ ├── gitCommands/ # Feature: Listagem de Comandos Git
│ │ │ ├── components/
│ │ │ │ ├── advanced/
│ │ │ │ ├── basic/
│ │ │ │ ├── github/
│ │ │ │ └── practiceChallenge/
│ │ │ ├── data/
│ │ │ ├── hooks/
│ │ │ ├── types/
│ │ │ ├── utils/
│ │ │ ├── GitAdvancedCommandsPage.tsx
│ │ │ ├── GitBasicCommandsPage.tsx
│ │ │ ├── GitHubCommandsPage.tsx
│ │ │ ├── GitIntermediateCommandsPage.tsx
│ │ │ └── GitPracticeChallengePage.tsx
│ │ └── landing/ # Feature: Landing Page
│ │   ├── components/
│ │   ├── hooks/
│ │   ├── utils/
│ │   └── LandingPage.tsx
│ ├── i18n/ # Configuração de internacionalização (ex: i18next)
│ │ └── index.ts
│ ├── lib/ # Bibliotecas e utilitários core
│ │ ├── mermaid/ # Componentes e lógica para Mermaid.js
│ │ │ ├── MermaidBase.tsx
│ │ │ └── index.ts
│ │ └── utils/ # Funções utilitárias genéricas (ex: cn, formatDate)
│ │   └── index.ts
│ ├── pages/ # Componentes de página (containers de features ou páginas simples)
│ │ ├── MermaidDemo.tsx
│ │ └── UIDemo.tsx
│ ├── router/ # Configuração de roteamento (React Router)
│ │ └── index.tsx
│ ├── shared/ # Código compartilhado entre features (evitar se possível, preferir lib)
│ │ └── components/
│ ├── store/ # Gerenciamento de estado global (Zustand, atualmente com exemplo)
│ │ └── index.ts
│ ├── styles/ # Arquivos CSS globais, variáveis, utilitários de estilo
│ │ ├── index.css # Ponto de entrada principal para CSS
│ │ ├── tokens.css # Variáveis CSS (cores, espaçamentos, etc.)
│ │ └── utilities.css # Classes utilitárias CSS
│ ├── test/ # Configurações e utilitários de teste
│ │ └── setup.ts
│ ├── types/ # Definições de tipos TypeScript globais ou compartilhados
│ │ ├── author/
│ │ ├── ui/
│ │ └── vite-env.d.ts
│ ├── App.tsx # Componente raiz da aplicação React
│ └── main.tsx # Ponto de entrada da aplicação, renderiza o App
├── .eslintrc.json # Configuração do ESLint (legado, preferir eslint.config.js)
├── .gitignore # Arquivos e pastas ignorados pelo Git
├── .prettierrc # Configuração do Prettier
├── .stylelintrc.json # Configuração do Stylelint
├── eslint-js.d.ts # Definições de tipo para config ESLint em JS
├── eslint.config.js # Configuração principal do ESLint (novo formato "flat config")
├── index.html # Ponto de entrada HTML para o Vite
├── package-lock.json # Lockfile de dependências npm
├── package.json # Metadados do projeto, dependências e scripts
├── postcss.config.js # Configuração do PostCSS (usado pelo Tailwind)
├── README.md # README principal do projeto (este documento)
├── SUMMARY.md # Estrutura de navegação para o GitBook
├── tailwind.config.js # Configuração do Tailwind CSS
├── tsconfig.app.json # Configuração TypeScript para o código da aplicação
├── tsconfig.json # Configuração TypeScript base
├── tsconfig.node.json # Configuração TypeScript para código Node.js (ex: vite.config.ts)
└── vite.config.ts # Configuração do Vite
```

## Principais Diretórios de Código (`src`)

*   **`src/assets`**: Contém ativos estáticos como imagens, fontes e outros arquivos que são importados diretamente no código.
*   **`src/components`**: Abriga componentes React reutilizáveis, seguindo uma abordagem de design atômico (ou similar) para organizar os componentes por sua complexidade e função:
    *   `atoms`: Os menores blocos de construção (botões, inputs, labels).
    *   `molecules`: Combinações de átomos para formar componentes mais complexos (um formulário de busca com input e botão).
    *   `organisms`: Seções maiores da UI, compostas por moléculas e/ou átomos (cabeçalho da página, um card de produto completo).
    *   `layout`: Componentes responsáveis pela estrutura geral das páginas (ex: `AppLayout`, `Navbar`, `Footer`).
    *   `ui`: Componentes de UI genéricos, muitas vezes wrappers ou estilizações de bibliotecas como `shadcn/ui`, `Radix UI`, etc. Destinados a serem blocos de construção visuais consistentes.
    *   `common`: Componentes de propósito geral que não se encaixam estritamente nas categorias atômicas, mas são reutilizados em várias partes da aplicação.
    *   `icons`: Componentes SVG de ícones para fácil utilização e customização.
*   **`src/context`**: Para o uso da Context API do React. Atualmente, contém um exemplo.
*   **`src/features`**: Esta é uma pasta crucial que organiza o código por funcionalidade de negócio (feature). Cada subdiretório dentro de `features` representa uma funcionalidade específica da aplicação (ex: `landing`, `gitCommands`, `game`).
    *   Dentro de cada feature, é comum encontrar subpastas como `components` (componentes específicos da feature), `hooks` (hooks React específicos da feature), `utils` (utilitários da feature), `data` (dados estáticos ou mocks da feature), e os arquivos `.tsx` das páginas ou componentes principais da feature.
*   **`src/i18n`**: Configurações para internacionalização e localização da aplicação.
*   **`src/lib`**: Utilitários e bibliotecas core da aplicação que não são específicos de nenhuma feature e podem ser usados globalmente. Ex: `cn` para classes condicionais, `MermaidBase` para renderização de diagramas.
*   **`src/pages`**: Componentes que representam páginas inteiras da aplicação. Geralmente, eles importam e orquestram componentes de `features` ou `components`.
*   **`src/router`**: Contém a configuração de roteamento da aplicação, utilizando React Router DOM.
*   **`src/store`**: Para gerenciamento de estado global com Zustand. Atualmente, contém um exemplo.
*   **`src/styles`**: Arquivos CSS globais, incluindo a configuração do Tailwind CSS, variáveis de design (tokens) e classes utilitárias.
*   **`src/test`**: Configuração para testes (ex: `setup.ts` para Vitest/Jest).
*   **`src/types`**: Definições de tipos TypeScript globais ou compartilhados por múltiplas partes da aplicação.
*   **`src/App.tsx`**: O componente React raiz da aplicação, onde o layout principal e o provedor de rotas são geralmente configurados.
*   **`src/main.tsx`**: O ponto de entrada JavaScript/TypeScript da aplicação. É responsável por renderizar o componente `App` no DOM.

## Arquivos de Configuração na Raiz

A raiz do projeto contém diversos arquivos de configuração para ferramentas de desenvolvimento, build, linting, formatação e o próprio Node.js/TypeScript:

*   `.eslintrc.json` / `eslint.config.js`: Configurações do ESLint para análise estática de código e aplicação de regras de estilo.
*   `.prettierrc`: Configurações do Prettier para formatação automática de código.
*   `.stylelintrc.json`: Configurações do Stylelint para linting de CSS.
*   `package.json`: Define os metadados do projeto, scripts, dependências de produção e desenvolvimento.
*   `postcss.config.js`: Configuração do PostCSS, utilizado principalmente para o Tailwind CSS.
*   `tailwind.config.js`: Configuração do Tailwind CSS, onde se definem temas, plugins e o conteúdo a ser processado.
*   `tsconfig.json` (e variantes como `tsconfig.app.json`, `tsconfig.node.json`): Configurações do compilador TypeScript.
*   `vite.config.ts`: Configuração do Vite, a ferramenta de build e servidor de desenvolvimento.

Esta estrutura visa manter o código organizado, facilitar a localização de arquivos e promover boas práticas de desenvolvimento. 