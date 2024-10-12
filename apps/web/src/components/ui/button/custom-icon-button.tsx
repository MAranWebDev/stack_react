import IconButton from '@mui/material/IconButton';
import { MouseEventHandler, PropsWithChildren } from 'react';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const CustomIconButton = ({
  children,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <IconButton
      sx={{
        border: 1,
        borderRadius: '16px',
        borderColor: 'text.disabled',
        color: 'inherit',
      }}
      aria-label="button"
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
};
