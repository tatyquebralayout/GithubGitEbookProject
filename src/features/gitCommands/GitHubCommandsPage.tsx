import React from 'react';
import AppLayout from '../../components/layout/AppLayout';
import GitHubCommands from './components/GitHubCommands';

const GitHubCommandsPage: React.FC = () => (
  <AppLayout>
    <GitHubCommands />
  </AppLayout>
);

export default GitHubCommandsPage;
