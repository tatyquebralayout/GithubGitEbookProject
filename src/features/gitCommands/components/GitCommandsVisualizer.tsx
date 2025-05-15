import React, { useState } from 'react';
import SimpleMermaidGitGraph from '../../../components/common/SimpleMermaidGitGraph';

const examples = [
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
git commit -m "Ajustes pós-merge" --allow-empty`
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
git tag v1.1.0`
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
git tag v2.0`
  }
];

const GitCommandsVisualizer: React.FC = () => {
  const [orientation, setOrientation] = useState<'LR' | 'TB' | 'BT'>('TB');
  const [selectedExample, setSelectedExample] = useState(examples[0].id);
  
  const example = examples.find(ex => ex.id === selectedExample) || examples[0];
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-github-fg-default">
          Visualização de Comandos Git
        </h1>
        <p className="mt-2 text-github-fg-muted max-w-3xl mx-auto">
          Veja como os comandos Git se transformam em diagramas visuais. Use estes exemplos para entender 
          os fluxos de trabalho comuns do Git e como eles são representados graficamente.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="gh-card p-6">
            <h2 className="text-xl font-bold mb-4">Exemplos</h2>
            
            <div className="flex flex-col gap-2">
              {examples.map(ex => (
                <button
                  key={ex.id}
                  className={`text-left p-3 rounded-md transition-colors ${
                    selectedExample === ex.id 
                      ? 'bg-github-accent-subtle text-github-accent-fg' 
                      : 'hover:bg-github-canvas-subtle'
                  }`}
                  onClick={() => setSelectedExample(ex.id)}
                >
                  <span className="font-medium">{ex.title}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-2">Orientação do Diagrama:</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    orientation === 'TB' 
                      ? 'bg-github-accent-emphasis text-white' 
                      : 'bg-github-canvas-subtle text-github-fg-default'
                  }`}
                  onClick={() => setOrientation('TB')}
                >
                  Cima para Baixo
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    orientation === 'BT' 
                      ? 'bg-github-accent-emphasis text-white' 
                      : 'bg-github-canvas-subtle text-github-fg-default'
                  }`}
                  onClick={() => setOrientation('BT')}
                >
                  Baixo para Cima
                </button>
                <button
                  className={`px-3 py-1.5 rounded text-sm ${
                    orientation === 'LR' 
                      ? 'bg-github-accent-emphasis text-white' 
                      : 'bg-github-canvas-subtle text-github-fg-default'
                  }`}
                  onClick={() => setOrientation('LR')}
                >
                  Esquerda para Direita
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="gh-card overflow-hidden">
            <div className="p-4 bg-github-canvas-subtle border-b border-github-border-default">
              <h2 className="text-xl font-bold">{example.title}</h2>
              <p className="text-github-fg-muted mt-1">{example.description}</p>
            </div>
            
            <div className="p-6">
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Diagrama Git</h3>
                <SimpleMermaidGitGraph
                  id={`example-${example.id}`}
                  orientation={orientation}
                />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Comandos Git</h3>
                <pre className="bg-github-canvas-subtle p-4 rounded-lg overflow-x-auto text-sm">
                  {example.commands}
                </pre>
                <p className="mt-3 text-sm text-github-fg-muted">
                  Copie e cole estes comandos em um terminal para ver como funcionam na prática.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitCommandsVisualizer; 