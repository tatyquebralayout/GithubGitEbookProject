import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

// Propriedades para o componente Card
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Classes CSS personalizadas */
  className?: string;
  /** Variante do card */
  variant?: 'default' | 'bordered' | 'elevated';
  /** Se deve ter padding interno */
  _noPadding?: boolean;
}

// Propriedades para o CardHeader
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Classes CSS personalizadas */
  className?: string;
}

// Propriedades para o CardTitle
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Classes CSS personalizadas */
  className?: string;
  /** Nível do título (h1, h2, etc.) */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

// Propriedades para o CardDescription
export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Classes CSS personalizadas */
  className?: string;
}

// Propriedades para o CardBody
export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  /** Classes CSS personalizadas */
  className?: string;
}

// Propriedades para o CardFooter
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Classes CSS personalizadas */
  className?: string;
}

/**
 * Componente Card principal
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', _noPadding = false, ...props }, ref) => {
    const variantClasses = {
      default: 'bg-github-canvas-default',
      bordered: 'bg-github-canvas-default border border-github-border-default',
      elevated: 'bg-github-canvas-default shadow-github-md',
    };

    return (
      <div
        ref={ref}
        className={cn('overflow-hidden rounded-lg', variantClasses[variant], className)}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

/**
 * Componente de cabeçalho do Card
 */
const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'border-b border-github-border-default bg-github-canvas-subtle px-6 py-4',
      className
    )}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

/**
 * Componente de título do Card
 */
const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Comp = 'h3', ...props }, ref) => (
    <Comp ref={ref} className={cn('font-medium text-github-fg-default', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

/**
 * Componente de descrição do Card
 */
const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-github-fg-muted', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

/**
 * Componente de corpo do Card
 */
const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6', className)} {...props} />
));
CardBody.displayName = 'CardBody';

/**
 * Componente de rodapé do Card
 */
const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'border-t border-github-border-default bg-github-canvas-subtle px-6 py-4',
      className
    )}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter };
