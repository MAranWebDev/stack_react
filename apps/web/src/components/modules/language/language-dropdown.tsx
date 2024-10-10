import { LANGUAGES } from '@/libs/i18next/constants';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

const languageCodes = Object.values(LANGUAGES);

export const LanguageDropdown = () => {
  // "react-i18next"
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;

  // Methods
  const handleChange = (event: SelectChangeEvent) =>
    i18n.changeLanguage(event.target.value);

  return (
    <FormControl>
      <InputLabel id="select-label">{t('language')}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        label={t('language')}
        value={currentLanguage}
        onChange={handleChange}
      >
        {languageCodes.map((code) => (
          <MenuItem key={code} value={code}>
            {code}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
