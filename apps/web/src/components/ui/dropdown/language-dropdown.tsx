import { LANGUAGE_VALUES } from '@/libs/i18next/constants';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

export const LanguageDropdown = () => {
  // "react-i18next"
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;

  // Methods
  const handleChange = (event: SelectChangeEvent) =>
    i18n.changeLanguage(event.target.value);

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">{t('language')}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        name="select"
        value={currentLanguage}
        onChange={handleChange}
        label={t('language')}
      >
        {LANGUAGE_VALUES.map((code) => (
          <MenuItem key={code} value={code}>
            {code}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
