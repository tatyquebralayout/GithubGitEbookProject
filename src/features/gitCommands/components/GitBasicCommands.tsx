import React from 'react';
import { Terminal, GitBranch, GitCommit } from 'lucide-react';
import AuthorProfiles from '../../../components/common/AuthorProfiles';

// Define author data for this component's context
const basicCommandsAuthors = [
  { src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 1" },
  { src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 2" },
  { src: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 3" },
];

// New author data for the intro section
const basicCommandsIntroAuthors = [
  { src: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?w=128&h=128&fit=crop&auto=compress,format", alt: "Carlos Silva - Especialista Git" },
  { src: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?w=128&h=128&fit=crop&auto=compress,format", alt: "Beatriz Costa - Instrutora de Coding" },
  { src: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?w=128&h=128&fit=crop&auto=compress,format", alt: "André Souza - Eng. de Software Sênior" },
  { src: "https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?w=128&h=128&fit=crop&auto=compress,format", alt: "Mariana Lima - Educadora Tech" },
  { src: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=128&h=128&fit=crop&auto=compress,format", alt: "Ricardo Alves - Especialista DevOps" },
  { src: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?w=128&h=128&fit=crop&auto=compress,format", alt: "Sofia Ferreira - Criadora de Conteúdo Tech" },
];

const ChallengeBadge: React.FC<{ type: string; text: string }> = ({ type, text }) => {
  const baseClasses = "gh-badge transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer";
  const colorClasses = {
    beginner: "bg-github-success-emphasis text-white",
    intermediate: "bg-github-attention-fg text-white",
    github: "bg-github-accent-fg text-white",
    pro: "bg-github-done-fg text-white"
  };

  return (
    <button className={`${baseClasses} ${colorClasses[type as keyof typeof colorClasses]}`}>
      {text}
    </button>
  );
};

const GitBasicCommands: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=1920&auto=compress,format"
            alt="Banner ilustrativo para a seção de comandos básicos do Git, com ícones e elementos visuais relacionados a código e Git"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-github-accent-emphasis/90 to-github-done-emphasis/90" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide backdrop-blur-sm">
            Git Básico
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Comandos Básicos do Git
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Domine os fundamentos do Git com nossos exercícios práticos
          </p>
        </div>
      </section>

      {/* New Section: Git e GitHub Básico */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-github-fg-default">Git e GitHub Básico</h2>
            <p className="mt-4 text-lg text-gray-700">
              Dominar os comandos básicos de Git e GitHub é o primeiro grande passo para quem está ingressando ou migrando para a carreira tecnológica.
              Eles são a base para o versionamento de projetos, colaboração em equipe e para construir um portfólio sólido.
              Nosso e-book 'Git & GitHub: Sua Jornada Profissional' e os desafios práticos do nosso Game foram desenhados para
              solidificar seu aprendizado e te preparar para o mercado, começando por estes fundamentos cruciais.
            </p>
          </div>
        </div>
      </section>

      {/* Author Profiles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-github-fg-default">Conheça Nossos Especialistas</h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">Nossa equipe dedicada a fornecer o melhor conteúdo sobre Git e GitHub para sua jornada.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto">
            {basicCommandsIntroAuthors.map(author => {
              const [name, role] = author.alt.split(' - ');
              return (
                <div key={author.src} className="flex flex-col items-center text-center">
                  <img 
                    src={author.src} 
                    alt={name}
                    className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg" 
                    loading="lazy" 
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
                  <p className="text-md text-gray-600">{role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-github-fg-default">Comandos Essenciais</h2>
            <p className="mt-4 text-github-fg-muted">Aprenda os comandos mais utilizados no dia a dia</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="gh-card">
              <div className="overflow-x-auto">
                <table className="w-full">
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
                      <td>Inicializa um novo repositório Git</td>
                      <td className="font-mono text-sm">git init meu-projeto</td>
                      <td><AuthorProfiles authors={basicCommandsAuthors} /></td>
                      <td><ChallengeBadge type="beginner" text="Iniciante" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git add</td>
                      <td>Adiciona arquivos ao staging area</td>
                      <td className="font-mono text-sm">git add .</td>
                      <td><AuthorProfiles authors={basicCommandsAuthors} /></td>
                      <td><ChallengeBadge type="beginner" text="Iniciante" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git commit</td>
                      <td>Cria um novo commit com as mudanças</td>
                      <td className="font-mono text-sm">git commit -m "feat: nova feature"</td>
                      <td><AuthorProfiles authors={basicCommandsAuthors} /></td>
                      <td><ChallengeBadge type="beginner" text="Iniciante" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git status</td>
                      <td>Mostra o estado dos arquivos</td>
                      <td className="font-mono text-sm">git status</td>
                      <td><AuthorProfiles authors={basicCommandsAuthors} /></td>
                      <td><ChallengeBadge type="beginner" text="Iniciante" /></td>
                    </tr>
                    <tr>
                      <td className="font-mono">git log</td>
                      <td>Mostra o histórico de commits</td>
                      <td className="font-mono text-sm">git log --oneline</td>
                      <td><AuthorProfiles authors={basicCommandsAuthors} /></td>
                      <td><ChallengeBadge type="beginner" text="Iniciante" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Practice Section */}
      <section className="py-16 bg-github-canvas-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-github-fg-default">Pratique Agora</h2>
            <p className="mt-4 text-github-fg-muted">Complete os desafios e teste seus conhecimentos</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="gh-card p-8">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-github-accent-subtle rounded-full p-3 mt-1">
                    <Terminal className="h-6 w-6 text-github-accent-fg" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-github-fg-default">Desafio 1: Inicializando um Projeto</h3>
                    <p className="mt-2 text-github-fg-muted">
                      Complete o comando para inicializar um novo repositório Git:
                    </p>
                    <div className="mt-4 font-mono bg-github-canvas-subtle p-4 rounded-lg">
                      git ___ meu-projeto
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-github-success-subtle rounded-full p-3 mt-1">
                    <GitBranch className="h-6 w-6 text-github-success-fg" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-github-fg-default">Desafio 2: Adicionando Arquivos</h3>
                    <p className="mt-2 text-github-fg-muted">
                      Complete o comando para adicionar todos os arquivos ao staging area:
                    </p>
                    <div className="mt-4 font-mono bg-github-canvas-subtle p-4 rounded-lg">
                      git ___ .
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-github-attention-subtle rounded-full p-3 mt-1">
                    <GitCommit className="h-6 w-6 text-github-attention-fg" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-github-fg-default">Desafio 3: Criando um Commit</h3>
                    <p className="mt-2 text-github-fg-muted">
                      Complete o comando para criar um novo commit:
                    </p>
                    <div className="mt-4 font-mono bg-github-canvas-subtle p-4 rounded-lg">
                      git ______ -m "feat: primeira versão"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GitBasicCommands; 