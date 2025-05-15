import React from 'react';
import {
  TerminalIcon,
  PeopleIcon,
  CodeIcon,
  GoalIcon,
  CodespacesIcon
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

// Define author data for this component's context // Movido para commandsData.ts
// const gameAuthors = [
//   { src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 1" },
//   { src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 2" },
//   { src: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 3" },
//   { src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 4" },
//   { src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 5" },
//   { src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=64&h=64&fit=crop&auto=compress,format", alt: "Autor 6" },
// ];

const Game: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Hero Banner */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?w=1920&auto=compress,format"
            alt="Banner ilustrativo para a seção de desafio de codificação, mostrando um ambiente de desenvolvimento em um monitor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-github-accent-emphasis/90 to-github-done-emphasis/90" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide backdrop-blur-sm">
            Git Challenge
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Aprenda Git na Prática
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Complete desafios, ganhe pontos e domine os comandos Git através de exercícios práticos
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/git-visualizer"
              className="px-6 py-3 bg-white text-github-accent-emphasis font-medium rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2"
            >
              <CodespacesIcon size={20} />
              Visualizador de Comandos Git
            </Link>
            <Link 
              to="/game/basic-commands"
              className="px-6 py-3 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-github-fg-default">Entenda o Game</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 - Choose Command */}
            <div className="gh-card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-github-accent-subtle rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <CodeIcon size={24} className="text-github-accent-fg" />
              </div>
              <h3 className="text-xl font-bold text-github-fg-default mb-4">1° Escolha O Comando</h3>
              <p className="text-github-fg-muted">
                Explore nossa biblioteca de comandos Git organizados por nível de dificuldade e categoria
              </p>
            </div>

            {/* Card 2 - Choose Authors */}
            <div className="gh-card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-github-success-subtle rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <PeopleIcon size={24} className="text-github-success-fg" />
              </div>
              <h3 className="text-xl font-bold text-github-fg-default mb-4">2° Escolha o Autor(es)</h3>
              <p className="text-github-fg-muted">
                Selecione os autores especialistas que irão guiar seu aprendizado em Git
              </p>
            </div>

            {/* Card 3 - Choose Difficulty */}
            <div className="gh-card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-github-attention-subtle rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <GoalIcon size={24} className="text-github-attention-fg" />
              </div>
              <h3 className="text-xl font-bold text-github-fg-default mb-4">3° Escolha a Dificuldade</h3>
              <p className="text-github-fg-muted">
                Defina seu nível de desafio, desde iniciante até profissional avançado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exemplo simples de Diagrama Git */}
      <section className="py-16 bg-github-canvas-subtle">
        <div className="container mx-auto px-4">
          <GitChallengeExample />
        </div>
      </section>

      {/* Git Challenge Examples Section */}
      <section className="py-16 bg-github-canvas-subtle" id="git-challenge-examples">
        <div className="container mx-auto px-4">
          <GitChallengeExamples />
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-github-fg-default">Entenda o Game</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="gh-card">
              <div className="aspect-w-16 aspect-h-9 bg-github-canvas-subtle rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TerminalIcon size={32} className="text-github-fg-muted mx-auto mb-4" />
                  <p className="text-github-fg-muted">Vídeo explicativo em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-github-fg-default">Comandos Git</h2>
            <p className="mt-4 text-github-fg-muted">Explore todos os comandos organizados por categoria</p>
          </div>

          {/* Botões de navegação para as páginas de comandos */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link 
              to="/game/basic-commands"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
            >
              Comandos Básicos
            </Link>
            <Link 
              to="/game/intermediate-commands"
              className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg transition-colors"
            >
              Comandos Intermediários
            </Link>
            <Link 
              to="/game/advanced-commands"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
            >
              Comandos Avançados
            </Link>
            <Link 
              to="/game/github-commands"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
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