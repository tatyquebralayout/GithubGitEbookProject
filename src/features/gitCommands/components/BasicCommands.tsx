import React from 'react';
import { Terminal, GitCommit, GitMerge, File } from 'lucide-react';
import { gitCommandsData } from '../../../features/game/data/commandsData';
import { MermaidBase } from '../../../lib/mermaid';
import {
  GitChallengeCard,
  GitChallengeCardHeader,
  GitChallengeCardBody,
  Badge,
} from '../../../components/ui';

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

      {/* Lista de Comandos */}
      <div className="space-y-6">
        <GitChallengeCard>
          <GitChallengeCardHeader>
            <Terminal className="mr-2 h-5 w-5 text-github-fg-default" />
            <span className="text-sm font-medium">Comandos Básicos do Git</span>
          </GitChallengeCardHeader>
          <GitChallengeCardBody className="space-y-6">
            {basicCommands.map((command, index) => {
              // Gerar um ID único para cada diagrama
              const diagramId = `basic-command-${index}-${command.name.replace(/[\s[\]]/g, '-')}`;

              return (
                <div
                  key={index}
                  className="mb-4 border-b border-gray-200 pb-4 last:mb-0 last:border-0 last:pb-0"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    {/* Coluna do comando */}
                    <div className="flex items-start space-x-4 md:w-1/3">
                      <GitCommit className="mt-1 h-5 w-5 flex-shrink-0 text-github-fg-default" />
                      <div>
                        <h3 className="font-medium text-github-fg-default">{command.name}</h3>
                        <p className="text-sm text-github-fg-muted">{command.description}</p>
                        <div className="mt-2">
                          <Badge variant="success" rounded size="sm">
                            {command.difficultyText}
                          </Badge>
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
  );
};

export default BasicCommands;
