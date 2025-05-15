import React from 'react';
import { TerminalIcon, LightBulbIcon } from '@primer/octicons-react';
import {
  GitChallengeCard,
  GitChallengeCardHeader,
  GitChallengeCardBody,
} from '../../../components/ui';

const GitTips: React.FC = () => {
  return (
    <div className="space-y-6">
      <GitChallengeCard>
        <GitChallengeCardHeader>
          <TerminalIcon size={20} className="mr-2 text-github-fg-default" />
          <span className="text-sm font-medium">Dicas e Truques do Git</span>
        </GitChallengeCardHeader>
        <GitChallengeCardBody className="space-y-4">
          <div className="flex items-start space-x-4">
            <LightBulbIcon size={20} className="mt-1 text-github-fg-default" />
            <div>
              <h3 className="font-medium text-github-fg-default">Aliases do Git</h3>
              <p className="text-sm text-github-fg-muted">
                Configure atalhos para comandos frequentes
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <LightBulbIcon size={20} className="mt-1 text-github-fg-default" />
            <div>
              <h3 className="font-medium text-github-fg-default">Git Hooks</h3>
              <p className="text-sm text-github-fg-muted">Automatize tarefas com hooks do Git</p>
            </div>
          </div>
        </GitChallengeCardBody>
      </GitChallengeCard>
    </div>
  );
};

export default GitTips;
