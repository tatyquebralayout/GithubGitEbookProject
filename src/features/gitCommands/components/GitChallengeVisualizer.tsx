import React, { useState } from 'react';
import MermaidGitGraph from '../../../components/common/MermaidGitGraph';

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
  hints = []
}) => {
  const [activeTab, setActiveTab] = useState<'initial' | 'goal'>('initial');
  const [currentTheme, setCurrentTheme] = useState<'default' | 'dark' | 'forest'>('default');
  const [showHints, setShowHints] = useState(false);

  // Configurações de cor com base na dificuldade
  const getThemeColors = () => {
    switch (difficulty) {
      case 'Básico':
        return {
          branch0: '#36B37E', // Verde para o branch main
          branch1: '#00B8D9', // Azul para branches secundários
          commitLabel: '#172B4D',
          commitBg: '#FFFFFF',
          tagLabel: '#172B4D',
          tagBg: '#E3FCEF',
          tagBorder: '#36B37E'
        };
      case 'Intermediário':
        return {
          branch0: '#FFAB00', // Amarelo para o branch main
          branch1: '#6554C0', // Roxo para branches secundários
          commitLabel: '#172B4D',
          commitBg: '#FFFFFF',
          tagLabel: '#172B4D',
          tagBg: '#FFFAE6',
          tagBorder: '#FFAB00'
        };
      case 'Avançado':
        return {
          branch0: '#FF5630', // Vermelho para o branch main
          branch1: '#00B8D9', // Azul para branches secundários
          commitLabel: '#172B4D',
          commitBg: '#FFFFFF',
          tagLabel: '#172B4D',
          tagBg: '#FFEBE6',
          tagBorder: '#FF5630'
        };
      case 'GitHub':
        return {
          branch0: '#6F42C1', // Roxo do GitHub para o branch main
          branch1: '#2188FF', // Azul do GitHub para branches secundários
          commitLabel: '#172B4D',
          commitBg: '#FFFFFF',
          tagLabel: '#172B4D',
          tagBg: '#F6F0FF',
          tagBorder: '#6F42C1'
        };
    }
  };

  // Mapear dificuldade para cor de badge
  const getDifficultyBadgeClass = () => {
    switch (difficulty) {
      case 'Básico': return 'bg-green-100 text-green-800';
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800';
      case 'Avançado': return 'bg-red-100 text-red-800';
      case 'GitHub': return 'bg-purple-100 text-purple-800';
    }
  };

  return (
    <div className="gh-card overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getDifficultyBadgeClass()}`}>
              {difficulty}
            </span>
            <h3 className="text-2xl font-bold mt-2 text-github-fg-default">{title}</h3>
          </div>
          <div className="flex gap-2">
            <label htmlFor="theme-select" className="sr-only">Selecionar tema do diagrama</label>
            <select 
              id="theme-select"
              value={currentTheme}
              onChange={(e) => setCurrentTheme(e.target.value as any)}
              className="px-3 py-1 border border-github-border-default rounded-md text-sm"
              aria-label="Selecionar tema do diagrama"
            >
              <option value="default">Tema Padrão</option>
              <option value="dark">Tema Escuro</option>
              <option value="forest">Tema Floresta</option>
            </select>
          </div>
        </div>
        
        <p className="text-github-fg-muted mb-6">{description}</p>
        
        <div className="border-b border-github-border-default mb-4">
          <div className="flex">
            <button
              onClick={() => setActiveTab('initial')}
              className={`px-4 py-2 border-b-2 font-medium text-sm ${
                activeTab === 'initial' 
                  ? 'border-github-accent-fg text-github-accent-fg' 
                  : 'border-transparent text-github-fg-muted hover:text-github-fg-default'
              }`}
            >
              Estado Inicial
            </button>
            <button
              onClick={() => setActiveTab('goal')}
              className={`px-4 py-2 border-b-2 font-medium text-sm ${
                activeTab === 'goal' 
                  ? 'border-github-done-fg text-github-done-fg' 
                  : 'border-transparent text-github-fg-muted hover:text-github-fg-default'
              }`}
            >
              Objetivo Final
            </button>
          </div>
        </div>
        
        <div className="min-h-[400px] border border-github-border-default rounded-lg overflow-hidden">
          {activeTab === 'initial' ? (
            <MermaidGitGraph 
              id={`initial-${title.replace(/\s+/g, '-').toLowerCase()}`}
              definition={initialDiagram}
              config={{
                theme: currentTheme,
                orientation: 'TB',
                customColors: getThemeColors()
              }}
            />
          ) : (
            <MermaidGitGraph 
              id={`goal-${title.replace(/\s+/g, '-').toLowerCase()}`}
              definition={goalDiagram}
              config={{
                theme: currentTheme,
                orientation: 'TB',
                customColors: getThemeColors()
              }}
            />
          )}
        </div>
        
        {hints.length > 0 && (
          <div className="mt-6">
            <button
              onClick={() => setShowHints(!showHints)}
              className="text-github-accent-fg hover:text-github-accent-emphasis flex items-center text-sm font-medium"
            >
              {showHints ? 'Esconder Dicas' : 'Mostrar Dicas'}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ml-1 transition-transform ${showHints ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showHints && (
              <div className="mt-3 border-l-4 border-github-accent-muted pl-4 py-2">
                <ul className="space-y-2">
                  {hints.map((hint, index) => (
                    <li key={index} className="text-github-fg-muted">
                      <span className="font-medium text-github-accent-fg">Dica {index + 1}:</span> {hint}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="px-6 py-4 bg-github-canvas-subtle border-t border-github-border-default">
        <button className="px-4 py-2 bg-github-accent-emphasis text-white rounded-md hover:bg-github-accent-fg transition-colors text-sm font-medium">
          Iniciar Desafio
        </button>
      </div>
    </div>
  );
};

export default GitChallengeVisualizer; 