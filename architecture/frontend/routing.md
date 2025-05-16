# Roteamento com React Router DOM

O GitSheet utiliza a biblioteca [React Router DOM](https://reactrouter.com/) (v6+) para gerenciar a navegação e o roteamento no lado do cliente (client-side routing). Isso permite que a aplicação tenha múltiplas "páginas" ou visualizações que podem ser acessadas através de URLs distintas, sem a necessidade de recarregar a página inteira do servidor a cada navegação.

## Configuração Principal (`src/router/index.tsx`)

O arquivo `src/router/index.tsx` é o ponto central da configuração de rotas.

```tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

// Layout Principal
import AppLayout from '@/components/layout/AppLayout';

// Páginas (importadas dinamicamente com React.lazy para code splitting)
const LandingPage = lazy(() => import('@/features/landing/LandingPage'));
const GitBasicCommandsPage = lazy(() => import('@/features/gitCommands/GitBasicCommandsPage'));
// ... (outras importações lazy para GitIntermediateCommandsPage, GitAdvancedCommandsPage, etc.)
const AboutAuthorPage = lazy(() => import('@/features/author/AboutAuthorPage'));
const GuestAuthorPage = lazy(() => import('@/features/author/GuestAuthorPage'));
const GamePage = lazy(() => import('@/features/game/GamePage'));
const UIDemo = lazy(() => import('@/pages/UIDemo'));
const MermaidDemo = lazy(() => import('@/pages/MermaidDemo'));

// Fallback para Suspense
import LoadingFallback from '@/components/atoms/LoadingFallback';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/git-basics', element: <GitBasicCommandsPage /> },
      { path: '/git-intermediate', element: <GitIntermediateCommandsPage /> },
      { path: '/git-advanced', element: <GitAdvancedCommandsPage /> },
      { path: '/github-commands', element: <GitHubCommandsPage /> },
      { path: '/git-practice-challenge', element: <GitPracticeChallengePage /> },
      { path: '/author/about', element: <AboutAuthorPage /> },
      { path: '/author/guest', element: <GuestAuthorPage /> }, // Exemplo
      { path: '/game', element: <GamePage /> },
      { path: '/ui-demo', element: <UIDemo /> },
      { path: '/mermaid-demo', element: <MermaidDemo /> },
      // Adicionar uma rota catch-all para página não encontrada (404) seria uma boa prática
      // { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

const AppRouter = () => (
  <Suspense fallback={<LoadingFallback />}>
    <RouterProvider router={router} />
  </Suspense>
);

export default AppRouter;
```

**Pontos Chave:**

1.  **`createBrowserRouter`**: Esta função do React Router v6 é usada para criar uma instância do roteador que utiliza a History API do navegador para manter a UI sincronizada com a URL.

2.  **`RouterProvider`**: Este componente recebe a instância do roteador criada e disponibiliza a funcionalidade de roteamento para a aplicação.

3.  **Estrutura de Rotas (Objetos de Rota)**:
    *   As rotas são definidas como um array de objetos.
    *   **Rotas Aninhadas (`children`)**: O projeto utiliza uma rota pai com `element: <AppLayout />`. Isso significa que o `AppLayout` (que contém Navbar, Footer e um `<Outlet />`) será renderizado para todas as rotas filhas definidas em `children`.
    *   O componente `<Outlet />` dentro de `AppLayout` é onde os componentes das rotas filhas correspondentes à URL atual serão renderizados.
    *   Cada objeto de rota filha especifica um `path` (o caminho da URL) e o `element` (o componente React a ser renderizado para esse caminho).

4.  **`React.lazy` e `Suspense` (Code Splitting)**:
    *   As páginas são importadas usando `React.lazy(() => import(...))`. Isso implementa o **code splitting**, o que significa que o código de cada página só será carregado pelo navegador quando o usuário navegar para aquela rota específica.
    *   Isso melhora significativamente o tempo de carregamento inicial da aplicação, pois o bundle inicial de JavaScript é menor.
    *   O componente `<Suspense fallback={<LoadingFallback />}>` envolve o `<RouterProvider />`. Enquanto um componente carregado com `React.lazy` está sendo baixado, o `Suspense` renderizará o `LoadingFallback` (um spinner ou indicador de carregamento).

## Componente de Layout Principal (`AppLayout.tsx`)

O `AppLayout.tsx` (em `src/components/layout/`) desempenha um papel crucial no roteamento:

```tsx
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
// ... outros imports

const AppLayout = () => {
  const location = useLocation();

  // Lógica para scroll to top em mudança de rota
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">
        <Outlet /> {/* Componentes da rota filha são renderizados aqui */}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
```

*   **`<Outlet />`**: Este componente do React Router é o placeholder onde o componente da rota filha ativa (ex: `LandingPage`, `GitBasicCommandsPage`) será renderizado.
*   **`useLocation` e `useEffect`**: Usados para rolar a página para o topo sempre que a rota muda, uma prática comum para melhorar a experiência do usuário em SPAs (Single Page Applications).

## Navegação

A navegação entre as rotas é feita principalmente de duas formas:

1.  **Componente `<Link>`**: Fornecido pelo React Router DOM, o componente `<Link to="/caminho">Texto do Link</Link>` é usado para criar links declarativos. Ele previne o recarregamento completo da página e atualiza a URL usando a History API.
    *   Exemplo no `Navbar.tsx` ou em botões de navegação.

2.  **Hook `useNavigate`**: Para navegação programática (ex: após o envio de um formulário ou alguma outra ação do usuário), o hook `useNavigate` pode ser usado.
    ```tsx
    import { useNavigate } from 'react-router-dom';

    function MeuComponente() {
      const navigate = useNavigate();

      const handleSubmit = () => {
        // ... lógica ...
        navigate('/outra-pagina');
      };
      // ...
    }
    ```

## Considerações Adicionais

*   **Rotas Protegidas/Privadas**: Para rotas que exigem autenticação, o React Router permite a criação de componentes de layout ou rotas que verificam o status de autenticação e redirecionam o usuário se necessário (não implementado explicitamente no código fornecido, mas é uma extensão comum).
*   **Página 404 (Não Encontrada)**: É uma boa prática adicionar uma rota "catch-all" (ex: `{ path: '*', element: <NotFoundPage /> }`) no final da lista de rotas para lidar com URLs que não correspondem a nenhuma rota definida.
*   **Parâmetros de Rota**: Rotas podem incluir parâmetros dinâmicos (ex: `/users/:userId`). O hook `useParams` é usado para acessar esses parâmetros dentro do componente da rota.
*   **Query Params**: O hook `useSearchParams` pode ser usado para ler e modificar os query parameters da URL.

O sistema de roteamento do GitSheet, com `createBrowserRouter`, rotas aninhadas, code splitting com `React.lazy` e `Suspense`, e o uso do `AppLayout` com `<Outlet />`, forma uma base sólida e moderna para a navegação na aplicação. 