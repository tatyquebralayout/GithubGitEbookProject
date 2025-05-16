import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

export interface ChallengeBadgeProps {
  type: string;
  text: string;
  targetPath?: string;
  className?: string;
}

const ChallengeBadge = ({ type, text, targetPath, className }: ChallengeBadgeProps) => {
  // Mapear tipo para cor
  const colorMap: Record<string, string> = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
    github: 'bg-purple-100 text-purple-800',
    pro: 'bg-blue-100 text-blue-800',
    // Adicionar outros tipos conforme necessário
  };

  const badgeClass = cn(
    'inline-flex items-center px-2 py-1 text-xs font-medium rounded',
    colorMap[type] || 'bg-gray-100 text-gray-800',
    className
  );

  // Se tiver um caminho alvo, renderiza como link
  if (targetPath) {
    return (
      <Link to={targetPath} className={badgeClass}>
        {text}
      </Link>
    );
  }

  // Senão, renderiza como span
  return <span className={badgeClass}>{text}</span>;
};

export default ChallengeBadge;
