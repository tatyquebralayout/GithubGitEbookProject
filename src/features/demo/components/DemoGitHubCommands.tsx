import React from 'react';
import AuthorProfilesDemo from './AuthorProfilesDemo';
import ChallengeBadgeDemo from './ChallengeBadgeDemo';

const DemoGitHubCommands: React.FC = () => (
  <div className="gh-card">
    <div className="gh-card-header">
      <span className="mr-2">🌐</span>
      <span className="text-sm font-medium">Comandos GitHub</span>
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
            <td className="font-mono">git remote add</td>
            <td>Adiciona um repositório remoto</td>
            <td className="font-mono text-xs">git remote add origin https://github.com/user/repo.git</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="github" text="GitHub" /></td>
          </tr>
          <tr>
            <td className="font-mono">git push</td>
            <td>Envia alterações para o GitHub</td>
            <td className="font-mono text-xs">git push origin main</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="github" text="GitHub" /></td>
          </tr>
          <tr>
            <td className="font-mono">git pull</td>
            <td>Atualiza repositório local</td>
            <td className="font-mono text-xs">git pull origin main</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="github" text="GitHub" /></td>
          </tr>
          <tr>
            <td className="font-mono">git fetch</td>
            <td>Baixa objetos e refs do GitHub</td>
            <td className="font-mono text-xs">git fetch --all</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="github" text="GitHub" /></td>
          </tr>
          <tr>
            <td className="font-mono">git fork</td>
            <td>Cria uma cópia do repositório no GitHub</td>
            <td className="font-mono text-xs">Usar interface do GitHub</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="github" text="GitHub" /></td>
          </tr>
          <tr>
            <td className="font-mono">git pull-request</td>
            <td>Cria um Pull Request</td>
            <td className="font-mono text-xs">Usar interface do GitHub</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="github" text="GitHub" /></td>
          </tr>
          <tr>
            <td className="font-mono">git issue</td>
            <td>Gerencia issues no GitHub</td>
            <td className="font-mono text-xs">Usar interface do GitHub</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="github" text="GitHub" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DemoGitHubCommands; 