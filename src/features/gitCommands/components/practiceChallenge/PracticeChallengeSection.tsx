import React from 'react';
import InteractiveTerminal from './InteractiveTerminal';
import RepositoryGraph from './RepositoryGraph';
import ChallengeProgress from './ChallengeProgress';

const PracticeChallengeSection: React.FC = () => {
  return (
    <section id="game-section" className="pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-github-fg-default">Prática do Desafio</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna 1: Terminal Interativo */}
          <div className="lg:col-span-1 bg-slate-900 p-4 rounded-lg shadow-md h-[350px] flex flex-col">
            <InteractiveTerminal />
          </div>

          {/* Coluna 2: Visualização de Grafo (Mermaid.js) */}
          <div className="lg:col-span-1 bg-gray-50 p-4 rounded-lg shadow-md h-[350px] flex flex-col">
            <RepositoryGraph />
          </div>

          {/* Coluna 3: Progresso do Usuário */}
          <div className="lg:col-span-1 bg-gray-50 p-4 rounded-lg shadow-md h-[350px] flex flex-col">
            <ChallengeProgress />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeChallengeSection; 