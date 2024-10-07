import { MODES } from '@/libs/zustand/constants';
import { useDarkModeStore } from '@/libs/zustand/stores';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

export const DarkModeSwitch = () => {
  // "zustand"
  const changeMode = useDarkModeStore((state) => state.changeMode);

  // "react-i18next"
  const { t } = useTranslation();

  // Methods
  const handleChange = (_: MouseEvent<HTMLElement>, mode: MODES) =>
    changeMode(mode);

  return (
    <ToggleButtonGroup
      size="large"
      exclusive
      color="primary"
      aria-label="Color scheme"
      onChange={handleChange}
    >
      <ToggleButton value={MODES.LIGHT}>
        <LightModeIcon sx={{ mr: 1 }} />
        {t('light')}
      </ToggleButton>
      <ToggleButton value={MODES.SYSTEM}>
        <SettingsBrightnessOutlinedIcon sx={{ mr: 1 }} />
        {t('system')}
      </ToggleButton>
      <ToggleButton value={MODES.DARK}>
        <DarkModeOutlinedIcon sx={{ mr: 1 }} />
        {t('dark')}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
