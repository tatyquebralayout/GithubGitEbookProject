/**
 * @module lib/mermaid
 * @description Este módulo fornece componentes React para renderizar diferentes tipos de diagramas utilizando a biblioteca Mermaid.
 * Inclui um componente base (`MermaidBase`) e componentes especializados para Grafos Git (`GitGraph`, `SimpleGitGraph`) e Fluxogramas (`FlowChart`).
 */

// Componentes para diagramas Mermaid
export { default as MermaidBase } from './MermaidBase';
export { default as GitGraph } from './GitGraph';
export { default as SimpleGitGraph } from './SimpleGitGraph';
export { default as FlowChart } from './FlowChart';

// Tipos de exportação
export type { MermaidBaseProps } from './MermaidBase';
export type { GitGraphProps } from './GitGraph';
export type { SimpleGitGraphProps } from './SimpleGitGraph';
export type { FlowChartProps } from './FlowChart';

// Exportação padrão para uso simplificado
export { default } from './MermaidBase';
