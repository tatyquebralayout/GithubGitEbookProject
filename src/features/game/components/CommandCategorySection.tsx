import React from 'react';
import CommandTableRow, { CommandData } from './CommandTableRow';
import { GitChallengeCard } from '../../../components/ui';

interface CommandCategorySectionProps {
  title: string;
  commands: CommandData[];
  // Adicionar quaisquer outras props que a seção possa precisar, como uma descrição da categoria
}

const CommandCategorySection: React.FC<CommandCategorySectionProps> = ({ title, commands }) => {
  if (!commands || commands.length === 0) {
    return null; // Ou renderizar uma mensagem de "Nenhum comando nesta categoria"
  }

  return (
    <div className="mb-16">
      <h3 className="mb-6 text-2xl font-bold text-github-fg-default">{title}</h3>
      <GitChallengeCard>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-github-border-muted text-left">
                <th className="p-3 font-semibold text-github-fg-muted">Comando</th>
                <th className="p-3 font-semibold text-github-fg-muted">Visualização</th>
                <th className="p-3 font-semibold text-github-fg-muted">Descrição</th>
                <th className="p-3 font-semibold text-github-fg-muted">Capítulo</th>
                <th className="p-3 font-semibold text-github-fg-muted">Autores</th>
                <th className="p-3 font-semibold text-github-fg-muted">Dificuldade</th>
              </tr>
            </thead>
            <tbody>
              {commands.map((command) => (
                <CommandTableRow key={command.name} {...command} />
              ))}
            </tbody>
          </table>
        </div>
      </GitChallengeCard>
    </div>
  );
};

export default CommandCategorySection;
