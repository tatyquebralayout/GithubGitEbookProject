export type SocialLinkKey = 'github' | 'linkedin' | 'twitter' | 'instagram' | 'mail' | 'website';

export const SOCIAL_LINK_KEYS = [
  'github',
  'linkedin',
  'twitter',
  'instagram',
  'mail',
  'website',
] as const;

export interface AuthorDialogue {
  type: 'text' | 'image';
  content?: string;
  src?: string;
  alt?: string;
}

export interface AuthorProfile {
  src: string;
  alt: string;
  miniBio?: string;
  socialLinks?: Partial<Record<SocialLinkKey, string>>;
  dialogue?: AuthorDialogue[];
} 