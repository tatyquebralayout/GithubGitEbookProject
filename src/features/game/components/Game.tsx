import React from 'react';
import {
  TerminalIcon,
  PeopleIcon,
  CodeIcon,
  GoalIcon,
  CodespacesIcon,
} from '@primer/octicons-react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'; // Link não é mais usado diretamente aqui, CommandCategorySection cuida disso
// import MermaidDiagram from '../../../components/common/MermaidDiagram'; // Não é mais usado diretamente
// import AuthorProfiles from '../../../components/common/AuthorProfiles'; // Não é mais usado diretamente
// import ChallengeBadge from './ChallengeBadge'; // Não é mais usado diretamente
import CommandCategorySection from './CommandCategorySection';
import { gitCommandsData } from '../data/commandsData';
import GitChallengeExamples from '../../gitCommands/components/practiceChallenge/GitChallengeExamples';
import GitChallengeExample from '../../gitCommands/components/practiceChallenge/GitChallengeExample';
import { GitChallengeCard } from '../../../components/ui';

// Define author data for this component's context // Movido para commandsData.ts
// const gameAuthors = [
//   { src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 1" },
//   { src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 2" },
//   { src: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 3" },
//   { src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 4" },
//   { src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 5" },
//   { src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 6" },
// ];

const Game = () => {
  return (
    <div className="space-y-24">
      {/* Hero Banner */}
      <section className="relative flex h-[500px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?w=1920&auto=compress,format"
            alt="Banner ilustrativo para a seção de desafio de codificação, mostrando um ambiente de desenvolvimento em um monitor"
            className="h-full w-full object-cover"
          />
          <div className="from-github-accent-emphasis/90 to-github-done-emphasis/90 absolute inset-0 bg-gradient-to-r" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            Git Challenge
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Aprenda Git na Prática
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Complete desafios, ganhe pontos e domine os comandos Git através de exercícios práticos
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/git-visualizer"
              className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-github-accent-emphasis transition-colors hover:bg-opacity-90"
            >
              <CodespacesIcon size={20} />
              Visualizador de Comandos Git
            </Link>
            <Link
              to="/game/basic-commands"
              className="rounded-lg bg-white/20 px-6 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              Ver Desafios
            </Link>
          </div>
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
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-github-fg-default">Entenda o Game</h2>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1 - Choose Command */}
            <GitChallengeCard className="p-8 text-center transition-shadow hover:shadow-lg">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-github-accent-subtle">
                <CodeIcon size={24} className="text-github-accent-fg" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-github-fg-default">
                1° Escolha O Comando
              </h3>
              <p className="text-github-fg-muted">
                Explore nossa biblioteca de comandos Git organizados por nível de dificuldade e
                categoria
              </p>
            </GitChallengeCard>

            {/* Card 2 - Choose Authors */}
            <GitChallengeCard className="p-8 text-center transition-shadow hover:shadow-lg">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-github-success-subtle">
                <PeopleIcon size={24} className="text-github-success-fg" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-github-fg-default">
                2° Escolha o Autor(es)
              </h3>
              <p className="text-github-fg-muted">
                Selecione os autores especialistas que irão guiar seu aprendizado em Git
              </p>
            </GitChallengeCard>

            {/* Card 3 - Choose Difficulty */}
            <GitChallengeCard className="p-8 text-center transition-shadow hover:shadow-lg">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-github-attention-subtle">
                <GoalIcon size={24} className="text-github-attention-fg" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-github-fg-default">
                3° Escolha a Dificuldade
              </h3>
              <p className="text-github-fg-muted">
                Defina seu nível de desafio, desde iniciante até profissional avançado
              </p>
            </GitChallengeCard>
          </div>
        </div>
      </section>

      {/* Exemplo simples de Diagrama Git */}
      <section className="bg-github-canvas-subtle py-16">
        <div className="container mx-auto px-4">
          <GitChallengeExample />
        </div>
      </section>

      {/* Git Challenge Examples Section */}
      <section className="bg-github-canvas-subtle py-16" id="git-challenge-examples">
        <div className="container mx-auto px-4">
          <GitChallengeExamples />
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-github-fg-default">Entenda o Game</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <GitChallengeCard>
              <div className="aspect-w-16 aspect-h-9 flex items-center justify-center rounded-lg bg-github-canvas-subtle">
                <div className="text-center">
                  <TerminalIcon size={32} className="mx-auto mb-4 text-github-fg-muted" />
                  <p className="text-github-fg-muted">Vídeo explicativo em breve</p>
                </div>
              </div>
            </GitChallengeCard>
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-github-fg-default">Comandos Git</h2>
            <p className="mt-4 text-github-fg-muted">
              Explore todos os comandos organizados por categoria
            </p>
          </div>

          {/* Botões de navegação para as páginas de comandos */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/game/basic-commands"
              className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
            >
              Comandos Básicos
            </Link>
            <Link
              to="/game/intermediate-commands"
              className="rounded-lg bg-yellow-600 px-6 py-3 font-medium text-white transition-colors hover:bg-yellow-700"
            >
              Comandos Intermediários
            </Link>
            <Link
              to="/game/advanced-commands"
              className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition-colors hover:bg-red-700"
            >
              Comandos Avançados
            </Link>
            <Link
              to="/game/github-commands"
              className="rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700"
            >
              Comandos GitHub
            </Link>
          </div>

          {gitCommandsData.map((category) => (
            <CommandCategorySection
              key={category.title}
              title={category.title}
              commands={category.commands}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Game;
