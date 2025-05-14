import React from 'react';
import { Terminal, GitBranch, GitCommit } from 'lucide-react';

const BasicCommands: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="gh-card">
        <div className="gh-card-header">
          <Terminal className="h-5 w-5 text-github-fg-default mr-2" />
          <span className="text-sm font-medium">Comandos Básicos do Git</span>
        </div>
        <div className="gh-card-body space-y-4">
          <div className="flex items-start space-x-4">
            <GitBranch className="h-5 w-5 text-github-fg-default mt-1" />
            <div>
              <h3 className="font-medium text-github-fg-default">git init</h3>
              <p className="text-sm text-github-fg-muted">Inicializa um novo repositório Git</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <GitCommit className="h-5 w-5 text-github-fg-default mt-1" />
            <div>
              <h3 className="font-medium text-github-fg-default">git add</h3>
              <p className="text-sm text-github-fg-muted">Adiciona arquivos ao staging area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicCommands; 