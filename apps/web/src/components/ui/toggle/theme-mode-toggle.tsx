import { THEME_MODES, THEME_MODE_VALUES } from '@/libs/mui/constants';
import { useThemeModeStore } from '@/libs/zustand/stores';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

// Constants
const TOGGLE_VALUES = [
  {
    Icon: LightModeIcon,
    value: THEME_MODES.LIGHT,
    text: 'themeModes.light',
  },
  {
    Icon: SettingsBrightnessOutlinedIcon,
    value: THEME_MODES.SYSTEM,
    text: 'themeModes.system',
  },
  {
    Icon: DarkModeOutlinedIcon,
    value: THEME_MODES.DARK,
    text: 'themeModes.dark',
  },
] as const;

export const ThemeModeToggle = () => {
  // "zustand"
  const changeThemeMode = useThemeModeStore((state) => state.changeThemeMode);
  const themeMode = useThemeModeStore((state) => state.themeMode);

  // "react-i18next"
  const { t } = useTranslation();

  const translatedToggleValues = TOGGLE_VALUES.map(({ text, ...rest }) => ({
    ...rest,
    text: t(text),
  }));

  // Utils
  const handleChange = (
    _: MouseEvent<HTMLElement>,
    newThemeMode: THEME_MODES,
  ) => {
    if (THEME_MODE_VALUES.includes(newThemeMode)) changeThemeMode(newThemeMode);
  };

  return (
    <ToggleButtonGroup
      fullWidth
      exclusive
      size="medium"
      aria-label="theme mode toggle"
      value={themeMode}
      onChange={handleChange}
    >
      {translatedToggleValues.map(({ value, text, Icon }) => (
        <ToggleButton key={value} value={value}>
          <Icon sx={{ mr: 1 }} />
          {text}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
