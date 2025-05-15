import React, { useState } from 'react';
import { GitGraph } from '../../../lib/mermaid';
import {
  GitChallengeCard,
  GitChallengeCardBody,
  GitChallengeCardFooter,
  Badge,
  Button,
} from '../../../components/ui';

interface GitChallengeVisualizerProps {
  title: string;
  description: string;
  difficulty: 'Básico' | 'Intermediário' | 'Avançado' | 'GitHub';
  initialDiagram: string;
  goalDiagram: string;
  hints?: string[];
}

const GitChallengeVisualizer: React.FC<GitChallengeVisualizerProps> = ({
  title,
  description,
  difficulty,
  initialDiagram,
  goalDiagram,
  hints = [],
}) => {
  const [activeTab, setActiveTab] = useState<'initial' | 'goal'>('initial');
  const [currentTheme, setCurrentTheme] = useState<'default' | 'dark' | 'forest'>('default');
  const [showHints, setShowHints] = useState(false);

  // Configurações de cor com base na dificuldade
  const getThemeColors = () => {
    switch (difficulty) {
      case 'Básico':
        return {
          branch: ['#36B37E'], // Verde para o branch main
          branchLabel: ['#00B8D9'], // Azul para branches secundários
          commitLabel: '#172B4D',
          commitBg: '#FFFFFF',
          tagLabel: '#172B4D',
          tagBg: '#E3FCEF',
        };
      case 'Intermediário':
        return {
          branch: ['#FFAB00'], // Amarelo para o branch main
          branchLabel: ['#6554C0'], // Roxo para branches secundários
          commitLabel: '#172B4D',
          commitBg: '#FFFFFF',
          tagLabel: '#172B4D',
          tagBg: '#FFFAE6',
        };
      case 'Avançado':
        return {
          branch: ['#FF5630'], // Vermelho para o branch main
          branchLabel: ['#00B8D9'], // Azul para branches secundários
          commitLabel: '#172B4D',
          commitBg: '#FFFFFF',
          tagLabel: '#172B4D',
          tagBg: '#FFEBE6',
        };
      case 'GitHub':
        return {
          branch: ['#6F42C1'], // Roxo do GitHub para o branch main
          branchLabel: ['#2188FF'], // Azul do GitHub para branches secundários
          commitLabel: '#172B4D',
          commitBg: '#FFFFFF',
          tagLabel: '#172B4D',
          tagBg: '#F6F0FF',
        };
    }
  };

  // Mapear dificuldade para variante de badge
  const getDifficultyBadgeVariant = (): 'success' | 'warning' | 'danger' | 'primary' => {
    switch (difficulty) {
      case 'Básico':
        return 'success';
      case 'Intermediário':
        return 'warning';
      case 'Avançado':
        return 'danger';
      case 'GitHub':
        return 'primary';
      default:
        return 'success';
    }
  };

  return (
    <GitChallengeCard>
      <GitChallengeCardBody className="p-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <Badge variant={getDifficultyBadgeVariant()} rounded size="sm">
              {difficulty}
            </Badge>
            <h3 className="mt-2 text-2xl font-bold text-github-fg-default">{title}</h3>
          </div>
          <div className="flex gap-2">
            <label htmlFor="theme-select" className="sr-only">
              Selecionar tema do diagrama
            </label>
            <select
              id="theme-select"
              value={currentTheme}
              onChange={(e) => setCurrentTheme(e.target.value as any)}
              className="rounded-md border border-github-border-default px-3 py-1 text-sm"
              aria-label="Selecionar tema do diagrama"
            >
              <option value="default">Tema Padrão</option>
              <option value="dark">Tema Escuro</option>
              <option value="forest">Tema Floresta</option>
            </select>
          </div>
        </div>

        <p className="mb-6 text-github-fg-muted">{description}</p>

        <div className="mb-4 border-b border-github-border-default">
          <div className="flex">
            <button
              onClick={() => setActiveTab('initial')}
              className={`border-b-2 px-4 py-2 text-sm font-medium ${
                activeTab === 'initial'
                  ? 'border-github-accent-fg text-github-accent-fg'
                  : 'border-transparent text-github-fg-muted hover:text-github-fg-default'
              }`}
            >
              Estado Inicial
            </button>
            <button
              onClick={() => setActiveTab('goal')}
              className={`border-b-2 px-4 py-2 text-sm font-medium ${
                activeTab === 'goal'
                  ? 'border-github-done-fg text-github-done-fg'
                  : 'border-transparent text-github-fg-muted hover:text-github-fg-default'
              }`}
            >
              Objetivo Final
            </button>
          </div>
        </div>

        <div className="min-h-[400px] overflow-hidden rounded-lg border border-github-border-default">
          {activeTab === 'initial' ? (
            <GitGraph
              id={`initial-${title.replace(/\s+/g, '-').toLowerCase()}`}
              content={initialDiagram}
              orientation="TB"
              theme={currentTheme}
              customColors={getThemeColors()}
            />
          ) : (
            <GitGraph
              id={`goal-${title.replace(/\s+/g, '-').toLowerCase()}`}
              content={goalDiagram}
              orientation="TB"
              theme={currentTheme}
              customColors={getThemeColors()}
            />
          )}
        </div>

        {hints.length > 0 && (
          <div className="mt-6">
            <button
              onClick={() => setShowHints(!showHints)}
              className="flex items-center text-sm font-medium text-github-accent-fg hover:text-github-accent-emphasis"
            >
              {showHints ? 'Esconder Dicas' : 'Mostrar Dicas'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-1 h-4 w-4 transition-transform ${showHints ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showHints && (
              <div className="mt-3 border-l-4 border-github-accent-muted py-2 pl-4">
                <ul className="space-y-2">
                  {hints.map((hint, index) => (
                    <li key={index} className="text-github-fg-muted">
                      <span className="font-medium text-github-accent-fg">Dica {index + 1}:</span>{' '}
                      {hint}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </GitChallengeCardBody>

      <GitChallengeCardFooter>
        <Button variant="primary">Iniciar Desafio</Button>
      </GitChallengeCardFooter>
    </GitChallengeCard>
  );
};

export default GitChallengeVisualizer;
