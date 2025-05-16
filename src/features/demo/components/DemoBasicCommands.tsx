import {
  GitChallengeCard,
  GitChallengeCardHeader,
  GitChallengeCardBody,
} from '../../../components/ui';
import AuthorProfilesDemo from './AuthorProfilesDemo';
import ChallengeBadgeDemo from './ChallengeBadgeDemo';

const DemoBasicCommands = () => (
  <GitChallengeCard>
    <GitChallengeCardHeader icon="📊" title="Comandos Git Básicos e Essenciais" />
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
            <td className="font-mono">git init</td>
            <td>Inicializa um novo repositório Git local no diretório atual ou especificado.</td>
            <td className="font-mono text-xs">git init meu-projeto</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="beginner" text="Iniciante" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git clone</td>
            <td>Cria uma cópia local de um repositório Git existente a partir de uma URL.</td>
            <td className="font-mono text-xs">
              git clone https://github.com/usuario/repositorio.git
            </td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="beginner" text="Iniciante" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git add</td>
            <td>
              Adiciona alterações de arquivos do diretório de trabalho para a área de staging.
            </td>
            <td className="font-mono text-xs">git add . (todos) ou git add nome_do_arquivo.txt</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="beginner" text="Iniciante" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git commit</td>
            <td>
              Salva as alterações da área de staging permanentemente no histórico do repositório.
            </td>
            <td className="font-mono text-xs">
              git commit -m "feat: adiciona nova funcionalidade X"
            </td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="beginner" text="Iniciante" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git status</td>
            <td>
              Mostra o estado atual dos arquivos no diretório de trabalho e na área de staging.
            </td>
            <td className="font-mono text-xs">git status</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="beginner" text="Iniciante" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git branch</td>
            <td>Lista, cria ou exclui branches (ramos de desenvolvimento).</td>
            <td className="font-mono text-xs">git branch nova-feature</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="beginner" text="Iniciante" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git checkout</td>
            <td>Muda para um branch existente ou restaura arquivos do diretório de trabalho.</td>
            <td className="font-mono text-xs">git checkout main</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="beginner" text="Iniciante" />
            </td>
          </tr>
          <tr>
            <td className="font-mono">git merge</td>
            <td>Combina o histórico de diferentes branches em um único branch.</td>
            <td className="font-mono text-xs">git merge nova-feature (estando no main)</td>
            <td>
              <AuthorProfilesDemo />
            </td>
            <td>
              <ChallengeBadgeDemo type="beginner" text="Iniciante" />
            </td>
          </tr>
        </tbody>
      </table>
    </GitChallengeCardBody>
  </GitChallengeCard>
);

export default DemoBasicCommands;
