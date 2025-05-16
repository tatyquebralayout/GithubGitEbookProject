import React from 'react';
import { Github, Linkedin, Globe, Terminal, GitBranch, GitMerge, File } from 'lucide-react'; // Adicionando ícones comuns
import { CommandData } from '../../../features/game/components/CommandTableRow'; // Usando tipo existente por enquanto
import MermaidBase from '../../../lib/mermaid/MermaidBase'; // Para diagramas
// import PracticeChallengeSection from './practiceChallenge/PracticeChallengeSection';
import { AuthorProfile } from '../../../types/author.types'; // Tipo centralizado
import { AuthorProfileCard } from '../../../components/ui'; // Card de autor comum e outros componentes UI
import {
  GitChallengeCard, // Mantendo este nome se for genérico o suficiente
  GitChallengeCardHeader,
  GitChallengeCardBody,
} from '../../../components/ui';
import { useAuthorDialog } from '../hooks/useAuthorDialog'; // Hook de diálogo

export interface CommandsBaseProps {
  categoryText: string; // Ex: "Git Avançado", "GitHub CLI"
  title: string; // Ex: "Comandos Avançados do Git"
  description: string; // Descrição principal da página
  bannerImage: string;
  gradientFrom: string;
  gradientTo: string;
  pageSubtitle: string; // Ex: "Domine ferramentas poderosas para situações complexas"
  commandsSectionTitle: string; // Ex: "Comandos Avançados do Git"
  commandsSectionSubtitle: string; // Ex: "Domine ferramentas..."
  commands: CommandData[];
  authors: AuthorProfile[];
  defaultAuthorNameHint: string; // Parte do nome do autor padrão para o diálogo
  showPracticeChallenge?: boolean;
  // Cores podem ser passadas se precisarem variar muito, ou tratadas com CSS e props de categoria
}

