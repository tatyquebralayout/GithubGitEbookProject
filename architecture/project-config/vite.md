# Configuração do Vite (`vite.config.ts`)

O Vite é o coração do nosso sistema de build e servidor de desenvolvimento. Ele oferece uma experiência de desenvolvimento extremamente rápida com Hot Module Replacement (HMR) e builds otimizadas para produção.

O arquivo de configuração principal é `vite.config.ts` na raiz do projeto.

## Principais Configurações

Analisando o `vite.config.ts` do projeto:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import imagemin from 'vite-plugin-imagemin'; // Pode precisar de configuração adicional

export default defineConfig({
  plugins: [
    react(), // Habilita o suporte para React (JSX, Fast Refresh)
    svgr(), // Permite importar SVGs como componentes React
    imagemin({
      // Configurações de otimização de imagem (exemplo)
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7, interlaced: false },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Define o alias '@' para a pasta 'src'
    },
  },
  build: {
    sourcemap: true, // Gera sourcemaps para o build de produção
  },
  server: {
    port: 3000, // Define a porta do servidor de desenvolvimento (opcional, padrão é 5173)
    // open: true, // Abre automaticamente o navegador (opcional)
  },
  // Otimizações de dependências (opcional, mas pode ser útil)
  // optimizeDeps: {
  //   include: ['react-router-dom', 'lucide-react'],
  // },
});
```

### Plugins

*   **`@vitejs/plugin-react`**: Essencial para projetos React. Fornece:
    *   Transformação JSX.
    *   Fast Refresh (equivalente ao HMR para React), que permite atualizações instantâneas no navegador sem perder o estado do componente.
*   **`vite-plugin-svgr`**: Permite importar arquivos `.svg` diretamente como componentes React.
    *   Exemplo de uso: `import { ReactComponent as Logo } from './logo.svg';` (ou `import Logo from './logo.svg?react';` dependendo da configuração do plugin).
    *   No projeto, o uso é `import GitLogo from '@/assets/git-official.svg';` (sem `?react`), o que sugere uma configuração padrão do `svgr` que trata SVGs como componentes por default ou o `vite-plugin-svgr` está configurado para isso.
*   **`vite-plugin-imagemin`**: Usado para otimizar imagens (GIF, PNG, JPG, SVG) durante o processo de build, ajudando a reduzir o tamanho final dos assets.
    *   As configurações específicas (`gifsicle`, `optipng`, `mozjpeg`, `pngquant`, `svgo`) definem como cada tipo de imagem será comprimido.

### `resolve.alias`

*   **`'@': path.resolve(__dirname, './src')`**: Esta é uma configuração muito útil que cria um alias de importação.
    *   Permite importar módulos da pasta `src` usando `@/` como prefixo, em vez de caminhos relativos complexos (ex: `import MeuComponente from '@/components/MeuComponente';` em vez de `import MeuComponente from '../../components/MeuComponente';`).
    *   Melhora a legibilidade e a manutenibilidade dos caminhos de importação.

### `build.sourcemap`

*   **`sourcemap: true`**: Instruí o Vite a gerar sourcemaps para o build de produção.
    *   Sourcemaps são cruciais para depuração, pois mapeiam o código compilado/minificado de volta para o código fonte original, facilitando a identificação de erros em produção.

### `server.port` (Exemplo)

*   **`port: 3000`**: Define a porta em que o servidor de desenvolvimento irá rodar (no projeto atual, está comentado, então usa o padrão 5173).
*   **`server.open`**: Se descomentado e definido como `true`, abriria automaticamente o navegador na URL da aplicação quando o servidor de desenvolvimento iniciasse.

### `optimizeDeps.include` (Exemplo)

*   Esta seção (comentada no projeto) pode ser usada para pré-empacotar dependências que são grandes ou que mudam com pouca frequência, o que pode acelerar o tempo de inicialização do servidor de desenvolvimento e o HMR.

## Funcionamento Geral

*   **Desenvolvimento:** O Vite serve os arquivos diretamente do sistema de arquivos via ES modules nativos do navegador. Isso significa que não há um processo de "bundle" demorado durante o desenvolvimento. As atualizações são incrivelmente rápidas.
*   **Build:** Para produção, o Vite usa o Rollup por baixo dos panos para gerar um bundle otimizado de arquivos estáticos (HTML, CSS, JavaScript).

Compreender o `vite.config.ts` é fundamental para customizar o processo de build, adicionar plugins para novas funcionalidades (ex: PWA, análise de bundle) ou ajustar o comportamento do servidor de desenvolvimento. 