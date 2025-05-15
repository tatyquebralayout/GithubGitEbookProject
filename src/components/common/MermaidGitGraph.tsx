import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidGitGraphProps {
  id: string;
  definition: string;
  config?: {
    theme?: 'default' | 'forest' | 'dark' | 'neutral' | 'base';
    orientation?: 'LR' | 'TB' | 'BT';
    parallelCommits?: boolean;
    mainBranchName?: string;
    customColors?: {
      branch0?: string;
      branch1?: string;
      branch2?: string;
      branch3?: string;
      branch4?: string;
      branch5?: string;
      branch6?: string;
      branch7?: string;
      branchLabel0?: string;
      branchLabel1?: string;
      branchLabel2?: string;
      branchLabel3?: string;
      commitLabel?: string;
      commitBg?: string;
      commitFontSize?: string;
      tagLabel?: string;
      tagBg?: string;
      tagBorder?: string;
      tagFontSize?: string;
      highlightCommit0?: string;
      highlightCommit1?: string;
      highlightCommit2?: string;
      highlightCommit3?: string;
    };
  };
  className?: string;
}

const MermaidGitGraph: React.FC<MermaidGitGraphProps> = ({ 
  id, 
  definition, 
  config = { theme: 'default', orientation: 'LR' },
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Função para formatar corretamente a definição do gitGraph
  const formatGitGraphDefinition = (rawDefinition: string): string => {
    // Dividir a entrada em linhas
    const lines = rawDefinition.trim().split('\n');
    let formattedLines: string[] = [];
    
    // Processar cada linha para garantir a sintaxe correta
    lines.forEach(line => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('commit')) {
        // Comando commit
        const _parts = trimmedLine.split(' ');
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
      } 
      else if (trimmedLine.startsWith('branch')) {
        // Comando branch
        const branchName = trimmedLine.replace('branch', '').trim();
        formattedLines.push(`branch ${branchName}`);
      }
      else if (trimmedLine.startsWith('checkout')) {
        // Comando checkout
        const branchName = trimmedLine.replace('checkout', '').trim();
        formattedLines.push(`checkout ${branchName}`);
      }
      else if (trimmedLine.startsWith('merge')) {
        // Comando merge
        const branchName = trimmedLine.replace('merge', '').trim();
        formattedLines.push(`merge ${branchName}`);
      }
      else {
        // Qualquer outro comando
        formattedLines.push(trimmedLine);
      }
    });
    
    return formattedLines.join('\n');
  };
  
  useEffect(() => {
    if (containerRef.current) {
      // Função para construir a definição do diagrama
      const buildDefinition = (formattedDef: string): string => {
        const orientation = config.orientation || 'LR';
        let configOptions = '';
        
        if (config.parallelCommits) {
          configOptions += ' parallelCommits: true,';
        }
        
        if (config.mainBranchName && config.mainBranchName !== 'main') {
          configOptions += ` mainBranchName: "${config.mainBranchName}",`;
        }
        
        const configBlock = configOptions ? `\nconfig { ${configOptions} }\n` : '\n';
        
        return `gitGraph ${orientation}:${configBlock}${formattedDef}`;
      };
      
      const renderDiagram = async () => {
        // Configuração do Mermaid
        mermaid.initialize({
          startOnLoad: true,
          theme: config.theme || 'default',
          gitGraph: {
            mainBranchName: config.mainBranchName || 'main',
            mainBranchOrder: 0,
            parallelCommits: config.parallelCommits || false
          },
          themeVariables: {
            // Branch colors
            ...(config.customColors?.branch0 && { git0: config.customColors.branch0 }),
            ...(config.customColors?.branch1 && { git1: config.customColors.branch1 }),
            ...(config.customColors?.branch2 && { git2: config.customColors.branch2 }),
            ...(config.customColors?.branch3 && { git3: config.customColors.branch3 }),
            ...(config.customColors?.branch4 && { git4: config.customColors.branch4 }),
            ...(config.customColors?.branch5 && { git5: config.customColors.branch5 }),
            ...(config.customColors?.branch6 && { git6: config.customColors.branch6 }),
            ...(config.customColors?.branch7 && { git7: config.customColors.branch7 }),
            
            // Branch label colors
            ...(config.customColors?.branchLabel0 && { gitBranchLabel0: config.customColors.branchLabel0 }),
            ...(config.customColors?.branchLabel1 && { gitBranchLabel1: config.customColors.branchLabel1 }),
            ...(config.customColors?.branchLabel2 && { gitBranchLabel2: config.customColors.branchLabel2 }),
            ...(config.customColors?.branchLabel3 && { gitBranchLabel3: config.customColors.branchLabel3 }),
            
            // Commit styling
            ...(config.customColors?.commitLabel && { commitLabelColor: config.customColors.commitLabel }),
            ...(config.customColors?.commitBg && { commitLabelBackground: config.customColors.commitBg }),
            ...(config.customColors?.commitFontSize && { commitLabelFontSize: config.customColors.commitFontSize }),
            
            // Tag styling
            ...(config.customColors?.tagLabel && { tagLabelColor: config.customColors.tagLabel }),
            ...(config.customColors?.tagBg && { tagLabelBackground: config.customColors.tagBg }),
            ...(config.customColors?.tagBorder && { tagLabelBorder: config.customColors.tagBorder }),
            ...(config.customColors?.tagFontSize && { tagLabelFontSize: config.customColors.tagFontSize }),
            
            // Highlight commit colors
            ...(config.customColors?.highlightCommit0 && { gitInv0: config.customColors.highlightCommit0 }),
            ...(config.customColors?.highlightCommit1 && { gitInv1: config.customColors.highlightCommit1 }),
            ...(config.customColors?.highlightCommit2 && { gitInv2: config.customColors.highlightCommit2 }),
            ...(config.customColors?.highlightCommit3 && { gitInv3: config.customColors.highlightCommit3 }),
          }
        });
        
        try {
          // Formatar corretamente a definição do diagrama
          const formattedDefinition = formatGitGraphDefinition(definition);
          const { svg } = await mermaid.render(`gitgraph-${id}`, buildDefinition(formattedDefinition));
          
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
            
            // Aplicar estilos adicionais ao SVG após renderização
            const svgElement = containerRef.current.querySelector('svg');
            if (svgElement) {
              svgElement.style.maxWidth = '100%';
              svgElement.style.height = 'auto';
              svgElement.setAttribute('aria-label', `Diagrama Git ilustrando ${id}`);
              
              // Adiciona animações para commits e branches
              const commits = svgElement.querySelectorAll('circle, rect');
              commits.forEach((commit, _) => {
                commit.setAttribute('class', 'commit-node');
                commit.setAttribute('style', `
                  ${commit.getAttribute('style') || ''}; 
                  transition: fill 0.3s, stroke-width 0.3s;
                `);
              });
              
              // Adiciona classes para hover effects
              const paths = svgElement.querySelectorAll('path');
              paths.forEach((path, _) => {
                if (path.getAttribute('stroke-width')) {
                  path.setAttribute('class', 'branch-line');
                  path.setAttribute('style', `
                    ${path.getAttribute('style') || ''}; 
                    transition: stroke-width 0.3s, stroke 0.3s;
                  `);
                }
              });
            }
          }
        } catch (error: any) {
          console.error('Erro ao renderizar o diagrama Mermaid:', error);
          if (containerRef.current) {
            containerRef.current.innerHTML = `
              <div class="text-red-500 p-4">
                Erro ao renderizar o diagrama: ${error.message || 'Erro desconhecido'}
                <pre class="mt-2 text-xs bg-gray-100 p-2 rounded">${error.str || ''}</pre>
              </div>
            `;
          }
        }
      };
      
      renderDiagram();
    }
  }, [id, definition, config]);
  
  return (
    <div 
      ref={containerRef} 
      className={`mermaid-diagram rounded-lg p-4 bg-github-canvas-subtle overflow-x-auto ${className}`}
      aria-label="Diagrama Git mostrando fluxo de branches e commits"
      data-testid={`mermaid-diagram-${id}`}
      data-theme={config.theme}
    />
  );
};

export default MermaidGitGraph; 