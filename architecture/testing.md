# Estratégia de Testes no GitSheet

Testes automatizados são cruciais para garantir a qualidade do software, facilitar refatorações seguras e documentar o comportamento esperado do código. O GitSheet está configurado para testes usando Vitest e React Testing Library.

## Ferramentas de Teste

*   **[Vitest](https://vitest.dev/)**: Um executor de testes unitários e de integração extremamente rápido, construído sobre o Vite. Ele oferece uma API compatível com Jest, o que facilita a migração e o aprendizado.
    *   Configurado implicitamente através do Vite (geralmente não requer um arquivo de configuração Vitest separado para configurações básicas se estiver usando Vite).
    *   Os scripts no `package.json` (`test`, `test:ui`, `coverage`) invocam o Vitest.

*   **[React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro/)**: Uma biblioteca para testar componentes React de uma forma que se assemelha mais à maneira como os usuários interagem com eles.
    *   Encoraja testes que focam no comportamento do componente do ponto de vista do usuário, em vez de detalhes de implementação interna.
    *   Usada para renderizar componentes, encontrar elementos no DOM e interagir com eles (clicar, digitar, etc.).

*   **`@testing-library/jest-dom`**: Fornece matchers customizados para Jest (e Vitest, que é compatível) para facilitar a escrita de asserções sobre o estado do DOM (ex: `toBeInTheDocument()`, `toHaveTextContent()`).
    *   Importado em `src/test/setup.ts`.

## Configuração de Teste (`src/test/setup.ts`)

O arquivo `src/test/setup.ts` é usado para configurar o ambiente de teste antes que os testes sejam executados.

```typescript
// src/test/setup.ts
import '@testing-library/jest-dom';

// Você pode adicionar outras configurações globais aqui, se necessário.
// Por exemplo, mocks para APIs globais (fetch, localStorage), etc.

// Exemplo de mock para localStorage (se necessário):
// const localStorageMock = (() => {
//   let store: { [key: string]: string } = {};
//   return {
//     getItem: (key: string) => store[key] || null,
//     setItem: (key: string, value: string) => {
//       store[key] = value.toString();
//     },
//     removeItem: (key: string) => {
//       delete store[key];
//     },
//     clear: () => {
//       store = {};
//     },
//   };
// })();
// Object.defineProperty(window, 'localStorage', { value: localStorageMock });
```

*   **`import '@testing-library/jest-dom';`**: Importa e configura os matchers do `jest-dom` para que estejam disponíveis em todos os arquivos de teste.
*   Comentários no arquivo sugerem locais para adicionar mocks globais, como para `localStorage`, o que é uma prática comum, já que o ambiente de teste (Node.js) não possui `localStorage` nativamente.

## Scripts de Teste no `package.json`

```json
{
  "scripts": {
    // ...
    "test": "vitest",
    "test:ui": "vitest --ui",
    "coverage": "vitest run --coverage"
  }
}
```

*   **`npm run test`**: Executa os testes usando Vitest no modo watch (re-executa os testes em arquivos alterados).
*   **`npm run test:ui`**: Executa os testes com a interface de usuário do Vitest (`@vitest/ui`), que fornece uma visualização gráfica dos resultados dos testes no navegador.
*   **`npm run coverage`**: Executa os testes uma vez e gera um relatório de cobertura de código. A cobertura de código indica qual porcentagem do seu código é coberta por testes automatizados.

## Onde Escrever Testes

Embora não haja exemplos de arquivos de teste (`.test.tsx` ou `.spec.tsx`) no código-fonte fornecido até o momento da análise, a convenção é colocar os arquivos de teste próximos aos arquivos que eles testam.

*   **Para Componentes:** `src/components/atoms/Button.test.tsx` testaria `Button.tsx`.
*   **Para Hooks:** `src/features/author/hooks/useAuthorDialog.test.ts` testaria `useAuthorDialog.ts`.
*   **Para Utils:** `src/lib/utils/formatDate.test.ts` testaria uma função `formatDate`.

## Tipos de Testes a Considerar

1.  **Testes Unitários:**
    *   Testam a menor unidade de código isoladamente (ex: uma função utilitária, um hook customizado, um componente simples).
    *   **Exemplo:** Testar se um hook `useCounter` incrementa e decrementa corretamente.

2.  **Testes de Componente (com RTL):**
    *   Renderizam um componente React e verificam seu output e comportamento com base na interação do usuário.
    *   **Exemplo:** Testar se um componente `Button` renderiza o texto correto, se está habilitado/desabilitado conforme as props, e se a função `onClick` é chamada quando clicado.
    *   Testar se um formulário exibe mensagens de erro quando dados inválidos são inseridos.

3.  **Testes de Integração:**
    *   Testam a interação entre múltiplos componentes ou unidades.
    *   **Exemplo:** Testar se, ao selecionar uma opção em um componente `Select`, uma lista filtrada é exibida corretamente em outro componente.

4.  **Testes de Feature (Páginas):**
    *   Podem testar o fluxo principal de uma feature ou página, simulando interações do usuário e verificando se a UI se comporta como esperado.

## Exemplo (Hipotético) de Teste de Componente

```tsx
// src/components/ui/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button'; // Supondo que Button seja exportado assim
import '@testing-library/jest-dom';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn(); // Mock de função do Vitest (ou jest.fn())
    render(<Button onClick={handleClick}>Click Test</Button>);
    fireEvent.click(screen.getByText('Click Test'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByText('Disabled Button')).toBeDisabled();
  });
});
```

## Estratégia e Próximos Passos

A fundação para testes está estabelecida com Vitest e React Testing Library. Os próximos passos incluiriam:

*   **Escrever testes** para componentes de UI críticos, hooks com lógica complexa e funções utilitárias.
*   **Definir uma meta de cobertura de código** e monitorá-la.
*   **Integrar testes em um pipeline de CI/CD** para garantir que os testes sejam executados automaticamente antes de cada deploy.
*   **Considerar testes end-to-end (E2E)** com ferramentas como Cypress ou Playwright para testar fluxos de usuário completos na aplicação rodando no navegador, se a complexidade do projeto justificar.

Manter uma boa suíte de testes é um investimento que compensa a longo prazo, aumentando a confiança nas alterações do código e reduzindo a ocorrência de bugs em produção. 