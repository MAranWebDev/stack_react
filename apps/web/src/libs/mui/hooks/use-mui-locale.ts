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

  const assertedLanguage = (i18n.resolvedLanguage as LANGUAGES) || LANGUAGES.EN;
  const muiLocale = MUI_LOCALES[assertedLanguage];

  return { muiLocale };
};
