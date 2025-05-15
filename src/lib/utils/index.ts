import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Mescla classes CSS com suporte a condicionais e resolução de conflitos Tailwind
 * Usa clsx para lidar com condicionais e tailwind-merge para resolver conflitos
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Atrasa a execução por um tempo específico
 * @param ms Tempo em milissegundos
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Formata uma string para URL amigável (slug)
 * @param str String a ser convertida
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Trunca um texto para um tamanho específico
 * @param text Texto a ser truncado
 * @param maxLength Tamanho máximo
 * @param suffix Sufixo a ser adicionado (padrão: "...")
 */
export function truncateText(text: string, maxLength: number, suffix: string = '...'): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - suffix.length) + suffix;
}
