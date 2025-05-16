import React, { useState } from 'react';
import MermaidBase from '../../../../lib/mermaid/MermaidBase';
import { gitExamples } from '../../data/gitExamples';

const example = gitExamples.find((ex) => ex.id === 'basic-workflow')!;

const GitChallengeExample = () => {
  const [orientation, setOrientation] = useState<'LR' | 'TB' | 'BT'>('TB');

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">{example.title}</h2>

        <div className="flex items-center gap-3">
          <label htmlFor="orientation-select" className="text-sm font-medium">
            Orientação:
          </label>
          <select
            id="orientation-select"
            value={orientation}
            onChange={(e) => setOrientation(e.target.value as any)}
            className="rounded border border-gray-300 px-3 py-1.5 text-sm"
          >
            <option value="TB">De Cima para Baixo</option>
            <option value="BT">De Baixo para Cima</option>
            <option value="LR">Da Esquerda para Direita</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <MermaidBase id="example-diagram" definition={example.diagramDefinition(orientation)} />
      </div>

      <div className="mt-6">
        <h3 className="mb-2 text-lg font-semibold">Comandos Git correspondentes:</h3>
        <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm">{example.commands}</pre>
      </div>
    </div>
  );
};

export default GitChallengeExample;
