import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

// Types
interface Props {
  open: boolean;
  title: string;
  buttonText: string;
  onSubmit: () => void;
  onClose: () => void;
}

export const FormDialog = ({
  children,
  open,
  title,
  buttonText,
  onSubmit,
  onClose,
}: PropsWithChildren<Props>) => {
  // "react-i18next"
  const { t } = useTranslation();

  return (
    <Dialog
      PaperProps={{
        sx: { width: 600, height: 500, p: 3 },
        component: 'form',
        onSubmit: onSubmit,
      }}
      open={open}
      onClose={onClose}
    >
      <DialogTitle id="dialog-title">{title}</DialogTitle>

      <DialogContent>{children}</DialogContent>

      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          {t('actions.cancel')}
        </Button>
        <Button type="submit" variant="outlined">
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
