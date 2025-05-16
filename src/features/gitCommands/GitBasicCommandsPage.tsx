import React from 'react';
import AppLayout from '../../components/layout/AppLayout';
import GitBasicCommands from './components/basic/BasicCommands';

const GitBasicCommandsPage: React.FC = () => (
  <AppLayout>
    <GitBasicCommands />
  </AppLayout>
);

export default GitBasicCommandsPage;