const CommandsBase = ({
  categoryText,
  title,
  description,
  bannerImage,
  gradientFrom,
  gradientTo,
  pageSubtitle,
  commandsSectionTitle,
  commandsSectionSubtitle,
  commands,
  authors,
  defaultAuthorNameHint,
  showPracticeChallenge = false,
}: CommandsBaseProps) => {
  const {
    selectedAuthor,
    currentStep: currentDialogStep,
    selectAuthor: handleAuthorSelect,
    nextStep: handleNextStep,
    prevStep: handlePrevStep,
  } = useAuthorDialog(authors, defaultAuthorNameHint);

  return (
    <div className="space-y-24">
      {/* Seção Introdutória (Banner) */}
      <section className="relative flex h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bannerImage}
            alt={`Banner para ${title}`}
            className="h-full w-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo}`} />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            {categoryText}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-6 text-xl text-white/80">{pageSubtitle}</p>
        </div>
      </section>

      {/* Seção de Descrição Principal da Página */}
      <section className="bg-white pt-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-github-fg-default">
              {title} {/* Ou um título mais específico para esta seção */}
            </h2>
            <p className="mt-4 text-lg text-gray-700">{description}</p>
          </div>
        </div>
      </section>

      {/* Lista de Comandos */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-github-fg-default">{commandsSectionTitle}</h2>
            <p className="mt-2 text-lg text-gray-600">{commandsSectionSubtitle}</p>
          </div>

          <div className="space-y-6">
            <GitChallengeCard>
              {' '}
              {/* Usando GitChallengeCard por enquanto */}
              <GitChallengeCardHeader>
                <Terminal className="mr-2 h-5 w-5 text-github-fg-default" />
                <span className="text-sm font-medium">{commandsSectionTitle}</span>
              </GitChallengeCardHeader>
              <GitChallengeCardBody className="space-y-6">
                {commands.map((command: CommandData, index: number) => {
                  const diagramId = `${categoryText.toLowerCase().replace(/\s+/g, '-')}-command-${index}-${command.name.replace(/[\s[\]]/g, '-')}`;
                  return (
                    <div
                      key={index}
                      className="mb-4 border-b border-gray-200 pb-4 last:mb-0 last:border-0 last:pb-0"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-start">
                        <div className="flex items-start space-x-4 md:w-1/3">
                          <GitBranch className="mt-1 h-5 w-5 flex-shrink-0 text-github-fg-default" />{' '}
                          {/* Ícone genérico */}
                          <div>
                            <h3 className="font-medium text-github-fg-default">{command.name}</h3>
                            <p className="text-sm text-github-fg-muted">{command.description}</p>
                            {command.difficultyText && (
                              <div className="mt-2">
                                <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                                  {/* A cor do badge pode ser props ou condicional à categoria */}
                                  {command.difficultyText}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
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
                      {command.chapterLink && command.chapterText && (
                        <div className="mt-3 text-right">
                          <a
                            href={command.chapterLink}
                            className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            <GitMerge className="mr-1 h-3 w-3" /> {/* Ícone genérico */}
                            {command.chapterText}
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </GitChallengeCardBody>
            </GitChallengeCard>
          </div>
        </div>
      </section>

      {/* Seção de Autores e Diálogo */}
      {authors && authors.length > 0 && (
        <div>
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
                    onClick={handleAuthorSelect}
                  />
                ))}
              </div>
            </div>
          </section>

          {selectedAuthor && selectedAuthor.dialogue && selectedAuthor.dialogue.length > 0 && (
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-12 text-white">
              <div className="container mx-auto px-4">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold text-white">Desafios Interativos</h2>
                  <p className="mt-2 text-lg text-blue-300">
                    Interaja com nossos especialistas e teste seus conhecimentos!
                  </p>
                </div>
                <div className="flex flex-col items-stretch gap-6 lg:flex-row">
                  <div className="sticky top-24 flex w-full flex-col items-center justify-start rounded-xl bg-slate-800 p-6 text-center shadow-2xl lg:w-1/3">
                    <img
                      src={selectedAuthor.src}
                      alt={selectedAuthor.alt.split(' - ')[0]}
                      className="mb-4 h-24 w-24 rounded-full border-4 border-blue-400 object-cover shadow-md"
                    />
                    <h3 className="mb-1 text-xl font-bold text-white">
                      {selectedAuthor.alt.split(' - ')[0]}
                    </h3>
                    <p className="mb-2 text-base text-blue-300">
                      {selectedAuthor.alt.split(' - ')[1]}
                    </p>
                    <p className="mb-4 text-sm leading-relaxed text-gray-300">
                      {selectedAuthor.miniBio || 'Mini biografia não disponível.'}
                    </p>
                    <div className="flex space-x-4">
                      {selectedAuthor.socialLinks?.github && (
                        <a
                          href={selectedAuthor.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="text-gray-400 transition-colors hover:text-blue-400"
                        >
                          <Github size={20} />
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
                          <Linkedin size={20} />
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
                          <Globe size={20} />
                        </a>
                      )}
                      {/* Adicionar outros social links (twitter, instagram, mail) se desejar */}
                    </div>
                  </div>

                  <div className="flex w-full flex-col justify-between rounded-xl bg-slate-800 p-6 shadow-2xl lg:w-2/3">
                    <div className="dialogue-content mb-6 min-h-[60px]">
                      {selectedAuthor?.dialogue?.[currentDialogStep]?.type === 'text' && (
                        <p className="text-lg text-white">
                          {selectedAuthor.dialogue[currentDialogStep].content}
                        </p>
                      )}
                      {selectedAuthor?.dialogue?.[currentDialogStep]?.type === 'question' && (
                        <div className="space-y-4">
                          <p className="text-lg text-white">
                            {selectedAuthor.dialogue[currentDialogStep].content}
                          </p>
                          <div className="space-y-2">
                            {selectedAuthor.dialogue[currentDialogStep].options?.map(
                              (option, idx) => (
                                <button
                                  key={idx}
                                  className="w-full rounded-lg bg-slate-700 px-4 py-2 text-left text-white transition-colors hover:bg-slate-600"
                                  onClick={() => {
                                    const correctAnswer =
                                      selectedAuthor.dialogue?.[currentDialogStep]?.correctAnswer;

                                    if (correctAnswer !== undefined && idx === correctAnswer) {
                                      handleNextStep();
                                    }
                                  }}
                                >
                                  {option}
                                </button>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={handlePrevStep}
                        disabled={currentDialogStep === 0}
                        className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
                      >
                        Anterior
                      </button>
                      <button
                        onClick={handleNextStep}
                        disabled={currentDialogStep === selectedAuthor.dialogue.length - 1}
                        className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
                      >
                        Próximo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      )}

      {showPracticeChallenge && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">Desafios Práticos</h2>
            {/* Adicionar componente PracticeChallengeSection quando estiver pronto */}
          </div>
        </section>
      )}
    </div>
  );
};

export default CommandsBase;
