import React from 'react';
import {
  GitChallengeCard,
  GitChallengeCardHeader,
  GitChallengeCardBody,
  GitChallengeCardFooter,
} from './GitChallengeCard';

export interface GitChallengeProps {
  title: string;
  description?: string;
  type?: 'practice' | 'quiz' | 'example' | string;
  status?: 'pending' | 'completed' | 'in-progress' | string;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

/**
 * Componente base para desafios Git, extensível para diferentes tipos de desafios.
 */
const GitChallenge: React.FC<GitChallengeProps> = ({
  title,
  description,
  type,
  status,
  icon,
  actions,
  children,
  footer,
  className = '',
}) => {
  return (
    <GitChallengeCard className={className} data-type={type} data-status={status}>
      <GitChallengeCardHeader icon={icon} title={title}>
        {actions && <div className="ml-auto flex gap-2">{actions}</div>}
      </GitChallengeCardHeader>
      {description && (
        <GitChallengeCardBody>
          <p className="mb-2 text-gray-700">{description}</p>
          {children}
        </GitChallengeCardBody>
      )}
      {!description && children && <GitChallengeCardBody>{children}</GitChallengeCardBody>}
      {footer && <GitChallengeCardFooter>{footer}</GitChallengeCardFooter>}
    </GitChallengeCard>
  );
};

export default GitChallenge;
