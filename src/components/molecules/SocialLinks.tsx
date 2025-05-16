import React from 'react';
import { Github, Linkedin, Globe, Twitter, Instagram, Mail } from 'lucide-react';

/**
 * Representa um único link social com seu ícone e metadados.
 * @interface SocialLinkItem
 * @private
 */
interface SocialLinkItem {
  /** URL do link social. */
  href: string;
  /** Rótulo acessível para o link (ex: "GitHub"). */
  label: string;
  /** Componente do ícone a ser renderizado (de lucide-react). */
  icon: React.ElementType;
}

/**
 * Props para o componente SocialLinks.
 * @interface SocialLinksProps
 */
export interface SocialLinksProps {
  /**
   * Um objeto contendo URLs para várias plataformas sociais.
   * Chaves opcionais incluem: github, linkedin, website, twitter, instagram, mail.
   * @type {{ github?: string; linkedin?: string; website?: string; twitter?: string; instagram?: string; mail?: string; }}
   */
  links: {
    github?: string;
    linkedin?: string;
    website?: string;
    twitter?: string;
    instagram?: string;
    mail?: string;
  };
  /**
   * Tamanho dos ícones sociais.
   * @type {number}
   * @default 18
   * @optional
   */
  iconSize?: number;
  /**
   * Classes CSS adicionais para aplicar ao contêiner dos links.
   * @type {string}
   * @default ''
   * @optional
   */
  className?: string;
}

/**
 * Componente para renderizar uma lista de ícones de links sociais.
 * Ele filtra e exibe apenas os links fornecidos no objeto `links`.
 *
 * @component
 * @param {SocialLinksProps} props - As props para o componente SocialLinks.
 * @returns {JSX.Element | null} Uma div contendo os links sociais, ou null se nenhum link for fornecido.
 *
 * @example
 * const socialUrls = {
 *   github: 'https://github.com/user',
 *   linkedin: 'https://linkedin.com/in/user'
 * };
 * <SocialLinks links={socialUrls} iconSize={24} />
 */
const SocialLinks = ({
  links,
  iconSize = 18,
  className = '',
}: SocialLinksProps): JSX.Element | null => {
  const availableLinks: SocialLinkItem[] = [];

  if (links.github) {
    availableLinks.push({ href: links.github, label: 'GitHub', icon: Github });
  }
  if (links.linkedin) {
    availableLinks.push({ href: links.linkedin, label: 'LinkedIn', icon: Linkedin });
  }
  if (links.website) {
    availableLinks.push({ href: links.website, label: 'Website', icon: Globe });
  }
  if (links.twitter) {
    availableLinks.push({ href: links.twitter, label: 'Twitter', icon: Twitter });
  }
  if (links.instagram) {
    availableLinks.push({ href: links.instagram, label: 'Instagram', icon: Instagram });
  }
  if (links.mail) {
    availableLinks.push({ href: `mailto:${links.mail}`, label: 'Email', icon: Mail });
  }

  if (availableLinks.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap justify-center gap-x-3 gap-y-2 ${className}`}>
      {availableLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.label === 'Email' ? undefined : '_blank'}
          rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
          aria-label={link.label}
          className="text-gray-500 hover:text-gray-700"
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
