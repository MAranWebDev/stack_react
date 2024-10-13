import { SvgIconComponent } from '@mui/icons-material';
import ToggleButton, { ToggleButtonProps } from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// Types
interface IconToggleButton {
  Icon: SvgIconComponent;
  value: string;
  text: string;
}

interface Props {
  exclusiveValue: string;
  onChange: ToggleButtonProps['onChange'];
  toggleButtons: IconToggleButton[];
}

export const ExclusiveIconToggle = ({
  exclusiveValue,
  onChange,
  toggleButtons,
}: Props) => {
  return (
    <ToggleButtonGroup
      fullWidth
      color="primary"
      value={exclusiveValue}
      exclusive
      size="medium"
      aria-label="Exclusive icon toggle"
      onChange={onChange}
    >
      {toggleButtons.map(({ Icon, value, text }) => (
        <ToggleButton sx={{ borderRadius: '10px' }} key={value} value={value}>
          <Icon sx={{ mr: 1 }} />
          {text}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
