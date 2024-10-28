import { ES, US } from 'country-flag-icons/react/3x2';

// Constants
export const LANGUAGE_CODES = {
  EN: 'en',
  ES: 'es',
} as const;

export const LANGUAGES = [
  { code: LANGUAGE_CODES.EN, name: 'English', FlagComponent: US },
  { code: LANGUAGE_CODES.ES, name: 'Español', FlagComponent: ES },
] as const;

// Exported types
export type LanguageCodes =
  (typeof LANGUAGE_CODES)[keyof typeof LANGUAGE_CODES];
