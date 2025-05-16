import React from 'react';
import GitChallengeVisualizer from '../GitChallengeVisualizer';
import { gitPracticeChallenges } from '../../data/gitPracticeChallenges';

const GitChallengeExamples = () => {
  return (
    <div className="space-y-12 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-github-fg-default">Desafios Git Práticos</h2>
        <p className="mx-auto mt-3 max-w-3xl text-github-fg-muted">
          Aprenda Git com desafios práticos que ilustram fluxos de trabalho do mundo real. Cada
          desafio mostra o estado inicial e o objetivo que você precisa alcançar.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {gitPracticeChallenges.map((challenge) => (
          <GitChallengeVisualizer
            key={challenge.id}
            title={challenge.title}
            description={challenge.description}
            difficulty={challenge.difficulty}
            initialDiagram={challenge.initialDiagram}
            goalDiagram={challenge.goalDiagram}
            hints={challenge.hints}
          />
        ))}
      </div>
    </div>
  );
};

export default GitChallengeExamples;
