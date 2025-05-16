# Configuração do TypeScript (`tsconfig.json` e Variantes)

O TypeScript é usado no GitSheet para adicionar tipagem estática ao JavaScript, o que melhora a robustez do código, a experiência de desenvolvimento (autocompletar, refatoração segura) e ajuda a pegar erros em tempo de compilação, antes mesmo de rodar a aplicação.

O projeto utiliza múltiplos arquivos `tsconfig.json` para diferentes contextos:

*   `tsconfig.json` (Raiz): Configuração base, da qual outros arquivos herdam.
*   `tsconfig.app.json`: Configurações específicas para o código da aplicação React (dentro de `src`).
*   `tsconfig.node.json`: Configurações para código que roda em ambiente Node.js (ex: `vite.config.ts`, scripts).

## `tsconfig.json` (Principal)

Este arquivo define opções globais do compilador e referências a outros arquivos de configuração.

```json
{
  "compilerOptions": {
    // Mantém a consistência de maiúsculas/minúsculas em nomes de arquivos.
    "forceConsistentCasingInFileNames": true,
    // Habilita todas as checagens estritas de tipo (null, undefined, etc.)
    "strict": true,
    // Não compila código se houver erros de tipo.
    "noFallthroughCasesInSwitch": true,
    // Permite interoperabilidade com módulos CommonJS.
    "esModuleInterop": true,
    // Define a estratégia de resolução de módulos (Node.js).
    "moduleResolution": "node",
    // Permite importar arquivos JSON como módulos.
    "resolveJsonModule": true,
    // Isola módulos, cada arquivo é um módulo separado.
    "isolatedModules": true,
    // Não emite arquivos JavaScript (outras tools como Vite/Babel cuidam disso).
    "noEmit": true,
    // Permite código JavaScript no projeto.
    "allowJs": true,
    // Pula a checagem de tipos em arquivos de declaração (.d.ts) de bibliotecas.
    "skipLibCheck": true
  },
  "files": [], // Lista de arquivos a serem incluídos explicitamente (vazio aqui)
  "include": [], // Padrões glob para incluir arquivos (vazio aqui)
  "references": [
    // Referencia outras configurações de TS para construir um projeto composto.
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

**Pontos Chave:**

*   **`strict: true`**: Altamente recomendado. Habilita um conjunto de checagens de tipo mais rigorosas, prevenindo muitos erros comuns.
*   **`noEmit: true`**: O TypeScript aqui é usado primariamente para checagem de tipos. A transpilação para JavaScript é feita pelo Vite (que usa esbuild e, para build final, Rollup que também pode usar Babel ou esbuild).
*   **`isolatedModules: true`**: Necessário para ferramentas como Babel ou esbuild que compilam arquivos individualmente.
*   **`references`**: Permite que o `tsconfig.app.json` e `tsconfig.node.json` herdem e/ou sobrescrevam configurações deste arquivo base, criando um "projeto composto" onde diferentes partes do código podem ter configurações ligeiramente diferentes.

## `tsconfig.app.json`

Configurações específicas para o código da aplicação React.

```json
{
  "extends": "./tsconfig.json", // Herda da configuração base
  "compilerOptions": {
    "target": "ES2020", // Compila para uma versão moderna do ECMAScript
    "lib": ["DOM", "DOM.Iterable", "ES2020"], // Bibliotecas de tipos disponíveis
    "jsx": "react-jsx", // Configuração para JSX (React 17+)
    "module": "ESNext", // Usa o sistema de módulos ES moderno
    "baseUrl": ".", // Base para resolução de caminhos não relativos
    "paths": {
      "@/*": ["src/*"] // Mapeamento do alias '@' para 'src/'
    },
    "composite": true, // Parte de um projeto composto
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo" // Cache para builds incrementais
  },
  "include": ["src"], // Inclui todos os arquivos dentro da pasta 'src'
  "exclude": ["node_modules", "dist"] // Exclui estas pastas
}
```

**Pontos Chave:**

*   **`extends": "./tsconfig.json"`**: Herda as configurações do `tsconfig.json` principal.
*   **`target: "ES2020"`**: Especifica a versão do JavaScript para a qual o código será (teoricamente, pois `noEmit` está true no base) transpilado. Ferramentas como Vite/Babel podem ter suas próprias targets.
*   **`lib: ["DOM", "DOM.Iterable", "ES2020"]`**: Inclui definições de tipo para APIs do navegador (DOM) e funcionalidades do ES2020.
*   **`jsx: "react-jsx"`**: Usa a nova transformação JSX introduzida no React 17, que não requer `import React from 'react';` em cada arquivo com JSX.
*   **`module: "ESNext"`**: Utiliza o sistema de módulos ES mais recente, que se integra bem com o Vite.
*   **`baseUrl` e `paths`**: Cruciais para o funcionamento do alias `@/*` (ex: `import Component from '@/components/...';`). O `baseUrl` define o diretório raiz para caminhos absolutos e `paths` mapeia esses caminhos.
*   **`composite: true`**: Indica que este é parte de um projeto maior referenciado no `tsconfig.json` principal.
*   **`include: ["src"]`**: Especifica que o TypeScript deve processar todos os arquivos dentro da pasta `src`.

## `tsconfig.node.json`

Configurações para arquivos que rodam em ambiente Node.js (como `vite.config.ts`).

```json
{
  "extends": "./tsconfig.json", // Herda da configuração base
  "compilerOptions": {
    "composite": true, // Parte de um projeto composto
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo", // Cache
    "module": "ESNext", // Módulos ES modernos
    "moduleResolution": "bundler", // Resolução de módulos otimizada para bundlers como Vite
    "allowSyntheticDefaultImports": true // Permite importações default de módulos sem export default
  },
  "include": ["vite.config.ts", "eslint.config.js", "postcss.config.js", "tailwind.config.js"]
}
```

**Pontos Chave:**

*   **`moduleResolution: "bundler"`**: Uma opção mais nova que delega a resolução de módulos para a ferramenta de build (Vite, neste caso), alinhando-se melhor com a forma como os bundlers modernos funcionam.
*   **`allowSyntheticDefaultImports: true`**: Útil para interoperabilidade com módulos que podem não ter um `export default` explícito no estilo ES6.
*   **`include`**: Especifica os arquivos de configuração que devem ser checados com estas regras (ex: `vite.config.ts`).

## Tipos Globais (`vite-env.d.ts`)

O arquivo `src/types/vite-env.d.ts` (geralmente gerado automaticamente pelo Vite) contém referências a tipos específicos do ambiente Vite:

```typescript
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
```

*   **`vite/client`**: Fornece tipos para funcionalidades do lado do cliente do Vite, como `import.meta.env` e HMR API.
*   **`vite-plugin-svgr/client`**: Fornece tipos para a importação de SVGs como componentes React através do plugin `vite-plugin-svgr`.

Compreender essas configurações do TypeScript ajuda a garantir que os tipos sejam verificados corretamente em todo o projeto, aproveitando ao máximo os benefícios da tipagem estática. 