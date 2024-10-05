// Constants
export const DEFAULT_NS = 'translation';

export const LANGUAGES = {
  ENGLISH: 'en',
  SPANISH: 'es',
} as const;

// Exported types
export type LANGUAGES = (typeof LANGUAGES)[keyof typeof LANGUAGES];
