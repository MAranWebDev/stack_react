import { LANGUAGE_CODES, LanguageCodes } from '@/libs/i18next/constants';
import { enUS, esES, Localization } from '@mui/material/locale';
import { useTranslation } from 'react-i18next';

// Constants
const MUI_LOCALES: Record<LanguageCodes, Localization> = {
  [LANGUAGE_CODES.EN]: enUS,
  [LANGUAGE_CODES.ES]: esES,
};

export const useMuiLocale = () => {
  // "react-i18next"
  const { i18n } = useTranslation();

  const assertedLanguage = (i18n.resolvedLanguage ??
    LANGUAGE_CODES.EN) as LanguageCodes;
  const muiLocale = MUI_LOCALES[assertedLanguage];

  return {
    muiLocale,
  };
};
