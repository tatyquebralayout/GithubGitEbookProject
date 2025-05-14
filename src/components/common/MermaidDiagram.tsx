import React, { useEffect, useRef, memo } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string; // The Mermaid diagram definition
  diagramId: string; // Unique ID for each diagram
}

// Initial global Mermaid configuration moved into useEffect

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, diagramId }) => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Mermaid only once on the client side
    try {
      // Check if already initialized to prevent re-initialization if multiple diagrams are on a page
      // or if HMR triggers re-execution. A simple flag or checking a property might be needed if
      // mermaid.initialize throws error on re-init or if we want to be more robust.
      // For now, the try-catch handles if it's already initialized by Mermaid's internal checks.
      mermaid.initialize({
        startOnLoad: false, // We will control rendering manually
        theme: 'base', // Themes: base, default, dark, forest, neutral
        fontFamily: '\'Mona Sans\', \'Inter\', sans-serif',
      });
    } catch (e) {
      // Log non-critical initialization errors (e.g. already initialized)
      // console.warn("Mermaid initialization issue (possibly already initialized):", e);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    if (mermaidRef.current && chart) {
      const renderMermaid = async () => {
        try {
          if (!mermaidRef.current) return;
          mermaidRef.current.innerHTML = '';

          // Remover logs de depuração excessivos, mantendo apenas a limpeza de caracteres especiais
          const cleanedChart = chart.replace(/[^\x20-\x7E]/g, ''); // Remove caracteres não imprimíveis
          
          // Renderizar a versão limpa
          const { svg, bindFunctions } = await mermaid.render(diagramId, cleanedChart);
          
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
  return <div ref={mermaidRef} className="mermaid-diagram-container flex justify-center items-center" />;
};

// Use memo to avoid unnecessary re-renders if props don't change
export default memo(MermaidDiagram); 