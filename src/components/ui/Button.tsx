import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

// Tipos para as variantes de botão
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variante visual do botão */
  variant?: ButtonVariant;
  /** Tamanho do botão */
  size?: ButtonSize;
  /** Ícone para exibir antes do texto */
  leftIcon?: React.ReactNode;
  /** Ícone para exibir depois do texto */
  rightIcon?: React.ReactNode;
  /** Se o botão deve ocupar toda a largura do container */
  fullWidth?: boolean;
  /** Se o botão está em estado de carregamento */
  isLoading?: boolean;
}

/**
 * Componente de botão padronizado com diferentes variantes e tamanhos
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      fullWidth = false,
      isLoading = false,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    // Classes base para todos os botões
    const baseClasses =
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-github-accent-emphasis disabled:opacity-50 disabled:pointer-events-none';

    // Classes para variantes
    const variantClasses = {
      primary: 'bg-github-accent-emphasis text-white hover:bg-github-accent-fg',
      secondary: 'bg-github-canvas-subtle text-github-fg-default hover:bg-github-canvas-inset',
      outline:
        'border border-github-border-default bg-transparent text-github-fg-default hover:bg-github-canvas-subtle',
      ghost: 'bg-transparent text-github-fg-default hover:bg-github-canvas-subtle',
      danger: 'bg-github-danger-emphasis text-white hover:bg-github-danger-fg',
      success: 'bg-github-success-emphasis text-white hover:bg-github-success-fg',
    };

    // Classes para tamanhos
    const sizeClasses = {
      sm: 'text-xs px-3 py-1.5',
      md: 'text-sm px-4 py-2',
      lg: 'text-base px-5 py-2.5',
    };

    // Classes para largura total
    const widthClasses = fullWidth ? 'w-full' : '';

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          widthClasses,
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
