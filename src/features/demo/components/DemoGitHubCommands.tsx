import React from 'react';
import AuthorProfilesDemo from './AuthorProfilesDemo';
import ChallengeBadgeDemo from './ChallengeBadgeDemo';
import {
  GitChallengeCard,
  GitChallengeCardHeader,
  GitChallengeCardBody,
} from '../../../components/ui';

const DemoGitHubCommands: React.FC = () => (
  <GitChallengeCard>
    <GitChallengeCardHeader>
      <span className="mr-2">🌐</span>
      <span className="text-sm font-medium">Comandos do GitHub</span>
    </GitChallengeCardHeader>
    <GitChallengeCardBody>
      <table className="gh-table">
        <thead>
          <tr>
            <th>Comando</th>
            <th>Descrição</th>
            <th>Exemplo</th>
            <th>Autores</th>
            <th>Plataforma</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-mono">git remote add</td>
            <td>Adiciona uma conexão a um repositório remoto (ex: no GitHub).</td>
            <td className="font-mono text-xs">
              git remote add origin https://github.com/user/repo.git
            </td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="github" text="GitHub" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git push</td>
            <td>Envia commits locais para o repositório remoto (ex: GitHub).</td>
            <td className="font-mono text-xs">git push origin main</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="github" text="GitHub" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git pull</td>
            <td>Busca e mescla alterações do repositório remoto para o local.</td>
            <td className="font-mono text-xs">git pull origin main</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="github" text="GitHub" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git fetch</td>
            <td>Baixa o histórico de commits e refs de um repositório remoto, sem mesclar.</td>
            <td className="font-mono text-xs">git fetch --all</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="github" text="GitHub" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">Fork (no GitHub)</td>
            <td>Cria uma cópia de um repositório no seu próprio perfil do GitHub.</td>
            <td className="font-mono text-xs">Interface do GitHub</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="github" text="GitHub" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">Pull Request (no GitHub)</td>
            <td>Propõe alterações de um fork ou branch para o repositório original.</td>
            <td className="font-mono text-xs">Interface do GitHub</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="github" text="GitHub" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">Issues (no GitHub)</td>
            <td>Gerencia tarefas, bugs e melhorias de um projeto no GitHub.</td>
            <td className="font-mono text-xs">Interface do GitHub</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="github" text="GitHub" />
            </td>
          </tr>
        </tbody>
      </table>
    </GitChallengeCardBody>
  </GitChallengeCard>
);

export default DemoGitHubCommands;
