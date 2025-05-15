import React from 'react';
import { ChallengeBadge as UIChallengeBadge } from '../../../components/ui';

interface ChallengeBadgeProps {
  type: string;
  text: string;
  targetPath?: string; // Opcional: caminho específico para navegação
}

/**
 * @deprecated Use ChallengeBadge from the UI library instead
 * This component is now just an adapter for backward compatibility
 */
const ChallengeBadge: React.FC<ChallengeBadgeProps> = ({ type, text, targetPath }) => {
  return <UIChallengeBadge type={type} text={text} targetPath={targetPath} />;
};

export default ChallengeBadge;
