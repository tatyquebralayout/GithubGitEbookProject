import React from 'react';
import AuthorProfilesDemo from './AuthorProfilesDemo';
import ChallengeBadgeDemo from './ChallengeBadgeDemo';
import {
  GitChallengeCard,
  GitChallengeCardHeader,
  GitChallengeCardBody,
} from '../../../components/ui';

const DemoIntermediateCommands = () => (
  <GitChallengeCard>
    <GitChallengeCardHeader>
      <span className="mr-2">🔄</span>
      <span className="text-sm font-medium">Comandos Git Intermediários</span>
    </GitChallengeCardHeader>
    <GitChallengeCardBody>
      <table className="gh-table">
        <thead>
          <tr>
            <th>Comando</th>
            <th>Descrição</th>
            <th>Exemplo</th>
            <th>Autores</th>
            <th>Nível</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-mono">git rebase</td>
            <td>Reaplica commits de um branch sobre outro, alterando o histórico.</td>
            <td className="font-mono text-xs">git rebase main</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="intermediate" text="Intermediário" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git cherry-pick</td>
            <td>Aplica um commit específico de um branch para outro.</td>
            <td className="font-mono text-xs">git cherry-pick &lt;commit-hash&gt;</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="intermediate" text="Intermediário" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git reflog</td>
            <td>
              Mostra o histórico de todas as referências (HEAD, branches) no repositório. Útil para
              recuperar commits perdidos.
            </td>
            <td className="font-mono text-xs">git reflog</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="intermediate" text="Intermediário" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git bisect</td>
            <td>
              Realiza uma busca binária no histórico de commits para encontrar o commit que
              introduziu um bug.
            </td>
            <td className="font-mono text-xs">git bisect start HEAD &lt;good-commit&gt;</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="intermediate" text="Intermediário" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git stash</td>
            <td>
              Salva temporariamente alterações não commitadas para limpar o diretório de trabalho.
            </td>
            <td className="font-mono text-xs">git stash push -m "Trabalho em progresso"</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="intermediate" text="Intermediário" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git tag</td>
            <td>Marca commits específicos, geralmente para releases de versões (ex: v1.0).</td>
            <td className="font-mono text-xs">git tag -a v1.0 -m "Versão 1.0"</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="intermediate" text="Intermediário" />
            </td>
          </tr>
        </tbody>
      </table>
    </GitChallengeCardBody>
  </GitChallengeCard>
);

export default DemoIntermediateCommands;
