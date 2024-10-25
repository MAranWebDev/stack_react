import { ConfirmationDialog, FormDialog } from '@/components/ui/dialog';
import { INPUT_KEYS } from '@/features/sample/constants';
import { useTrpcSampleMutation } from '@/features/sample/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
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
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState<SampleZodUpdateInput | null>(
    null,
  );
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const { updateSample } = useTrpcSampleMutation();

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
  const handleOpenForm = () => setIsFormOpen(true);

  const handleCloseForm = () => {
    reset();
    setValue(INPUT_KEYS.IS_DONE, isDone);
    setIsFormOpen(false);
  };

  const onSubmitOpenConfirmation = (newFormValues: SampleZodUpdateInput) => {
    setFormValues(newFormValues);
    setIsConfirmationOpen(true);
  };

  const handleCloseConfirmation = () => {
    setFormValues(null);
    setIsConfirmationOpen(false);
  };

  const handleAcceptConfirmation = () => {
    if (formValues) {
      updateSample.mutate(formValues, {
        onSuccess() {
          handleCloseForm();
        },
      });
    }

    handleCloseConfirmation();
  };

  return (
    <>
      {/* Trigger form */}
      <IconButton aria-label="update" onClick={handleOpenForm}>
        <EditIcon />
      </IconButton>

      {/* Form dialog */}
      <FormDialog
        open={isFormOpen}
        title={t('actions.update')}
        buttonText={t('actions.update')}
        onClose={handleCloseForm}
        onSubmit={handleSubmit(onSubmitOpenConfirmation)}
      >
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
      </FormDialog>

      {/* Confirmation dialog */}
      <ConfirmationDialog
        open={isConfirmationOpen}
        warningText={t('messages.warningUpdate')}
        onClose={handleCloseConfirmation}
        onAccept={handleAcceptConfirmation}
      />
    </>
  );
};
