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
    createRepository
  } = useGitPracticeChallenge();

  return (
    <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-center text-gray-400 text-sm font-mono">
          Git Simulator
        </div>
        <div className="flex space-x-2">
          {/* Botões do cabeçalho */}
        </div>
      </div>

      {/* Layout de três colunas */}
      <div className="flex flex-col lg:flex-row h-[600px]">
        {/* Terminal Panel */}
        <div className="lg:w-1/3 h-full border-r border-gray-700">
          <div className="h-10 bg-gray-800 border-b border-gray-700 flex items-center px-4">
            <span className="text-sm text-gray-300 font-semibold">Terminal</span>
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
        <div className="lg:w-1/3 h-full border-r border-gray-700 bg-gray-800">
          <div className="h-10 bg-gray-800 border-b border-gray-700 flex items-center px-4">
            <span className="text-sm text-gray-300 font-semibold">Grafo do Repositório</span>
          </div>
          <div className="h-[calc(100%-2.5rem)] p-4">
            <RepositoryGraph diagramDefinition={diagramDefinition} />
          </div>
        </div>

        {/* GitHub Panel */}
        <div className="lg:w-1/3 h-full bg-white overflow-auto">
          <div className="h-10 bg-gray-800 border-b border-gray-700 flex items-center px-4">
            <span className="text-sm text-gray-300 font-semibold">GitHub</span>
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