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
import { sampleZod, SampleZodType } from '@workspace/api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Types
type SchemaType = SampleZodType['updateInput'];

export const UpdateDialog = ({ id }: { id: string }) => {
  const { register, handleSubmit } = useForm<SchemaType>({
    resolver: zodResolver(sampleZod.updateInput),
  });

  const [open, setOpen] = useState(false);

  const utils = trpc.useUtils();
  const sampleUpdate = trpc.sample.update.useMutation({
    onSuccess() {
      utils.sample.getAll.invalidate();
    },
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onSubmit = ({ name, isDone }: SchemaType) =>
    sampleUpdate.mutate({ id, name, isDone });

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
        <DialogTitle id="alert-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Nombre"
              variant="outlined"
              {...register('name')}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Editar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
