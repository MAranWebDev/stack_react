// Constants
export const LANGUAGES = {
  EN: 'en', // English
  ES: 'es', // Spanish
} as const;

// Exported types
export type LANGUAGES = (typeof LANGUAGES)[keyof typeof LANGUAGES];
