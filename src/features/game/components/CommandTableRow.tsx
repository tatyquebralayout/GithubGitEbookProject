import React from 'react';
import { Link } from 'react-router-dom';
import MermaidBase from '../../../lib/mermaid/MermaidBase';
import { AvatarGroup } from '../../../components/ui';
import { ChallengeBadge } from '../../../components/ui';
import { gitTips } from '../../gitCommands/data/gitTips';

export interface CommandData {
  name: string;
  mermaidChart?: string; // Opcional, nem todos os comandos terão visualização imediata aqui
  description: string;
  chapterLink: string;
  chapterText: string;
  authors: Array<{
    src: string;
    alt: string;
  }>;
  difficultyType: string;
  difficultyText: string;
  targetPath?: string; // Para ChallengeBadge ter um caminho específico se necessário
}

// Padronizado: arrow function com tipagem no parâmetro
const CommandTableRow = ({
  name,
  mermaidChart,
  description,
  chapterLink,
  chapterText,
  authors,
  difficultyType,
  difficultyText,
  targetPath,
}: CommandData) => {
  // Sanitizar o nome do comando para criar um ID de diagrama mais seguro
  const sanitizedName = name.replace(/[^a-zA-Z0-9_-]/g, '-').replace(/--+/g, '-');
  const diagramId = `mermaid-${sanitizedName}-${Math.random().toString(36).substring(2, 7)}`; // Adicionar um sufixo aleatório para garantir unicidade em casos extremos
  const tips = gitTips[name];

  return (
    <tr className="transition-colors hover:bg-github-canvas-inset">
      <td className="whitespace-nowrap p-3 font-mono">{name}</td>
      <td className="min-h-[100px] min-w-[200px] p-3 align-middle">
        {mermaidChart ? (
          <>
            <MermaidBase id={diagramId} definition={mermaidChart} />
            {tips && tips.length > 0 && (
              <div className="border-l-4 border-yellow-400 bg-yellow-50 p-2 text-xs text-yellow-900">
                <strong>Dicas:</strong>
                <ul className="ml-4 mt-1 list-disc">
                  {tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <span className="text-xs italic text-gray-400">N/A</span>
        )}
      </td>
      <td className="p-3 text-xs leading-relaxed">{description}</td>
      <td className="whitespace-nowrap p-3">
        <Link to={chapterLink} className="gh-link text-xs">
          {chapterText}
        </Link>
      </td>
      <td className="p-3">
        <AvatarGroup avatars={authors} size="md" bordered />
      </td>
      <td className="whitespace-nowrap p-3">
        <ChallengeBadge type={difficultyType} text={difficultyText} targetPath={targetPath} />
      </td>
    </tr>
  );
};

export default CommandTableRow;
