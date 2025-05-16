export interface GitExample {
  id: string;
  title: string;
  description: string;
  commands: string;
  diagramDefinition: (orientation: 'LR' | 'TB' | 'BT') => string;
}

export const gitExamples: GitExample[] = [
  {
    id: 'basic-workflow',
    title: 'Fluxo de Trabalho Básico',
    description: 'Crie commits, branch e mescle mudanças - comandos fundamentais do Git.',
    commands: `# Inicializar repositório
git init

# Commits iniciais na branch principal
git commit -m "Commit inicial" --allow-empty
git commit -m "Segundo commit" --allow-empty

# Criar e mudar para nova branch
git branch feature
git checkout feature

# Commits na branch feature
git commit -m "Desenvolvimento da feature" --allow-empty
git commit -m "Feature completa" --allow-empty

# Voltar para branch principal
git checkout main

# Mesclar a feature
git merge feature

# Commit final após merge
git commit -m "Ajustes pós-merge" --allow-empty`,
    diagramDefinition: (orientation) => `gitGraph ${orientation}:
  commit
  commit
  branch feature
  checkout feature
  commit
  commit
  checkout main
  merge feature
  commit`,
  },
  {
    id: 'feature-with-tag',
    title: 'Desenvolvimento com Tags',
    description: 'Use tags para marcar versões importantes do seu projeto.',
    commands: `# Inicializar repositório
git init

# Commits iniciais na branch principal
git commit -m "Commit inicial" --allow-empty
git commit -m "Segundo commit" --allow-empty
git commit -m "Versão estável" --allow-empty

# Adicionar tag de versão
git tag v1.0.0

# Criar e mudar para branch de feature
git branch feature/login
git checkout feature/login

# Commits na branch feature
git commit -m "Início da feature login" --allow-empty
git commit -m "Autenticação implementada" --allow-empty
git commit -m "Feature login completa" --allow-empty

# Adicionar tag beta
git tag v1.1.0-beta

# Voltar para branch principal e mesclar
git checkout main
git merge feature/login

# Adicionar tag de release
git tag v1.1.0`,
    diagramDefinition: (orientation) => `gitGraph ${orientation}:
  commit
  commit
  commit
  tag: v1.0.0
  branch feature/login
  checkout feature/login
  commit
  commit
  commit
  tag: v1.1.0-beta
  checkout main
  merge feature/login
  tag: v1.1.0`,
  },
  {
    id: 'rebase-workflow',
    title: 'Fluxo com Rebase',
    description: 'Mantenha sua branch atualizada com a principal usando rebase.',
    commands: `# Inicializar repositório
git init

# Commits iniciais na branch principal
git commit -m "Commit inicial" --allow-empty
git commit -m "Segundo commit" --allow-empty

# Criar e mudar para nova branch
git branch feature
git checkout feature

# Commit na feature
git commit -m "Desenvolvimento na feature" --allow-empty

# Voltar para a branch principal e fazer alterações
git checkout main
git commit -m "Atualização no main" --allow-empty
git commit -m "Outra atualização no main" --allow-empty

# Atualizar feature com rebase
git checkout feature
git rebase main

# Fazer mais alterações na feature
git commit -m "Mais desenvolvimento" --allow-empty

# Finalizar merge
git checkout main
git merge feature
git tag v2.0`,
    diagramDefinition: (orientation) => `gitGraph ${orientation}:
  commit
  commit
  branch feature
  checkout feature
  commit
  checkout main
  commit
  commit
  checkout feature
  rebase main
  commit
  checkout main
  merge feature
  tag: v2.0`,
  },
];
