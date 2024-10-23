import { INPUT_KEYS } from '@/features/sample/constants';
import { useTrpcSample } from '@/features/sample/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { SampleZodUpdateInput, sampleZodUpdateInput } from '@workspace/api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

// Types
interface Props {
  id: string;
  name: string;
  isDone: boolean;
}

export const SampleUpdateTrigger = ({ id, name, isDone }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { updateSample } = useTrpcSample();

  // "react-i18next"
  const { t } = useTranslation();

  // "react-hook-form"
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SampleZodUpdateInput>({
    resolver: zodResolver(sampleZodUpdateInput),
  });

  const isDoneStatus = watch(INPUT_KEYS.IS_DONE)
    ? t('status.closed')
    : t('status.open');

  // Methods
  const handleOpenDialog = () => {
    reset();
    setValue(INPUT_KEYS.IS_DONE, isDone);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => setIsDialogOpen(false);

  const onSubmit = (formData: SampleZodUpdateInput) => {
    updateSample.mutate(formData);
    handleCloseDialog();
  };

  return (
    <>
      <IconButton aria-label="update" onClick={handleOpenDialog}>
        <EditIcon />
      </IconButton>

      <Dialog
        PaperProps={{ component: 'form', onSubmit: handleSubmit(onSubmit) }}
        open={isDialogOpen}
        aria-labelledby="dialog-title"
        onClose={handleCloseDialog}
      >
        <DialogTitle id="dialog-title">{t('actions.edit')}</DialogTitle>
        <DialogContent>
          <Stack spacing={1}>
            <input type="hidden" value={id} {...register(INPUT_KEYS.ID)} />

            <TextField
              required
              margin="dense"
              variant="outlined"
              autoComplete="off"
              label={t('name')}
              defaultValue={name}
              error={!!errors.name}
              helperText={errors.name?.message}
              {...register(INPUT_KEYS.NAME)}
            />

            <Stack sx={{ px: 1 }}>
              <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>
                {t('status.label')}
              </Typography>
              <FormControlLabel
                label={
                  <Typography color="text.disabled">{isDoneStatus}</Typography>
                }
                control={
                  <Checkbox
                    defaultChecked={isDone}
                    {...register(INPUT_KEYS.IS_DONE)}
                  />
                }
              />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>{t('actions.cancel')}</Button>
          <Button type="submit">{t('actions.update')}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
