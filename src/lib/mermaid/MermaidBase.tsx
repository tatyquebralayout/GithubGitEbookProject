import React, { useEffect, useRef, useMemo } from 'react';
import mermaid from 'mermaid';

export interface MermaidBaseProps {
  /** Identificador único para o diagrama */
  id: string;
  /** Definição do diagrama em sintaxe Mermaid */
  definition: string;
  /** Tema de cores a ser usado */
  theme?: 'default' | 'forest' | 'dark' | 'neutral' | 'base';
  /** Classes CSS adicionais */
  className?: string;
  /** Callback executado após renderização bem-sucedida */
  onRender?: (svg: string) => void;
  /** Callback executado em caso de erro */
  onError?: (error: Error) => void;
}

/**
 * Componente base para renderização de diagramas Mermaid.
 * Serve como fundação para todos os tipos específicos de diagramas.
 *
 * @param props As propriedades do componente.
 * @returns Um elemento JSX que renderiza o diagrama Mermaid.
 */
const MermaidBase = (props: MermaidBaseProps) => {
  const { id, definition, theme = 'default', className = '', onRender, onError } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  // Sanitiza o ID para evitar problemas de renderização
  const safeId = useMemo(() => `mermaid-${id.replace(/[^\w-]/g, '_')}`, [id]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !definition) return;

    const renderDiagram = async () => {
      try {
        // Inicializar o Mermaid com as configurações necessárias
        mermaid.initialize({
          startOnLoad: false,
          theme,
          securityLevel: 'loose',
        });

        // Limpar o container antes de renderizar
        container.innerHTML = '';

        // Renderizar o diagrama
        const { svg } = await mermaid.render(safeId, definition.trim());

        // Verificamos novamente se o container ainda existe
        if (container) {
          container.innerHTML = svg;

          // Aplicar melhorias visuais ao SVG
          const svgElement = container.querySelector('svg');
          if (svgElement) {
            svgElement.style.maxWidth = '100%';
            svgElement.style.height = 'auto';
            svgElement.setAttribute('aria-label', `Diagrama ${id}`);
          }

          // Executar callback de sucesso
          if (onRender) onRender(svg);
        }
      } catch (error) {
        console.error(`Erro ao renderizar diagrama Mermaid (${id}):`, error);

        // Mostrar mensagem de erro no container
        if (container) {
          container.innerHTML = `
            <div class="text-red-500 p-4">
              <p class="font-medium">Erro ao renderizar o diagrama</p>
              <p class="text-sm mt-1">${error instanceof Error ? error.message : 'Erro desconhecido'}</p>
            </div>
          `;
        }

        // Executar callback de erro
        if (onError && error instanceof Error) onError(error);
      }
    };

    renderDiagram();
  }, [id, safeId, definition, theme, onRender, onError]);

  return (
    <div
      ref={containerRef}
      className={`mermaid-diagram overflow-x-auto ${className}`}
      data-testid={`mermaid-diagram-${id}`}
      data-theme={theme}
    />
  );
};

export default MermaidBase;
