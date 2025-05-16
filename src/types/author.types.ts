export interface SocialLinks {
  github?: string;
  linkedin?: string;
  website?: string;
}

export interface DialogueStep {
  type: 'text' | 'question';
  content: string;
  options?: string[];
  correctAnswer?: number;
}

export interface AuthorProfile {
  src: string;
  alt: string;
  miniBio?: string;
  socialLinks?: SocialLinks;
  dialogue?: DialogueStep[];
} 