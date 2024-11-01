import IconButton from '@mui/material/IconButton';
import { MouseEventHandler, PropsWithChildren } from 'react';

// Types
interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const CustomIconButton = ({
  children,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <IconButton
      sx={{ border: 1, borderColor: 'text.disabled', color: 'primary.main' }}
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
};
