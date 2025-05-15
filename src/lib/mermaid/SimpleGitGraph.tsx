import React, { useMemo } from 'react';
import MermaidBase from './MermaidBase';

export interface SimpleGitGraphProps {
  /** Identificador único para o diagrama */
  id: string;
  /** Orientação do diagrama */
  orientation?: 'LR' | 'TB' | 'BT';
  /** Nome do branch principal */
  mainBranchName?: string;
  /** Tipo de exemplo a ser mostrado */
  exampleType?: 'basic' | 'feature' | 'merge' | 'rebase' | 'hotfix';
  /** Classes CSS adicionais */
  className?: string;
  /** Tema de cores a ser usado */
  theme?: 'default' | 'forest' | 'dark' | 'neutral' | 'base';
}

/**
 * Componente para renderização de diagramas Git simplificados com exemplos predefinidos
 */
const SimpleGitGraph: React.FC<SimpleGitGraphProps> = ({
  id,
  orientation = 'TB',
  mainBranchName = 'main',
  exampleType = 'basic',
  className = '',
  theme = 'default',
}) => {
  // Gera a definição com base no tipo de exemplo
  const definition = useMemo(() => {
    let content = '';

    switch (exampleType) {
      case 'basic':
        content = `
          gitGraph ${orientation}:
          commit
          commit
          commit
        `;
        break;

      case 'feature':
        content = `
          gitGraph ${orientation}:
          commit
          commit
          branch feature
          checkout feature
          commit
          commit
          checkout ${mainBranchName}
          merge feature
          commit
        `;
        break;

      case 'merge':
        content = `
          gitGraph ${orientation}:
          commit
          branch develop
          checkout develop
          commit
          commit
          checkout ${mainBranchName}
          merge develop
          commit
        `;
        break;

      case 'rebase':
        content = `
          gitGraph ${orientation}:
          commit
          branch feature
          checkout feature
          commit
          checkout ${mainBranchName}
          commit
          checkout feature
          commit id: "rebase"
          checkout ${mainBranchName}
          merge feature
        `;
        break;

      case 'hotfix':
        content = `
          gitGraph ${orientation}:
          commit
          branch develop
          checkout develop
          commit
          branch hotfix
          checkout hotfix
          commit
          checkout ${mainBranchName}
          merge hotfix
          checkout develop
          merge hotfix
        `;
        break;

      default:
        content = `
          gitGraph ${orientation}:
          commit
          commit
        `;
    }

    return content;
  }, [orientation, mainBranchName, exampleType]);

  return (
    <MermaidBase
      id={id}
      definition={definition}
      theme={theme}
      className={`simple-git-graph ${className}`}
    />
  );
};

export default SimpleGitGraph;
