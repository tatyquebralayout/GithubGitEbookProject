import React, { useState } from 'react';
import { Github, Linkedin, Globe } from 'lucide-react';
import GitTerminalSimulator from './GitTerminalSimulator';
import BasicCommands from './BasicCommands';

// New author data for the intro section
const basicCommandsIntroAuthors: AuthorProfileData[] = [
  {
    src: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'Tatiana Barros - Autora do Projeto',
    miniBio:
      'Tatiana é a idealizadora do GitSheet, apaixonada por simplificar o aprendizado de Git e GitHub para todos.',
    socialLinks: {
      github: 'https://github.com/example',
      linkedin: 'https://linkedin.com/in/example',
      website: '#',
    },
    dialogue: [
      {
        type: 'text',
        content:
          'Olá! Sou Tatiana Barros, criadora deste projeto. Fico feliz em ver você por aqui!',
      },
      {
        type: 'text',
        content:
          'Minha missão com o GitSheet é tornar o aprendizado de Git e GitHub uma jornada mais clara e objetiva para desenvolvedores de todos os níveis.',
      },
      {
        type: 'text',
        content:
          'Navegue pelos perfis dos nossos especialistas ou explore os comandos básicos abaixo para começar. Se tiver alguma dúvida, nosso e-book e o jogo interativo estão aqui para ajudar!',
      },
    ],
  },
  {
    src: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'Carlos Silva - Especialista Git',
    miniBio:
      'Carlos é um entusiasta de Git com mais de 10 anos de experiência ajudando equipes a otimizar seus fluxos de trabalho de desenvolvimento.',
    socialLinks: { github: '#', linkedin: '#' },
    dialogue: [
      {
        type: 'text',
        content:
          'Olá! Git pode parecer intimidador no início, mas dominar o básico é transformador. Vamos começar?',
      },
      {
        type: 'text',
        content:
          "O comando 'git init' é o seu ponto de partida para qualquer novo projeto. Ele cria um novo repositório local.",
      },
      {
        type: 'text',
        content:
          "Em seguida, 'git add' e 'git commit' se tornarão seus melhores amigos para salvar seu progresso. Explore mais na tabela abaixo!",
      },
    ],
  },
  {
    src: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'Beatriz Costa - Instrutora de Coding',
    miniBio:
      'Beatriz adora desmistificar conceitos complexos de programação e capacitar novos desenvolvedores com ferramentas como Git.',
    socialLinks: { linkedin: '#', website: '#' },
    dialogue: [
      {
        type: 'text',
        content:
          'Bem-vindo(a) ao mundo do Git! Estou aqui para mostrar que qualquer um pode aprender versionamento.',
      },
      {
        type: 'text',
        content:
          'Pense no Git como uma máquina do tempo para o seu código. Cometer erros faz parte, e o Git te ajuda a gerenciá-los!',
      },
    ],
  },
  {
    src: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'André Souza - Eng. de Software Sênior',
    miniBio:
      'André foca em construir software robusto e escalável, utilizando Git diariamente para colaboração e manutenção de código limpo.',
    socialLinks: { github: '#', linkedin: '#' },
    dialogue: [
      {
        type: 'text',
        content:
          'Git é fundamental não apenas para projetos solo, mas essencial para trabalho em equipe. A colaboração é a chave!',
      },
    ],
  },
  {
    src: 'https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'Mariana Lima - Educadora Tech',
    miniBio:
      'Mariana é apaixonada por criar conteúdo educacional acessível que capacita estudantes a terem sucesso na indústria de tecnologia.',
    socialLinks: { website: '#' },
    dialogue: [
      {
        type: 'text',
        content:
          'Aprender Git abre portas! É uma habilidade valorizada em quase todas as vagas de desenvolvimento.',
      },
    ],
  },
  {
    src: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'Ricardo Alves - Especialista DevOps',
    miniBio:
      'Ricardo vive e respira automação e infraestrutura como código, onde Git desempenha um papel central.',
    socialLinks: { github: '#' },
    dialogue: [
      {
        type: 'text',
        content:
          'No mundo DevOps, Git é mais que versionamento de código; é usado para gerenciar configurações, infraestrutura e muito mais!',
      },
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

const GitBasicCommands: React.FC = () => {
  const [selectedAuthor, setSelectedAuthor] = useState<AuthorProfileData | null>(
    basicCommandsIntroAuthors.find((author) => author.alt.includes('Tatiana Barros')) ||
      basicCommandsIntroAuthors[0] ||
      null
  );
  const [currentDialogStep, setCurrentDialogStep] = useState(0);

  const handleAuthorSelect = (author: AuthorProfileData) => {
    setSelectedAuthor(author);
    setCurrentDialogStep(0);
  };

  const handleNextStep = () => {
    if (
      selectedAuthor &&
      selectedAuthor.dialogue &&
      currentDialogStep < selectedAuthor.dialogue.length - 1
    ) {
      setCurrentDialogStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentDialogStep > 0) {
      setCurrentDialogStep((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative flex h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=1920&auto=compress,format"
            alt="Banner ilustrativo para a seção de comandos básicos do Git, com ícones e elementos visuais relacionados a código e Git"
            className="h-full w-full object-cover"
          />
          <div className="from-github-accent-emphasis/90 to-github-done-emphasis/90 absolute inset-0 bg-gradient-to-r" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            Git Comandos
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Referência de Comandos Git
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Domine todos os níveis de comandos Git com nossa documentação completa
          </p>
        </div>
      </section>

      {/* New Section: Git e GitHub Básico */}
      <section className="bg-white pt-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-github-fg-default">Git e GitHub</h2>
            <p className="mt-4 text-lg text-gray-700">
              Dominar os comandos Git e GitHub é o primeiro grande passo para quem está ingressando
              ou migrando para a carreira tecnológica. Eles são a base para o versionamento de
              projetos, colaboração em equipe e para construir um portfólio sólido. Nosso e-book
              'Git & GitHub: Sua Jornada Profissional' e os desafios práticos do nosso Game foram
              desenhados para solidificar seu aprendizado e te preparar para o mercado, começando
              por estes fundamentos cruciais.
            </p>
          </div>
        </div>
      </section>

      {/* Comandos Básicos - exibição direta */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-github-fg-default">Comandos Básicos do Git</h2>
            <p className="mt-2 text-lg text-gray-600">
              Conheça os comandos fundamentais para iniciar sua jornada com Git
            </p>
          </div>

          {/* Conteúdo dos comandos básicos */}
          <BasicCommands />
        </div>
      </section>

      {/* Wrapper for Author Profiles and Dialogue Box with custom spacing */}
      <div>
        {/* Author Profiles Section - Clickable */}
        <section className="bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-github-fg-default">
                Conheça Nossos Especialistas
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
                Nossa equipe dedicada a fornecer o melhor conteúdo sobre Git e GitHub para sua
                jornada. Clique em um perfil para interagir!
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {basicCommandsIntroAuthors.map((author) => {
                const [name, role] = author.alt.split(' - ');
                const isSelected = selectedAuthor?.src === author.src;

                return (
                  <button
                    type="button"
                    key={author.src}
                    className={`flex flex-col items-center rounded-lg p-2 text-center transition-all duration-200 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSelected ? 'scale-105 shadow-xl ring-2 ring-blue-500' : 'hover:scale-105'}`}
                    onClick={() => handleAuthorSelect(author)}
                  >
                    <img
                      src={author.src}
                      alt={name}
                      className="mb-2 h-24 w-24 rounded-full object-cover shadow-lg"
                      loading="lazy"
                    />
                    <h3 className="mb-1 text-base font-semibold text-gray-800">{name}</h3>
                    <p className="text-xs text-gray-600">{role}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        {selectedAuthor && selectedAuthor.dialogue && selectedAuthor.dialogue.length > 0 && (
          <section
            className="bg-gradient-to-br from-slate-900 to-slate-800 text-white"
            id="challenges-section"
          >
            <div className="container mx-auto px-4">
              {/* Title for the Challenges Section */}
              <div className="mb-1 text-center">
                <h2 className="text-3xl font-bold text-white">Desafios Interativos</h2>
                <p className="mt-2 text-lg text-blue-300">
                  Interaja com nossos especialistas e teste seus conhecimentos!
                </p>
              </div>
              <div className="flex flex-col items-stretch gap-3 lg:flex-row">
                {/* Left Column: Author Profile Details */}
                <div className="sticky top-24 flex w-full flex-col items-center justify-center rounded-xl bg-slate-800 p-2 text-center shadow-2xl lg:w-1/4">
                  <img
                    src={selectedAuthor.src}
                    alt={selectedAuthor.alt.split(' - ')[0]}
                    className="mb-2 h-20 w-20 rounded-full border-4 border-blue-400 object-cover shadow-md"
                  />
                  <h3 className="mb-0.5 text-lg font-bold text-white">
                    {selectedAuthor.alt.split(' - ')[0]}
                  </h3>
                  <p className="mb-1 text-sm text-blue-300">{selectedAuthor.alt.split(' - ')[1]}</p>
                  <p className="mb-2 text-xs leading-relaxed text-gray-300">
                    {selectedAuthor.miniBio || 'Mini biografia não disponível.'}
                  </p>
                  <div className="mb-2 flex space-x-3">
                    {selectedAuthor.socialLinks?.github && (
                      <a
                        href={selectedAuthor.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-400 transition-colors hover:text-blue-400"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {selectedAuthor.socialLinks?.linkedin && (
                      <a
                        href={selectedAuthor.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-400 transition-colors hover:text-blue-400"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {selectedAuthor.socialLinks?.website && (
                      <a
                        href={selectedAuthor.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Website"
                        className="text-gray-400 transition-colors hover:text-blue-400"
                      >
                        <Globe size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Dialogue Area */}
                <div className="flex w-full flex-col justify-between rounded-xl bg-slate-800 p-2 shadow-2xl lg:w-3/4">
                  <div className="dialogue-content mb-2">
                    {selectedAuthor.dialogue[currentDialogStep].type === 'text' && (
                      <p className="text-sm leading-relaxed text-gray-200 md:text-base">
                        {selectedAuthor.dialogue[currentDialogStep].content}
                      </p>
                    )}
                    {/* Placeholder for other dialogue types like images if needed */}
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-700 pt-1">
                    <button
                      onClick={handlePrevStep}
                      disabled={currentDialogStep === 0}
                      className="rounded-lg bg-slate-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Voltar
                    </button>
                    <span className="text-xs text-gray-400">
                      Passo {currentDialogStep + 1} de {selectedAuthor.dialogue.length}
                    </span>
                    <button
                      onClick={handleNextStep}
                      disabled={currentDialogStep === selectedAuthor.dialogue.length - 1}
                      className="rounded-lg bg-blue-600 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Prosseguir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Terminal Simulator Section - Substituindo o PracticeChallengeSection */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-github-fg-default">
                Simulador de Terminal Git
              </h2>
              <p className="mx-auto mt-2 max-w-3xl text-lg text-gray-600">
                Pratique comandos Git em um ambiente simulado e veja como o gráfico do repositório
                evolui em tempo real.
              </p>
            </div>

            <div className="mx-auto max-w-6xl">
              <GitTerminalSimulator />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GitBasicCommands;
