import { enLocale, esLocale } from '@/libs/i18next/locales';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { LANGUAGES } from './constants';

// Constants
const DEFAULT_NS = 'translation';

// Initial values
const resources = {
  en: { [DEFAULT_NS]: enLocale },
  es: { [DEFAULT_NS]: esLocale },
} as const;

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
    fallbackLng: LANGUAGES.ENGLISH,
    defaultNS: DEFAULT_NS,
    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },
  });

export { i18n };

// Exported types
export type DefaultNS = typeof DEFAULT_NS;
export type Resources = (typeof resources)['en'];
