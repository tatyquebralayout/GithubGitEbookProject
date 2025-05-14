import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@primer/react-brand'; // Import ThemeProvider
// import App from './App.tsx'; // App was moved to features/landing/LandingPage.tsx and is managed by the router
// import GuestAuthorPage from './pages/GuestAuthorPage.tsx'; // Managed by the router
// import GamePage from './pages/GamePage.tsx'; // Managed by the router
// import AboutAuthorPage from './pages/AboutAuthorPage.tsx'; // Managed by the router
// import EbookPage from './pages/EbookPage.tsx'; // Managed by the router
// import GitBasicCommandsPage from './pages/GitBasicCommandsPage.tsx'; // Managed by the router
import router from './router/index.tsx'; // Import the configured router
import './index.css';
import '@primer/react-brand/lib/css/main.css'; // Import Primer Brand main styles
import '@primer/react-brand/fonts/fonts.css'; // Import Primer Brand fonts (Mona Sans)

// The router definition was moved to src/router/index.tsx
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