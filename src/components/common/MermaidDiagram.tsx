import React, { useEffect, useRef, memo } from 'react';
import mermaid from 'mermaid';

export interface MermaidDiagramProps {
  chart: string; // The Mermaid diagram definition
  diagramId: string; // Unique ID for each diagram
}

// Configuração global do Mermaid
mermaid.initialize({
  startOnLoad: false,
  securityLevel: 'loose',
  theme: 'default',
});

export const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, diagramId }) => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  // Limpa caracteres especiais que podem causar problemas em IDs
  const sanitizeId = (id: string): string => {
    return id.replace(/[^\w-]/g, '_');
  };

  // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    if (mermaidRef.current && chart) {
      const renderMermaid = async () => {
        try {
          if (!mermaidRef.current) return;
          mermaidRef.current.innerHTML = '';

          // Limpar caracteres problemáticos e gerar um ID válido para o diagrama
          const cleanedChart = chart.replace(/[^\x20-\x7E]/g, ''); // Remove caracteres não imprimíveis
          const safeId = sanitizeId(diagramId);

          // Renderizar com ID seguro
          const { svg, bindFunctions } = await mermaid.render(safeId, cleanedChart);

          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svg;
            if (bindFunctions) {
              bindFunctions(mermaidRef.current);
            }
          }
        } catch (error) {
          const errMessage = error instanceof Error ? error.message : String(error);
          console.error(`Error rendering Mermaid for ID ${diagramId}:`, errMessage);
          console.error('Mermaid chart string that caused error:', chart);
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = `<p style="color: red; font-size: 0.8rem;">Error rendering diagram (ID: ${diagramId}). Details: ${errMessage}. Check console.</p>`;
          }
        }
      };
      renderMermaid();
    }
  }, [diagramId, chart]);

  // We add a class for possible container styling if needed
  return (
    <div ref={mermaidRef} className="mermaid-diagram-container flex items-center justify-center" />
  );
};

export default memo(MermaidDiagram);
