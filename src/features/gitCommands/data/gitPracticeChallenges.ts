export interface GitPracticeChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Básico' | 'Intermediário' | 'Avançado' | 'GitHub';
  initialDiagram: string;
  goalDiagram: string;
  hints: string[];
}

export const gitPracticeChallenges: GitPracticeChallenge[] = [
  {
    id: 'branch-merge',
    title: 'Criando e Mesclando Branches',
    description:
      'Crie um novo branch, faça algumas alterações e mescle-o de volta ao branch principal.',
    difficulty: 'Básico',
    initialDiagram: `commit\ncommit\ncommit`,
    goalDiagram: `commit\nbranch desenvolvimento\ncheckout desenvolvimento\ncommit\ncommit\ncheckout main\nmerge desenvolvimento\ncommit`,
    hints: [
      'Use git branch desenvolvimento para criar um novo branch',
      'Use git checkout desenvolvimento para mudar para o novo branch',
      'Após fazer commits, use git checkout main para voltar ao branch principal',
      'Use git merge desenvolvimento para mesclar as mudanças',
    ],
  },
  {
    id: 'feature-with-tag',
    title: 'Desenvolvimento de Feature com Tag',
    description:
      'Desenvolva uma nova feature em um branch separado e marque a versão com uma tag antes de mesclar.',
    difficulty: 'Intermediário',
    initialDiagram: `commit\ncommit\ncommit id: "a1b2c3d" tag: "v1.0.0"`,
    goalDiagram: `commit\ncommit\ncommit id: "a1b2c3d" tag: "v1.0.0"\nbranch feature/login\ncheckout feature/login\ncommit\ncommit\ncommit id: "e4f5g6h" tag: "v1.1.0-beta"\ncheckout main\nmerge feature/login\ncommit id: "i7j8k9l" tag: "v1.1.0"`,
    hints: [
      'Crie um branch com git branch feature/login',
      'Faça seus commits no branch feature',
      'Use git tag v1.1.0-beta para marcar uma versão beta',
      'Mescle usando git merge e crie a tag final com git tag v1.1.0',
    ],
  },
  {
    id: 'rebase-workflow',
    title: 'Fluxo de Trabalho com Rebase',
    description: 'Mantenha seu branch atualizado com o main usando rebase e resolva conflitos.',
    difficulty: 'Avançado',
    initialDiagram: `commit\ncommit\nbranch feature\ncheckout feature\ncommit\ncheckout main\ncommit\ncommit`,
    goalDiagram: `commit\ncommit\ncommit\ncommit\nbranch feature\ncheckout feature\ncommit\ncheckout main\ncommit id: "release" type: HIGHLIGHT tag: "v2.0"`,
    hints: [
      'Quando estiver no branch feature, use git rebase main para atualizar',
      'Resolva quaisquer conflitos que apareçam durante o rebase',
      'Continue com git rebase --continue após resolver conflitos',
      'Use git checkout main e git merge feature para mesclar as mudanças',
    ],
  },
  {
    id: 'github-flow',
    title: 'GitHub Flow com Pull Requests',
    description:
      'Trabalhe no modelo GitHub Flow criando branches, pull requests e realizando merges.',
    difficulty: 'GitHub',
    initialDiagram: `commit\ncommit`,
    goalDiagram: `commit\ncommit\nbranch feature/navbar\ncheckout feature/navbar\ncommit\ncommit\ncheckout main\nmerge feature/navbar\nbranch feature/auth\ncheckout feature/auth\ncommit\ncommit\ncheckout main\nmerge feature/auth\ncommit id: "deploy" type: HIGHLIGHT tag: "deploy"`,
    hints: [
      'Crie branches específicos para cada funcionalidade',
      'Mantenha os commits pequenos e focados',
      'Abra pull requests para revisão de código',
      'Mescle apenas quando a revisão for aprovada',
    ],
  },
];
