import React, { useState } from 'react';
import SimpleMermaidGitGraph from '../../../../components/common/SimpleMermaidGitGraph';
import MermaidDiagram from '../../../../components/common/MermaidDiagram';

interface RepositoryGraphProps {
  diagramDefinition: string;
}

const RepositoryGraph: React.FC<RepositoryGraphProps> = ({ diagramDefinition }) => {
  // Estado para orientação do diagrama
  const [orientation, setOrientation] = useState<'TB' | 'BT' | 'LR'>('TB');
  
  // Verifica se o diagrama é um diagrama Git
  const isGitGraph = diagramDefinition.includes('gitGraph');
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-semibold text-github-fg-default">Visualização do Repositório</h3>
        
        {isGitGraph && (
          <div className="flex space-x-1">
            <button 
              onClick={() => setOrientation('TB')}
              className={`px-2 py-1 text-xs rounded ${
                orientation === 'TB' 
                  ? 'bg-github-accent-emphasis text-white' 
                  : 'bg-github-canvas-subtle hover:bg-github-canvas-inset'
              }`}
              title="Top to Bottom"
            >
              ↓
            </button>
            <button 
              onClick={() => setOrientation('BT')}
              className={`px-2 py-1 text-xs rounded ${
                orientation === 'BT' 
                  ? 'bg-github-accent-emphasis text-white' 
                  : 'bg-github-canvas-subtle hover:bg-github-canvas-inset'
              }`}
              title="Bottom to Top"
            >
              ↑
            </button>
            <button 
              onClick={() => setOrientation('LR')}
              className={`px-2 py-1 text-xs rounded ${
                orientation === 'LR' 
                  ? 'bg-github-accent-emphasis text-white' 
                  : 'bg-github-canvas-subtle hover:bg-github-canvas-inset'
              }`}
              title="Left to Right"
            >
              →
            </button>
          </div>
        )}
      </div>
      
      <div className="flex-grow flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md bg-white p-2 overflow-auto">
        {diagramDefinition ? (
          isGitGraph ? (
            <SimpleMermaidGitGraph 
              id="repo-graph-dynamic"
              orientation={orientation}
              className="w-full h-full"
            />
          ) : (
            <MermaidDiagram chart={diagramDefinition} diagramId="repo-graph-dynamic" />
          )
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h4 className="text-gray-600 font-semibold mb-2">Nenhum repositório inicializado</h4>
            <p className="text-gray-400 text-sm mb-2">
              Você ainda não tem nenhum projeto Git iniciado.
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Use o terminal ao lado para criar e inicializar um repositório.
            </p>
            <div className="bg-gray-100 rounded-lg p-3 max-w-md">
              <p className="text-gray-600 text-xs mb-1 font-medium">Passos sugeridos:</p>
              <ol className="text-gray-500 text-xs text-left list-decimal pl-5 space-y-1">
                <li>Digite <code className="bg-gray-200 px-1 py-0.5 rounded">mkdir meu-projeto</code> para criar uma pasta</li>
                <li>Digite <code className="bg-gray-200 px-1 py-0.5 rounded">cd meu-projeto</code> para entrar na pasta</li>
                <li>Digite <code className="bg-gray-200 px-1 py-0.5 rounded">git init</code> para inicializar um repositório Git</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepositoryGraph; 