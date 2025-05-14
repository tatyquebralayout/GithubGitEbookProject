import React from 'react';
import AuthorProfilesDemo from './AuthorProfilesDemo';
import ChallengeBadgeDemo from './ChallengeBadgeDemo';

const DemoGitTips: React.FC = () => (
  <div className="gh-card">
    <div className="gh-card-header">
      <span className="mr-2">💡</span>
      <span className="text-sm font-medium">Dicas e Truques do Git</span>
    </div>
    <div className="gh-card-body">
      <table className="gh-table">
        <thead>
          <tr>
            <th>Dica</th>
            <th>Descrição</th>
            <th>Exemplo</th>
            <th>Autores</th>
            <th>Nível</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-mono">Aliases</td>
            <td>Crie atalhos para comandos comuns</td>
            <td className="font-mono text-xs">git config --global alias.co checkout</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="pro" text="Pro Tip" /></td>
          </tr>
          <tr>
            <td className="font-mono">Commits Semânticos</td>
            <td>Use prefixos para organizar commits</td>
            <td className="font-mono text-xs">git commit -m "feat: nova feature"</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="pro" text="Pro Tip" /></td>
          </tr>
          <tr>
            <td className="font-mono">Branches Prefixados</td>
            <td>Use prefixos nos branches</td>
            <td className="font-mono text-xs">git checkout -b feature/login</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="pro" text="Pro Tip" /></td>
          </tr>
          <tr>
            <td className="font-mono">Verificação</td>
            <td>Verifique antes de comandos destrutivos</td>
            <td className="font-mono text-xs">git clean -n</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="pro" text="Pro Tip" /></td>
          </tr>
          <tr>
            <td className="font-mono">Log Simplificado</td>
            <td>Visualize log em uma linha</td>
            <td className="font-mono text-xs">git log --oneline --graph</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="pro" text="Pro Tip" /></td>
          </tr>
          <tr>
            <td className="font-mono">Rebase Interativo</td>
            <td>Manter o repositório atualizado</td>
            <td className="font-mono text-xs">git pull --rebase origin main</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="pro" text="Pro Tip" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DemoGitTips; 