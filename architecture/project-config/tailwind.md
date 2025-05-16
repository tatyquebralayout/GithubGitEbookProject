# Configuração do Tailwind CSS (`tailwind.config.js` e `postcss.config.js`)

O Tailwind CSS é um framework CSS "utility-first" que permite construir designs customizados rapidamente, aplicando classes de utilitário diretamente no HTML/JSX. Ele é altamente configurável e integrado ao projeto através do PostCSS.

## `tailwind.config.js`

Este é o arquivo principal de configuração do Tailwind CSS, localizado na raiz do projeto.

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'], // Habilita o modo escuro baseado em uma classe (ex: <html class="dark">)
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  prefix: '', // Prefixo para as classes do Tailwind (vazio por padrão)
  theme: {
    container: { // Configurações para a classe 'container'
      center: true, // Centraliza o container
      padding: '2rem', // Padding padrão do container
      screens: { // Breakpoints para o container
        '2xl': '1400px',
      },
    },
    extend: { // Estende o tema padrão do Tailwind
      colors: { // Adiciona ou sobrescreve cores
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // ... (outras cores baseadas em variáveis CSS)
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        // ... (outras cores como secondary, destructive, muted, accent, popover, card)
      },
      borderRadius: { // Adiciona ou sobrescreve raios de borda
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: { // Define animações customizadas
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        // ... (outras animações como 'fade-in', 'fade-out', etc.)
      },
      animation: { // Define utilitários de animação
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // ... (outros utilitários de animação)
      },
      fontFamily: { // Define fontes customizadas (se necessário)
        sans: ['Inter var', 'sans-serif'], // Exemplo: usando Inter
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'), // Plugin para animações
    require('@tailwindcss/typography'), // Plugin para estilização de conteúdo textual (Markdown)
    // require('@tailwindcss/forms'), // Plugin para resetar estilos de formulário (não usado)
  ],
};
```

**Pontos Chave:**

*   **`darkMode: ['class']`**: Configura o modo escuro para ser ativado adicionando a classe `dark` ao elemento `<html>` (ou outro elemento pai).
*   **`content`**: Array de caminhos para arquivos onde o Tailwind CSS deve procurar por classes de utilitário. É crucial que todos os arquivos que usam classes Tailwind estejam incluídos aqui para que as classes sejam geradas no CSS final.
    *   Inclui `./index.html` e arquivos `ts/tsx` dentro de `pages`, `components`, `app`, e `src`.
*   **`prefix: ''`**: Define um prefixo para todas as classes geradas pelo Tailwind. Deixado em branco, usa os nomes de classe padrão (ex: `text-blue-500`).
*   **`theme`**: Seção para customizar o design system padrão do Tailwind.
    *   **`container`**: Customiza a classe `.container` do Tailwind, definindo centralização, padding e breakpoints.
    *   **`extend`**: Permite adicionar novas opções ou sobrescrever as existentes no tema padrão.
        *   **`colors`**: Define a paleta de cores do projeto. Muitas cores são definidas usando variáveis CSS (`hsl(var(--primary))`), o que é uma prática comum, especialmente com `shadcn/ui`, permitindo que os temas sejam facilmente alterados via CSS.
        *   **`borderRadius`**: Customiza os tamanhos de `border-radius` usando uma variável CSS `--radius`.
        *   **`keyframes`** e **`animation`**: Define animações CSS customizadas (`accordion-down`, `accordion-up`, etc.) e classes de utilitário para aplicá-las.
        *   **`fontFamily`**: Permite definir pilhas de fontes customizadas. O exemplo usa `Inter var`.
*   **`plugins`**: Array para adicionar plugins do Tailwind CSS.
    *   **`tailwindcss-animate`**: Adiciona utilitários para animações CSS, frequentemente usado com `shadcn/ui`.
    *   **`@tailwindcss/typography`**: Adiciona a classe `prose` que aplica estilos bonitos para blocos de texto gerados a partir de Markdown ou CMS.

## `postcss.config.js`

O PostCSS é uma ferramenta para transformar CSS com plugins JavaScript. O Tailwind CSS é, ele próprio, um plugin PostCSS.

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**Pontos Chave:**

*   **`tailwindcss: {}`**: Inclui o plugin Tailwind CSS no processo de build do PostCSS. Ele scanneia os arquivos definidos em `tailwind.config.js` (`content`), processa as diretivas do Tailwind (`@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`) e gera o CSS correspondente.
*   **`autoprefixer: {}`**: Adiciona automaticamente prefixos de fornecedores (vendor prefixes como `-webkit-`, `-moz-`) a regras CSS que os necessitam, garantindo maior compatibilidade entre navegadores.

## Integração com CSS Global (`src/index.css`)

O arquivo `src/index.css` (ou similar) é geralmente onde as diretivas do Tailwind são incluídas:

```css
/* Importa tokens de design (variáveis CSS) */
@import './styles/tokens.css';

/* Diretivas base do Tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Estilos base customizados */
@layer base {
  :root {
    --background: 0 0% 100%; /* Light mode background */
    /* ... outras variáveis para light mode ... */
  }
  .dark {
    --background: 240 10% 3.9%; /* Dark mode background */
    /* ... outras variáveis para dark mode ... */
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

**Funcionamento:**

1.  Quando o Vite processa o CSS, o PostCSS entra em ação.
2.  O plugin `tailwindcss` lê sua configuração (`tailwind.config.js`), procura por classes nos arquivos especificados (`content`), e substitui as diretivas `@tailwind` pelas classes geradas e estilos base.
3.  O plugin `autoprefixer` então processa o CSS resultante para adicionar prefixos de fornecedores.
4.  As variáveis CSS definidas em `tokens.css` e nas camadas `@layer base` são usadas pelo Tailwind (via `hsl(var(--...))`) e também podem ser usadas diretamente em CSS customizado.

Esta configuração permite uma estilização flexível e poderosa, combinando a velocidade do Tailwind com a capacidade de customização profunda através de seu arquivo de configuração e variáveis CSS. 