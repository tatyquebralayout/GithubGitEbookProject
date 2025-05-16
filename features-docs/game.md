# Documentação da Feature: Git Challenge (Game)

A feature "Git Challenge (Game)" serve como uma página de apresentação e um hub central para um sistema interativo de aprendizado de Git. Seu objetivo é engajar os usuários através de desafios práticos, permitindo que testem e aprimorem seus conhecimentos sobre comandos Git. 

A página principal (`src/features/game/components/Game.tsx`) introduz o conceito do desafio, explica seu funcionamento básico, e direciona os usuários para diferentes seções e níveis de desafios. Ela também exibe uma lista de comandos Git, categorizados, buscando dados de `src/features/game/data/commandsData.ts`.

## Principais Componentes e Estrutura

*   **`src/features/game/GamePage.tsx`**: Ponto de entrada da UI, renderiza o componente `Game`.
*   **`src/features/game/components/Game.tsx`**: Componente central que constrói a landing page do Git Challenge. Inclui:
    *   **Hero Banner**: Introdução ao desafio, com links para um "Visualizador de Comandos Git" (`/git-visualizer`) e para os desafios (`/game/basic-commands`).
    *   **Instruções**: Cards explicando como o jogo funciona (ex: escolha de comando, autor, dificuldade).
    *   **Exemplos de Desafios**: Seções que utilizam componentes de `src/features/gitCommands/components/practiceChallenge/` (como `GitChallengeExample` e `GitChallengeExamples`), mostrando uma integração com a feature `gitCommands`.
    *   **Seção de Comandos**: Lista comandos Git agrupados por categorias, utilizando `gitCommandsData` e o componente `CommandCategorySection.tsx`. Fornece navegação para sub-rotas com desafios específicos (ex: `/game/basic-commands`, `/game/intermediate-commands`).
*   **`src/features/game/components/CommandCategorySection.tsx`**: Utilizado para renderizar uma seção de comandos dentro de uma categoria específica.
*   **`src/features/game/components/CommandTableRow.tsx`**: (Suposição baseada no nome) Provavelmente usado dentro de `CommandCategorySection` ou nas páginas de desafio para exibir informações de um comando em formato de tabela.
*   **`src/features/game/data/commandsData.ts`**: Arquivo crucial que fornece os dados brutos sobre os comandos Git (nome, descrição, categoria, etc.) usados na página e, possivelmente, nos desafios.
*   **`src/features/game/data/commandDiagrams.ts`**: (Suposição) Pode conter dados para visualizações ou diagramas de comandos, a serem usados por componentes como `MermaidDiagram` (que foi comentado no `Game.tsx`, mas pode ser usado em subcomponentes ou páginas de desafio).
*   **`src/features/game/hooks/` e `src/features/game/utils/`**: Atualmente não contêm hooks ou utilitários customizados para esta feature.

## Fluxo de Jogo/Dados

1.  O usuário acessa a página principal do Git Challenge.
2.  A página apresenta informações sobre o desafio e lista categorias de comandos Git carregados de `commandsData.ts`.
3.  O usuário pode navegar para seções específicas de desafios (ex: "Comandos Básicos") através de links que levam a sub-rotas (ex: `/game/basic-commands`).
4.  As páginas de desafio nessas sub-rotas (não analisadas em detalhe ainda) provavelmente apresentarão os desafios práticos, possivelmente utilizando componentes da feature `gitCommands`.
5.  A interação de "escolha de autor" mencionada nas instruções do jogo sugere que pode haver uma personalização ou diferentes perspectivas para os desafios, cujos dados podem estar em `commandsData.ts` ou serem gerenciados de outra forma.

## Notas Adicionais

*   Esta feature tem uma forte dependência e/ou integração com a feature `gitCommands`, reutilizando componentes de lá para os exemplos de desafios.
*   A funcionalidade principal do "jogo" (a parte interativa de resolver desafios) parece residir nas sub-rotas (ex: `/game/basic-commands`) e não diretamente no `Game.tsx` analisado.
*   Será importante investigar o conteúdo e a funcionalidade dessas sub-rotas e dos componentes que elas utilizam para ter uma visão completa do "Git Challenge".
*   A origem e o uso dos dados de `commandDiagrams.ts` precisam ser confirmados. 