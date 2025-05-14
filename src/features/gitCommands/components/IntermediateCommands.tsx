import React from 'react';
import { Terminal, GitBranch, GitMerge } from 'lucide-react';

const IntermediateCommands: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="gh-card">
        <div className="gh-card-header">
          <Terminal className="h-5 w-5 text-github-fg-default mr-2" />
          <span className="text-sm font-medium">Comandos Intermediários do Git</span>
        </div>
        <div className="gh-card-body space-y-4">
          <div className="flex items-start space-x-4">
            <GitBranch className="h-5 w-5 text-github-fg-default mt-1" />
            <div>
              <h3 className="font-medium text-github-fg-default">git branch</h3>
              <p className="text-sm text-github-fg-muted">Gerencia branches no repositório</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <GitMerge className="h-5 w-5 text-github-fg-default mt-1" />
            <div>
              <h3 className="font-medium text-github-fg-default">git merge</h3>
              <p className="text-sm text-github-fg-muted">Combina alterações de diferentes branches</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntermediateCommands; 