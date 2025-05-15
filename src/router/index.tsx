import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

// Lazy imports para melhorar performance
const LandingPage = lazy(() => import('../features/landing/LandingPage'));
const GuestAuthorPage = lazy(() => import('../features/author/GuestAuthorPage'));
const GamePage = lazy(() => import('../features/game/GamePage'));
const AboutAuthorPage = lazy(() => import('../features/author/AboutAuthorPage'));
const EbookPage = lazy(() => import('../features/ebook/EbookPage'));
const GitBasicCommandsPage = lazy(() => import('../features/gitCommands/GitBasicCommandsPage'));
const GitIntermediateCommandsPage = lazy(
  () => import('../features/gitCommands/GitIntermediateCommandsPage')
);
const GitAdvancedCommandsPage = lazy(
  () => import('../features/gitCommands/GitAdvancedCommandsPage')
);
const GitHubCommandsPage = lazy(() => import('../features/gitCommands/GitHubCommandsPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/guest-author',
    element: <GuestAuthorPage />,
  },
  {
    path: '/game',
    element: <GamePage />,
  },
  {
    path: '/game/basic-commands',
    element: <GitBasicCommandsPage />,
  },
  {
    path: '/game/intermediate-commands',
    element: <GitIntermediateCommandsPage />,
  },
  {
    path: '/game/advanced-commands',
    element: <GitAdvancedCommandsPage />,
  },
  {
    path: '/game/github-commands',
    element: <GitHubCommandsPage />,
  },
  {
    path: '/about-author',
    element: <AboutAuthorPage />,
  },
  {
    path: '/ebook',
    element: <EbookPage />,
  },
]);

export default router;
