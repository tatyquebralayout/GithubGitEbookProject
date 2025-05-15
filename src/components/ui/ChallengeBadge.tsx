import React from 'react';
import { useNavigate } from 'react-router-dom';
import Badge, { BadgeProps } from './Badge';

export interface ChallengeBadgeProps extends Omit<BadgeProps, 'onClick'> {
  /** Tipo do desafio */
  type: 'beginner' | 'intermediate' | 'advanced' | 'github' | 'pro' | string;
  /** Texto a ser exibido no badge */
  text: string;
  /** Caminho específico para navegação (opcional) */
  targetPath?: string;
  /** Função de click personalizada (opcional) */
  onClick?: () => void;
}

/**
 * Componente ChallengeBadge que utiliza o Badge padronizado com navegação integrada
 */
const ChallengeBadge: React.FC<ChallengeBadgeProps> = ({
  type,
  text,
  targetPath,
  onClick,
  ...props
}) => {
  const navigate = useNavigate();

  // Mapeamento de tipos para variantes do Badge
  const typeToVariant: Record<string, BadgeProps['variant']> = {
    beginner: 'success',
    intermediate: 'warning',
    advanced: 'danger',
    github: 'primary',
    pro: 'info',
  };

  // Mapeamento de tipos para caminhos padrão
  const defaultPaths: Record<string, string> = {
    beginner: '/game/basic-commands',
    intermediate: '/game/intermediate-commands',
    advanced: '/game/advanced-commands',
    github: '/game/github-commands',
  };

  // Determinar variante
  const variant = typeToVariant[type] || 'default';

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const path = targetPath || defaultPaths[type];
      if (path) {
        navigate(path);
      }
    }
  };

  return (
    <Badge
      variant={variant}
      rounded
      className="cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
      onClick={handleClick}
      {...props}
    >
      {text}
    </Badge>
  );
};

export default ChallengeBadge;
