import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../features/landing/LandingPage';
import GuestAuthorPage from '../features/author/GuestAuthorPage';
import GamePage from '../features/game/GamePage';
import AboutAuthorPage from '../features/author/AboutAuthorPage';
import EbookPage from '../features/ebook/EbookPage';
import GitBasicCommandsPage from '../features/gitCommands/GitBasicCommandsPage';
import GitIntermediateCommandsPage from '../features/gitCommands/GitIntermediateCommandsPage';
import GitAdvancedCommandsPage from '../features/gitCommands/GitAdvancedCommandsPage';
import GitHubCommandsPage from '../features/gitCommands/GitHubCommandsPage';

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