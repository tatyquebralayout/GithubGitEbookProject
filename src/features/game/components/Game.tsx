import React, { useState } from 'react';
import { File, GitBranch, GitCommit, Search, Github, Twitter, Mail, Globe, Instagram, Linkedin, Terminal, Users, Award, Code, Target, GitMerge, Star, UserCircle, GitPullRequest, History, Trash, Key, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface Challenge {
  id: number;
  title: string;
  description: string;
  command: string;
  hint: string;
  solution: string;
  points: number;
  category: 'basic' | 'intermediate' | 'advanced';
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: "Iniciando um Repositório",
    description: "Crie um novo repositório Git no diretório atual.",
    command: "git ____",
    hint: "Este comando inicializa um novo repositório Git",
    solution: "git init",
    points: 10,
    category: 'basic'
  },
  {
    id: 2,
    title: "Adicionando Arquivos",
    description: "Adicione todos os arquivos ao staging area.",
    command: "git ___ .",
    hint: "Este comando adiciona arquivos ao staging area",
    solution: "git add",
    points: 10,
    category: 'basic'
  },
  {
    id: 3,
    title: "Criando um Commit",
    description: 'Crie um commit com a mensagem "Initial commit".',
    command: 'git ______ -m "Initial commit"',
    hint: "Este comando cria um novo commit com as mudanças staged",
    solution: "git commit",
    points: 15,
    category: 'basic'
  }
];

const AuthorProfiles: React.FC = () => (
  <div className="flex -space-x-2">
    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Author 1" className="w-8 h-8 rounded-full border-2 border-white" />
    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="Author 2" className="w-8 h-8 rounded-full border-2 border-white" />
    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg" alt="Author 3" className="w-8 h-8 rounded-full border-2 border-white" />
    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" alt="Author 4" className="w-8 h-8 rounded-full border-2 border-white" />
    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="Author 5" className="w-8 h-8 rounded-full border-2 border-white" />
    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="Author 6" className="w-8 h-8 rounded-full border-2 border-white" />
  </div>
);

const ChallengeBadge: React.FC<{ type: string; text: string }> = ({ type, text }) => {
  const navigate = useNavigate();
  const baseClasses = "gh-badge transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer";
  const colorClasses = {
    beginner: "bg-github-success-emphasis text-white",
    intermediate: "bg-github-attention-fg text-white",
    github: "bg-github-accent-fg text-white",
    pro: "bg-github-done-fg text-white",
    advanced: "bg-github-severe-fg text-white"
  };

  const handleClick = () => {
    if (type === 'beginner') {
      navigate('/game/basic-commands');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`${baseClasses} ${colorClasses[type as keyof typeof colorClasses]}`}
    >
      {text}
    </button>
  );
};

