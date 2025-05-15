import React, { useState } from 'react';
import { TerminalIcon, GitBranchIcon, InfoIcon, MarkGithubIcon } from '@primer/octicons-react';
import InteractiveTerminal from './practiceChallenge/InteractiveTerminal';
import RepositoryGraph from './practiceChallenge/RepositoryGraph';
import GitHubRepositorySimulator from './practiceChallenge/GitHubRepositorySimulator';
import { useGitPracticeChallenge } from '../hooks/useGitPracticeChallenge';

const GitTerminalSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'graph' | 'github' | 'info'>('terminal');
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
          Git Terminal Simulator
        </div>
        <div className="flex space-x-2">
          {/* Botões do cabeçalho */}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center bg-gray-800 border-b border-gray-700">
        <button 
          onClick={() => setActiveTab('terminal')}
          className={`flex items-center px-4 py-2 text-sm ${
            activeTab === 'terminal' 
              ? 'text-white border-b-2 border-github-accent-emphasis' 
              : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          <TerminalIcon className="mr-1" size={16} />
          Terminal
        </button>
        <button 
          onClick={() => setActiveTab('graph')}
          className={`flex items-center px-4 py-2 text-sm ${
            activeTab === 'graph' 
              ? 'text-white border-b-2 border-github-accent-emphasis' 
              : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          <GitBranchIcon className="mr-1" size={16} />
          Grafo
        </button>
        <button 
          onClick={() => setActiveTab('github')}
          className={`flex items-center px-4 py-2 text-sm ${
            activeTab === 'github' 
              ? 'text-white border-b-2 border-github-accent-emphasis' 
              : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          <MarkGithubIcon className="mr-1" size={16} />
          GitHub
        </button>
        <button 
          onClick={() => setActiveTab('info')}
          className={`flex items-center px-4 py-2 text-sm ${
            activeTab === 'info' 
              ? 'text-white border-b-2 border-github-accent-emphasis' 
              : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          <InfoIcon className="mr-1" size={16} />
          Ajuda
        </button>
      </div>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row h-[600px]">
        {/* Terminal Panel */}
        <div className={`${
          activeTab === 'terminal' ? 'block' : 'hidden'
        } lg:block lg:w-1/3 h-full`}>
          <InteractiveTerminal 
            onProcessCommand={processCommand}
            currentPathString={currentPathDisplay}
            currentPathForHistory={currentPathArray}
          />
        </div>

        {/* Graph Panel */}
        <div className={`${
          activeTab === 'graph' ? 'block' : 'hidden'
        } lg:block lg:w-1/3 h-full p-4 bg-gray-800`}>
          <RepositoryGraph diagramDefinition={diagramDefinition} />
        </div>

        {/* GitHub Panel */}
        <div className={`${
          activeTab === 'github' ? 'block' : 'hidden'
        } lg:block lg:w-1/3 h-full p-4 bg-white overflow-auto`}>
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

        {/* Info Panel - Visível apenas quando selecionado */}
        <div className={`${
          activeTab === 'info' ? 'block' : 'hidden'
        } w-full h-full p-4 bg-gray-800 text-gray-300 overflow-auto`}>
          <h3 className="text-xl font-bold mb-4 text-white">Comandos Git Comuns</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-github-accent-fg">Inicialização</h4>
              <ul className="mt-2 space-y-2">
                <li><code className="bg-gray-700 px-2 py-1 rounded">git init</code> - Inicializa um novo repositório</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">git clone [url]</code> - Clona um repositório existente</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-github-accent-fg">Básicos</h4>
              <ul className="mt-2 space-y-2">
                <li><code className="bg-gray-700 px-2 py-1 rounded">git status</code> - Mostra o estado do repositório</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">git add [arquivo]</code> - Adiciona um arquivo para o stage</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">git commit -m "mensagem"</code> - Cria um novo commit com os arquivos staged</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">git log</code> - Mostra o histórico de commits</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-github-accent-fg">Branches</h4>
              <ul className="mt-2 space-y-2">
                <li><code className="bg-gray-700 px-2 py-1 rounded">git branch</code> - Lista todas as branches</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">git branch [nome]</code> - Cria uma nova branch</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">git checkout [branch]</code> - Muda para outra branch</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">git merge [branch]</code> - Mescla outra branch na branch atual</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-github-accent-fg">GitHub & Remotos</h4>
              <ul className="mt-2 space-y-2">
                <li><code className="bg-gray-700 px-2 py-1 rounded">git remote add [nome] [url]</code> - Adiciona um remoto</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">git push [remoto] [branch]</code> - Envia commits para o repositório remoto</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">git pull [remoto] [branch]</code> - Recebe commits do repositório remoto</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-github-accent-fg">Comandos de Terminal</h4>
              <ul className="mt-2 space-y-2">
                <li><code className="bg-gray-700 px-2 py-1 rounded">cd [diretório]</code> - Muda o diretório atual</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">mkdir [nome]</code> - Cria uma nova pasta</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">touch [arquivo]</code> - Cria um novo arquivo</li>
                <li><code className="bg-gray-700 px-2 py-1 rounded">clear</code> - Limpa o terminal e reinicia o simulador</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitTerminalSimulator; 