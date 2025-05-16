# Configuração do Prettier (`.prettierrc`)

Prettier é um formatador de código "opinativo". Ele garante que todo o código no projeto siga um estilo consistente, formatando-o automaticamente. Isso elimina debates sobre estilo de código e torna o código mais fácil de ler.

O arquivo de configuração do Prettier é o `.prettierrc` (ou `.prettierrc.json`, `.prettierrc.js`, etc.) na raiz do projeto. No caso do GitSheet, é um `.prettierrc` que parece ser JSON.

## `.prettierrc`

Analisando o conteúdo do `.prettierrc`:

```json
{
  "printWidth": 80, // Largura máxima da linha antes de quebrar
  "tabWidth": 2, // Número de espaços por nível de indentação (tabulação)
  "useTabs": false, // Usar espaços em vez de tabs para indentação
  "semi": true, // Adicionar ponto e vírgula no final das declarações
  "singleQuote": true, // Usar aspas simples para strings
  "jsxSingleQuote": true, // Usar aspas simples em JSX para atributos
  "trailingComma": "all", // Adicionar vírgula final onde possível (arrays, objetos, etc.)
  "bracketSpacing": true, // Adicionar espaços dentro de chaves em literais de objeto (ex: { foo: bar })
  "bracketSameLine": false, // Colocar o '>' de tags HTML multi-linha na última linha em vez de em uma nova linha
  "arrowParens": "always", // Sempre incluir parênteses em torno de argumentos de arrow functions (ex: (x) => x)
  "endOfLine": "auto" // Manter o final de linha existente (LF ou CRLF)
}
```

**Opções de Configuração:**

*   **`printWidth: 80`**: Especifica a largura máxima da linha. O Prettier tentará quebrar linhas que excedam este limite.
*   **`tabWidth: 2`**: Define o número de espaços a serem usados para cada nível de indentação.
*   **`useTabs: false`**: Configura o Prettier para usar espaços para indentação em vez de caracteres de tabulação (tabs).
*   **`semi: true`**: Garante que ponto e vírgulas sejam adicionados no final de cada declaração.
*   **`singleQuote: true`**: Faz com que o Prettier use aspas simples (`'`) para strings, em vez de aspas duplas (`"`).
*   **`jsxSingleQuote: true`**: Similar ao `singleQuote`, mas aplica-se especificamente a atributos JSX. Strings em JSX usarão aspas simples.
*   **`trailingComma: "all"`**: Adiciona uma vírgula final em arrays, objetos e listas de parâmetros de função multi-linha. Isso ajuda a ter diffs mais limpos no Git quando novos itens são adicionados.
*   **`bracketSpacing: true`**: Insere espaços entre as chaves e o conteúdo em literais de objeto. Ex: `{ foo: bar }` em vez de `{foo: bar}`.
*   **`bracketSameLine: false`**: Em elementos HTML/JSX multi-linha, o caractere `>` de fechamento da tag será colocado em uma nova linha.
    *   Exemplo (`false`):
        ```html
        <div
          attr="valor"
        >
        ```
    *   Exemplo (`true`):
        ```html
        <div
          attr="valor">
        ```
*   **`arrowParens: "always"`**: Garante que os parâmetros de arrow functions estejam sempre entre parênteses, mesmo que haja apenas um parâmetro. Ex: `(x) => x*2` em vez de `x => x*2`.
*   **`endOfLine: "auto"`**: O Prettier detectará o tipo de final de linha (`lf` ou `crlf`) usado no arquivo e o manterá. Se for um arquivo novo ou misto, geralmente padroniza para `lf`.

## Integração com ESLint

Conforme visto na configuração do ESLint (`eslint.config.js`), o Prettier é integrado ao ESLint através do `eslint-plugin-prettier` e `eslint-config-prettier` (geralmente via `eslint-plugin-prettier/recommended`).

*   `eslint-plugin-prettier` roda o Prettier como uma regra do ESLint e reporta diferenças como problemas de lint.
*   `eslint-config-prettier` desabilita todas as regras do ESLint que são desnecessárias ou que podem conflitar com o Prettier.

Isso significa que você pode rodar `eslint --fix` para aplicar tanto as correções de lint do ESLint quanto a formatação do Prettier.

## Uso

O Prettier pode ser executado de várias maneiras:

*   **Manualmente via CLI:** `npx prettier --write .` (para formatar todos os arquivos suportados no projeto).
*   **Via script npm:** O `package.json` inclui um script `format`:
    ```json
    "scripts": {
      // ...
      "format": "prettier --write \"src/**/*.@(ts|tsx|json|css|md)\" \"./*.@(js|json|md)\"",
      // ...
    }
    ```
    Este script formata arquivos específicos nas pastas `src` e na raiz do projeto. Pode ser executado com `npm run format`.
*   **Automaticamente com hooks de pré-commit:** Usando ferramentas como Husky e lint-staged, o Prettier pode ser configurado para formatar automaticamente os arquivos que estão sendo commitados.
*   **Em editores de código:** A maioria dos editores modernos (VS Code, WebStorm, etc.) possui integrações ou plugins para o Prettier que podem formatar o código ao salvar (`Format on Save`).

Usar o Prettier consistentemente ajuda a manter uma base de código limpa, legível e livre de discussões sobre estilo, permitindo que os desenvolvedores se concentrem na lógica e na funcionalidade. 