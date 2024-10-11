import { SvgIconComponent } from '@mui/icons-material';
import ToggleButton from '@mui/material/ToggleButton';
import { FC, SVGProps } from 'react';

// Types
export interface IconToggleButtonProps {
  Icon: FC<SVGProps<SVGSVGElement>> | SvgIconComponent;
  value: string;
  text: string;
}

export const IconToggleButton = ({
  Icon,
  value,
  text,
}: IconToggleButtonProps) => {
  return (
    <ToggleButton sx={{ color: 'text.primary' }} value={value}>
      <Icon sx={{ mr: 1 }} />
      {text}
    </ToggleButton>
  );
};
