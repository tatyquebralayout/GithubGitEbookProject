import React from 'react';
import SocialLinks from '../molecules/SocialLinks';

// Manter a interface AuthorSocialLinks ou adaptar para a do SocialLinks
export interface AuthorSocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  // email foi renomeado para mail no SocialLinks
  mail?: string; // Anteriormente email
  website?: string;
}

export interface AuthorProfileProps {
  name: string;
  role?: string;
  avatarUrl: string;
  socialLinks?: AuthorSocialLinks;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

const AuthorProfile = ({
  name,
  role,
  avatarUrl,
  // Ajustar a prop socialLinks para corresponder ao esperado por SocialLinks.tsx
  socialLinks: rawSocialLinks = {},
  description,
  className = '',
  children,
}: AuthorProfileProps) => {
  // Adaptar rawSocialLinks para o formato esperado por <SocialLinks links={...} />
  // O componente SocialLinks espera github, linkedin, website, twitter, instagram, mail
  const adaptedSocialLinks = {
    github: rawSocialLinks.github,
    linkedin: rawSocialLinks.linkedin,
    website: rawSocialLinks.website,
    twitter: rawSocialLinks.twitter,
    instagram: rawSocialLinks.instagram,
    mail: rawSocialLinks.mail, // ou rawSocialLinks.email se a prop original for mantida
  };

  // Condição para verificar se há algum link social adaptado
  const hasSocialLinks = Object.values(adaptedSocialLinks).some((link) => link !== undefined);

  return (
    <div
      className={`rounded-lg bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:shadow-md ${className}`}
    >
      <div className="flex items-center gap-4">
        <img
          src={avatarUrl}
          alt={`${name}${role ? ' - ' + role : ''}`}
          className="h-16 w-16 rounded-full border-2 border-gray-200 object-cover"
        />
        <div>
          <h3 className="mb-1 text-xl font-bold text-gray-900">{name}</h3>
          {role && <p className="mb-2 text-gray-600">{role}</p>}
          {description && <p className="mb-3 text-sm text-gray-500">{description}</p>}
        </div>
      </div>
      {hasSocialLinks && (
        <SocialLinks links={adaptedSocialLinks} className="mt-4 space-x-4" iconSize={20} />
      )}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default AuthorProfile;
