import React, { useMemo } from 'react';
import MermaidBase, { MermaidBaseProps } from './MermaidBase';

export interface GitGraphProps extends Omit<MermaidBaseProps, 'definition'> {
  /** Orientação do diagrama */
  orientation?: 'LR' | 'TB' | 'BT';
  /** Renderizar commits em paralelo quando possível */
  parallelCommits?: boolean;
  /** Nome do branch principal */
  mainBranchName?: string;
  /** Conteúdo do diagrama em formato simplificado */
  content: string;
  /** Cores personalizadas para o diagrama */
  customColors?: {
    branch?: string[];
    branchLabel?: string[];
    commitLabel?: string;
    commitBg?: string;
    tagLabel?: string;
    tagBg?: string;
    highlightCommit?: string[];
  };
}

/**
 * Componente para renderização de diagramas Git usando Mermaid
 */
const GitGraph: React.FC<GitGraphProps> = ({
  id,
  orientation = 'LR',
  parallelCommits = false,
  mainBranchName = 'main',
  content,
  customColors: _customColors,
  ...restProps
}) => {
  // Constrói a definição completa do diagrama Git
  const definition = useMemo(() => {
    // Configuração do diagrama
    let configOptions = '';

    if (parallelCommits) {
      configOptions += ' parallelCommits: true,';
    }

    if (mainBranchName !== 'main') {
      configOptions += ` mainBranchName: "${mainBranchName}",`;
    }

    const configBlock = configOptions ? `\nconfig { ${configOptions} }\n` : '\n';

    // Formatar corretamente o conteúdo para garantir a sintaxe correta
    const formattedContent = formatGitGraphContent(content);

    return `gitGraph ${orientation}:${configBlock}${formattedContent}`;
  }, [orientation, parallelCommits, mainBranchName, content]);

  return <MermaidBase id={id} definition={definition} {...restProps} />;
};

/**
 * Formata o conteúdo do diagrama Git para garantir sintaxe correta
 */
function formatGitGraphContent(content: string): string {
  // Dividir a entrada em linhas
  const lines = content.trim().split('\n');
  let formattedLines: string[] = [];

  // Processar cada linha para garantir a sintaxe correta
  lines.forEach((line) => {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith('commit')) {
      // Comando commit
      let commitLine = 'commit';

      // Verificar se há id ou tag ou type
      if (trimmedLine.includes('id:')) {
        const idMatch = trimmedLine.match(/id:\s*"([^"]+)"/);
        if (idMatch && idMatch[1]) {
          commitLine += ` id: "${idMatch[1]}"`;
        }
      }

      if (trimmedLine.includes('tag:')) {
        const tagMatch = trimmedLine.match(/tag:\s*"([^"]+)"/);
        if (tagMatch && tagMatch[1]) {
          commitLine += ` tag: "${tagMatch[1]}"`;
        }
      }

      if (trimmedLine.includes('type:')) {
        const typeMatch = trimmedLine.match(/type:\s*(\w+)/);
        if (typeMatch && typeMatch[1]) {
          commitLine += ` type: ${typeMatch[1]}`;
        }
      }

      formattedLines.push(commitLine);
    } else if (trimmedLine.startsWith('branch')) {
      // Comando branch
      const branchName = trimmedLine.replace('branch', '').trim();
      formattedLines.push(`branch ${branchName}`);
    } else if (trimmedLine.startsWith('checkout')) {
      // Comando checkout
      const branchName = trimmedLine.replace('checkout', '').trim();
      formattedLines.push(`checkout ${branchName}`);
    } else if (trimmedLine.startsWith('merge')) {
      // Comando merge
      const branchName = trimmedLine.replace('merge', '').trim();
      formattedLines.push(`merge ${branchName}`);
    } else {
      // Qualquer outro comando
      formattedLines.push(trimmedLine);
    }
  });

  return formattedLines.join('\n');
}

export default GitGraph;
