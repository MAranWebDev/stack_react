import { THEME_MODES, THEME_MODE_VALUES } from '@/libs/mui/constants';
import { useThemeModeStore } from '@/libs/zustand/stores';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { ExclusiveIconToggle } from './exlusive-icon-toggle';

// Constants

const TOGGLE_BUTTONS = [
  {
    Icon: LightModeIcon,
    value: THEME_MODES.LIGHT,
    text: 'themeMode.light',
  },
  {
    Icon: SettingsBrightnessOutlinedIcon,
    value: THEME_MODES.SYSTEM,
    text: 'themeMode.system',
  },
  {
    Icon: DarkModeOutlinedIcon,
    value: THEME_MODES.DARK,
    text: 'themeMode.dark',
  },
] as const;

export const ThemeModeToggle = () => {
  // "zustand"
  const changeThemeMode = useThemeModeStore((state) => state.changeThemeMode);
  const themeMode = useThemeModeStore((state) => state.themeMode);

  // "react-i18next"
  const { t } = useTranslation();

  const toggleButtons = TOGGLE_BUTTONS.map(({ text, ...button }) => ({
    ...button,
    text: t(text),
  }));

  // Methods
  const handleChange = (_: MouseEvent<HTMLElement>, value: string) => {
    const themeMode = value as THEME_MODES; // Asserted because onChange value must be string
    if (THEME_MODE_VALUES.includes(themeMode)) changeThemeMode(themeMode);
  };

  return (
    <ExclusiveIconToggle
      exclusiveValue={themeMode}
      toggleButtons={toggleButtons}
      onChange={handleChange}
    />
  );
};
