import React from 'react';
import MermaidDiagram from '../../../../components/common/MermaidDiagram'; // Caminho corrigido

interface RepositoryGraphProps {
  diagramDefinition: string;
}

const RepositoryGraph: React.FC<RepositoryGraphProps> = ({ diagramDefinition }) => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-3 text-github-fg-default">Visualização do Repositório</h3>
      <div className="flex-grow flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md bg-white p-2 overflow-auto">
        {diagramDefinition ? (
          <MermaidDiagram chart={diagramDefinition} diagramId="repo-graph-dynamic" />
        ) : (
          <p className="text-gray-400 text-center text-sm">
            O grafo do repositório aparecerá aqui após inicializar o repositório e fazer commits.
          </p>
        )}
      </div>
    </>
  );
};

export default RepositoryGraph; 