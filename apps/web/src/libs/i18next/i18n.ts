import { en, es } from '@/libs/i18next/locales';
import { zodEs } from '@workspace/api';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_NS, DefaultNS, LANGUAGE_CODES } from './constants';

// Types
type DefaultLanguage = typeof DEFAULT_LANGUAGE;

// Constants
const DEFAULT_LANGUAGE = LANGUAGE_CODES.EN;

// Translations
const defaultResource = {
  [LANGUAGE_CODES.EN]: { [DEFAULT_NS]: en },
} as const;
const resources = {
  ...defaultResource,
  [LANGUAGE_CODES.ES]: { [DEFAULT_NS]: es, zod: zodEs },
} as const;

// Settings
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next.
  // Init i18next
  .init({
    resources, // Translations

    // Other i18next options
    debug: false,
    fallbackLng: DEFAULT_LANGUAGE,
    defaultNS: DEFAULT_NS,
    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },
  });

// Exported instance
export { i18n };

// Exported types
export type DefaultLocale =
  (typeof defaultResource)[DefaultLanguage][DefaultNS];
export type DefaultResources = (typeof resources)[DefaultLanguage];
