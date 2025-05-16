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
  // Campos para o card de configuração inicial
  commandsText?: string; // Bloco de texto dos comandos
  frontMermaidChart?: string; // Diagrama para a frente do card de flip
  backMermaidChart?: string; // Diagrama para o verso do card de flip
  // Fim dos campos para o card de configuração
  chapterLink: string;
  chapterText: string;
  authors: Array<{
    src: string;
    alt: string;
  }>;
  difficultyType: string;
  difficultyText: string;
  targetPath?: string; // Para ChallengeBadge ter um caminho específico se necessário
  laymanExplanation?: string; // Explicação simplificada para leigos
  commandsTextList?: string[]; // Lista de comandos de texto para copiar
}

const highlightGitCommands = (text: string): string => {
  // Regex para encontrar "git" seguido por um ou mais caracteres de palavra (o comando em si)
  // e, opcionalmente, outro caractere de palavra (ex: 'remote add').
  // Isso garante que apenas o comando principal seja negritado.
  // A lógica é um pouco mais simples aqui pois esperamos apenas uma linha de comando.
  const match = text.match(/^(git\s+[\w-]+(?:\s+[\w-]+)?)/);
  if (match && match[1]) {
    return text.replace(match[1], `<strong>${match[1]}</strong>`);
  }
  return text; // Retorna o texto original se não for um comando git ou não houver match
};

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
  const formattedName = highlightGitCommands(name);

  return (
    <tr className="transition-colors hover:bg-github-canvas-inset">
      <td
        className="whitespace-nowrap p-3 font-mono"
        dangerouslySetInnerHTML={{ __html: formattedName }}
      />
      <td className="min-h-[100px] min-w-[200px] p-3 align-middle">
        {mermaidChart ? (
          <div className="mx-auto h-[120px] w-[120px] overflow-hidden">
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
          </div>
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
