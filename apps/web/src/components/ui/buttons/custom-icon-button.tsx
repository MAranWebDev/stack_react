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
      sx={{ color: 'primary.main', border: 1, borderColor: 'text.disabled' }}
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
};
