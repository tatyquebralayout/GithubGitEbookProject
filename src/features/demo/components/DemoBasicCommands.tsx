import React from 'react';
import AuthorProfilesDemo from './AuthorProfilesDemo';
import ChallengeBadgeDemo from './ChallengeBadgeDemo';

const DemoBasicCommands: React.FC = () => (
  <div className="gh-card">
    <div className="gh-card-header">
      <span className="mr-2">📊</span>
      <span className="text-sm font-medium">Comandos Git - Básicos e Essenciais</span>
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
            <td className="font-mono">git init</td>
            <td>Inicializa um novo repositório Git</td>
            <td className="font-mono text-xs">git init meu-projeto</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="beginner" text="Iniciante" /></td>
          </tr>
          <tr>
            <td className="font-mono">git clone</td>
            <td>Clona um repositório existente</td>
            <td className="font-mono text-xs">git clone https://github.com/user/repo.git</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="beginner" text="Iniciante" /></td>
          </tr>
          <tr>
            <td className="font-mono">git add</td>
            <td>Adiciona arquivos ao staging</td>
            <td className="font-mono text-xs">git add . ou git add arquivo.txt</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="beginner" text="Iniciante" /></td>
          </tr>
          <tr>
            <td className="font-mono">git commit</td>
            <td>Salva as alterações no repositório</td>
            <td className="font-mono text-xs">git commit -m "feat: nova funcionalidade"</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="beginner" text="Iniciante" /></td>
          </tr>
          <tr>
            <td className="font-mono">git status</td>
            <td>Mostra o estado dos arquivos</td>
            <td className="font-mono text-xs">git status</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="beginner" text="Iniciante" /></td>
          </tr>
          <tr>
            <td className="font-mono">git branch</td>
            <td>Gerencia branches</td>
            <td className="font-mono text-xs">git branch feature/login</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="beginner" text="Iniciante" /></td>
          </tr>
          <tr>
            <td className="font-mono">git checkout</td>
            <td>Muda entre branches</td>
            <td className="font-mono text-xs">git checkout main</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="beginner" text="Iniciante" /></td>
          </tr>
          <tr>
            <td className="font-mono">git merge</td>
            <td>Une duas branches</td>
            <td className="font-mono text-xs">git merge feature/login</td>
            <td><AuthorProfilesDemo /></td>
            <td><ChallengeBadgeDemo type="beginner" text="Iniciante" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DemoBasicCommands; 