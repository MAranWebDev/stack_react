import { THEME_MODES } from '@/libs/mui/constants';
import { useThemeModeStore } from '@/libs/zustand/stores';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

export const ThemeModeToggle = () => {
  // "zustand"
  const changeThemeMode = useThemeModeStore((state) => state.changeThemeMode);
  const themeMode = useThemeModeStore((state) => state.themeMode);

  // "react-i18next"
  const { t } = useTranslation();

  // Methods
  const handleChange = (
    _: MouseEvent<HTMLElement>,
    newThemeMode: THEME_MODES | null,
  ) => {
    if (newThemeMode !== null) changeThemeMode(newThemeMode);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={themeMode}
      exclusive
      size="large"
      aria-label="Color scheme"
      onChange={handleChange}
    >
      <ToggleButton value={THEME_MODES.LIGHT}>
        <LightModeIcon sx={{ mr: 1 }} />
        {t('themeMode.light')}
      </ToggleButton>
      <ToggleButton value={THEME_MODES.SYSTEM}>
        <SettingsBrightnessOutlinedIcon sx={{ mr: 1 }} />
        {t('themeMode.system')}
      </ToggleButton>
      <ToggleButton value={THEME_MODES.DARK}>
        <DarkModeOutlinedIcon sx={{ mr: 1 }} />
        {t('themeMode.dark')}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
