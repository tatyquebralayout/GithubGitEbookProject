import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// import App from './App.tsx'; // App foi movido para features/landing/LandingPage.tsx e é gerenciado pelo router
// import GuestAuthorPage from './pages/GuestAuthorPage.tsx'; // Gerenciado pelo router
// import GamePage from './pages/GamePage.tsx'; // Gerenciado pelo router
// import AboutAuthorPage from './pages/AboutAuthorPage.tsx'; // Gerenciado pelo router
// import EbookPage from './pages/EbookPage.tsx'; // Gerenciado pelo router
// import GitBasicCommandsPage from './pages/GitBasicCommandsPage.tsx'; // Gerenciado pelo router
import router from './router/index.tsx'; // Importar o router configurado
import './index.css';

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
    <RouterProvider router={router} />
  </StrictMode>
);