import { enLocale, esLocale } from '@/libs/i18next/locales';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_NS, LANGUAGES } from './constants';

// Constants
const resources = {
  [LANGUAGES.EN]: { [DEFAULT_NS]: enLocale },
  [LANGUAGES.ES]: { [DEFAULT_NS]: esLocale },
} as const;

const DEFAULT_LANGUAGE = LANGUAGES.EN;

// Settings
i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // Translations
    resources,

    // Other i18next options
    debug: false,
    fallbackLng: DEFAULT_LANGUAGE,
    defaultNS: DEFAULT_NS,
    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },
  });

// Exported i18n instance
export { i18n };

// Exported types
export type DefaultResources = (typeof resources)[typeof DEFAULT_LANGUAGE];
