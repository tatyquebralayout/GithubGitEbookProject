import React, { useMemo } from 'react';
import MermaidBase, { MermaidBaseProps } from './MermaidBase';

export interface FlowChartProps extends Omit<MermaidBaseProps, 'definition'> {
  /** Orientação do fluxograma */
  orientation?: 'TB' | 'TD' | 'BT' | 'RL' | 'LR';
  /** Conteúdo do diagrama */
  content: string;
}

/**
 * Componente para renderização de fluxogramas usando Mermaid
 */
const FlowChart: React.FC<FlowChartProps> = ({ id, orientation = 'TD', content, ...restProps }) => {
  // Constrói a definição completa do fluxograma
  const definition = useMemo(() => {
    // Limpa espaços em excesso no conteúdo
    const cleanContent = content.trim();

    // Retorna a definição formatada
    return `flowchart ${orientation}
${cleanContent}`;
  }, [orientation, content]);

  return <MermaidBase id={id} definition={definition} {...restProps} />;
};

export default FlowChart;
