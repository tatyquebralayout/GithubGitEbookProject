import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ChallengeBadgeProps {
  type: string; 
  text: string;
  targetPath?: string; // Opcional: caminho específico para navegação
}

const ChallengeBadge: React.FC<ChallengeBadgeProps> = ({ type, text, targetPath }) => {
  const navigate = useNavigate();
  const baseClasses = "gh-badge transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer";
  
  // Mapeamento mais robusto de tipos para classes de cor e caminhos padrão
  const typeStyles: Record<string, {colors: string, defaultPath?: string}> = {
    beginner:     { colors: "bg-github-success-emphasis text-white", defaultPath: '/git-comandos-basicos' }, // Atualizado para rota real
    intermediate: { colors: "bg-github-attention-fg text-white", defaultPath: '/game/intermediate-commands' },
    advanced:     { colors: "bg-github-severe-fg text-white", defaultPath: '/game/advanced-commands' },
    github:       { colors: "bg-github-accent-fg text-white", defaultPath: '/game/github-specific' }, 
    pro:          { colors: "bg-github-done-fg text-white", defaultPath: '/game/pro-tips' },
    default:      { colors: "bg-gray-500 text-white" }
  };

  const styleInfo = typeStyles[type] || typeStyles.default;

  const handleClick = () => {
    const path = targetPath || styleInfo.defaultPath;
    if (path) {
      navigate(path);
    }
    // Se não houver path, o botão não faz nada (ou pode ter outra ação no futuro)
  };

  return (
    <button 
      onClick={handleClick}
      className={`${baseClasses} ${styleInfo.colors}`}
      // Desabilitar o botão se não houver ação de clique (sem path)
      disabled={!(targetPath || styleInfo.defaultPath)}
    >
      {text}
    </button>
  );
};

export default ChallengeBadge; 