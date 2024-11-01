import { LANGUAGES } from '@/libs/i18next/constants';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export const LanguageDropdown = () => {
  // "react-i18next"
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage;

  // Utils
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
        {LANGUAGES.map(({ code, name, FlagComponent }) => (
          <MenuItem key={code} value={code}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FlagComponent style={{ width: 25 }} />
              <Typography>{name}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
