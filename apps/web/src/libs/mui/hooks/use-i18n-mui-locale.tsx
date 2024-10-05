import { LANGUAGES } from '@/libs/i18next/constants';
import { enUS, esES, Localization } from '@mui/material/locale';
import { useTranslation } from 'react-i18next';

// Constants
const MUI_LOCALES: Record<LANGUAGES, Localization> = {
  [LANGUAGES.ENGLISH]: enUS,
  [LANGUAGES.SPANISH]: esES,
};

export const useI18nMuiLocale = () => {
  // "react-i18next"
  const { i18n } = useTranslation();

  const language = i18n.resolvedLanguage || LANGUAGES.ENGLISH;
  const assertedLanguage = language as LANGUAGES;

  return {
    muiLocale: MUI_LOCALES[assertedLanguage],
  };
};
