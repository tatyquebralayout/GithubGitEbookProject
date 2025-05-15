import React from 'react';
import GitChallengeVisualizer from '../GitChallengeVisualizer';

// Definição dos exemplos de diagramas Git em formato Mermaid para os desafios
const challenges = [
  {
    id: 'branch-merge',
    title: 'Criando e Mesclando Branches',
    description: 'Crie um novo branch, faça algumas alterações e mescle-o de volta ao branch principal.',
    difficulty: 'Básico' as const,
    initialDiagram: `commit
commit
commit`,
    goalDiagram: `commit
branch desenvolvimento
checkout desenvolvimento
commit
commit
checkout main
merge desenvolvimento
commit`,
    hints: [
      'Use git branch desenvolvimento para criar um novo branch',
      'Use git checkout desenvolvimento para mudar para o novo branch',
      'Após fazer commits, use git checkout main para voltar ao branch principal',
      'Use git merge desenvolvimento para mesclar as mudanças'
    ]
  },
  {
    id: 'feature-with-tag',
    title: 'Desenvolvimento de Feature com Tag',
    description: 'Desenvolva uma nova feature em um branch separado e marque a versão com uma tag antes de mesclar.',
    difficulty: 'Intermediário' as const,
    initialDiagram: `commit
commit
commit id: "a1b2c3d" tag: "v1.0.0"`,
    goalDiagram: `commit
commit
commit id: "a1b2c3d" tag: "v1.0.0"
branch feature/login
checkout feature/login
commit
commit
commit id: "e4f5g6h" tag: "v1.1.0-beta"
checkout main
merge feature/login
commit id: "i7j8k9l" tag: "v1.1.0"`,
    hints: [
      'Crie um branch com git branch feature/login',
      'Faça seus commits no branch feature',
      'Use git tag v1.1.0-beta para marcar uma versão beta',
      'Mescle usando git merge e crie a tag final com git tag v1.1.0'
    ]
  },
  {
    id: 'rebase-workflow',
    title: 'Fluxo de Trabalho com Rebase',
    description: 'Mantenha seu branch atualizado com o main usando rebase e resolva conflitos.',
    difficulty: 'Avançado' as const,
    initialDiagram: `commit
commit
branch feature
checkout feature
commit
checkout main
commit
commit`,
    goalDiagram: `commit
commit
commit
commit
branch feature
checkout feature
commit
checkout main
commit id: "release" type: HIGHLIGHT tag: "v2.0"`,
    hints: [
      'Quando estiver no branch feature, use git rebase main para atualizar',
      'Resolva quaisquer conflitos que apareçam durante o rebase',
      'Continue com git rebase --continue após resolver conflitos',
      'Use git checkout main e git merge feature para mesclar as mudanças'
    ]
  },
  {
    id: 'github-flow',
    title: 'GitHub Flow com Pull Requests',
    description: 'Trabalhe no modelo GitHub Flow criando branches, pull requests e realizando merges.',
    difficulty: 'GitHub' as const,
    initialDiagram: `commit
commit`,
    goalDiagram: `commit
commit
branch feature/navbar
checkout feature/navbar
commit
commit
checkout main
merge feature/navbar
branch feature/auth
checkout feature/auth
commit
commit
checkout main
merge feature/auth
commit id: "deploy" type: HIGHLIGHT tag: "deploy"`,
    hints: [
      'Crie branches específicos para cada funcionalidade',
      'Mantenha os commits pequenos e focados',
      'Abra pull requests para revisão de código',
      'Mescle apenas quando a revisão for aprovada'
    ]
  }
];

const GitChallengeExamples: React.FC = () => {
  return (
    <div className="space-y-12 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-github-fg-default">Desafios Git Práticos</h2>
        <p className="mt-3 text-github-fg-muted max-w-3xl mx-auto">
          Aprenda Git com desafios práticos que ilustram fluxos de trabalho do mundo real. 
          Cada desafio mostra o estado inicial e o objetivo que você precisa alcançar.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-12">
        {challenges.map((challenge) => (
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