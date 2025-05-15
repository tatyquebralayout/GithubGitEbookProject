import React, { HTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface GitChallengeCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Classes CSS personalizadas */
  className?: string;
  /** Conteúdo filho */
  children: ReactNode;
}

export interface GitChallengeCardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Classes CSS personalizadas */
  className?: string;
  /** Ícone opcional para o header */
  icon?: ReactNode;
  /** Título para o header */
  title?: ReactNode;
  /** Conteúdo filho */
  children?: ReactNode;
}

export interface GitChallengeCardBodyProps extends HTMLAttributes<HTMLDivElement> {
  /** Classes CSS personalizadas */
  className?: string;
  /** Conteúdo filho */
  children: ReactNode;
}

export interface GitChallengeCardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Classes CSS personalizadas */
  className?: string;
  /** Conteúdo filho */
  children: ReactNode;
}

/**
 * Componente GitChallengeCard - Substitui a classe gh-card
 */
const GitChallengeCard = forwardRef<HTMLDivElement, GitChallengeCardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'overflow-hidden rounded-lg border border-github-border-default bg-github-canvas-default',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
GitChallengeCard.displayName = 'GitChallengeCard';

/**
 * Componente GitChallengeCardHeader - Substitui a classe gh-card-header
 */
const GitChallengeCardHeader = forwardRef<HTMLDivElement, GitChallengeCardHeaderProps>(
  ({ className, icon, title, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center border-b border-github-border-default bg-github-canvas-subtle px-4 py-3',
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {title && <span className="text-sm font-medium">{title}</span>}
      {children}
    </div>
  )
);
GitChallengeCardHeader.displayName = 'GitChallengeCardHeader';

/**
 * Componente GitChallengeCardBody - Substitui a classe gh-card-body
 */
const GitChallengeCardBody = forwardRef<HTMLDivElement, GitChallengeCardBodyProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('p-4', className)} {...props}>
      {children}
    </div>
  )
);
GitChallengeCardBody.displayName = 'GitChallengeCardBody';

/**
 * Componente GitChallengeCardFooter - Substitui a classe gh-card-footer
 */
const GitChallengeCardFooter = forwardRef<HTMLDivElement, GitChallengeCardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'border-t border-github-border-default bg-github-canvas-subtle px-4 py-3',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
GitChallengeCardFooter.displayName = 'GitChallengeCardFooter';

export { GitChallengeCard, GitChallengeCardHeader, GitChallengeCardBody, GitChallengeCardFooter };
