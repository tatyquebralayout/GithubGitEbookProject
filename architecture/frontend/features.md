# Estrutura de Features (`src/features`)

A organização do código em "features" é uma abordagem chave na arquitetura do GitSheet para manter o projeto modular, escalável e fácil de entender. A pasta `src/features/` agrupa todo o código relacionado a uma funcionalidade de negócio específica.

## Conceito de Feature

Uma "feature" representa uma seção ou capacidade distinta da aplicação. Exemplos no GitSheet incluem:

*   `landing/`: A página inicial da aplicação.
*   `gitCommands/`: Funcionalidades relacionadas à exibição e interação com comandos Git (básicos, intermediários, avançados, GitHub, desafios).
*   `game/`: A seção de "Git Challenge" ou aprendizado prático.
*   `author/`: Páginas e componentes sobre a autora ou autores convidados.
*   `faq/`: Seção de Perguntas Frequentes.
*   `ebook/`: (Placeholder) Funcionalidade de Ebook.
*   `demo/`: (Placeholder ou usado para demonstrações internas como UI e Mermaid, embora estas também tenham páginas em `src/pages/`).

## Estrutura Interna de uma Feature

Cada subdiretório dentro de `src/features/` geralmente segue uma estrutura interna semelhante (embora possa variar ligeiramente dependendo da complexidade da feature):

```
src/features/<nome-da-feature>/
├── components/ # Componentes React específicos para esta feature
│   ├── ComponenteEspecificoA.tsx
│   └── ComponenteEspecificoB.tsx
├── hooks/ # Hooks React customizados para a lógica desta feature
│   └── useFeatureLogic.ts
├── utils/ # Funções utilitárias específicas para esta feature
│   └── featureHelpers.ts
├── data/ # Dados estáticos, mocks ou tipos de dados específicos da feature
│   └── featureData.ts
├── types/ # Definições de tipo TypeScript específicas para esta feature (se não globais)
│   └── featureTypes.ts
├── README.md # Documentação específica da feature (opcional, mas recomendado)
├── FeaturePage.tsx # Componente principal da página da feature (se aplicável)
└── index.ts # (Opcional) Arquivo de barril para exportar elementos da feature
```

**Detalhes das Subpastas Comuns:**

*   **`components/`**: Contém componentes React que são usados exclusivamente dentro desta feature. Eles podem ser compostos por componentes genéricos de `src/components/` (átomos, moléculas, UI) ou serem completamente customizados.
    *   **Exemplo:** `src/features/landing/components/HeroSection.tsx` é um componente usado apenas na landing page.
    *   Dentro de `components/` pode haver mais subpastas se a feature for complexa, como visto em `src/features/gitCommands/components/basic/`.

*   **`hooks/`**: Abriga hooks React customizados que encapsulam lógica de estado, efeitos colaterais ou outra lógica reutilizável específica da feature.
    *   **Exemplo:** `src/features/author/hooks/useAuthorDialog.ts` gerencia a lógica do diálogo do autor.

*   **`utils/`**: Funções utilitárias que são específicas para a feature e não se encaixam como hooks ou componentes.

*   **`data/`**: Para dados estáticos, constantes, mocks, ou mesmo a estrutura de dados (interfaces/tipos se não estiverem em `types/`) que a feature utiliza.
    *   **Exemplo:** `src/features/game/data/commandsData.ts` contém os dados para o jogo/desafio.
    *   `src/features/gitCommands/data/basicCommands.ts` (e similares para outros níveis) contém os dados dos comandos Git.

*   **`types/`**: Definições de tipo TypeScript que são relevantes apenas para esta feature. Se um tipo é usado em múltiplas features ou globalmente, ele deve residir em `src/types/`.

*   **Arquivos de Página (`FeaturePage.tsx`, `<NomeDaFeature>Page.tsx`)**: São os componentes de nível superior da feature, geralmente mapeados para rotas no `src/router/index.tsx`. Eles orquestram os componentes, hooks e dados da feature.
    *   **Exemplo:** `src/features/landing/LandingPage.tsx`, `src/features/gitCommands/GitBasicCommandsPage.tsx`.

*   **`README.md`**: Um arquivo Markdown (opcional, mas uma boa prática) que descreve a feature, seu propósito, como funciona, e quaisquer detalhes importantes para desenvolvedores que trabalham nela.
    *   No projeto, alguns `README.md` de features são placeholders (ex: `# Feature: Landing`). Idealmente, seriam mais detalhados.

## Vantagens da Arquitetura Baseada em Features

1.  **Modularidade:** O código é bem encapsulado. Alterações em uma feature têm menos probabilidade de afetar outras features inesperadamente.
2.  **Escalabilidade:** É mais fácil adicionar novas features ou expandir as existentes sem aumentar a complexidade do codebase de forma desordenada.
3.  **Navegação e Compreensão:** Torna mais fácil para os desenvolvedores encontrarem o código relevante para uma funcionalidade específica.
4.  **Trabalho em Equipe:** Diferentes desenvolvedores ou equipes podem trabalhar em features distintas com menos conflitos.
5.  **Reutilização Seletiva:** Embora o foco seja no encapsulamento, componentes ou hooks bem definidos dentro de uma feature podem, se necessário e com cuidado, ser movidos para `src/components/` ou `src/lib/` se sua utilidade se provar mais genérica.

## Relação com Componentes Globais e `src/pages`

*   **Componentes Globais (`src/components/`)**: As features consomem componentes de UI, átomos, moléculas, etc., da pasta global `src/components/` para construir suas interfaces.
*   **Páginas (`src/pages/`)**: O diretório `src/pages/` parece ser usado para páginas que não se encaixam estritamente em uma "feature" de negócio principal, ou para páginas de demonstração (ex: `UIDemo.tsx`, `MermaidDemo.tsx`). No entanto, a maioria das visualizações principais da aplicação são implementadas como arquivos de página dentro de suas respectivas pastas de feature (ex: `LandingPage.tsx` dentro de `src/features/landing/`).
*   **Roteamento (`src/router/index.tsx`)**: O roteador mapeia URLs para os componentes de página das features.

Esta abordagem de feature-driven development é uma prática recomendada para aplicações React de médio a grande porte, pois promove uma base de código mais organizada e sustentável. 