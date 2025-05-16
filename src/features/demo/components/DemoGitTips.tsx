import {
  GitChallengeCard,
  GitChallengeCardHeader,
  GitChallengeCardBody,
} from '../../../components/ui';
import AuthorProfilesDemo from './AuthorProfilesDemo';
import ChallengeBadgeDemo from './ChallengeBadgeDemo';

const DemoGitTips = () => (
  <GitChallengeCard>
    <GitChallengeCardHeader icon="💡" title="Dicas e Truques do Git" />
    <GitChallengeCardBody>
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
            <td>Crie atalhos para comandos comuns.</td>
            <td className="font-mono text-xs">git config --global alias.co checkout</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="pro" text="Dica Pro" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">Semantic Commits</td>
            <td>Use prefixos para organizar seus commits (ex: feat, fix, chore).</td>
            <td className="font-mono text-xs">git commit -m "feat: add new login feature"</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="pro" text="Dica Pro" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">Prefixed Branches</td>
            <td>Use prefixos em branches para melhor organização (ex: feature/, bugfix/).</td>
            <td className="font-mono text-xs">git checkout -b feature/login</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="pro" text="Dica Pro" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">Dry Run Verification</td>
            <td>Verifique o que será alterado antes de executar comandos destrutivos.</td>
            <td className="font-mono text-xs">git clean -n</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="pro" text="Dica Pro" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">Simplified Log</td>
            <td>Visualize o histórico de commits de forma concisa e gráfica.</td>
            <td className="font-mono text-xs">git log --oneline --graph</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="pro" text="Dica Pro" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">Interactive Rebase Pull</td>
            <td>Mantenha seu branch atualizado com a `main` (ou outra branch) de forma limpa.</td>
            <td className="font-mono text-xs">git pull --rebase origin main</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="pro" text="Dica Pro" />
            </td>
          </tr>
        </tbody>
      </table>
    </GitChallengeCardBody>
  </GitChallengeCard>
);

export default DemoGitTips;
