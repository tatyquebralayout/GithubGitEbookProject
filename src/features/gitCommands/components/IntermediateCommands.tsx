import React from 'react';
import { Terminal, GitBranch, GitMerge, File, Github, Linkedin, Globe } from 'lucide-react';
import { gitCommandsData, CommandCategory } from '../../../features/game/data/commandsData';
import MermaidBase from '../../../lib/mermaid/MermaidBase';
import { CommandData } from '../../../features/game/components/CommandTableRow';
import PracticeChallengeSection from './practiceChallenge/PracticeChallengeSection';
import {
  GitChallengeCard,
  GitChallengeCardHeader,
  GitChallengeCardBody,
} from '../../../components/ui';
import { AuthorProfile } from '../../../types/author.types';
import { useAuthorDialog } from '../hooks/useAuthorDialog';

// Author data for the intro section
const intermediateCommandsIntroAuthors: AuthorProfile[] = [
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
          'Os comandos intermediários de Git são essenciais para trabalho em equipe. Vamos explorar mais?',
      },
      {
        type: 'text',
        content:
          'Gerenciar branches e resolver conflitos são habilidades que diferenciam um desenvolvedor experiente.',
      },
      {
        type: 'text',
        content:
          "Com 'git branch', 'git checkout' e 'git merge', você pode organizar melhor o desenvolvimento de novas funcionalidades.",
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
          'Os comandos intermediários mostram o verdadeiro poder do Git. É como passar de jogador casual para profissional!',
      },
      {
        type: 'text',
        content:
          'Branches são como realidades paralelas do seu código. Você pode experimentar sem medo de quebrar o projeto principal.',
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
          'Quando comecei a trabalhar em equipes maiores, os comandos intermediários de Git se tornaram indispensáveis.',
      },
      {
        type: 'text',
        content:
          'Saber como navegar entre diferentes versões do código e gerenciar conflitos de merge salvou inúmeros projetos!',
      },
    ],
  },
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
        content: 'Os comandos intermediários representam um salto na sua produtividade com Git!',
      },
      {
        type: 'text',
        content:
          'Quando você domina branches, merges e resolução de conflitos, está pronto para trabalhar em qualquer equipe de desenvolvimento.',
      },
    ],
  },
];

const IntermediateCommands = () => {
  // Obter apenas os comandos intermediários do gitCommandsData
  const intermediateCommands =
    gitCommandsData.find(
      (category: CommandCategory) => category.title === 'Comandos Intermediários'
    )?.commands || [];

  // Usar o hook centralizado para seleção de autor e navegação de diálogo
  const {
    selectedAuthor,
    currentStep: currentDialogStep,
    selectAuthor: handleAuthorSelect,
    nextStep: handleNextStep,
    prevStep: handlePrevStep,
  } = useAuthorDialog(intermediateCommandsIntroAuthors, 'Carlos Silva');

  return (
    <div className="space-y-24">
      {/* Seção Introdutória */}
      <section className="relative flex h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?w=1920&auto=compress,format"
            alt="Banner ilustrativo para a seção de comandos intermediários do Git"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/90 to-yellow-800/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            Git Intermediário
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Comandos Intermediários do Git
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Expanda suas habilidades com comandos mais avançados para gerenciamento de branches e
            colaboração
          </p>
        </div>
      </section>

      {/* Seção de Descrição */}
      <section className="bg-white pt-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-github-fg-default">
              Elevando seu Conhecimento em Git
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Após dominar os comandos básicos, é hora de explorar recursos mais poderosos do Git
              para melhorar seu fluxo de trabalho. Os comandos intermediários permitem gerenciar
              branches de forma eficaz, colaborar com outros desenvolvedores e sincronizar seu
              trabalho com repositórios remotos. Estes comandos são essenciais para trabalhar em
              equipe e manter um histórico de projeto organizado.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Comandos */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-github-fg-default">
              Comandos Intermediários do Git
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Domine o gerenciamento de branches e colaboração com estes comandos essenciais
            </p>
          </div>

          <div className="space-y-6">
            <GitChallengeCard>
              <GitChallengeCardHeader>
                <Terminal className="mr-2 h-5 w-5 text-github-fg-default" />
                <span className="text-sm font-medium">Comandos Intermediários do Git</span>
              </GitChallengeCardHeader>
              <GitChallengeCardBody className="space-y-6">
                {intermediateCommands.map((command: CommandData, index: number) => {
                  // Gerar um ID único para cada diagrama
                  const diagramId = `intermediate-command-${index}-${command.name.replace(/[\s[\]]/g, '-')}`;

                  return (
                    <div
                      key={index}
                      className="mb-4 border-b border-gray-200 pb-4 last:mb-0 last:border-0 last:pb-0"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-start">
                        {/* Coluna do comando */}
                        <div className="flex items-start space-x-4 md:w-1/3">
                          <GitBranch className="mt-1 h-5 w-5 flex-shrink-0 text-github-fg-default" />
                          <div>
                            <h3 className="font-medium text-github-fg-default">{command.name}</h3>
                            <p className="text-sm text-github-fg-muted">{command.description}</p>
                            <div className="mt-2">
                              <span className="inline-block rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
                                {command.difficultyText}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Coluna do diagrama */}
                        <div className="rounded-lg bg-gray-50 p-2 md:w-2/3">
                          {command.mermaidChart ? (
                            <MermaidBase id={diagramId} definition={command.mermaidChart} />
                          ) : (
                            <div className="flex h-24 items-center justify-center text-gray-400">
                              <File className="mr-2" /> Visualização não disponível
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Link para detalhes */}
                      <div className="mt-3 text-right">
                        <a
                          href={command.chapterLink}
                          className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <GitMerge className="mr-1 h-3 w-3" />
                          {command.chapterText}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </GitChallengeCardBody>
            </GitChallengeCard>
          </div>
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
              {intermediateCommandsIntroAuthors.map((author) => {
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

        {/* Game Section: Prática do Desafio */}
        <PracticeChallengeSection />
      </div>
    </div>
  );
};

export default IntermediateCommands;
