import { trpc } from '@/libs/trpc/hooks';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const DeleteDialog = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);

  // "react-i18next"
  const { t } = useTranslation();

  // "trpc"
  const utils = trpc.useUtils();
  const sampleDelete = trpc.sample.delete.useMutation({
    onSuccess() {
      utils.sample.getAll.invalidate();
    },
  });

  // Methods
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClickRemove = (id: string) => sampleDelete.mutate({ id });

  return (
    <>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <ClearIcon />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {t('messages.confirmation')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('messages.permanentDeleteWarning')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> {t('actions.cancel')}</Button>
          <Button onClick={() => handleClickRemove(id)} autoFocus>
            {t('actions.accept')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
