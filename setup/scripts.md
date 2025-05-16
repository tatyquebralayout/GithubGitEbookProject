# Scripts Úteis

O arquivo `package.json` do projeto GitSheet define uma série de scripts que podem ser executados com `npm run <nome_do_script>` (ou o comando equivalente do seu gerenciador de pacotes preferido, como `yarn <nome_do_script>` ou `pnpm <nome_do_script>`). Estes scripts automatizam tarefas comuns de desenvolvimento e build.

Abaixo está uma lista dos principais scripts e suas funções:

*   **`npm run dev`**
    *   **Função:** Inicia o servidor de desenvolvimento Vite.
    *   **Detalhes:** Compila a aplicação em modo de desenvolvimento, habilita o Hot Module Replacement (HMR) para atualizações rápidas no navegador sem perda de estado, e serve a aplicação localmente (geralmente em `http://localhost:5173`). Ideal para desenvolvimento ativo.

*   **`npm run build`**
    *   **Função:** Gera o build de produção da aplicação.
    *   **Detalhes:** Primeiro, executa `tsc` para verificar os tipos TypeScript sem emitir arquivos. Em seguida, usa `vite build` para compilar e otimizar a aplicação para produção. Os arquivos resultantes são colocados na pasta `dist/`.

*   **`npm run lint`**
    *   **Função:** Executa o ESLint para analisar o código TypeScript/JavaScript.
    *   **Detalhes:** Verifica o código-fonte (`.ts`, `.tsx`) em busca de erros de linting, problemas de estilo de código e potenciais bugs, com base nas regras configuradas em `eslint.config.js`.

*   **`npm run preview`**
    *   **Função:** Inicia um servidor local para pré-visualizar o build de produção.
    *   **Detalhes:** Deve ser executado após `npm run build`. Ele serve os arquivos estáticos da pasta `dist/`, permitindo que você teste a versão de produção da aplicação localmente antes do deploy.

*   **`npm run format`**
    *   **Função:** Formata o código-fonte usando Prettier.
    *   **Detalhes:** Aplica automaticamente as regras de formatação do Prettier (definidas em `.prettierrc`) a todos os arquivos `*.ts` e `*.tsx` dentro da pasta `src/`. Ajuda a manter um estilo de código consistente em todo o projeto.

*   **`npm run test`**
    *   **Função:** Executa os testes unitários e de integração.
    *   **Detalhes:** Utiliza o Vitest para rodar todos os arquivos de teste (geralmente `*.test.ts` ou `*.test.tsx`) no projeto. Exibe os resultados dos testes no console.

*   **`npm run test:coverage`**
    *   **Função:** Executa os testes e gera um relatório de cobertura de código.
    *   **Detalhes:** Similar ao `npm run test`, mas também calcula a porcentagem do código que é coberta pelos testes. O relatório é geralmente gerado em formatos como HTML (para visualização no navegador) e texto (no console), conforme configurado em `vite.config.ts`.

*   **`npm run lint:css`**
    *   **Função:** Executa o Stylelint para analisar os arquivos CSS.
    *   **Detalhes:** Verifica os arquivos CSS (`src/**/*.css`) em busca de erros de linting e problemas de estilo, com base nas regras configuradas em `.stylelintrc.json`.

Estes scripts são fundamentais para o ciclo de desenvolvimento e manutenção do projeto GitSheet. 