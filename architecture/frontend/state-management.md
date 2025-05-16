# Gerenciamento de Estado no GitSheet

O gerenciamento de estado em uma aplicação React pode variar de simples (estado local de componente) a complexo (estado global compartilhado entre muitas partes da aplicação). O GitSheet parece estar preparado para usar diferentes abordagens, embora o uso de gerenciamento de estado global ainda seja incipiente.

## 1. Estado Local de Componente (`useState`, `useReducer`)

Esta é a forma mais básica e comum de gerenciamento de estado no React.

*   **`useState`**: Usado para gerenciar estados simples (booleanos, strings, números, pequenos objetos/arrays) dentro de um único componente.
    *   **Exemplos no Projeto:**
        *   `Navbar.tsx`: `isMenuOpen`, `isScrolled`, `activeDropdown` são gerenciados com `useState` para controlar a UI do Navbar.
        *   `CommandsBase.tsx`: `searchTerm`, `filterLevel`, `currentPage` são usados para controlar a filtragem e paginação dos comandos.
        *   Muitos outros componentes usam `useState` para controlar modais, seleções, inputs, etc.
*   **`useReducer`**: Uma alternativa ao `useState` para lógicas de estado mais complexas que envolvem múltiplas sub-valores ou quando o próximo estado depende do anterior de uma forma mais elaborada.
    *   **Exemplo no Projeto:** O hook `useAuthorDialog` em `src/features/author/hooks/useAuthorDialog.ts` utiliza `useReducer` para gerenciar um estado mais complexo (`dialogState`) que inclui o autor selecionado, o passo atual do diálogo, a visibilidade do diálogo, etc. Isso é apropriado porque as transições entre os estados do diálogo podem ser bem definidas através de ações.

**Quando usar:**

*   Para dados que são relevantes apenas para um componente específico e seus filhos diretos (via props drilling, se limitado).
*   Para controlar a UI de um componente (visibilidade, abas ativas, etc.).

## 2. React Context API

A Context API do React fornece uma maneira de passar dados através da árvore de componentes sem ter que passar props manualmente em cada nível. É útil para compartilhar dados que podem ser considerados "globais" para uma árvore de componentes React, como o usuário autenticado, tema, ou preferências de idioma.

*   **Situação no GitSheet:**
    *   O arquivo `src/context/index.ts` contém um **exemplo comentado** de como criar e usar a Context API.
        ```typescript
        // import { createContext, useContext, useState, ReactNode } from 'react';

        // interface AppContextType {
        //   user: string | null;
        //   setUser: (user: string | null) => void;
        // }

        // const AppContext = createContext<AppContextType | undefined>(undefined);

        // export const AppProvider = ({ children }: { children: ReactNode }) => {
        //   const [user, setUser] = useState<string | null>(null);
        //   return (
        //     <AppContext.Provider value={{ user, setUser }}>
        //       {children}
        //     </AppContext.Provider>
        //   );
        // };

        // export const useAppContext = () => {
        //   const context = useContext(AppContext);
        //   if (context === undefined) {
        //     throw new Error('useAppContext must be used within an AppProvider');
        //   }
        //   return context;
        // };
        ```
    *   **Atualmente, não parece haver um uso ativo da Context API para gerenciamento de estado global na aplicação principal.**
    *   O `ThemeToggle` no `Navbar.tsx` implementa sua própria lógica de tema (light/dark/system) usando `localStorage` e estado local, mas poderia ser um candidato para Context se o tema precisasse ser acessado ou modificado por muitos componentes distantes na árvore.

**Quando usar:**

*   Para dados que precisam ser acessados por muitos componentes em diferentes níveis de aninhamento.
*   Para evitar "prop drilling" excessivo.
*   Preferível para dados que não mudam com muita frequência, para evitar re-renderizações desnecessárias de todos os consumidores do contexto.

## 3. Zustand (Gerenciamento de Estado Global)

Zustand é uma biblioteca de gerenciamento de estado pequena, rápida e escalável, baseada em hooks. Ela oferece uma API simples e flexível, sendo menos verbosa que Redux.

*   **Situação no GitSheet:**
    *   O arquivo `src/store/index.ts` contém um **exemplo comentado** de como criar uma store Zustand (`useBearStore`):
        ```typescript
        // import { create } from 'zustand';

        // interface BearState {
        //   bears: number;
        //   increasePopulation: () => void;
        //   removeAllBears: () => void;
        // }

        // export const useBearStore = create<BearState>()((set) => ({
        //   bears: 0,
        //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        //   removeAllBears: () => set({ bears: 0 }),
        // }));
        ```
    *   **Atualmente, não parece haver um uso ativo do Zustand para gerenciamento de estado global na aplicação principal.**
    *   O `eslint.config.js` inclui o plugin `eslint-plugin-zustand`, o que sugere uma intenção de usá-lo ou que ele foi usado anteriormente.

**Quando usar:**

*   Para estado global complexo que precisa ser acessado e modificado por muitos componentes independentes.
*   Quando você precisa de otimizações de performance para re-renderizações (Zustand é bom nisso, pois os componentes só re-renderizam se os dados específicos que eles consomem da store mudarem).
*   Para substituir Redux em projetos que buscam uma solução mais simples e com menos boilerplate.

## Conclusão e Estratégia Atual

A estratégia de gerenciamento de estado no GitSheet atualmente se baseia primariamente em **estado local de componente** (`useState`, `useReducer`). Isso é adequado para muitas funcionalidades, especialmente quando o estado é contido dentro de uma feature ou de um componente específico e seus descendentes diretos.

O projeto está **preparado para adotar Context API e Zustand** para necessidades de estado mais globais, como evidenciado pelos exemplos nos diretórios `context/` e `store/` e a inclusão do plugin ESLint para Zustand. No entanto, essas ferramentas ainda não foram integradas de forma significativa ao fluxo principal da aplicação.

**Possíveis Casos de Uso Futuros para Estado Global:**

*   **Autenticação do Usuário:** Informações do usuário logado.
*   **Preferências Globais:** Além do tema, outras configurações do usuário que afetam toda a aplicação.
*   **Estado Compartilhado entre Features Não Relacionadas Diretamente:** Se diferentes features precisarem reagir a mudanças de estado em outras features sem uma relação pai-filho óbvia.
*   **Cache de Dados da API:** Embora não haja chamadas de API evidentes ainda, Zustand (ou React Query/SWR) seria útil para gerenciar o estado de dados buscados.

À medida que o projeto cresce, a necessidade de uma solução de gerenciamento de estado global mais robusta como Zustand ou Context API provavelmente aumentará. 