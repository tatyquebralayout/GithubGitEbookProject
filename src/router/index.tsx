import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { lazy } from 'react';
import AppLayout from '../components/layout/AppLayout';

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

// HomePage não existe, usando LandingPage como index.
// const HomePage = lazy(() => import('../pages/HomePage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="git-comandos-basicos" element={<GitBasicCommandsPage />} />
      <Route path="github-comandos" element={<GitHubCommandsPage />} />
      <Route path="game" element={<GamePage />} />
      <Route path="guest-author" element={<GuestAuthorPage />} />
      <Route path="game/basic-commands" element={<GitBasicCommandsPage />} />
      <Route path="game/intermediate-commands" element={<GitIntermediateCommandsPage />} />
      <Route path="game/advanced-commands" element={<GitAdvancedCommandsPage />} />
      <Route path="about-author" element={<AboutAuthorPage />} />
      <Route path="ebook" element={<EbookPage />} />
    </Route>
  )
);

export default router;
