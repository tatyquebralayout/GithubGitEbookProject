import React from 'react';
import InteractiveTerminal from './InteractiveTerminal';
import RepositoryGraph from './RepositoryGraph';
import ChallengeProgress from './ChallengeProgress';
import { useGitPracticeChallenge } from '../../hooks/useGitPracticeChallenge';

// initialFileSystem foi movido para o hook
// const initialFileSystem: FileSystemStructure = {
//   '~': { type: 'dir', content: {} }
// };

const PracticeChallengeSection = () => {
  const { diagramDefinition, processCommand, currentPathDisplay, currentPathArray } =
    useGitPracticeChallenge();

  // Todos os useState e funções de lógica foram movidos para useGitPracticeChallenge

  // O console.log(diagramDef) foi removido pois a definição é agora gerenciada pelo hook.

  return (
    <section id="practice-challenge-section" className="pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-github-fg-default">Prática do Desafio Git</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Coluna 1: Terminal Interativo */}
          <div className="flex h-[350px] flex-col rounded-lg bg-slate-900 p-4 shadow-md lg:col-span-1">
            <InteractiveTerminal
              onProcessCommand={processCommand}
              currentPathString={currentPathDisplay} // Para o prompt atual
              currentPathForHistory={currentPathArray} // Para armazenar no histórico
            />
          </div>

          {/* Coluna 2: Visualização de Grafo (Mermaid.js) */}
          <div className="flex h-[350px] flex-col rounded-lg bg-gray-50 p-4 shadow-md lg:col-span-1">
            <RepositoryGraph diagramDefinition={diagramDefinition} />
          </div>

          {/* Coluna 3: Progresso do Usuário */}
          <div className="flex h-[350px] flex-col rounded-lg bg-gray-50 p-4 shadow-md lg:col-span-1">
            {/* TODO: Conectar ChallengeProgress ao estado do hook se necessário */}
            <ChallengeProgress />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeChallengeSection;
