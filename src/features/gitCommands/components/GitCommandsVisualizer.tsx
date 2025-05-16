import React, { useState } from 'react';
import MermaidBase from '../../../lib/mermaid/MermaidBase';
import {
  GitChallengeCard,
  GitChallengeCardHeader,
  GitChallengeCardBody,
} from '../../../components/ui';
import { gitExamples } from '../data/gitExamples';

interface DiagramControlsProps {
  orientation: 'LR' | 'TB' | 'BT';
  setOrientation: (o: 'LR' | 'TB' | 'BT') => void;
  selectedExample: string;
  setSelectedExample: (id: string) => void;
}

const DiagramControls: React.FC<DiagramControlsProps> = ({
  orientation,
  setOrientation,
  selectedExample,
  setSelectedExample,
}) => (
  <GitChallengeCard>
    <GitChallengeCardBody className="p-6">
      <h2 className="mb-4 text-xl font-bold">Exemplos</h2>
      <div className="flex flex-col gap-2">
        {gitExamples.map((ex) => (
          <button
            key={ex.id}
            className={`rounded-md p-3 text-left transition-colors ${
              selectedExample === ex.id
                ? 'bg-github-accent-subtle text-github-accent-fg'
                : 'hover:bg-github-canvas-subtle'
            }`}
            onClick={() => setSelectedExample(ex.id)}
          >
            <span className="font-medium">{ex.title}</span>
          </button>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="mb-2 text-sm font-semibold">Orientação do Diagrama:</h3>
        <div className="flex flex-wrap gap-2">
          <button
            className={`rounded px-3 py-1.5 text-sm ${
              orientation === 'TB'
                ? 'bg-github-accent-emphasis text-white'
                : 'bg-github-canvas-subtle text-github-fg-default'
            }`}
            onClick={() => setOrientation('TB')}
          >
            Cima para Baixo
          </button>
          <button
            className={`rounded px-3 py-1.5 text-sm ${
              orientation === 'BT'
                ? 'bg-github-accent-emphasis text-white'
                : 'bg-github-canvas-subtle text-github-fg-default'
            }`}
            onClick={() => setOrientation('BT')}
          >
            Baixo para Cima
          </button>
          <button
            className={`rounded px-3 py-1.5 text-sm ${
              orientation === 'LR'
                ? 'bg-github-accent-emphasis text-white'
                : 'bg-github-canvas-subtle text-github-fg-default'
            }`}
            onClick={() => setOrientation('LR')}
          >
            Esquerda para Direita
          </button>
        </div>
      </div>
    </GitChallengeCardBody>
  </GitChallengeCard>
);

interface VisualizationAreaProps {
  example: (typeof gitExamples)[0];
  orientation: 'LR' | 'TB' | 'BT';
}

const VisualizationArea: React.FC<VisualizationAreaProps> = ({ example, orientation }) => (
  <GitChallengeCard>
    <GitChallengeCardHeader className="bg-github-canvas-subtle p-4">
      <h2 className="text-xl font-bold">{example.title}</h2>
      <p className="mt-1 text-github-fg-muted">{example.description}</p>
    </GitChallengeCardHeader>
    <GitChallengeCardBody className="p-6">
      <div className="mb-8">
        <h3 className="mb-3 text-lg font-semibold">Diagrama Git</h3>
        <MermaidBase
          id={`example-${example.id}`}
          definition={example.diagramDefinition(orientation)}
        />
      </div>
      <div>
        <h3 className="mb-3 text-lg font-semibold">Comandos Git</h3>
        <pre className="overflow-x-auto rounded-lg bg-github-canvas-subtle p-4 text-sm">
          {example.commands}
        </pre>
        <p className="mt-3 text-sm text-github-fg-muted">
          Copie e cole estes comandos em um terminal para ver como funcionam na prática.
        </p>
      </div>
    </GitChallengeCardBody>
  </GitChallengeCard>
);

const GitCommandsVisualizer = () => {
  const [orientation, setOrientation] = useState<'LR' | 'TB' | 'BT'>('TB');
  const [selectedExample, setSelectedExample] = useState(gitExamples[0].id);
  const example = gitExamples.find((ex) => ex.id === selectedExample) || gitExamples[0];

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-github-fg-default">Visualização de Comandos Git</h1>
        <p className="mx-auto mt-2 max-w-3xl text-github-fg-muted">
          Veja como os comandos Git se transformam em diagramas visuais. Use estes exemplos para
          entender os fluxos de trabalho comuns do Git e como eles são representados graficamente.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <DiagramControls
            orientation={orientation}
            setOrientation={setOrientation}
            selectedExample={selectedExample}
            setSelectedExample={setSelectedExample}
          />
        </div>
        <div className="lg:col-span-2">
          <VisualizationArea example={example} orientation={orientation} />
        </div>
      </div>
    </div>
  );
};

export default GitCommandsVisualizer;
