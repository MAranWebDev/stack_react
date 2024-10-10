import { ExclusiveIconToggle } from '@/components/ui/toggle';
import { THEME_MODES } from '@/libs/mui/constants';
import { useThemeModeStore } from '@/libs/zustand/stores';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

// Constants
const MODES = Object.values(THEME_MODES);

const TOGGLE_BUTTONS = [
  {
    MuiIcon: LightModeIcon,
    value: THEME_MODES.LIGHT,
    text: 'themeMode.light',
  },
  {
    MuiIcon: SettingsBrightnessOutlinedIcon,
    value: THEME_MODES.SYSTEM,
    text: 'themeMode.system',
  },
  {
    MuiIcon: DarkModeOutlinedIcon,
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
    if (MODES.includes(themeMode)) changeThemeMode(themeMode);
  };

  return (
    <ExclusiveIconToggle
      exclusiveValue={themeMode}
      toggleButtons={toggleButtons}
      onChange={handleChange}
    />
  );
};
