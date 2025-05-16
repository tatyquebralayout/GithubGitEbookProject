import React from 'react';
import { AuthorProfile } from '../../../../types/author.types';
import { CommandData } from '../../../../features/game/components/CommandTableRow';

interface GitHubCommandsPresentationProps {
  authors: AuthorProfile[];
  commands: Pick<
    CommandData,
    'name' | 'description' | 'difficultyText' | 'mermaidChart' | 'chapterLink' | 'chapterText'
  >[];
  selectedAuthor: AuthorProfile | null;
  currentStep: number;
  selectAuthor: (author: AuthorProfile) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const GitHubCommandsPresentation = ({
  authors,
  commands,
  selectedAuthor,
  currentStep,
  selectAuthor,
  nextStep,
  prevStep,
}: GitHubCommandsPresentationProps) => (
  <div className="space-y-24">
    {/* Seção Introdutória */}
    <section className="relative flex h-[400px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?w=1920&auto=compress,format"
          alt="Banner ilustrativo para a seção de comandos GitHub CLI"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700/90 to-purple-900/90" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          GitHub CLI
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Comandos do GitHub CLI
        </h1>
        <p className="mt-6 text-xl text-white/80">
          Interaja com o GitHub diretamente do seu terminal para simplificar seu fluxo de trabalho
        </p>
      </div>
    </section>
    {/* Seção de Descrição */}
    <section className="bg-white pt-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-github-fg-default">
            Potencialize sua Produtividade com GitHub CLI
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            O GitHub CLI (Command Line Interface) é uma ferramenta poderosa que permite interagir
            com o GitHub diretamente do seu terminal. Com ela, você pode gerenciar issues, pull
            requests, repositórios e muito mais sem precisar alternar para o navegador. Estes
            comandos aumentam significativamente sua produtividade e são essenciais para
            desenvolvedores que valorizam eficiência e automação em seus fluxos de trabalho.
          </p>
        </div>
      </div>
    </section>
    {/* Lista de Comandos */}
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-github-fg-default">Comandos do GitHub CLI</h2>
          <p className="mt-2 text-lg text-gray-600">
            Gerencie repositórios, issues e pull requests sem sair do terminal
          </p>
        </div>
        <div className="space-y-6">
          {commands.map((command, index) => (
            <div
              key={index}
              className="mb-4 border-b border-gray-200 pb-4 last:mb-0 last:border-0 last:pb-0"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <div className="flex items-start space-x-4 md:w-1/3">
                  <div className="mt-1 h-5 w-5 flex-shrink-0 text-github-fg-default">🔧</div>
                  <div>
                    <h3 className="font-medium text-github-fg-default">{command.name}</h3>
                    <p className="text-sm text-github-fg-muted">{command.description}</p>
                    <div className="mt-2">
                      <span className="inline-block rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-800">
                        {command.difficultyText}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-gray-50 p-2 md:w-2/3">
                  {command.mermaidChart ? (
                    <div className="text-xs text-gray-500">[Diagrama Mermaid aqui]</div>
                  ) : (
                    <div className="flex h-24 items-center justify-center text-gray-400">
                      Visualização não disponível
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3 text-right">
                <a
                  href={command.chapterLink}
                  className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {command.chapterText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Wrapper for Author Profiles and Dialogue Box */}
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
            {authors.map((author) => {
              const [name, role] = author.alt.split(' - ');
              const isSelected = selectedAuthor?.src === author.src;
              return (
                <button
                  type="button"
                  key={author.src}
                  className={`flex flex-col items-center rounded-lg p-2 text-center transition-all duration-200 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSelected ? 'scale-105 shadow-xl ring-2 ring-blue-500' : 'hover:scale-105'}`}
                  onClick={() => selectAuthor(author)}
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
            <div className="mb-1 text-center">
              <h2 className="text-3xl font-bold text-white">Desafios Interativos</h2>
              <p className="mt-2 text-lg text-blue-300">
                Interaja com nossos especialistas e teste seus conhecimentos!
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-3 lg:flex-row">
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
                      GitHub
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
                      LinkedIn
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
                      Website
                    </a>
                  )}
                </div>
              </div>
              <div className="flex w-full flex-col justify-between rounded-xl bg-slate-800 p-2 shadow-2xl lg:w-3/4">
                <div className="dialogue-content mb-2">
                  {selectedAuthor.dialogue[currentStep].type === 'text' && (
                    <p className="text-sm leading-relaxed text-gray-200 md:text-base">
                      {selectedAuthor.dialogue[currentStep].content}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between border-t border-slate-700 pt-1">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="rounded-lg bg-slate-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Voltar
                  </button>
                  <span className="text-xs text-gray-400">
                    Passo {currentStep + 1} de {selectedAuthor.dialogue.length}
                  </span>
                  <button
                    onClick={nextStep}
                    disabled={currentStep === selectedAuthor.dialogue.length - 1}
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
    </div>
  </div>
);

export default GitHubCommandsPresentation;
