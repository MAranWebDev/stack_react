import { SvgIconComponent } from '@mui/icons-material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent } from 'react';

// Types
type ToggleButtons = {
  MuiIcon: SvgIconComponent;
  value: string;
  text: string;
}[];

interface Props {
  exclusiveValue: string;
  onChange: (event: MouseEvent<HTMLElement>, value: string) => void;
  toggleButtons: ToggleButtons;
}

export const ExclusiveIconToggle = ({
  exclusiveValue,
  onChange,
  toggleButtons,
}: Props) => {
  return (
    <ToggleButtonGroup
      color="primary"
      value={exclusiveValue}
      exclusive
      size="large"
      aria-label="Exclusive icon toggle"
      onChange={onChange}
    >
      {toggleButtons.map(({ MuiIcon, value, text }) => (
        <ToggleButton sx={{ color: 'text.primary' }} key={value} value={value}>
          <MuiIcon sx={{ mr: 1 }} />
          {text}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
