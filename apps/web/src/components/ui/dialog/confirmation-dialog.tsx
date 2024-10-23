import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from 'react-i18next';

// Types
interface Props {
  open: boolean;
  warningText: string;
  onClose: () => void;
  onAccept: () => void;
}

export const ConfirmationDialog = ({
  open,
  warningText,
  onClose,
  onAccept,
}: Props) => {
  // "react-i18next"
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      aria-labelledby="confirmation-dialog-title"
      aria-describedby="confirmation-dialog-description"
      onClose={onClose}
    >
      <DialogTitle id="confirmation-dialog-title">
        {t('messages.confirmation')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="confirmation-dialog-description">
          {warningText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('actions.cancel')}</Button>
        <Button onClick={onAccept} autoFocus>
          {t('actions.accept')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
