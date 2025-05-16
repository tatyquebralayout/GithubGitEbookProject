# Feature: Comandos Git

**Localização:** `src/features/gitCommands/`

## Propósito

A feature "Comandos Git" é o coração da funcionalidade de "cheatsheet" do GitSheet. Ela permite aos usuários visualizar, filtrar e aprender sobre diversos comandos Git, categorizados por nível de dificuldade (Básico, Intermediário, Avançado) e também comandos específicos do GitHub e desafios práticos.

## Estrutura de Arquivos

```
src/features/gitCommands/
├── components/ # Componentes para visualização e interação com os comandos
│   ├── advanced/ # Componentes específicos para comandos avançados
│   │   └── AdvancedCommands.tsx
│   ├── basic/ # Componentes específicos para comandos básicos
│   │   └── BasicCommands.tsx
│   ├── github/ # Componentes específicos para comandos GitHub
│   │   └── GithubCommands.tsx
│   ├── practiceChallenge/ # Componentes para desafios práticos
│   │   └── PracticeChallenge.tsx
│   ├── AdvancedCommands.tsx # (Provavelmente duplicado ou versão antiga, priorizar o de advanced/)
│   ├── BasicCommands.tsx    # (Provavelmente duplicado ou versão antiga, priorizar o de basic/)
│   ├── CommandCard.tsx      # Card para exibir um único comando
│   ├── CommandList.tsx      # Lista os CommandCards
│   ├── CommandsBase.tsx     # Componente base reutilizável para páginas de comandos
│   ├── CommandSearchFilter.tsx # UI para busca e filtro
│   ├── GitCommandLayout.tsx # Layout específico para seções de comandos Git
│   ├── GithubCommands.tsx   # (Provavelmente duplicado ou versão antiga, priorizar o de github/)
│   ├── IntermediateCommands.tsx # Componente para comandos intermediários
│   └── MermaidDisplay.tsx   # Para exibir diagramas Mermaid relacionados a comandos
├── data/ # Arquivos com os dados dos comandos e dicas
│   ├── advancedCommands.ts
│   ├── basicCommands.ts
│   ├── gitPracticeChallenges.ts
│   ├── gitTips.ts
│   ├── githubCommands.ts
│   └── intermediateCommands.ts
├── hooks/ # Hooks customizados
│   └── useAuthorDialog.ts # Hook para diálogo com autor (reutilizado em outras features?)
├── types/ # Tipos TypeScript específicos (ex: Command, Tip)
│   ├── commands.types.ts
│   └── index.ts
├── utils/ # Utilitários (vazio atualmente)
├── GitAdvancedCommandsPage.tsx
├── GitBasicCommandsPage.tsx
├── GitHubCommandsPage.tsx
├── GitIntermediateCommandsPage.tsx
├── GitPracticeChallengePage.tsx
└── README.md # (Placeholder)
```

**Observações Importantes na Estrutura:**

*   **Duplicação Aparente:** Existem componentes como `AdvancedCommands.tsx` tanto diretamente em `components/` quanto em `components/advanced/`. A análise anterior indicou que `components/advanced/AdvancedCommands.tsx` usa `CommandsBase.tsx`, enquanto `components/basic/BasicCommands.tsx` e `components/github/GithubCommands.tsx` **não** usam `CommandsBase.tsx` e têm uma estrutura mais simples e direta, focada na listagem dos comandos com `CommandCard` e `MermaidDisplay`.
*   `IntermediateCommands.tsx` (em `components/`) também parecia ser uma cópia ou uma versão mais antiga de `CommandsBase.tsx`.
*   Essa inconsistência na utilização do `CommandsBase.tsx` é um ponto importante a ser destacado e, possivelmente, refatorado para maior consistência e reutilização de código.

## Componentes Principais

*   **Páginas de Comandos (ex: `GitBasicCommandsPage.tsx`, `GitAdvancedCommandsPage.tsx`)**:
    *   São os entry points para cada categoria de comando.
    *   Importam e renderizam os componentes de apresentação correspondentes (ex: `BasicCommands.tsx` de `components/basic/`).

*   **`CommandsBase.tsx` (`src/features/gitCommands/components/CommandsBase.tsx`)**: (Quando utilizado)
    *   Um componente de layout e apresentação robusto, projetado para ser a base das páginas de listagem de comandos.
    *   **Funcionalidades:**
        *   Título e Descrição da seção.
        *   Input de busca (`CommandSearchFilter`).
        *   Filtro por nível (se aplicável).
        *   Paginação.
        *   Renderiza `CommandList` com os comandos filtrados e paginados.
        *   Mostra o número total de comandos e o número de comandos exibidos.
    *   **Uso Atual:** Confirmado em `AdvancedCommands.tsx`. Deveria ser o padrão para outras seções de comandos (Básico, Intermediário, GitHub) para consistência.

