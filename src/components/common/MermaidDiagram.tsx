import React, { useEffect, useRef, memo } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string; // A definição do diagrama Mermaid
  diagramId: string; // ID único para cada diagrama
}

// Configuração global inicial do Mermaid
// Movido para fora do componente para ser chamado apenas uma vez
try {
  mermaid.initialize({
    startOnLoad: false, // Vamos controlar a renderização manualmente
    theme: 'base', // Temas: base, default, dark, forest, neutral
    // Considerar securityLevel: 'loose' se houver problemas com scripts externos, mas avaliar riscos.
    fontFamily: '\'Mona Sans\', \'Inter\', sans-serif', // Usar fontes do projeto, se disponíveis
    // Você pode adicionar themeVariables aqui para customizar cores, por exemplo:
    // themeVariables: {
    //   primaryColor: '#f0f6fc', // Exemplo: Cor de fundo dos nós
    //   primaryTextColor: '#1f2328', // Exemplo: Cor do texto
    //   lineColor: '#d0d7de', // Exemplo: Cor das linhas
    // }
  });
} catch (e) {
  console.error("Erro ao inicializar Mermaid (já pode ter sido inicializado):", e);
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, diagramId }) => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mermaidRef.current && chart) {
      try {
        // Limpa o conteúdo anterior para evitar duplicação e erros de ID
        mermaidRef.current.innerHTML = '';
        // O Mermaid insere o SVG diretamente no elemento fornecido
        // Nota: a API mermaid.render pode variar. Se esta não funcionar,
        // podemos voltar a usar o callback e inserir o svgCode manualmente.
        mermaid.render(diagramId, chart, mermaidRef.current);
      } catch (error) {
        console.error(`Erro ao renderizar Mermaid para o ID ${diagramId}:`, error);
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = `<p style="color: red; font-size: 0.8rem;">Erro ao renderizar diagrama. ID: ${diagramId}</p>`;
        }
      }
    }
  }, [chart, diagramId]); // Re-renderizar quando o 'chart' ou 'diagramId' mudar

  // Adicionamos uma classe para possível estilização do contêiner se necessário
  return <div ref={mermaidRef} className="mermaid-diagram-container flex justify-center items-center" />;
};

// Usar memo para evitar re-renderizações desnecessárias se as props não mudarem
export default memo(MermaidDiagram); 