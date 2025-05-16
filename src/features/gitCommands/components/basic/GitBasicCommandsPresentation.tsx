import React from 'react';
// import PracticeChallengeSection from '../practiceChallenge/PracticeChallengeSection';
// import { CommandData } from '../../../../features/game/components/CommandTableRow';
// import {
//   GitChallengeCard,
//   GitChallengeCardHeader,
//   GitChallengeCardBody,
// } from '../../../../components/ui';
import { AuthorProfile } from '@types/author/author.types';
import BasicCommands from '../BasicCommands';
import AuthorProfileCard from '@shared/components/AuthorProfileCard';

interface GitBasicCommandsPresentationProps {
  authors: AuthorProfile[];
  // commands: CommandData[];
  selectedAuthor: AuthorProfile | null;
  currentStep: number;
  selectAuthor: (author: AuthorProfile) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const GitBasicCommandsPresentation = ({
  authors,
  // commands,
  selectedAuthor,
  currentStep,
  selectAuthor,
  nextStep,
  prevStep,
}: GitBasicCommandsPresentationProps) => (
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
    {/* Seção: Git e GitHub Básico */}
    <section className="bg-white pt-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-github-fg-default">Git e GitHub</h2>
          <p className="mt-4 text-lg text-gray-700">
            Dominar os comandos Git e GitHub é o primeiro grande passo para quem está ingressando ou
            migrando para a carreira tecnológica. Eles são a base para o versionamento de projetos,
            colaboração em equipe e para construir um portfólio sólido. Nosso e-book 'Git & GitHub:
            Sua Jornada Profissional' e os desafios práticos do nosso Game foram desenhados para
            solidificar seu aprendizado e te preparar para o mercado, começando por estes
            fundamentos cruciais.
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
        <BasicCommands />
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
            {authors.map((author) => (
              <AuthorProfileCard
                key={author.src}
                author={author}
                selected={selectedAuthor?.src === author.src}
                onClick={selectAuthor}
              />
            ))}
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

export default GitBasicCommandsPresentation;
