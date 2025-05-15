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
  MarkGithubIcon
} from '@primer/octicons-react';
import { 
  GitHubRepository, 
  GitHubRemote, 
  GitHubFileStructure, 
  Commit
} from '../practiceChallenge/practiceChallengeTypes';

interface GitHubRepositorySimulatorProps {
  gitHubRepository: GitHubRepository | null;
  gitHubRemotes: GitHubRemote[];
  gitHubFileStructure: GitHubFileStructure;
  commits: Commit[];
  pushedBranches: string[];
  _currentBranch: string;
  createRepository?: (repoName: string, repoDescription: string, isPrivate: boolean) => void;
}

const GitHubRepositorySimulator: React.FC<GitHubRepositorySimulatorProps> = ({ 
  gitHubRepository, 
  gitHubRemotes, 
  gitHubFileStructure,
  commits,
  pushedBranches,
  _currentBranch,
  createRepository
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
    email: 'dev@exemplo.com'
  };

  // Tela de login simulado
  if (!isLoggedIn) {
    return (
      <div className="flex flex-col h-full bg-gray-50">
        {/* GitHub Header */}
        <div className="bg-gray-900 px-4 py-3 flex items-center">
          <MarkGithubIcon className="text-white mr-2" size={24} />
          <h2 className="text-white text-lg font-medium">GitHub Simulator</h2>
        </div>
        
        <div className="flex-grow flex items-center justify-center p-8">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <div className="flex justify-center mb-6">
              <MarkGithubIcon size={48} className="text-black" />
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-6">Entrar no GitHub</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email ou nome de usuário
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={simulatedUser.email}
                  readOnly
                  aria-label="Email ou nome de usuário"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Senha
                </label>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="••••••••"
                  readOnly
                  aria-label="Senha"
                />
              </div>
              
              <button 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium"
                onClick={() => setIsLoggedIn(true)}
              >
                Entrar
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-6">
                Este é apenas um simulador para fins educacionais.
                <br />Nenhuma informação real é enviada ou armazenada.
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
      <div className="flex flex-col h-full bg-gray-50">
        {/* GitHub Header com usuário logado */}
        <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <MarkGithubIcon className="text-white mr-2" size={24} />
          </div>
          <div className="flex items-center">
            <div className="mr-4 flex items-center">
              <PlusIcon className="text-white mr-1" size={16} />
              <span className="text-white text-sm">▼</span>
            </div>
            <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
              <img 
                src={simulatedUser.avatarUrl} 
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="flex-grow p-6">
          <div className="max-w-3xl mx-auto bg-white rounded-md shadow-sm border border-gray-200">
            <div className="border-b border-gray-200 p-4">
              <h3 className="text-xl font-semibold">Criar um novo repositório</h3>
              <p className="text-sm text-gray-600 mt-1">
                Um repositório é onde você pode armazenar seu código e acompanhar as mudanças.
              </p>
            </div>
            
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Proprietário
                </label>
                <div className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md bg-gray-50">
                  <PersonIcon className="mr-2 text-gray-500" size={16} />
                  <span>{simulatedUser.username}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome do repositório *
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newRepoName}
                  onChange={(e) => setNewRepoName(e.target.value)}
                  placeholder="meu-projeto"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Escolha um nome único para seu repositório. Você pode mudá-lo depois.
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição (opcional)
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newRepoDescription}
                  onChange={(e) => setNewRepoDescription(e.target.value)}
                  placeholder="Descreva seu projeto em poucas palavras"
                />
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="private-repo" 
                  className="h-4 w-4 text-blue-600 rounded"
                  checked={newRepoPrivate}
                  onChange={(e) => setNewRepoPrivate(e.target.checked)}
                />
                <label htmlFor="private-repo" className="ml-2 text-sm text-gray-700">
                  Privado
                </label>
              </div>
              
              <div className="mt-8 flex justify-end space-x-3">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setShowRepoCreationForm(false)}
                >
                  Cancelar
                </button>
                <button 
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium"
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
      <div className="flex flex-col h-full bg-gray-50">
        {/* GitHub Header com usuário logado */}
        <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <MarkGithubIcon className="text-white mr-2" size={24} />
          </div>
          <div className="flex items-center">
            <div className="mr-4 flex items-center cursor-pointer" onClick={() => setShowRepoCreationForm(true)}>
              <PlusIcon className="text-white mr-1" size={16} />
              <span className="text-white text-sm">▼</span>
            </div>
            <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
              <img 
                src={simulatedUser.avatarUrl} 
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="flex-grow p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Repositórios</h2>
              <button 
                className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium"
                onClick={() => setShowRepoCreationForm(true)}
              >
                <PlusIcon className="mr-1" size={16} />
                Novo
              </button>
            </div>
            
            <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6 text-center">
              <div className="flex flex-col items-center">
                <RepoIcon className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">Não há repositórios ainda</h3>
                <p className="text-gray-500 mb-6 max-w-md">
                  Crie seu primeiro repositório ou conecte um existente através do terminal Git.
                </p>
                
                <div className="flex space-x-4">
                  <button 
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium flex items-center"
                    onClick={() => setShowRepoCreationForm(true)}
                  >
                    <PlusIcon className="mr-1" size={16} />
                    Novo repositório
                  </button>
                  
                  <div className="px-4 py-2 border border-gray-300 bg-gray-50 rounded-md">
                    <p className="text-xs text-gray-600 mb-2 font-semibold">Ou conecte via terminal:</p>
                    <code className="block text-xs bg-gray-100 p-2 rounded text-gray-800 text-left">
                      git remote add origin https://github.com/{simulatedUser.username}/meu-projeto.git<br />
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
  const pushedCommits = commits.filter(commit => 
    remoteBranches.includes(commit.branch) && commit.id !== 'Initial'
  );

  // Obter o repositório remoto principal (origin)
  const originRemote = gitHubRemotes.find(remote => remote.name === 'origin');

  // Renderizar repositório com conteúdo
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* GitHub Header com usuário logado */}
      <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <MarkGithubIcon className="text-white mr-2" size={24} />
          <div className="text-white text-sm hidden md:block">
            <span className="font-semibold">{simulatedUser.username}</span> / 
            <span className="font-bold ml-1">{gitHubRepository.name}</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4 flex items-center">
            <PlusIcon className="text-white mr-1" size={16} />
            <span className="text-white text-sm">▼</span>
          </div>
          <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
            <img 
              src={simulatedUser.avatarUrl} 
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="flex-grow p-4">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho do repositório */}
          <div className="bg-white rounded-t-md shadow-sm border border-gray-200 p-4">
            <div className="flex items-center">
              <RepoIcon className="text-gray-600 mr-2" size={20} />
              <h2 className="text-xl font-semibold">{gitHubRepository.owner}/{gitHubRepository.name}</h2>
              <span className="ml-2 text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                {gitHubRepository.isPrivate ? 'Private' : 'Public'}
              </span>
            </div>
            
            <p className="text-gray-600 mt-2 text-sm">
              {gitHubRepository.description || 'Sem descrição'}
            </p>
            
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex items-center">
                <GitBranchIcon className="text-gray-500 mr-1" size={16} />
                <select 
                  className="text-sm bg-transparent text-gray-700 outline-none appearance-none pr-8"
                  defaultValue={gitHubRepository.defaultBranch}
                  aria-label="Selecionar branch"
                >
                  {remoteBranches.map(branch => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center text-gray-600">
                <StarIcon className="mr-1" size={16} />
                <span className="text-sm mr-1">{gitHubRepository.stars}</span>
                <span className="text-xs">stars</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <RepoForkedIcon className="mr-1" size={16} />
                <span className="text-sm mr-1">{gitHubRepository.forks}</span>
                <span className="text-xs">forks</span>
              </div>
            </div>
          </div>
          
          {/* Tabs de navegação */}
          <div className="flex bg-white border-l border-r border-gray-200">
            <button 
              onClick={() => setActiveTab('code')}
              className={`px-4 py-3 text-sm font-medium flex items-center ${
                activeTab === 'code' 
                  ? 'border-b-2 border-red-500 text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>Code</span>
            </button>
            <button 
              onClick={() => setActiveTab('issues')}
              className={`px-4 py-3 text-sm font-medium flex items-center ${
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
              className={`px-4 py-3 text-sm font-medium flex items-center ${
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
              className={`px-4 py-3 text-sm font-medium flex items-center ${
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
          <div className="bg-white border border-t-0 border-gray-200 rounded-b-md p-4">
            {activeTab === 'code' && (
              <div>
                {Object.values(gitHubFileStructure).length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    <div className="pb-3 text-sm text-gray-600">
                      {pushedCommits.length > 0 && (
                        <span>
                          Último commit: <code className="bg-gray-100 px-1 py-0.5 rounded">{pushedCommits[0].id.substring(0, 7)}</code> - {pushedCommits[0].message}
                        </span>
                      )}
                    </div>
                    
                    <ul className="pt-3">
                      {Object.values(gitHubFileStructure).map((file) => (
                        <li key={file.path} className="py-2 hover:bg-gray-50">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <svg className="text-gray-500 mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path fillRule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z" />
                              </svg>
                              <span className="text-blue-600 hover:underline">{file.name}</span>
                            </div>
                            <div className="text-xs text-gray-500">
                              <span>{file.lastCommitMessage || "Commit inicial"}</span>
                              <span className="ml-2">{new Date(file.lastModified).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <RepoIcon className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium text-gray-700 mb-2">Repositório vazio</h3>
                    <p className="text-gray-500 mb-6 max-w-md mx-auto">
                      Este repositório não tem arquivos ainda. Use o terminal Git para adicionar arquivos e fazer commits.
                    </p>
                    <div className="mx-auto max-w-lg bg-gray-50 border border-gray-200 rounded-md p-4">
                      <p className="text-xs text-gray-600 mb-2 font-semibold">Comandos sugeridos:</p>
                      <code className="block text-xs bg-gray-100 p-3 rounded text-gray-800 text-left">
                        # Clone o repositório<br/>
                        git clone https://github.com/{gitHubRepository.owner}/{gitHubRepository.name}.git<br/>
                        cd {gitHubRepository.name}<br/><br/>
                        # Crie um arquivo e faça commit<br/>
                        touch README.md<br/>
                        git add README.md<br/>
                        git commit -m "Commit inicial"<br/>
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
                    {pushedCommits.map(commit => (
                      <li key={commit.id} className="py-3 hover:bg-gray-50">
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                              <img 
                                src={simulatedUser.avatarUrl} 
                                alt="Avatar"
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-medium text-blue-600 hover:underline">{commit.message}</div>
                            <div className="text-xs text-gray-500 mt-1">
                              <span>{gitHubRepository.owner}</span>
                              <span className="mx-1">realizou commit em</span>
                              <span>{new Date(commit.date).toLocaleDateString('pt-BR')}</span>
                              <span className="mx-1">•</span>
                              <code className="bg-gray-100 px-1 py-0.5 rounded">{commit.id.substring(0, 7)}</code>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-12">
                    <HistoryIcon className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium text-gray-700">Sem commits</h3>
                    <p className="text-gray-500 mt-2">
                      Este repositório ainda não tem commits.
                    </p>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'issues' && (
              <div className="text-center py-12">
                <IssueOpenedIcon className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-700">Não há issues</h3>
                <p className="text-gray-500 mt-2">
                  Não há issues abertas neste repositório.
                </p>
              </div>
            )}
            
            {activeTab === 'prs' && (
              <div className="text-center py-12">
                <GitPullRequestIcon className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-700">Não há pull requests</h3>
                <p className="text-gray-500 mt-2">
                  Não há pull requests abertos neste repositório.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-white border-t border-gray-200 py-3 px-4 text-xs text-gray-500">
        <div className="max-w-6xl mx-auto flex justify-between">
          <div>
            © {new Date().getFullYear()} GitHub Simulator
          </div>
          <div>
            <span className="mr-4">URL: {originRemote?.url || `https://github.com/${gitHubRepository.owner}/${gitHubRepository.name}.git`}</span>
            <span>Última atualização: {new Date(gitHubRepository.lastUpdatedAt).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubRepositorySimulator; 