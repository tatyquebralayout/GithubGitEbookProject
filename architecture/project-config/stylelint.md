# Configuração do Stylelint (`.stylelintrc.json`)

Stylelint é um linter poderoso e moderno que ajuda a evitar erros e impor convenções estilísticas em seus arquivos CSS (e outras sintaxes que o suportam, como SCSS, Less, ou CSS-in-JS).

O arquivo de configuração do Stylelint no projeto é o `.stylelintrc.json`, localizado na raiz.

## `.stylelintrc.json`

Analisando o conteúdo do `.stylelintrc.json`:

```json
{
  "extends": [
    "stylelint-config-standard", // Configuração padrão do Stylelint com regras comuns
    "stylelint-config-tailwindcss", // Regras específicas para Tailwind CSS
    "stylelint-config-prettier" // Integração com Prettier para desabilitar regras conflitantes
  ],
  "rules": {
    // Adicione ou sobrescreva regras aqui, se necessário
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "tailwind", // Ignora a diretiva @tailwind
          "apply", // Ignora a diretiva @apply do Tailwind
          "layer", // Ignora a diretiva @layer do Tailwind
          "config", // Ignora a diretiva @config do Tailwind (menos comum)
          "property" // Ignora a diretiva @property (CSS Houdini)
        ]
      }
    ],
    "selector-class-pattern": null, // Desabilita a regra de padrão para nomes de classe (Tailwind usa muitos)
    "indentation": [2, { "baseIndentLevel": 0 }], // Define indentação para 2 espaços, sem indentação base para blocos @
    "no-descending-specificity": null, // Desabilita checagem de especificidade descendente (pode ser problemático com utilitários)
    "function-name-case": null, // Desabilita a regra para o case de nomes de funções (ex: `theme('colors.blue.500')`)
    "no-empty-source": null // Permite arquivos CSS vazios
  }
}

```

**Principais Configurações:**

*   **`extends`**: Este array especifica as configurações base que o Stylelint deve herdar. A ordem é importante, pois configurações posteriores podem sobrescrever as anteriores.
    *   **`stylelint-config-standard`**: Fornece um conjunto de regras padrão e recomendadas pela comunidade Stylelint. Cobre muitos aspectos da escrita de CSS, como formatação, prevenção de erros comuns, e boas práticas.
    *   **`stylelint-config-tailwindcss`**: Uma configuração específica para projetos que usam Tailwind CSS. Ela ajusta ou adiciona regras para funcionar bem com a sintaxe e as convenções do Tailwind, como o uso de diretivas (`@tailwind`, `@apply`, `@layer`) e a natureza utilitária das classes.
    *   **`stylelint-config-prettier`**: Desativa todas as regras do Stylelint que são desnecessárias ou que podem entrar em conflito com o Prettier. Isso garante que o Prettier seja a única fonte da verdade para a formatação do código, enquanto o Stylelint foca em erros lógicos e convenções de CSS.

*   **`rules`**: Este objeto permite customizar, sobrescrever ou adicionar regras específicas do Stylelint.
    *   **`"at-rule-no-unknown"`**: Por padrão, o Stylelint sinalizaria erro para diretivas (`@rule`) desconhecidas. Esta configuração é ajustada para ignorar diretivas específicas usadas pelo Tailwind CSS (`@tailwind`, `@apply`, `@layer`, `@config`) e a diretiva `@property` (usada para CSS Houdini Custom Properties).
    *   **`"selector-class-pattern": null`**: Desabilita a regra que impõe um padrão para nomes de classes CSS (ex: BEM, kebab-case). Com Tailwind, os nomes de classe são predefinidos e não seguem um padrão único customizável, então esta regra é desabilitada.
    *   **`"indentation": [2, { "baseIndentLevel": 0 }]`**: Configura a indentação para 2 espaços. `baseIndentLevel: 0` é adicionado para corrigir um problema comum com as diretivas `@layer` do Tailwind, garantindo que o conteúdo dentro delas não exija um nível de indentação adicional em relação à diretiva em si.
    *   **`"no-descending-specificity": null`**: Desabilita a regra que previne seletores de menor especificidade de virem depois de seletores de maior especificidade. Com classes de utilitário, isso pode gerar falsos positivos.
    *   **`"function-name-case": null`**: Desabilita a regra que verifica o case dos nomes de funções CSS. Isso é útil para permitir funções como `theme('borderColor.DEFAULT')` do Tailwind sem que o Stylelint reclame do case.
    *   **`"no-empty-source": null`**: Permite arquivos CSS que não contêm nenhuma regra, o que pode acontecer, por exemplo, com arquivos de tokens ou placeholders.

## Uso e Integração

*   **Execução via CLI:** Stylelint pode ser executado a partir da linha de comando para verificar arquivos CSS. Ex: `npx stylelint "**/*.css"`.
*   **Scripts npm:** O `package.json` contém scripts para linting de CSS:
    ```json
    "scripts": {
      // ...
      "lint:css": "stylelint \"src/**/*.css\" --cache --cache-location .stylelintcache",
      "lint:css:fix": "npm run lint:css -- --fix",
      // ...
    }
    ```
    *   `npm run lint:css`: Verifica os arquivos CSS.
    *   `npm run lint:css:fix`: Tenta corrigir automaticamente os problemas encontrados.
    *   `--cache` e `--cache-location`: Usado para armazenar em cache os resultados do linting e apenas verificar arquivos alterados, tornando o processo mais rápido em execuções subsequentes.
*   **Integração com Editores:** Muitos editores de código (como VS Code) têm extensões para Stylelint que mostram erros e avisos diretamente no editor.
*   **Hooks de Pré-commit:** Pode ser integrado com Husky e lint-staged para verificar o CSS antes de cada commit.

O Stylelint, em conjunto com as configurações para Tailwind CSS e Prettier, ajuda a manter os estilos do projeto consistentes, livres de erros e alinhados com as melhores práticas modernas de CSS. 