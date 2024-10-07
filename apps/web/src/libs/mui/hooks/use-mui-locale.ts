import { LANGUAGES } from '@/libs/i18next/constants';
import { enUS, esES, Localization } from '@mui/material/locale';
import { useTranslation } from 'react-i18next';

// Constants
const MUI_LOCALES: Record<LANGUAGES, Localization> = {
  [LANGUAGES.EN]: enUS,
  [LANGUAGES.ES]: esES,
};

export const useMuiLocale = () => {
  // "react-i18next"
  const { i18n } = useTranslation();

  const language = i18n.resolvedLanguage || LANGUAGES.EN;
  const assertedLanguage = language as LANGUAGES;
  const muiLocale = MUI_LOCALES[assertedLanguage];

  return { muiLocale };
};
