import React from 'react';
import { Terminal, Lightbulb } from 'lucide-react';

const GitTips: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="gh-card">
        <div className="gh-card-header">
          <Terminal className="h-5 w-5 text-github-fg-default mr-2" />
          <span className="text-sm font-medium">Dicas e Truques do Git</span>
        </div>
        <div className="gh-card-body space-y-4">
          <div className="flex items-start space-x-4">
            <Lightbulb className="h-5 w-5 text-github-fg-default mt-1" />
            <div>
              <h3 className="font-medium text-github-fg-default">Aliases do Git</h3>
              <p className="text-sm text-github-fg-muted">Configure atalhos para comandos frequentes</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Lightbulb className="h-5 w-5 text-github-fg-default mt-1" />
            <div>
              <h3 className="font-medium text-github-fg-default">Git Hooks</h3>
              <p className="text-sm text-github-fg-muted">Automatize tarefas com hooks do Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitTips; 