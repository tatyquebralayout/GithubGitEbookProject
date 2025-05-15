import React, { useState } from 'react';
import { TerminalIcon, GitBranchIcon, InfoIcon } from '@primer/octicons-react';
import InteractiveTerminal from './practiceChallenge/InteractiveTerminal';
import RepositoryGraph from './practiceChallenge/RepositoryGraph';
import { useGitPracticeChallenge } from '../hooks/useGitPracticeChallenge';

const GitTerminalSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'graph' | 'info'>('terminal');
  const { 
    diagramDefinition, 
    processCommand, 
    currentPathDisplay,
    currentPathArray
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

      {/* Navigation Tabs - Visível apenas em telas pequenas */}
      <div className="flex items-center bg-gray-800 border-b border-gray-700 lg:hidden">
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
      <div className="flex flex-col lg:flex-row h-[500px]">
        {/* Terminal Panel - Sempre visível em desktop, condicional em mobile */}
        <div className={`${
          activeTab === 'terminal' || activeTab === 'info' ? 'block' : 'hidden'
        } lg:block lg:w-1/2 h-full ${activeTab === 'info' ? 'hidden lg:block' : ''}`}>
          <InteractiveTerminal 
            onProcessCommand={processCommand}
            currentPathString={currentPathDisplay}
            currentPathForHistory={currentPathArray}
          />
        </div>

        {/* Graph Panel - Sempre visível em desktop, condicional em mobile */}
        <div className={`${
          activeTab === 'graph' || activeTab === 'info' ? 'block' : 'hidden'
        } lg:block lg:w-1/2 h-full p-4 bg-gray-800 ${activeTab === 'info' ? 'hidden lg:block' : ''}`}>
          <RepositoryGraph diagramDefinition={diagramDefinition} />
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