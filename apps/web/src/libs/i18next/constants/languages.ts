// Constants
export const LANGUAGES = {
  EN: 'en', // English
  ES: 'es', // Spanish
} as const;

export const LANGUAGE_VALUES = Object.values(LANGUAGES);

// Exported types
export type LANGUAGES = (typeof LANGUAGES)[keyof typeof LANGUAGES];
export type LanguageValues = typeof LANGUAGE_VALUES;
