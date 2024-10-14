import { en, es } from '@/libs/i18next/locales';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_NS, DefaultNS, LANGUAGES } from './constants';

// Types
type DefaultLanguage = typeof DEFAULT_LANGUAGE;

// Constants
const DEFAULT_LANGUAGE = LANGUAGES.EN;

// Translations
const defaultResource = {
  [LANGUAGES.EN]: { [DEFAULT_NS]: en },
} as const;
const resources = {
  ...defaultResource,
  [LANGUAGES.ES]: { [DEFAULT_NS]: es },
} as const;

// Settings
i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  // init i18next
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

// Exported i18next instance
export { i18n };

// Exported types
export type DefaultLocale =
  (typeof defaultResource)[DefaultLanguage][DefaultNS];

export type DefaultResources = (typeof resources)[DefaultLanguage];
