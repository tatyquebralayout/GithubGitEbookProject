import React, { useState } from 'react';
import SimpleMermaidGitGraph from '../../../../components/common/SimpleMermaidGitGraph';

const GitChallengeExample: React.FC = () => {
  const [orientation, setOrientation] = useState<'LR' | 'TB' | 'BT'>('TB');

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Exemplo Simples de Diagrama Git</h2>

        <div className="flex items-center gap-3">
          <label htmlFor="orientation-select" className="text-sm font-medium">
            Orientação:
          </label>
          <select
            id="orientation-select"
            value={orientation}
            onChange={(e) => setOrientation(e.target.value as any)}
            className="rounded border border-gray-300 px-3 py-1.5 text-sm"
          >
            <option value="TB">De Cima para Baixo</option>
            <option value="BT">De Baixo para Cima</option>
            <option value="LR">Da Esquerda para Direita</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <SimpleMermaidGitGraph id="example-diagram" orientation={orientation} />
      </div>

      <div className="mt-6">
        <h3 className="mb-2 text-lg font-semibold">Comando Git correspondentes:</h3>
        <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm">
          {`# Inicializar repositório
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
git commit -m "Ajustes pós-merge" --allow-empty`}
        </pre>
      </div>
    </div>
  );
};

export default GitChallengeExample;
