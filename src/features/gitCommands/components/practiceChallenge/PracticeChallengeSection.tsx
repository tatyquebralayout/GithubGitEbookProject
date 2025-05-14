import React from 'react';
import InteractiveTerminal from './InteractiveTerminal';
import RepositoryGraph from './RepositoryGraph';
import ChallengeProgress from './ChallengeProgress';
// Commit, FileSystemStructure, BranchMeta são usados pelo hook, não diretamente aqui.
// import { Commit, FileSystemStructure, BranchMeta } from './practiceChallengeTypes'; 
import { useGitPracticeChallenge } from '../../hooks/useGitPracticeChallenge';

// initialFileSystem foi movido para o hook
// const initialFileSystem: FileSystemStructure = {
//   '~': { type: 'dir', content: {} }
// };

const PracticeChallengeSection: React.FC = () => {
  const { 
    diagramDefinition, 
    processCommand, 
    currentPathDisplay,
    currentPathArray
  } = useGitPracticeChallenge();

  // Todos os useState e funções de lógica foram movidos para useGitPracticeChallenge

  // O console.log(diagramDef) foi removido pois a definição é agora gerenciada pelo hook.

  return (
    <section id="practice-challenge-section" className="pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-github-fg-default">Prática do Desafio Git</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna 1: Terminal Interativo */}
          <div className="lg:col-span-1 bg-slate-900 p-4 rounded-lg shadow-md h-[350px] flex flex-col">
            <InteractiveTerminal 
              onProcessCommand={processCommand}
              currentPathString={currentPathDisplay} // Para o prompt atual
              currentPathForHistory={currentPathArray} // Para armazenar no histórico
            />
          </div>

          {/* Coluna 2: Visualização de Grafo (Mermaid.js) */}
          <div className="lg:col-span-1 bg-gray-50 p-4 rounded-lg shadow-md h-[350px] flex flex-col">
            <RepositoryGraph diagramDefinition={diagramDefinition} />
          </div>

          {/* Coluna 3: Progresso do Usuário */}
          <div className="lg:col-span-1 bg-gray-50 p-4 rounded-lg shadow-md h-[350px] flex flex-col">
            {/* TODO: Conectar ChallengeProgress ao estado do hook se necessário */}
            <ChallengeProgress /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeChallengeSection; 