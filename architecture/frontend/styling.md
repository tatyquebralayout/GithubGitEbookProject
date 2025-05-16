# Estilização no GitSheet

A estratégia de estilização do GitSheet é centrada no **Tailwind CSS**, mas também incorpora CSS customizado, variáveis CSS (tokens) e PostCSS para um sistema robusto e flexível.

## 1. Tailwind CSS

É a principal ferramenta de estilização. Classes de utilitário são aplicadas diretamente nos componentes JSX.

*   **Configuração:** `tailwind.config.js` (veja [Configuração do Tailwind CSS](<../project-config/tailwind.md>))
    *   Define o tema (cores, fontes, espaçamentos, breakpoints), plugins (`tailwindcss-animate`, `@tailwindcss/typography`), e os arquivos a serem processados (`content`).
*   **Uso:**
    ```tsx
    // Exemplo de um componente usando Tailwind
    const MyComponent = () => {
      return (
        <div className="bg-primary text-primary-foreground p-4 rounded-lg shadow-md hover:bg-secondary">
          <h1 className="text-2xl font-bold mb-2">Olá Tailwind!</h1>
          <p className="text-muted-foreground">Este é um parágrafo estilizado.</p>
        </div>
      );
    };
    ```
*   **Função `cn`**: A utilitária `cn` (de `clsx` e `tailwind-merge`), localizada em `src/lib/utils/index.ts`, é amplamente usada, especialmente nos componentes de `src/components/ui/`, para aplicar classes condicionalmente e mesclar classes do Tailwind de forma inteligente, evitando conflitos.
    ```typescript
    import { type ClassValue, clsx } from 'clsx';
    import { twMerge } from 'tailwind-merge';

    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
    }
    ```

## 2. PostCSS

PostCSS é usado como um processador de CSS, com o Tailwind CSS sendo um de seus plugins.

*   **Configuração:** `postcss.config.js` (veja [Configuração do Tailwind CSS](<../project-config/tailwind.md>))
    *   Inclui `tailwindcss` e `autoprefixer` (para adicionar prefixos de fornecedores automaticamente).
*   **Processo:** O Vite invoca o PostCSS, que por sua vez usa o Tailwind para processar as classes de utilitário e diretivas `@tailwind`, e depois o Autoprefixer para garantir compatibilidade.

## 3. Arquivos CSS Globais e Customizados (`src/styles/`)

A pasta `src/styles/` contém CSS global e customizações.

*   **`src/index.css`**: Ponto de entrada principal para os estilos.
    ```css
    @import './styles/tokens.css'; /* Importa variáveis CSS */

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer base {
      :root {
        /* Variáveis para o modo claro */
        --background: 0 0% 100%;
        --foreground: 240 10% 3.9%;
        /* ... outras cores primárias, secundárias, etc. ... */
        --radius: 0.5rem; /* Raio de borda base */
      }
      .dark {
        /* Variáveis para o modo escuro */
        --background: 240 10% 3.9%;
        --foreground: 0 0% 98%;
        /* ... outras cores primárias, secundárias, etc., para o modo escuro ... */
      }
      body {
        @apply bg-background text-foreground;
        font-feature-settings: "rlig" 1, "calt" 1;
      }
      /* ... outros estilos base globais ... */
    }
    ```
    *   **`@import './styles/tokens.css';`**: Importa um arquivo separado que pode conter mais definições de variáveis CSS (tokens de design).
    *   **Diretivas `@tailwind`**: `base`, `components`, e `utilities` injetam os estilos base do Tailwind, classes de componentes e classes de utilitário, respectivamente.
    *   **`@layer base`**: O Tailwind permite organizar CSS customizado em "camadas". Estilos na camada `base` são para redefinições de HTML base ou estilos globais. As variáveis CSS para os temas claro e escuro são definidas aqui e usadas no `tailwind.config.js` (ex: `colors: { primary: 'hsl(var(--primary))' }`).

*   **`src/styles/tokens.css`**: Arquivo para definir variáveis CSS (tokens) que podem ser usados tanto pelo Tailwind quanto por CSS customizado.
    *   O conteúdo fornecido para este arquivo era um exemplo genérico, mas idealmente conteria as definições de cores, espaçamentos, tipografia, etc., como variáveis CSS que são depois referenciadas em `:root` e `.dark` no `index.css`, e também no `tailwind.config.js`.

*   **`src/styles/utilities.css`**: Pode ser usado para classes de utilitário CSS customizadas que não são facilmente expressas com Tailwind ou que são usadas com muita frequência.
    *   O conteúdo atual (`@tailwind base; @tailwind components; @tailwind utilities;`) é redundante se já estiver no `index.css`. Poderia ser removido ou usado para utilitários realmente customizados.

## 4. Tematização (Modo Claro/Escuro)

A tematização é implementada usando:

1.  **Variáveis CSS:** Definidas em `src/index.css` (ou `tokens.css`) para os modos claro (`:root`) e escuro (`.dark`).
2.  **Classe no `<html>`:** O `ThemeToggle` no `Navbar.tsx` alterna a classe `dark` no elemento `<html>`.
3.  **Tailwind `darkMode: 'class'`**: Configurado no `tailwind.config.js`, o Tailwind gera variantes `dark:` para suas classes de utilitário (ex: `dark:bg-gray-800`).
4.  **`localStorage`**: O `ThemeToggle` persiste a preferência de tema do usuário no `localStorage`.

## 5. Stylelint

Stylelint (`.stylelintrc.json`) é usado para linting de CSS, garantindo consistência e prevenindo erros nos arquivos CSS customizados (veja [Configuração do Stylelint](<../project-config/stylelint.md>)).

## Abordagem Geral

1.  **Tailwind First:** A grande maioria dos estilos é aplicada usando classes de utilitário do Tailwind diretamente no JSX.
2.  **Componentes de UI Abstraídos (`src/components/ui/`):** Componentes como `Button`, `Card`, etc., encapsulam estilos comuns do Tailwind e usam `cn` para flexibilidade.
3.  **Variáveis CSS para Theming:** Cores, raios de borda e outros aspectos do tema são gerenciados com variáveis CSS, permitindo fácil alternância (ex: modo escuro) e consistência com o `tailwind.config.js`.
4.  **CSS Customizado Mínimo:** CSS customizado em `@layer base` ou em arquivos separados é usado para estilos globais, resets ou casos complexos que não são facilmente cobertos pelo Tailwind.
5.  **Consistência:** Ferramentas como Stylelint e Prettier (para formatação) ajudam a manter a consistência em todo o código de estilização.

Esta abordagem combina a velocidade e conveniência do Tailwind CSS com a flexibilidade do CSS tradicional quando necessário, resultando em um sistema de estilização poderoso e de fácil manutenção. 