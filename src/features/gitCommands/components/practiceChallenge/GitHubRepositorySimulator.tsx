import React, { useState } from 'react';
import {
  GitBranchIcon,
  GitPullRequestIcon,
  IssueOpenedIcon,
  StarIcon,
  RepoForkedIcon,
  HistoryIcon,
  RepoIcon,
  PlusIcon,
  PersonIcon,
  MarkGithubIcon,
} from '@primer/octicons-react';
import {
  GitHubRepository,
  GitHubRemote,
  GitHubFileStructure,
  Commit,
} from '../practiceChallenge/practiceChallengeTypes';

interface GitHubRepositorySimulatorProps {
  gitHubRepository: GitHubRepository | null;
  gitHubRemotes: GitHubRemote[];
  gitHubFileStructure: GitHubFileStructure;
  commits: Commit[];
  pushedBranches: string[];
  // O branch atual do usuário, não usado diretamente no componente
  _currentBranch: string;
  createRepository?: (repoName: string, repoDescription: string, isPrivate: boolean) => void;
}

const GitHubRepositorySimulator: React.FC<GitHubRepositorySimulatorProps> = ({
  gitHubRepository,
  gitHubRemotes,
  gitHubFileStructure,
  commits,
  pushedBranches,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _currentBranch,
  createRepository,
}) => {
  const [activeTab, setActiveTab] = useState<'code' | 'issues' | 'prs' | 'commits'>('code');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRepoCreationForm, setShowRepoCreationForm] = useState(false);
  const [newRepoName, setNewRepoName] = useState('');
  const [newRepoDescription, setNewRepoDescription] = useState('');
  const [newRepoPrivate, setNewRepoPrivate] = useState(false);

  // Dados do usuário simulado
  const simulatedUser = {
    username: 'devuser',
    fullName: 'Dev User',
    avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4', // Placeholder URL
    email: 'dev@exemplo.com',
  };

  // Tela de login simulado
  if (!isLoggedIn) {
    return (
      <div className="flex h-full flex-col bg-gray-50">
        {/* GitHub Header */}
        <div className="flex items-center bg-gray-900 px-4 py-3">
          <MarkGithubIcon className="mr-2 text-white" size={24} />
          <h2 className="text-lg font-medium text-white">GitHub Simulator</h2>
        </div>

        <div className="flex flex-grow items-center justify-center p-8">
          <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
            <div className="mb-6 flex justify-center">
              <MarkGithubIcon size={48} className="text-black" />
            </div>

            <h3 className="mb-6 text-center text-2xl font-bold">Entrar no GitHub</h3>

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email ou nome de usuário
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={simulatedUser.email}
                  readOnly
                  aria-label="Email ou nome de usuário"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Senha</label>
                <input
                  type="password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="••••••••"
                  readOnly
                  aria-label="Senha"
                />
              </div>

              <button
                className="w-full rounded-md bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
                onClick={() => setIsLoggedIn(true)}
              >
                Entrar
              </button>

              <p className="mt-6 text-center text-xs text-gray-500">
                Este é apenas um simulador para fins educacionais.
                <br />
                Nenhuma informação real é enviada ou armazenada.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tela de criação de repositório
  if (showRepoCreationForm) {
    return (
      <div className="flex h-full flex-col bg-gray-50">
        {/* GitHub Header com usuário logado */}
        <div className="flex items-center justify-between bg-gray-900 px-4 py-2">
          <div className="flex items-center">
            <MarkGithubIcon className="mr-2 text-white" size={24} />
          </div>
          <div className="flex items-center">
            <div className="mr-4 flex items-center">
              <PlusIcon className="mr-1 text-white" size={16} />
              <span className="text-sm text-white">▼</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-600">
              <img
                src={simulatedUser.avatarUrl}
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex-grow p-6">
          <div className="mx-auto max-w-3xl rounded-md border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 p-4">
              <h3 className="text-xl font-semibold">Criar um novo repositório</h3>
              <p className="mt-1 text-sm text-gray-600">
                Um repositório é onde você pode armazenar seu código e acompanhar as mudanças.
              </p>
            </div>

            <div className="space-y-4 p-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Proprietário</label>
                <div className="inline-flex items-center rounded-md border border-gray-300 bg-gray-50 px-3 py-2">
                  <PersonIcon className="mr-2 text-gray-500" size={16} />
                  <span>{simulatedUser.username}</span>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Nome do repositório *
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newRepoName}
                  onChange={(e) => setNewRepoName(e.target.value)}
                  placeholder="meu-projeto"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Escolha um nome único para seu repositório. Você pode mudá-lo depois.
                </p>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Descrição (opcional)
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newRepoDescription}
                  onChange={(e) => setNewRepoDescription(e.target.value)}
                  placeholder="Descreva seu projeto em poucas palavras"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="private-repo"
                  className="h-4 w-4 rounded text-blue-600"
                  checked={newRepoPrivate}
                  onChange={(e) => setNewRepoPrivate(e.target.checked)}
                />
                <label htmlFor="private-repo" className="ml-2 text-sm text-gray-700">
                  Privado
                </label>
              </div>

              <div className="mt-8 flex justify-end space-x-3">
                <button
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setShowRepoCreationForm(false)}
                >
                  Cancelar
                </button>
                <button
                  className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                  onClick={() => {
                    // Em um caso real, aqui chamaríamos uma API para criar o repositório.
                    // Para o simulador, apenas fechamos o formulário.
                    if (createRepository && newRepoName) {
                      createRepository(newRepoName, newRepoDescription, newRepoPrivate);
                    }
                    setShowRepoCreationForm(false);
                  }}
                >
                  Criar repositório
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Se não houver repositório ou remotes, mostrar tela inicial do GitHub
  if (!gitHubRepository || gitHubRemotes.length === 0) {
    return (
      <div className="flex h-full flex-col bg-gray-50">
        {/* GitHub Header com usuário logado */}
        <div className="flex items-center justify-between bg-gray-900 px-4 py-2">
          <div className="flex items-center">
            <MarkGithubIcon className="mr-2 text-white" size={24} />
          </div>
          <div className="flex items-center">
            <div
              className="mr-4 flex cursor-pointer items-center"
              onClick={() => setShowRepoCreationForm(true)}
            >
              <PlusIcon className="mr-1 text-white" size={16} />
              <span className="text-sm text-white">▼</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-600">
              <img
                src={simulatedUser.avatarUrl}
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex-grow p-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Repositórios</h2>
              <button
                className="flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                onClick={() => setShowRepoCreationForm(true)}
              >
                <PlusIcon className="mr-1" size={16} />
                Novo
              </button>
            </div>

            <div className="rounded-md border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="flex flex-col items-center">
                <RepoIcon className="mb-4 h-16 w-16 text-gray-300" />
                <h3 className="mb-2 text-xl font-medium text-gray-700">
                  Não há repositórios ainda
                </h3>
                <p className="mb-6 max-w-md text-gray-500">
                  Crie seu primeiro repositório ou conecte um existente através do terminal Git.
                </p>

                <div className="flex space-x-4">
                  <button
                    className="flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                    onClick={() => setShowRepoCreationForm(true)}
                  >
                    <PlusIcon className="mr-1" size={16} />
                    Novo repositório
                  </button>

                  <div className="rounded-md border border-gray-300 bg-gray-50 px-4 py-2">
                    <p className="mb-2 text-xs font-semibold text-gray-600">
                      Ou conecte via terminal:
                    </p>
                    <code className="block rounded bg-gray-100 p-2 text-left text-xs text-gray-800">
                      git remote add origin https://github.com/{simulatedUser.username}
                      /meu-projeto.git
                      <br />
                      git push -u origin main
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Identificar quais branches estão no repositório remoto (pushed)
  const remoteBranches = pushedBranches;

  // Filtrar apenas os commits que foram enviados (pushed)
  const pushedCommits = commits.filter(
    (commit) => remoteBranches.includes(commit.branch) && commit.id !== 'Initial'
  );

  // Obter o repositório remoto principal (origin)
  const originRemote = gitHubRemotes.find((remote) => remote.name === 'origin');

  // Renderizar repositório com conteúdo
  return (
    <div className="flex h-full flex-col bg-gray-50">
      {/* GitHub Header com usuário logado */}
      <div className="flex items-center justify-between bg-gray-900 px-4 py-2">
        <div className="flex items-center">
          <MarkGithubIcon className="mr-2 text-white" size={24} />
          <div className="hidden text-sm text-white md:block">
            <span className="font-semibold">{simulatedUser.username}</span> /
            <span className="ml-1 font-bold">{gitHubRepository.name}</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4 flex items-center">
            <PlusIcon className="mr-1 text-white" size={16} />
            <span className="text-sm text-white">▼</span>
          </div>
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-600">
            <img
              src={simulatedUser.avatarUrl}
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex-grow p-4">
        <div className="mx-auto max-w-6xl">
          {/* Cabeçalho do repositório */}
          <div className="rounded-t-md border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center">
              <RepoIcon className="mr-2 text-gray-600" size={20} />
              <h2 className="text-xl font-semibold">
                {gitHubRepository.owner}/{gitHubRepository.name}
              </h2>
              <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                {gitHubRepository.isPrivate ? 'Private' : 'Public'}
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-600">
              {gitHubRepository.description || 'Sem descrição'}
            </p>

            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center">
                <GitBranchIcon className="mr-1 text-gray-500" size={16} />
                <select
                  className="appearance-none bg-transparent pr-8 text-sm text-gray-700 outline-none"
                  defaultValue={gitHubRepository.defaultBranch}
                  aria-label="Selecionar branch"
                >
                  {/* Usar um Set para garantir que não haja branches com a mesma chave */}
                  {[...new Set(remoteBranches)].map((branch) => (
                    <option key={`branch-${branch}`} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center text-gray-600">
                <StarIcon className="mr-1" size={16} />
                <span className="mr-1 text-sm">{gitHubRepository.stars}</span>
                <span className="text-xs">stars</span>
              </div>

              <div className="flex items-center text-gray-600">
                <RepoForkedIcon className="mr-1" size={16} />
                <span className="mr-1 text-sm">{gitHubRepository.forks}</span>
                <span className="text-xs">forks</span>
              </div>
            </div>
          </div>

          {/* Tabs de navegação */}
          <div className="flex border-l border-r border-gray-200 bg-white">
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center px-4 py-3 text-sm font-medium ${
                activeTab === 'code'
                  ? 'border-b-2 border-red-500 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>Code</span>
            </button>
            <button
              onClick={() => setActiveTab('issues')}
              className={`flex items-center px-4 py-3 text-sm font-medium ${
                activeTab === 'issues'
                  ? 'border-b-2 border-red-500 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <IssueOpenedIcon className="mr-1" size={16} />
              <span>Issues</span>
            </button>
            <button
              onClick={() => setActiveTab('prs')}
              className={`flex items-center px-4 py-3 text-sm font-medium ${
                activeTab === 'prs'
                  ? 'border-b-2 border-red-500 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <GitPullRequestIcon className="mr-1" size={16} />
              <span>Pull requests</span>
            </button>
            <button
              onClick={() => setActiveTab('commits')}
              className={`flex items-center px-4 py-3 text-sm font-medium ${
                activeTab === 'commits'
                  ? 'border-b-2 border-red-500 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <HistoryIcon className="mr-1" size={16} />
              <span>Commits</span>
            </button>
          </div>

          {/* Conteúdo da Tab ativa */}
          <div className="rounded-b-md border border-t-0 border-gray-200 bg-white p-4">
            {activeTab === 'code' && (
              <div>
                {Object.values(gitHubFileStructure).length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    <div className="pb-3 text-sm text-gray-600">
                      {pushedCommits.length > 0 && (
                        <span>
                          Último commit:{' '}
                          <code className="rounded bg-gray-100 px-1 py-0.5">
                            {pushedCommits[0].id.substring(0, 7)}
                          </code>{' '}
                          - {pushedCommits[0].message}
                        </span>
                      )}
                    </div>

                    <ul className="pt-3">
                      {Object.values(gitHubFileStructure).map((file) => (
                        <li key={file.path} className="py-2 hover:bg-gray-50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg
                                className="mr-2 text-gray-500"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"
                                />
                              </svg>
                              <span className="text-blue-600 hover:underline">{file.name}</span>
                            </div>
                            <div className="text-xs text-gray-500">
                              <span>{file.lastCommitMessage || 'Commit inicial'}</span>
                              <span className="ml-2">
                                {new Date(file.lastModified).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <RepoIcon className="mx-auto mb-4 h-12 w-12 text-gray-300" />
                    <h3 className="mb-2 text-xl font-medium text-gray-700">Repositório vazio</h3>
                    <p className="mx-auto mb-6 max-w-md text-gray-500">
                      Este repositório não tem arquivos ainda. Use o terminal Git para adicionar
                      arquivos e fazer commits.
                    </p>
                    <div className="mx-auto max-w-lg rounded-md border border-gray-200 bg-gray-50 p-4">
                      <p className="mb-2 text-xs font-semibold text-gray-600">
                        Comandos sugeridos:
                      </p>
                      <code className="block rounded bg-gray-100 p-3 text-left text-xs text-gray-800">
                        # Clone o repositório
                        <br />
                        git clone https://github.com/{gitHubRepository.owner}/
                        {gitHubRepository.name}.git
                        <br />
                        cd {gitHubRepository.name}
                        <br />
                        <br />
                        # Crie um arquivo e faça commit
                        <br />
                        touch README.md
                        <br />
                        git add README.md
                        <br />
                        git commit -m "Commit inicial"
                        <br />
                        git push origin main
                      </code>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'commits' && (
              <div>
                {pushedCommits.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {pushedCommits.map((commit) => (
                      <li key={commit.id} className="py-3 hover:bg-gray-50">
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-600">
                              <img
                                src={simulatedUser.avatarUrl}
                                alt="Avatar"
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-medium text-blue-600 hover:underline">
                              {commit.message}
                            </div>
                            <div className="mt-1 text-xs text-gray-500">
                              <span>{gitHubRepository.owner}</span>
                              <span className="mx-1">realizou commit em</span>
                              <span>{new Date(commit.date).toLocaleDateString('pt-BR')}</span>
                              <span className="mx-1">•</span>
                              <code className="rounded bg-gray-100 px-1 py-0.5">
                                {commit.id.substring(0, 7)}
                              </code>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="py-12 text-center">
                    <HistoryIcon className="mx-auto mb-4 h-12 w-12 text-gray-300" />
                    <h3 className="text-xl font-medium text-gray-700">Sem commits</h3>
                    <p className="mt-2 text-gray-500">Este repositório ainda não tem commits.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'issues' && (
              <div className="py-12 text-center">
                <IssueOpenedIcon className="mx-auto mb-4 h-12 w-12 text-gray-300" />
                <h3 className="text-xl font-medium text-gray-700">Não há issues</h3>
                <p className="mt-2 text-gray-500">Não há issues abertas neste repositório.</p>
              </div>
            )}

            {activeTab === 'prs' && (
              <div className="py-12 text-center">
                <GitPullRequestIcon className="mx-auto mb-4 h-12 w-12 text-gray-300" />
                <h3 className="text-xl font-medium text-gray-700">Não há pull requests</h3>
                <p className="mt-2 text-gray-500">
                  Não há pull requests abertos neste repositório.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-white px-4 py-3 text-xs text-gray-500">
        <div className="mx-auto flex max-w-6xl justify-between">
          <div>© {new Date().getFullYear()} GitHub Simulator</div>
          <div>
            <span className="mr-4">
              URL:{' '}
              {originRemote?.url ||
                `https://github.com/${gitHubRepository.owner}/${gitHubRepository.name}.git`}
            </span>
            <span>
              Última atualização: {new Date(gitHubRepository.lastUpdatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubRepositorySimulator;
