import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

// Tipos para o componente Badge
export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'ghost';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Variante de cor */
  variant?: BadgeVariant;
  /** Tamanho do badge */
  size?: BadgeSize;
  /** Se o badge deve ter formato arredondado */
  rounded?: boolean;
  /** Classes CSS personalizadas */
  className?: string;
  /** Ícone para exibir antes do texto */
  icon?: React.ReactNode;
}

/**
 * Componente Badge para exibir etiquetas de status, categorias ou informações breves
 */
const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { className, variant = 'default', size = 'md', rounded = false, icon, children, ...props },
    ref
  ) => {
    // Classes base para todos os badges
    const baseClasses = 'inline-flex items-center justify-center font-medium';

    // Classes para variantes
    const variantClasses = {
      default: 'bg-github-canvas-subtle text-github-fg-muted',
      primary: 'bg-github-accent-subtle text-github-accent-fg',
      secondary: 'bg-github-canvas-inset text-github-fg-default',
      success: 'bg-github-success-subtle text-github-success-fg',
      warning: 'bg-github-attention-subtle text-github-attention-fg',
      danger: 'bg-github-danger-subtle text-github-danger-fg',
      info: 'bg-github-accent-subtle text-github-accent-fg',
      ghost: 'border border-github-border-muted bg-transparent text-github-fg-muted',
    };

    // Classes para tamanhos
    const sizeClasses = {
      sm: 'text-xs px-2 py-0.5',
      md: 'text-xs px-2.5 py-1',
      lg: 'text-sm px-3 py-1.5',
    };

    // Classe para formato arredondado
    const roundedClass = rounded ? 'rounded-full' : 'rounded-md';

    return (
      <span
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          roundedClass,
          className
        )}
        {...props}
      >
        {icon && <span className="mr-1">{icon}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
