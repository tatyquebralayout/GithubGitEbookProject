import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@primer/react-brand'; // Importar ThemeProvider
// import App from './App.tsx'; // App foi movido para features/landing/LandingPage.tsx e é gerenciado pelo router
// import GuestAuthorPage from './pages/GuestAuthorPage.tsx'; // Gerenciado pelo router
// import GamePage from './pages/GamePage.tsx'; // Gerenciado pelo router
// import AboutAuthorPage from './pages/AboutAuthorPage.tsx'; // Gerenciado pelo router
// import EbookPage from './pages/EbookPage.tsx'; // Gerenciado pelo router
// import GitBasicCommandsPage from './pages/GitBasicCommandsPage.tsx'; // Gerenciado pelo router
import router from './router/index.tsx'; // Importar o router configurado
import './index.css';
import '@primer/react-brand/lib/css/main.css'; // Importar estilos principais do Primer Brand
import '@primer/react-brand/fonts/fonts.css'; // Importar fontes do Primer Brand (Mona Sans)

// A definição do router foi movida para src/router/index.tsx
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/guest-author',
//     element: <GuestAuthorPage />,
//   },
//   {
//     path: '/game',
//     element: <GamePage />,
//   },
//   {
//     path: '/game/basic-commands',
//     element: <GitBasicCommandsPage />,
//   },
//   {
//     path: '/about-author',
//     element: <AboutAuthorPage />,
//   },
//   {
//     path: '/ebook',
//     element: <EbookPage />,
//   },
// ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);