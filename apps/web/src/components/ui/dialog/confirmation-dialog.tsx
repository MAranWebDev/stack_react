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
  textWarning: string;
  onClickClose: () => void;
  onClickAccept: () => void;
}

export const ConfirmationDialog = ({
  open,
  textWarning,
  onClickClose,
  onClickAccept,
}: Props) => {
  // "react-i18next"
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClickClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {t('messages.confirmation')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {textWarning}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickClose}>{t('actions.cancel')}</Button>
        <Button onClick={onClickAccept} autoFocus>
          {t('actions.accept')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
