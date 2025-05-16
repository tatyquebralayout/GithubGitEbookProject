import React from 'react';
import { Terminal, GitCommit, GitMerge, File } from 'lucide-react';
import { gitCommandsData } from '../../../features/game/data/commandsData';
import { MermaidBase } from '../../../lib/mermaid';
import {
  GitChallengeCard,
  GitChallengeCardHeader,
  GitChallengeCardBody,
  GitChallengeCardFooter,
  Badge,
} from '../../../components/ui';
import FlippableConfigCard from './basic/FlippableConfigCard';

const BasicCommands = () => {
  // Obter apenas os comandos básicos do gitCommandsData
  const basicCommands =
    gitCommandsData.find((category) => category.title === 'Comandos Básicos')?.commands || [];

  return (
    <div className="space-y-12">
      {/* Seção Introdutória */}
      <section className="relative flex h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=1920&auto=compress,format"
            alt="Banner ilustrativo para a seção de comandos básicos do Git"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-800/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            Git Básico
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Comandos Básicos do Git
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Comece sua jornada com Git dominando os comandos essenciais
          </p>
        </div>
      </section>

      {/* Seção de Descrição */}
      <section className="bg-white pt-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-github-fg-default">Fundamentos do Git</h2>
            <p className="mt-4 text-lg text-gray-700">
              Os comandos básicos do Git são o ponto de partida para qualquer desenvolvedor iniciar
              no controle de versão. Com esses comandos, você será capaz de inicializar
              repositórios, salvar suas alterações e visualizar o histórico do seu trabalho. Estes
              são os blocos fundamentais que você utilizará diariamente em seus projetos, formando a
              base para o desenvolvimento das demais habilidades com Git.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Comandos em Grid de Cards */}
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <Terminal className="mx-auto mb-2 h-8 w-8 text-github-fg-default" />
          <h2 className="text-2xl font-semibold text-github-fg-default">
            Comandos Básicos do Git em Detalhe
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {basicCommands.map((command, index) => {
            const diagramId = `basic-command-${index}-${command.name.replace(/[\s[\]]/g, '-')}`;
            const isGitInit = command.name === 'git init';
            const isConfigCard = command.name === 'Configuração Inicial';

            if (isConfigCard) {
              return (
                <FlippableConfigCard key={command.name} command={command} className="h-full" />
              );
            }

            return (
              <GitChallengeCard key={index} className="flex h-full flex-col">
                <GitChallengeCardHeader className="flex flex-shrink-0 items-center bg-gray-100 p-3">
                  <GitCommit className="mr-2 h-4 w-4 flex-shrink-0 text-github-fg-default" />
                  <h3 className="flex-grow text-sm font-semibold text-github-fg-default">
                    {command.name}
                  </h3>
                  <Badge variant="success" rounded size="sm">
                    {command.difficultyText}
                  </Badge>
                </GitChallengeCardHeader>
                <GitChallengeCardBody className="flex-grow space-y-2 overflow-y-auto p-3">
                  <p className="flex-shrink-0 text-xs text-github-fg-muted">
                    {command.description}
                  </p>
                  <div
                    className={`flex flex-grow items-center justify-center rounded-lg bg-gray-100 p-2 ${
                      isGitInit
                        ? 'git-init-diagram-container mx-auto h-[100px] w-[100px] flex-shrink-0 overflow-hidden'
                        : 'h-auto w-full'
                    }`}
                  >
                    {command.mermaidChart ? (
                      <MermaidBase id={diagramId} definition={command.mermaidChart} />
                    ) : (
                      <div className="flex h-[100px] items-center justify-center text-xs text-gray-400">
                        <File className="mr-1 h-3 w-3" /> Visualização não disponível
                      </div>
                    )}
                  </div>
                </GitChallengeCardBody>
                <GitChallengeCardFooter className="mt-auto flex-shrink-0 border-t border-gray-200 p-2 pt-2 text-right">
                  <a
                    href={command.chapterLink}
                    className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    <GitMerge className="mr-1 h-3 w-3" />
                    {command.chapterText}
                  </a>
                </GitChallengeCardFooter>
              </GitChallengeCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BasicCommands;
