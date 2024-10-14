import { SvgIconComponent } from '@mui/icons-material';
import ToggleButton, { ToggleButtonProps } from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// Types
interface ToggleValue {
  value: string;
  text: string;
  Icon?: SvgIconComponent;
}

interface Props {
  exclusiveValue: string;
  onChange: ToggleButtonProps['onChange'];
  toggleValues: ToggleValue[];
}

export const ExclusiveToggle = ({
  exclusiveValue,
  onChange,
  toggleValues,
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
      {toggleValues.map(({ value, Icon, text }) => (
        <ToggleButton sx={{ borderRadius: '10px' }} key={value} value={value}>
          {Icon ? <Icon sx={{ mr: 1 }} /> : null}
          {text}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
