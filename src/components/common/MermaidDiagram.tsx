import React, { useEffect, useRef, memo } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string; // The Mermaid diagram definition
  diagramId: string; // Unique ID for each diagram
}

// Initial global Mermaid configuration
// Moved outside the component to be called only once
try {
  mermaid.initialize({
    startOnLoad: false, // We will control rendering manually
    theme: 'base', // Themes: base, default, dark, forest, neutral
    // Consider securityLevel: 'loose' if there are issues with external scripts, but assess risks.
    fontFamily: '\'Mona Sans\', \'Inter\', sans-serif', // Use project fonts, if available
    // You can add themeVariables here to customize colors, for example:
    // themeVariables: {
    //   primaryColor: '#f0f6fc', // Example: Node background color
    //   primaryTextColor: '#1f2328', // Example: Text color
    //   lineColor: '#d0d7de', // Example: Line color
    // }
  });
} catch (e) {
  console.error("Error initializing Mermaid (it may have already been initialized):", e);
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, diagramId }) => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mermaidRef.current && chart) {
      try {
        mermaidRef.current.innerHTML = ''; // Limpar conteúdo anterior

        // Usar o callback para render e inserir o SVG
        mermaid.render(diagramId, chart, (svgCode, bindFunctions) => {
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svgCode;
            if (bindFunctions) {
              bindFunctions(mermaidRef.current); // Necessário para interatividade (se houver)
            }
          }
        });

      } catch (error) {
        console.error(`Error rendering Mermaid for ID ${diagramId}:`, error);
        if (mermaidRef.current) {
          // Adicionar a string do diagrama ao erro para facilitar a depuração
          const errMessage = error instanceof Error ? error.message : String(error);
          mermaidRef.current.innerHTML = `<p style="color: red; font-size: 0.8rem;">Error rendering diagram (ID: ${diagramId}). Details: ${errMessage}. Check console.</p>`;
        }
      }
    }
  }, [chart, diagramId]);

  // We add a class for possible container styling if needed
  return <div ref={mermaidRef} className="mermaid-diagram-container flex justify-center items-center" />;
};

// Use memo to avoid unnecessary re-renders if props don't change
export default memo(MermaidDiagram); 