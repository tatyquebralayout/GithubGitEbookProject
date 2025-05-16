import React, { useState } from 'react';
import { SimpleGitGraph, MermaidBase } from '../../../../lib/mermaid';

interface RepositoryGraphProps {
  diagramDefinition: string;
}

const RepositoryGraph = ({ diagramDefinition }: RepositoryGraphProps) => {
  // Estado para orientação do diagrama
  const [orientation, setOrientation] = useState<'TB' | 'BT' | 'LR'>('TB');

  // Verifica se o diagrama é um diagrama Git
  const isGitGraph = diagramDefinition.includes('gitGraph');

  return (
    <div className="flex h-full flex-col">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-github-fg-default">
          Visualização do Repositório
        </h3>

        {isGitGraph && (
          <div className="flex space-x-1">
            <button
              onClick={() => setOrientation('TB')}
              className={`rounded px-2 py-1 text-xs ${
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
              className={`rounded px-2 py-1 text-xs ${
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
              className={`rounded px-2 py-1 text-xs ${
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

      <div className="flex flex-grow items-center justify-center overflow-auto rounded-md border-2 border-dashed border-gray-300 bg-white p-2">
        {diagramDefinition ? (
          isGitGraph ? (
            <SimpleGitGraph
              id="repo-graph-dynamic"
              orientation={orientation}
              className="h-full w-full"
            />
          ) : (
            <MermaidBase id="repo-graph-dynamic" definition={diagramDefinition} />
          )
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4 h-16 w-16 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h4 className="mb-2 font-semibold text-gray-600">Nenhum repositório inicializado</h4>
            <p className="mb-2 text-sm text-gray-400">
              Você ainda não tem nenhum projeto Git iniciado.
            </p>
            <p className="mb-4 text-sm text-gray-400">
              Use o terminal ao lado para criar e inicializar um repositório.
            </p>
            <div className="max-w-md rounded-lg bg-gray-100 p-3">
              <p className="mb-1 text-xs font-medium text-gray-600">Passos sugeridos:</p>
              <ol className="list-decimal space-y-1 pl-5 text-left text-xs text-gray-500">
                <li>
                  Digite <code className="rounded bg-gray-200 px-1 py-0.5">mkdir meu-projeto</code>{' '}
                  para criar uma pasta
                </li>
                <li>
                  Digite <code className="rounded bg-gray-200 px-1 py-0.5">cd meu-projeto</code>{' '}
                  para entrar na pasta
                </li>
                <li>
                  Digite <code className="rounded bg-gray-200 px-1 py-0.5">git init</code> para
                  inicializar um repositório Git
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepositoryGraph;
