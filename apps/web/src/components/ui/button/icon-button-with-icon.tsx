import { SvgIconComponent } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { FC, MouseEventHandler, SVGProps } from 'react';

interface Props {
  Icon: FC<SVGProps<SVGSVGElement>> | SvgIconComponent;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const IconButtonWithIcon = ({ Icon, onClick }: Props) => {
  return (
    <IconButton
      sx={{
        border: 1,
        borderRadius: '16px',
        borderColor: 'text.disabled',
      }}
      aria-label="settings"
      onClick={onClick}
    >
      <Icon color="primary" fontSize="small" />
    </IconButton>
  );
};
