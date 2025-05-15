import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface SimpleMermaidGitGraphProps {
  id: string;
  orientation?: 'LR' | 'TB' | 'BT';
  className?: string;
}

const SimpleMermaidGitGraph: React.FC<SimpleMermaidGitGraphProps> = ({
  id,
  orientation = 'TB',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderGitGraph = async () => {
      if (!containerRef.current) return;

      try {
        // Inicializa o Mermaid
        mermaid.initialize({
          startOnLoad: false,
          theme: 'default',
          gitGraph: {
            mainBranchName: 'main',
            mainBranchOrder: 0,
          },
        });

        // Define um diagrama simples
        const diagram = `
        gitGraph ${orientation}:
          commit
          commit
          branch feature
          checkout feature
          commit
          commit
          checkout main
          merge feature
          commit
        `;

        const { svg } = await mermaid.render(`simple-git-diagram-${id}`, diagram);
        containerRef.current.innerHTML = svg;
      } catch (err: any) {
        console.error('Erro ao renderizar diagrama Git:', err);
        containerRef.current.innerHTML = `
          <div class="p-4 text-red-600 bg-red-50 rounded">
            <h3 class="font-bold mb-2">Erro ao renderizar diagrama:</h3>
            <p>${err.message || 'Erro desconhecido'}</p>
            ${err.str ? `<pre class="mt-2 text-xs bg-red-100 p-2 rounded">${err.str}</pre>` : ''}
          </div>
        `;
      }
    };

    renderGitGraph();
  }, [id, orientation]);

  return (
    <div
      ref={containerRef}
      className={`simple-mermaid-diagram p-4 bg-github-canvas-subtle rounded-lg overflow-x-auto ${className}`}
      data-testid={`simple-mermaid-diagram-${id}`}
    />
  );
};

export default SimpleMermaidGitGraph; 