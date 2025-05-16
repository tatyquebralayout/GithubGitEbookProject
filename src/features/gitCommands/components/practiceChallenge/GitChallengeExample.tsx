import React, { useState } from 'react';
import MermaidBase from '../../../../lib/mermaid/MermaidBase';
import { gitExamples } from '../../data/gitExamples';

const example = gitExamples.find((ex) => ex.id === 'basic-workflow')!;

const splitCommandsIntoColumns = (commands: string): string[] => {
  const lines = commands.split('\n');
  const columns: string[] = [];
  let currentColumn: string[] = [];

  for (const line of lines) {
    if (
      line.startsWith('# ') &&
      currentColumn.length > 0 &&
      currentColumn.some((l) => l.trim() !== '')
    ) {
      columns.push(currentColumn.join('\n'));
      currentColumn = [line];
    } else {
      currentColumn.push(line);
    }
  }
  if (currentColumn.length > 0 && currentColumn.some((l) => l.trim() !== '')) {
    columns.push(currentColumn.join('\n'));
  }
  return columns;
};

const highlightGitCommands = (text: string): string => {
  return text
    .split('\n')
    .map((line) => {
      // Regex para encontrar "git" seguido por um ou mais caracteres de palavra (o comando em si)
      // e, opcionalmente, outro caractere de palavra (ex: 'remote add').
      // Isso garante que apenas o comando principal seja negritado.
      return line.replace(/^(git\s+[\w-]+(?:\s+[\w-]+)?)/, '<strong>$1</strong>');
    })
    .join('\n');
};

const GitChallengeExample = () => {
  const [orientation, setOrientation] = useState<'LR' | 'TB' | 'BT'>('TB');
  const commandColumns = splitCommandsIntoColumns(example.commands);

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
        <div className="mx-auto w-40 max-w-full">
          <MermaidBase id="example-diagram" definition={example.diagramDefinition(orientation)} />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-2 text-lg font-semibold">Comandos Git correspondentes:</h3>
        <div className="flex flex-row gap-4 overflow-x-auto rounded-lg bg-gray-100 p-4">
          {commandColumns.map((column, index) => (
            <pre
              key={index}
              className="whitespace-pre-wrap text-sm"
              dangerouslySetInnerHTML={{ __html: highlightGitCommands(column) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitChallengeExample;