const Game: React.FC = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [streakCount, setStreakCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isCorrect = userAnswer.trim().toLowerCase() === challenges[currentChallenge].solution.toLowerCase();
    
    if (isCorrect) {
      setScore(prev => prev + challenges[currentChallenge].points);
      setStreakCount(prev => prev + 1);
      setFeedback('correct');
      
      setTimeout(() => {
        if (currentChallenge < challenges.length - 1) {
          setCurrentChallenge(prev => prev + 1);
          setUserAnswer('');
          setFeedback(null);
          setShowHint(false);
        }
      }, 1500);
    } else {
      setStreakCount(0);
      setFeedback('incorrect');
    }
  };

  const challenge = challenges[currentChallenge];

  return (
    <div className="space-y-24">
      {/* Hero Banner */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
            alt="Coding Challenge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-github-accent-emphasis/90 to-github-done-emphasis/90" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide backdrop-blur-sm">
            Git Challenge
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Aprenda Git na Prática
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Complete desafios, ganhe pontos e domine os comandos Git através de exercícios práticos
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm opacity-80">Desafios</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4</div>
              <div className="text-sm opacity-80">Níveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm opacity-80">Participantes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Instructions Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-github-fg-default">Entenda o Game</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 - Choose Command */}
            <div className="gh-card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-github-accent-subtle rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-github-accent-fg" />
              </div>
              <h3 className="text-xl font-bold text-github-fg-default mb-4">1° Escolha O Comando</h3>
              <p className="text-github-fg-muted">
                Explore nossa biblioteca de comandos Git organizados por nível de dificuldade e categoria
              </p>
            </div>

            {/* Card 2 - Choose Authors */}
            <div className="gh-card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-github-success-subtle rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <UserCircle className="h-8 w-8 text-github-success-fg" />
              </div>
              <h3 className="text-xl font-bold text-github-fg-default mb-4">2° Escolha o Autor(es)</h3>
              <p className="text-github-fg-muted">
                Selecione os autores especialistas que irão guiar seu aprendizado em Git
              </p>
            </div>

            {/* Card 3 - Choose Difficulty */}
            <div className="gh-card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-github-attention-subtle rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-github-attention-fg" />
              </div>
              <h3 className="text-xl font-bold text-github-fg-default mb-4">3° Escolha a Dificuldade</h3>
              <p className="text-github-fg-muted">
                Defina seu nível de desafio, desde iniciante até profissional avançado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-github-canvas-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-github-fg-default">Entenda o Game</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="gh-card">
              <div className="aspect-w-16 aspect-h-9 bg-github-canvas-subtle rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Terminal className="h-12 w-12 text-github-fg-muted mx-auto mb-4" />
                  <p className="text-github-fg-muted">Vídeo explicativo em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-github-fg-default">Comandos Git</h2>
            <p className="mt-4 text-github-fg-muted">Explore todos os comandos organizados por categoria</p>
          </div>

          {/* Basic Commands */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-github-fg-default mb-6">Comandos Básicos</h3>
            <div className="gh-card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Comando</th>
                      <th>Descrição</th>
                      <th>Capítulo</th>
                      <th>Autores</th>
                      <th>Dificuldade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-mono">git init</td>
                      <td>Inicializa um novo repositório Git.</td>
                      <td>
                        <Link to="/game/basic-commands#init" className="gh-link">
                          Cap. 1: Setup
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="beginner" text="Iniciante" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git clone [url]</td>
                      <td>Clona um repositório existente.</td>
                      <td>
                        <Link to="/game/basic-commands#clone" className="gh-link">
                          Cap. 1: Setup
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="beginner" text="Iniciante" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git add [file]</td>
                      <td>Adiciona arquivos ao staging area.</td>
                      <td>
                        <Link to="/game/basic-commands#add" className="gh-link">
                          Cap. 2: Mudanças
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="beginner" text="Iniciante" /></td>
                    </tr>
                     <tr>
                      <td className="font-mono">git commit -m "[message]"</td>
                      <td>Salva as mudanças no repositório.</td>
                      <td>
                        <Link to="/game/basic-commands#commit" className="gh-link">
                          Cap. 2: Mudanças
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="beginner" text="Iniciante" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git status</td>
                      <td>Mostra o estado das mudanças.</td>
                      <td>
                        <Link to="/game/basic-commands#status" className="gh-link">
                          Cap. 2: Mudanças
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="beginner" text="Iniciante" /></td>
                    </tr>
                    </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Intermediate Commands */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-github-fg-default mb-6">Comandos Intermediários</h3>
             <div className="gh-card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Comando</th>
                      <th>Descrição</th>
                      <th>Capítulo</th>
                      <th>Autores</th>
                      <th>Dificuldade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-mono">git branch</td>
                      <td>Lista todos os branches.</td>
                       <td>
                        <Link to="/game/intermediate-commands#branch" className="gh-link">
                          Cap. 3: Branches
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="intermediate" text="Intermediário" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git branch [name]</td>
                      <td>Cria um novo branch.</td>
                       <td>
                        <Link to="/game/intermediate-commands#branch-new" className="gh-link">
                          Cap. 3: Branches
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="intermediate" text="Intermediário" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git checkout [name]</td>
                      <td>Muda para um branch existente.</td>
                       <td>
                        <Link to="/game/intermediate-commands#checkout" className="gh-link">
                          Cap. 3: Branches
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="intermediate" text="Intermediário" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git merge [branch]</td>
                      <td>Combina branches.</td>
                      <td>
                        <Link to="/game/intermediate-commands#merge" className="gh-link">
                          Cap. 4: Merging
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="intermediate" text="Intermediário" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git pull</td>
                      <td>Atualiza o repositório local.</td>
                      <td>
                        <Link to="/game/intermediate-commands#pull" className="gh-link">
                          Cap. 5: Remotos
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="intermediate" text="Intermediário" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git push</td>
                      <td>Envia mudanças para o remoto.</td>
                       <td>
                        <Link to="/game/intermediate-commands#push" className="gh-link">
                          Cap. 5: Remotos
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="intermediate" text="Intermediário" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Advanced Commands */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-github-fg-default mb-6">Comandos Avançados</h3>
            <div className="gh-card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Comando</th>
                      <th>Descrição</th>
                      <th>Capítulo</th>
                      <th>Autores</th>
                      <th>Dificuldade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-mono">git rebase [branch]</td>
                      <td>Reaplica commits sobre outro branch.</td>
                      <td>
                        <Link to="/game/advanced-commands#rebase" className="gh-link">
                          Cap. 6: Rebase
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="advanced" text="Avançado" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git stash</td>
                      <td>Salva mudanças temporariamente.</td>
                       <td>
                        <Link to="/game/advanced-commands#stash" className="gh-link">
                          Cap. 7: Stash
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="advanced" text="Avançado" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git cherry-pick [commit]</td>
                      <td>Aplica um commit específico.</td>
                       <td>
                        <Link to="/game/advanced-commands#cherry-pick" className="gh-link">
                          Cap. 8: Cherry-pick
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="advanced" text="Avançado" /></td>
                    </tr>
                     <tr>
                      <td className="font-mono">git log</td>
                      <td>Visualiza histórico de commits.</td>
                       <td>
                        <Link to="/game/advanced-commands#log" className="gh-link">
                          Cap. 9: Histórico
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="advanced" text="Avançado" /></td>
                    </tr>
                     <tr>
                      <td className="font-mono">git reset [file]</td>
                      <td>Remove arquivos do staging.</td>
                       <td>
                        <Link to="/game/advanced-commands#reset" className="gh-link">
                          Cap. 10: Reset
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="advanced" text="Avançado" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git tag [name]</td>
                      <td>Marca um ponto no histórico.</td>
                       <td>
                        <Link to="/game/advanced-commands#tag" className="gh-link">
                          Cap. 11: Tags
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="advanced" text="Avançado" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* GitHub Commands */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-github-fg-default mb-6">Comandos GitHub</h3>
            <div className="gh-card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Comando</th>
                      <th>Descrição</th>
                      <th>Capítulo</th>
                      <th>Autores</th>
                      <th>Dificuldade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-mono">gh pr create</td>
                      <td>Cria um Pull Request no GitHub.</td>
                      <td>
                        <Link to="/game/github-commands#pr-create" className="gh-link">
                          Cap. 12: GitHub PRs
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="github" text="GitHub" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">gh issue list</td>
                      <td>Lista issues do repositório.</td>
                       <td>
                        <Link to="/game/github-commands#issue-list" className="gh-link">
                          Cap. 13: GitHub Issues
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="github" text="GitHub" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">gh repo fork</td>
                      <td>Faz um fork de um repositório.</td>
                       <td>
                        <Link to="/game/github-commands#repo-fork" className="gh-link">
                          Cap. 14: GitHub Forks
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="github" text="GitHub" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <div>
            <h3 className="text-2xl font-bold text-github-fg-default mb-6">Dicas Pro</h3>
            <div className="gh-card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Comando</th>
                      <th>Descrição</th>
                      <th>Capítulo</th>
                      <th>Autores</th>
                      <th>Dificuldade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-mono">git bisect</td>
                      <td>Encontra o commit que introduziu um bug.</td>
                       <td>
                        <Link to="/game/pro-tips#bisect" className="gh-link">
                          Cap. 15: Debugging
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="pro" text="Pro" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git shortlog -sn</td>
                      <td>Mostra contribuidores e contagem de commits.</td>
                       <td>
                        <Link to="/game/pro-tips#shortlog" className="gh-link">
                          Cap. 16: Análise
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="pro" text="Pro" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git reflog</td>
                      <td>Mostra o histórico de movimentações do HEAD.</td>
                       <td>
                        <Link to="/game/pro-tips#reflog" className="gh-link">
                          Cap. 17: Recuperação
                        </Link>
                      </td>
                      <td><AuthorProfiles /></td>
                      <td><ChallengeBadge type="pro" text="Pro" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Game; 