import React from 'react';
import InteractiveTerminal from './practiceChallenge/InteractiveTerminal';
import RepositoryGraph from './practiceChallenge/RepositoryGraph';
import GitHubRepositorySimulator from './practiceChallenge/GitHubRepositorySimulator';
import { useGitPracticeChallenge } from '../hooks/useGitPracticeChallenge';

const GitTerminalSimulator: React.FC = () => {
  const {
    diagramDefinition,
    processCommand,
    currentPathDisplay,
    currentPathArray,
    // GitHub simulado
    gitHubRepository,
    gitHubRemotes,
    gitHubPullRequests: _gitHubPullRequests,
    gitHubIssues: _gitHubIssues,
    gitHubFileStructure,
    pushedBranches,
    commits,
    createRepository,
  } = useGitPracticeChallenge();

  return (
    <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-2">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-center font-mono text-sm text-gray-400">Git Simulator</div>
        <div className="flex space-x-2">{/* Botões do cabeçalho */}</div>
      </div>

      {/* Layout de três colunas */}
      <div className="flex h-[600px] flex-col lg:flex-row">
        {/* Terminal Panel */}
        <div className="h-full border-r border-gray-700 lg:w-1/3">
          <div className="flex h-10 items-center border-b border-gray-700 bg-gray-800 px-4">
            <span className="text-sm font-semibold text-gray-300">Terminal</span>
          </div>
          <div className="h-[calc(100%-2.5rem)]">
            <InteractiveTerminal
              onProcessCommand={processCommand}
              currentPathString={currentPathDisplay}
              currentPathForHistory={currentPathArray}
            />
          </div>
        </div>

        {/* Graph Panel */}
        <div className="h-full border-r border-gray-700 bg-gray-800 lg:w-1/3">
          <div className="flex h-10 items-center border-b border-gray-700 bg-gray-800 px-4">
            <span className="text-sm font-semibold text-gray-300">Grafo do Repositório</span>
          </div>
          <div className="h-[calc(100%-2.5rem)] p-4">
            <RepositoryGraph diagramDefinition={diagramDefinition} />
          </div>
        </div>

        {/* GitHub Panel */}
        <div className="h-full overflow-auto bg-white lg:w-1/3">
          <div className="flex h-10 items-center border-b border-gray-700 bg-gray-800 px-4">
            <span className="text-sm font-semibold text-gray-300">GitHub</span>
          </div>
          <div className="h-[calc(100%-2.5rem)]">
            <GitHubRepositorySimulator
              gitHubRepository={gitHubRepository}
              gitHubRemotes={gitHubRemotes}
              gitHubFileStructure={gitHubFileStructure}
              commits={commits}
              pushedBranches={pushedBranches}
              _currentBranch={currentPathArray[currentPathArray.length - 1] || 'main'}
              createRepository={createRepository}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitTerminalSimulator;
