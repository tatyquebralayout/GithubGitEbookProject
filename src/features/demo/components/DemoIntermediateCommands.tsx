import React from 'react';
import AuthorProfilesDemo from './AuthorProfilesDemo';
import ChallengeBadgeDemo from './ChallengeBadgeDemo';

const DemoIntermediateCommands: React.FC = () => (
  <div className="gh-card">
    <div className="gh-card-header">
      <span className="mr-2">🔄</span>
      <span className="text-sm font-medium">Comandos Git - Intermediários</span>
    </div>
    <div className="gh-card-body">
      <table className="gh-table">
        <thead>
          <tr>
            <th>Comando</th>
            <th>Descrição</th>
            <th>Exemplo</th>
            <th>Autores</th>
            <th>Desafios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-mono">git rebase</td>
            <td>Reaplica commits em cima de outra base</td>
            <td className="font-mono text-xs">git rebase main</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="intermediate" text="Intermediário" /></td>
          </tr>
          <tr>
            <td className="font-mono">git cherry-pick</td>
            <td>Aplica commits específicos</td>
            <td className="font-mono text-xs">git cherry-pick abc123</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="intermediate" text="Intermediário" /></td>
          </tr>
          <tr>
            <td className="font-mono">git reflog</td>
            <td>Histórico de referências</td>
            <td className="font-mono text-xs">git reflog</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="intermediate" text="Intermediário" /></td>
          </tr>
          <tr>
            <td className="font-mono">git bisect</td>
            <td>Busca binária por bugs</td>
            <td className="font-mono text-xs">git bisect start HEAD v1.0</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="intermediate" text="Intermediário" /></td>
          </tr>
          <tr>
            <td className="font-mono">git stash</td>
            <td>Salva alterações temporárias</td>
            <td className="font-mono text-xs">git stash push -m "WIP"</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="intermediate" text="Intermediário" /></td>
          </tr>
          <tr>
            <td className="font-mono">git tag</td>
            <td>Marca releases específicos</td>
            <td className="font-mono text-xs">git tag -a v1.0 -m "Versão 1.0"</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="intermediate" text="Intermediário" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DemoIntermediateCommands; 