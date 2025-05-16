import React, { useState } from 'react';
import { MermaidBase, GitGraph, SimpleGitGraph, FlowChart } from '../lib/mermaid';
import { GitChallengeCard, GitChallengeCardHeader, GitChallengeCardBody } from '../components/ui';

const MermaidDemo = () => {
  const [orientation, setOrientation] = useState<'LR' | 'TB'>('TB');
  const [theme, setTheme] = useState<'default' | 'dark' | 'forest'>('default');

  const gitContent = `
    commit
    branch develop
    checkout develop
    commit
    checkout main
    commit
    checkout develop
    commit
    merge main
  `;

  const flowContent = `
    A[Início] --> B{Decisão}
    B -->|Sim| C[Processo 1]
    B -->|Não| D[Processo 2]
    C --> E[Fim]
    D --> E
  `;

  return (
    <div className="gh-container py-8">
      <h1 className="mb-8 text-center text-2xl font-bold">Biblioteca Mermaid Consolidada</h1>

      <div className="mb-8 flex justify-center gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Orientação:</label>
          <select
            value={orientation}
            onChange={(e) => setOrientation(e.target.value as 'LR' | 'TB')}
            className="rounded-md border px-3 py-2"
            aria-label="Selecionar orientação do diagrama"
          >
            <option value="TB">De Cima para Baixo (TB)</option>
            <option value="LR">Da Esquerda para Direita (LR)</option>
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Tema:</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as 'default' | 'dark' | 'forest')}
            className="rounded-md border px-3 py-2"
            aria-label="Selecionar tema do diagrama"
          >
            <option value="default">Padrão</option>
            <option value="dark">Escuro</option>
            <option value="forest">Floresta</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Diagrama Git Personalizado */}
        <GitChallengeCard>
          <GitChallengeCardHeader>
            <h2 className="text-lg font-medium">GitGraph Personalizado</h2>
          </GitChallengeCardHeader>
          <GitChallengeCardBody>
            <GitGraph
              id="git-custom"
              content={gitContent}
              orientation={orientation}
              theme={theme}
            />
          </GitChallengeCardBody>
        </GitChallengeCard>

        {/* Diagrama Git Simplificado */}
        <GitChallengeCard>
          <GitChallengeCardHeader>
            <h2 className="text-lg font-medium">SimpleGitGraph Pré-definido</h2>
          </GitChallengeCardHeader>
          <GitChallengeCardBody>
            <SimpleGitGraph
              id="git-simple"
              exampleType="feature"
              orientation={orientation}
              theme={theme}
            />
          </GitChallengeCardBody>
        </GitChallengeCard>

        {/* Fluxograma */}
        <GitChallengeCard>
          <GitChallengeCardHeader>
            <h2 className="text-lg font-medium">Fluxograma</h2>
          </GitChallengeCardHeader>
          <GitChallengeCardBody>
            <FlowChart
              id="flow-chart"
              content={flowContent}
              orientation={orientation as any}
              theme={theme}
            />
          </GitChallengeCardBody>
        </GitChallengeCard>

        {/* Componente Base */}
        <GitChallengeCard>
          <GitChallengeCardHeader>
            <h2 className="text-lg font-medium">Componente Base</h2>
          </GitChallengeCardHeader>
          <GitChallengeCardBody>
            <MermaidBase
              id="mermaid-base"
              definition={`graph ${orientation}\nA[Início] --> B[Fim]`}
              theme={theme}
            />
          </GitChallengeCardBody>
        </GitChallengeCard>
      </div>
    </div>
  );
};

export default MermaidDemo;
