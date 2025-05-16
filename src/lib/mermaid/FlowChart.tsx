import React, { useMemo } from 'react';
import MermaidBase, { MermaidBaseProps } from './MermaidBase';

export interface FlowChartProps extends Omit<MermaidBaseProps, 'definition'> {
  /** Orientação do fluxograma */
  orientation?: 'TB' | 'TD' | 'BT' | 'RL' | 'LR';
  /** Conteúdo do diagrama */
  content: string;
}

/**
 * Componente para renderização de fluxogramas (flowcharts) usando Mermaid.
 * Permite definir a orientação e o conteúdo do fluxograma.
 *
 * @param props As propriedades do componente.
 * @returns Um elemento JSX que renderiza o fluxograma através do MermaidBase.
 */
const FlowChart = (props: FlowChartProps) => {
  const { id, orientation = 'TD', content, ...restProps } = props;
  // Constrói a definição completa do fluxograma
  const definition = useMemo(() => {
    // Limpa espaços em excesso no conteúdo
    const cleanContent = content.trim();

    // Retorna a definição formatada
    return `flowchart ${orientation}\n${cleanContent}`;
  }, [orientation, content]);

  return <MermaidBase id={id} definition={definition} {...restProps} />;
};

export default FlowChart;
