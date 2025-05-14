import React, { useState } from 'react';
import { Terminal, GitBranch, GitCommit, Github, Linkedin, Globe } from 'lucide-react';
import AuthorProfiles from '../../../components/common/AuthorProfiles';
import PracticeChallengeSection from './practiceChallenge/PracticeChallengeSection';

// Define author data for this component's context
const basicCommandsAuthors = [
  { src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 1" },
  { src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 2" },
  { src: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 3" },
];

// New author data for the intro section
const basicCommandsIntroAuthors: AuthorProfileData[] = [
  {
    src: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?w=128&h=128&fit=crop&auto=compress,format",
    alt: "Tatiana Barros - Autora do Projeto",
    miniBio: "Tatiana é a idealizadora do GitSheet, apaixonada por simplificar o aprendizado de Git e GitHub para todos.",
    socialLinks: { github: "https://github.com/example", linkedin: "https://linkedin.com/in/example", website: "#" },
    dialogue: [
      { type: 'text', content: "Olá! Sou Tatiana Barros, criadora deste projeto. Fico feliz em ver você por aqui!" },
      { type: 'text', content: "Minha missão com o GitSheet é tornar o aprendizado de Git e GitHub uma jornada mais clara e objetiva para desenvolvedores de todos os níveis." },
      { type: 'text', content: "Navegue pelos perfis dos nossos especialistas ou explore os comandos básicos abaixo para começar. Se tiver alguma dúvida, nosso e-book e o jogo interativo estão aqui para ajudar!" },
    ],
  },
  {
    src: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?w=128&h=128&fit=crop&auto=compress,format",
    alt: "Carlos Silva - Especialista Git",
    miniBio: "Carlos é um entusiasta de Git com mais de 10 anos de experiência ajudando equipes a otimizar seus fluxos de trabalho de desenvolvimento.",
    socialLinks: { github: "#", linkedin: "#" },
    dialogue: [
      { type: 'text', content: "Olá! Git pode parecer intimidador no início, mas dominar o básico é transformador. Vamos começar?" },
      { type: 'text', content: "O comando 'git init' é o seu ponto de partida para qualquer novo projeto. Ele cria um novo repositório local." },
      { type: 'text', content: "Em seguida, 'git add' e 'git commit' se tornarão seus melhores amigos para salvar seu progresso. Explore mais na tabela abaixo!" },
    ],
  },
  {
    src: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?w=128&h=128&fit=crop&auto=compress,format",
    alt: "Beatriz Costa - Instrutora de Coding",
    miniBio: "Beatriz adora desmistificar conceitos complexos de programação e capacitar novos desenvolvedores com ferramentas como Git.",
    socialLinks: { linkedin: "#", website: "#" },
    dialogue: [
      { type: 'text', content: "Bem-vindo(a) ao mundo do Git! Estou aqui para mostrar que qualquer um pode aprender versionamento." },
      { type: 'text', content: "Pense no Git como uma máquina do tempo para o seu código. Cometer erros faz parte, e o Git te ajuda a gerenciá-los!" },
    ],
  },
  {
    src: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?w=128&h=128&fit=crop&auto=compress,format",
    alt: "André Souza - Eng. de Software Sênior",
    miniBio: "André foca em construir software robusto e escalável, utilizando Git diariamente para colaboração e manutenção de código limpo.",
    socialLinks: { github: "#", linkedin: "#" },
    dialogue: [
      { type: 'text', content: "Git é fundamental não apenas para projetos solo, mas essencial para trabalho em equipe. A colaboração é a chave!" },
    ],
  },
  {
    src: "https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?w=128&h=128&fit=crop&auto=compress,format",
    alt: "Mariana Lima - Educadora Tech",
    miniBio: "Mariana é apaixonada por criar conteúdo educacional acessível que capacita estudantes a terem sucesso na indústria de tecnologia.",
    socialLinks: { website: "#" },
    dialogue: [
      { type: 'text', content: "Aprender Git abre portas! É uma habilidade valorizada em quase todas as vagas de desenvolvimento." },
    ],
  },
  {
    src: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=128&h=128&fit=crop&auto=compress,format",
    alt: "Ricardo Alves - Especialista DevOps",
    miniBio: "Ricardo vive e respira automação e infraestrutura como código, onde Git desempenha um papel central.",
    socialLinks: { github: "#" },
    dialogue: [
      { type: 'text', content: "No mundo DevOps, Git é mais que versionamento de código; é usado para gerenciar configurações, infraestrutura e muito mais!" },
    ],
  },
  // {
  //   src: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?w=128&h=128&fit=crop&auto=compress,format",
  //   alt: "Sofia Ferreira - Criadora de Conteúdo Tech",
  //   miniBio: "Sofia foca em traduzir jargões técnicos em explicações claras e envolventes para a comunidade de desenvolvedores.",
  //   socialLinks: { linkedin: "#", website: "#" },
  //   dialogue: [
  //     { type: 'text', content: "Documentar seus commits e usar branches de forma eficaz são dicas de ouro para um bom trabalho com Git." },
  //   ],
  // },
];

// Define a type for our author objects for better type safety
interface AuthorProfileData {
  src: string;
  alt: string;
  miniBio?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
  dialogue?: Array<{ type: 'text' | 'image'; content?: string; src?: string; alt?: string }>;
}

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
  const [selectedAuthor, setSelectedAuthor] = useState<AuthorProfileData | null>(
    basicCommandsIntroAuthors.find(author => author.alt.includes("Tatiana Barros")) || basicCommandsIntroAuthors[0] || null
  );
  const [currentDialogStep, setCurrentDialogStep] = useState(0);

  const handleAuthorSelect = (author: AuthorProfileData) => {
    setSelectedAuthor(author);
    setCurrentDialogStep(0);
  };

  const handleNextStep = () => {
    if (selectedAuthor && selectedAuthor.dialogue && currentDialogStep < selectedAuthor.dialogue.length - 1) {
      setCurrentDialogStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentDialogStep > 0) {
      setCurrentDialogStep(prev => prev - 1);
    }
  };

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
      <section className="pt-8 bg-white">
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

      {/* Wrapper for Author Profiles and Dialogue Box with custom spacing */}
      <div>
        {/* Author Profiles Section - Clickable */}
        <section className="bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-github-fg-default">Conheça Nossos Especialistas</h2>
              <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">Nossa equipe dedicada a fornecer o melhor conteúdo sobre Git e GitHub para sua jornada. Clique em um perfil para interagir!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 max-w-5xl mx-auto">
              {basicCommandsIntroAuthors.map(author => {
                const [name, role] = author.alt.split(' - ');
                const isSelected = selectedAuthor?.src === author.src;

                return (
                  <button 
                    key={author.src} 
                    className={`flex flex-col items-center text-center p-2 rounded-lg transition-all duration-200 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSelected ? 'ring-2 ring-blue-500 shadow-xl scale-105' : 'hover:scale-105'}`}
                    onClick={() => handleAuthorSelect(author)}
                    aria-pressed={isSelected ? "true" : "false"}
                  >
                    <img 
                      src={author.src} 
                      alt={name}
                      className="w-24 h-24 rounded-full object-cover mb-2 shadow-lg"
                      loading="lazy" 
                    />
                    <h3 className="text-base font-semibold text-gray-800 mb-1">{name}</h3>
                    <p className="text-xs text-gray-600">{role}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        {selectedAuthor && selectedAuthor.dialogue && selectedAuthor.dialogue.length > 0 && (
          <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white" id="challenges-section">
            <div className="container mx-auto px-4">
              {/* Title for the Challenges Section */}
              <div className="text-center mb-1">
                <h2 className="text-3xl font-bold text-white">Desafios Interativos</h2>
                <p className="mt-2 text-lg text-blue-300">Interaja com nossos especialistas e teste seus conhecimentos!</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 items-stretch">
                {/* Left Column: Author Profile Details */}
                <div className="lg:w-1/4 w-full bg-slate-800 p-2 rounded-xl shadow-2xl flex flex-col items-center justify-center text-center sticky top-24">
                  <img 
                    src={selectedAuthor.src} 
                    alt={selectedAuthor.alt.split(' - ')[0]} 
                    className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-blue-400 shadow-md"
                  />
                  <h3 className="text-lg font-bold text-white mb-0.5">{selectedAuthor.alt.split(' - ')[0]}</h3>
                  <p className="text-sm text-blue-300 mb-1">{selectedAuthor.alt.split(' - ')[1]}</p>
                  <p className="text-xs text-gray-300 mb-2 leading-relaxed">
                    {selectedAuthor.miniBio || "Mini biografia não disponível."}
                  </p>
                  <div className="flex space-x-3 mb-2">
                    {selectedAuthor.socialLinks?.github && (
                      <a href={selectedAuthor.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {selectedAuthor.socialLinks?.linkedin && (
                      <a href={selectedAuthor.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Linkedin size={18} />
                      </a>
                    )}
                    {selectedAuthor.socialLinks?.website && (
                      <a href={selectedAuthor.socialLinks.website} target="_blank" rel="noopener noreferrer" aria-label="Website" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Globe size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Dialogue Area */}
                <div className="lg:w-3/4 w-full bg-slate-800 p-2 rounded-xl shadow-2xl flex flex-col justify-between">
                  <div className="dialogue-content mb-2">
                    {selectedAuthor.dialogue[currentDialogStep].type === 'text' && (
                      <p className="text-sm md:text-base leading-relaxed text-gray-200">
                        {selectedAuthor.dialogue[currentDialogStep].content}
                      </p>
                    )}
                    {/* Placeholder for other dialogue types like images if needed */}
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-700 pt-1">
                    <button 
                      onClick={handlePrevStep} 
                      disabled={currentDialogStep === 0}
                      className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                    >
                      Voltar
                    </button>
                    <span className="text-xs text-gray-400">
                      Passo {currentDialogStep + 1} de {selectedAuthor.dialogue.length}
                    </span>
                    <button 
                      onClick={handleNextStep} 
                      disabled={currentDialogStep === selectedAuthor.dialogue.length - 1}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                    >
                      Prosseguir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Game Section: Prática do Desafio - Agora usa o componente dedicado */}
        <PracticeChallengeSection />
      </div>

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