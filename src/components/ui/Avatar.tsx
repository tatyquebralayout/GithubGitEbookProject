import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

// Tipos para o componente Avatar
export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

// Interface para um único avatar
export interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  /** URL da imagem */
  src: string;
  /** Texto alternativo */
  alt: string;
  /** Tamanho do avatar */
  size?: AvatarSize;
  /** Classes CSS personalizadas */
  className?: string;
  /** Se o avatar deve ter borda */
  bordered?: boolean;
}

// Interface para grupo de avatars
export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Lista de props para cada avatar */
  avatars: Omit<AvatarProps, 'size'>[];
  /** Tamanho dos avatars no grupo */
  size?: AvatarSize;
  /** Máximo de avatars a exibir */
  max?: number;
  /** Classes CSS personalizadas */
  className?: string;
  /** Se os avatars devem ter borda */
  bordered?: boolean;
}

/**
 * Componente Avatar para exibir imagens de perfil
 */
const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, src, alt, size = 'md', bordered = false, ...props }, ref) => {
    // Classes para tamanhos
    const sizeClasses = {
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-10 h-10',
      xl: 'w-12 h-12',
    };

    // Classe para borda
    const borderClass = bordered ? 'border-2 border-white' : '';

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn('rounded-full', sizeClasses[size], borderClass, className)}
        {...props}
      />
    );
  }
);

Avatar.displayName = 'Avatar';

/**
 * Componente AvatarGroup para exibir vários avatares em grupo
 */
const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, avatars, size = 'md', max = 5, bordered = true, ...props }, ref) => {
    // Determinar quais avatars mostrar
    const visibleAvatars = avatars.slice(0, max);
    const remainingCount = avatars.length - max;

    return (
      <div ref={ref} className={cn('flex -space-x-2', className)} {...props}>
        {visibleAvatars.map((avatar, index) => (
          <Avatar
            key={index}
            src={avatar.src}
            alt={avatar.alt}
            size={size}
            bordered={bordered}
            className={avatar.className}
          />
        ))}

        {remainingCount > 0 && (
          <div
            className={cn(
              'flex items-center justify-center rounded-full border-2 border-white bg-github-canvas-subtle font-medium text-github-fg-muted',
              {
                'h-6 w-6 text-xs': size === 'sm',
                'h-8 w-8 text-xs': size === 'md',
                'h-10 w-10 text-sm': size === 'lg',
                'h-12 w-12 text-sm': size === 'xl',
              }
            )}
          >
            +{remainingCount}
          </div>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';

export { Avatar, AvatarGroup };
