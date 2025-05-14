import React from 'react';
// import MermaidDiagram from '../../../../components/common/MermaidDiagram'; // Ajuste o caminho conforme necessário

const RepositoryGraph: React.FC = () => {
  // Exemplo de definição do grafo - isso virá da lógica do jogo
  const graphDefinition = `
graph LR
    A[Commit Inicial] --> B(feature/nova-branch)
    A --> C(main)
    B --> D{Merge Request}
    C --> D
`;

  return (
    <>
      <h3 className="text-xl font-semibold mb-3 text-github-fg-default">Visualização do Repositório</h3>
      <div className="flex-grow flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md bg-white p-2">
        {/* <MermaidDiagram chart={graphDefinition} /> */}
        <p className="text-gray-400 text-center text-sm">
          O grafo do repositório aparecerá aqui<br/>(Usando Mermaid.js)
        </p>
        {/* Lógica para atualizar o graphDefinition dinamicamente */}
      </div>
    </>
  );
};

export default RepositoryGraph; 