# Configuração do ESLint (`eslint.config.js`)

ESLint é uma ferramenta de linting plugável para JavaScript e TypeScript. Ele ajuda a identificar e corrigir problemas no código, como erros de sintaxe, quebras de estilo e potenciais bugs, antes mesmo da execução.

O projeto utiliza o novo formato de configuração "flat config" do ESLint, definido no arquivo `eslint.config.js` na raiz do projeto. Este formato é mais modular e programático que o antigo `.eslintrc.js(on)`.

## `eslint.config.js`

Analisando a estrutura do `eslint.config.js`:

```javascript
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import zustandPlugin from 'eslint-plugin-zustand';
// import unusedImports from 'eslint-plugin-unused-imports'; // Comentado
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  // Configurações Globais e Arquivos Ignorados
  {
    ignores: [
      'dist/**/',
      'node_modules/**/',
      '.vscode/**/',
      '**/*.config.js', // Ex: tailwind.config.js, postcss.config.js
      '**/*.config.ts', // Ex: vite.config.ts
      'eslint.config.js',
    ],
  },
  // Configuração base para JavaScript (@eslint/js)
  pluginJs.configs.recommended,
  // Configuração base para TypeScript (typescript-eslint)
  ...tseslint.configs.recommended,
  // Configuração para React (eslint-plugin-react)
  {
    ...pluginReactConfig,
    settings: { react: { version: 'detect' } }, // Detecta a versão do React
    rules: {
      ...pluginReactConfig.rules,
      'react/react-in-jsx-scope': 'off', // Desabilita para React 17+ JSX transform
      'react/jsx-uses-react': 'off', // Desabilita para React 17+ JSX transform
      'react/prop-types': 'off', // Desabilita, pois usa TypeScript para tipos
    },
  },
  // Configuração para Zustand (eslint-plugin-zustand)
  {
    plugins: { zustand: zustandPlugin },
    rules: zustandPlugin.configs.recommended.rules,
  },
  // Configuração para eslint-plugin-import
  {
    plugins: { import: importPlugin },
    rules: {
      'import/no-unresolved': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: { project: './tsconfig.json' }, // Ajuda a resolver caminhos TS
        node: true,
      },
    },
  },
  // Configuração para Acessibilidade JSX (eslint-plugin-jsx-a11y)
  {
    plugins: { 'jsx-a11y': jsxA11y },
    rules: jsxA11y.configs.recommended.rules,
  },
  // Configuração para Tailwind CSS (eslint-plugin-tailwindcss)
  {
    plugins: { tailwindcss: tailwindPlugin },
    rules: tailwindPlugin.configs.recommended.rules,
  },
  // Integração com Prettier (eslint-plugin-prettier/recommended)
  // ESTA DEVE SER A ÚLTIMA CONFIGURAÇÃO para sobrescrever outras regras de estilo
  eslintPluginPrettierRecommended,

  // Configurações específicas para arquivos (opcional)
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }, // Globais de navegador e Node
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Habilita parsing de JSX
      },
    },
  },
];
```

**Estrutura Geral:**

O arquivo exporta um array de objetos de configuração. Cada objeto pode especificar arquivos aos quais se aplica (`files`), regras (`rules`), plugins (`plugins`), configurações de linguagem (`languageOptions`), etc.

**Principais Seções e Plugins:**

1.  **`ignores`**: Define um array de padrões glob para arquivos e pastas que o ESLint deve ignorar. Isso inclui `dist/`, `node_modules/`, arquivos de configuração e o próprio `eslint.config.js`.

2.  **`pluginJs.configs.recommended`**: Aplica as regras recomendadas do ESLint para JavaScript geral.

3.  **`...tseslint.configs.recommended`**: Aplica as regras recomendadas para TypeScript, fornecidas pelo `typescript-eslint`. O spread operator (`...`) é usado porque `tseslint.configs.recommended` é um array de configurações.

4.  **`pluginReactConfig` (com customizações)**:
    *   Importa as configurações recomendadas de `eslint-plugin-react`.
    *   **`settings: { react: { version: 'detect' } }`**: Permite ao plugin detectar automaticamente a versão do React usada no projeto.
    *   **Regras Customizadas para React:**
        *   `'react/react-in-jsx-scope': 'off'` e `'react/jsx-uses-react': 'off'`: Desabilitam regras que exigiam `import React from 'react';` em cada arquivo JSX. Isso não é mais necessário com a nova transformação JSX do React 17+.
        *   `'react/prop-types': 'off'`: Desabilita a checagem de `propTypes`, pois o projeto usa TypeScript para a definição e verificação de tipos de props.

5.  **`zustandPlugin` (`eslint-plugin-zustand`)**: Adiciona regras específicas para o uso correto da biblioteca de gerenciamento de estado Zustand.

6.  **`importPlugin` (`eslint-plugin-import`)**:
    *   Ajuda a lintar a sintaxe de importação/exportação ES6+.
    *   **`'import/no-unresolved': 'error'`**: Sinaliza erro se um módulo importado não puder ser resolvido.
    *   **`'import/order'`**: Impõe uma ordem específica para as declarações de importação, melhorando a consistência e legibilidade. A configuração agrupa imports (builtin, external, internal, etc.) e os ordena alfabeticamente.
    *   **`settings: { 'import/resolver': { typescript: { project: './tsconfig.json' } } }`**: Ajuda o plugin a resolver caminhos definidos no `tsconfig.json` (como o alias `@/`).

7.  **`jsxA11y` (`eslint-plugin-jsx-a11y`)**: Fornece regras para garantir que o código JSX siga as melhores práticas de acessibilidade (a11y).

8.  **`tailwindPlugin` (`eslint-plugin-tailwindcss`)**: Adiciona regras específicas para o uso do Tailwind CSS, como ordenar classes de forma consistente ou evitar nomes de classe conflitantes.

9.  **`eslintPluginPrettierRecommended`**: Este é um pacote especial que integra o Prettier com o ESLint.
    *   Ele faz duas coisas: adiciona o `eslint-plugin-prettier` (que roda o Prettier como uma regra ESLint) e o `eslint-config-prettier` (que desabilita regras do ESLint que podem conflitar com o Prettier).
    *   **Importante:** Deve ser a última configuração no array para garantir que ele possa sobrescrever regras de estilo de outros plugins.

10. **Configuração Global para `languageOptions`**: Um bloco final (opcional, mas presente) define `languageOptions` para todos os arquivos `js,jsx,ts,tsx`:
    *   **`globals: { ...globals.browser, ...globals.node }`**: Define as variáveis globais disponíveis (ex: `window` no browser, `process` no Node.js).
    *   **`parserOptions: { ecmaFeatures: { jsx: true } }`**: Habilita o parsing de sintaxe JSX.

**Fluxo de Execução:**

Quando o ESLint é executado, ele processa este array de configurações. As regras são aplicadas de forma cascata, e configurações posteriores podem sobrescrever as anteriores. A integração com o Prettier no final garante que a formatação do Prettier tenha a palavra final sobre o estilo do código.

Esta configuração abrangente ajuda a manter a qualidade do código, a consistência e a aderência às melhores práticas em diferentes aspectos do desenvolvimento (TypeScript, React, Acessibilidade, Tailwind, etc.). 