*   **Componentes de Categoria (ex: `components/basic/BasicCommands.tsx`, `components/advanced/AdvancedCommands.tsx`)**:
    *   Responsáveis por buscar os dados dos comandos de `src/features/gitCommands/data/` e passá-los para `CommandList` ou, no caso dos que usam `CommandsBase`, para este último.
    *   `AdvancedCommands.tsx` usa `CommandsBase` e passa os `advancedCommandsData` e `gitTips`.
    *   `BasicCommands.tsx` (de `components/basic/`) renderiza diretamente `CommandList` e `MermaidDisplay`, sem `CommandsBase`.

*   **`CommandList.tsx`**: Recebe uma lista de comandos e os renderiza usando `CommandCard.tsx`.

*   **`CommandCard.tsx`**: Exibe as informações de um único comando Git.
    *   **Conteúdo:** Nome do comando, descrição, sintaxe (com highlighting), exemplos, e um `MermaidDisplay` para o diagrama associado.
    *   Usa componentes de UI como `Accordion` (de `shadcn/ui`) para mostrar/ocultar detalhes, e `Tabs` para exemplos/diagramas.
    *   Inclui um botão/link para "Praticar" que pode levar a `GitPracticeChallengePage` ou a uma seção de prática.

*   **`MermaidDisplay.tsx`**: Componente para renderizar diagramas Mermaid.
    *   Recebe o código do diagrama Mermaid como string.
    *   Usa o `MermaidBase.tsx` de `src/lib/mermaid/` para a renderização real.

*   **`CommandSearchFilter.tsx`**: UI com input de busca e, potencialmente, outros filtros.

## Fluxo de Dados e Lógica

1.  **Dados dos Comandos:** Os dados brutos dos comandos (nome, descrição, sintaxe, exemplos, código Mermaid) estão em arquivos `.ts` dentro de `src/features/gitCommands/data/` (ex: `basicCommands.ts`).
    *   Cada arquivo exporta um array de objetos, onde cada objeto representa um comando e segue a interface `Command` (definida em `commands.types.ts`).
    *   `gitTips.ts` e `gitPracticeChallenges.ts` fornecem dados adicionais.

2.  **Carregamento de Dados:** Os componentes de categoria (ex: `BasicCommands.tsx`) importam esses dados.

3.  **Filtragem e Busca (em `CommandsBase` ou implementado localmente):**
    *   O `CommandsBase` implementa lógica para filtrar comandos por termo de busca e nível.
    *   Componentes que não usam `CommandsBase` podem ter uma lógica de busca mais simples ou nenhuma.

4.  **Paginação (em `CommandsBase`):**
    *   O `CommandsBase` gerencia a paginação dos resultados filtrados.

5.  **Renderização:**
    *   `CommandList` itera sobre os comandos (filtrados/paginados) e renderiza um `CommandCard` para cada um.
    *   `CommandCard` exibe os detalhes do comando, incluindo o diagrama via `MermaidDisplay`.

## Tipos (`src/features/gitCommands/types/commands.types.ts`)

Define as interfaces para os dados dos comandos:

```typescript
export interface CommandExample {
  description: string;
  code: string;
  mermaidDiagram?: string; // Diagrama específico para o exemplo
}

export interface Command {
  id: string;
  name: string;
  description: string;
  extendedDescription?: string;
  syntax: string[]; // Array de strings para sintaxe
  examples: CommandExample[];
  level: 'Basic' | 'Intermediate' | 'Advanced' | 'GitHub';
  category: string; // Ex: Setup, Branching, Staging
  videoUrl?: string;
  practiceAvailable?: boolean;
  mermaidDiagram?: string; // Diagrama principal para o comando
}

export interface GitTip {
  id: string;
  tip: string;
  category: string; // Para qual categoria de comando a dica se aplica
}

// ... outros tipos como PracticeChallenge
```

## Hook `useAuthorDialog.ts`

Localizado em `src/features/gitCommands/hooks/`, este hook gerencia a lógica para um diálogo interativo com um autor. Embora esteja nesta pasta, sua funcionalidade parece genérica e poderia ser usada por outras features (como `author` ou `game`).

## Pontos de Melhoria e Refatoração

*   **Consistência no Uso de `CommandsBase.tsx`**: Refatorar `BasicCommands.tsx`, `IntermediateCommands.tsx` e `GithubCommands.tsx` para utilizarem o `CommandsBase.tsx`, promovendo reutilização de UI e lógica (busca, filtro, paginação).
*   **Estrutura de Pastas em `components/`**: Clarificar a necessidade dos componentes duplicados/similares que estão diretamente em `components/` versus os que estão em subpastas (`basic/`, `advanced/`). Idealmente, haveria uma estrutura mais limpa.
*   **Dados dos Comandos**: Considerar se os dados dos comandos poderiam ser carregados de arquivos JSON ou Markdown para facilitar a edição por não desenvolvedores, embora mantê-los em TS/JS permita tipos e lógica mais complexa se necessário.
*   **Interatividade nos Diagramas**: Explorar se os diagramas Mermaid poderiam ser mais interativos ou atualizados dinamicamente com base em exemplos.

Esta feature é central para o GitSheet, e sua clareza, consistência e facilidade de manutenção são vitais para o sucesso do projeto. 