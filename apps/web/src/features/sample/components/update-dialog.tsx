import { trpc } from '@/libs/trpc/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { sampleZod, SampleZod } from '@workspace/api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

// Types
type Schema = SampleZod['updateInput'];

interface Props {
  id: string;
}

export const UpdateDialog = ({ id }: Props) => {
  const [open, setOpen] = useState(false);

  // "react-i18next"
  const { t } = useTranslation();

  // "react-hook-form"
  const { register, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(sampleZod.updateInput),
  });

  // "trpc"
  const utils = trpc.useUtils();
  const sampleUpdateMutation = trpc.sample.update.useMutation({
    onSuccess() {
      utils.sample.getAll.invalidate();
    },
  });

  // Methods
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = ({ name, isDone }: Schema) =>
    sampleUpdateMutation.mutate({ id, name, isDone });

  return (
    <>
      <IconButton aria-label="edit" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">{t('actions.edit')}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Nombre"
              variant="outlined"
              autoComplete="off"
              {...register('name')}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('actions.cancel')}</Button>
          <Button type="submit">{t('actions.edit')}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
