import { ConfirmationDialog, FormDialog } from '@/components/ui/dialogs';
import { useTrpcSampleMutation } from '@/features/sample/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { SampleZodCreateInput, sampleZodCreateInput } from '@workspace/api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const SampleCreateTrigger = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState<SampleZodCreateInput | null>(
    null,
  );

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const { createSample } = useTrpcSampleMutation();

  // "react-i18next"
  const { t } = useTranslation();

  // "react-hook-form"
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SampleZodCreateInput>({
    resolver: zodResolver(sampleZodCreateInput),
  });

  // Utils
  const handleOpenForm = () => setIsFormOpen(true);

  const handleCloseForm = () => {
    reset();
    setIsFormOpen(false);
  };

  const onSubmitOpenConfirmation = (newFormValues: SampleZodCreateInput) => {
    setFormValues(newFormValues);
    setIsConfirmationOpen(true);
  };

  const handleCloseConfirmation = () => {
    setFormValues(null);
    setIsConfirmationOpen(false);
  };

  const handleAcceptConfirmation = () => {
    if (formValues) {
      createSample.mutate(formValues, {
        onSuccess() {
          handleCloseForm();
        },
      });
    }

    handleCloseConfirmation();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpenForm}>
        <AddIcon />
      </Button>

      <FormDialog
        open={isFormOpen}
        title={t('actions.create')}
        buttonText={t('actions.create')}
        onClose={handleCloseForm}
        onSubmit={handleSubmit(onSubmitOpenConfirmation)}
      >
        <TextField
          required
          margin="dense"
          variant="outlined"
          autoComplete="off"
          label={t('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
          {...register('name')}
        />
      </FormDialog>

      <ConfirmationDialog
        open={isConfirmationOpen}
        warningText={t('messages.warningCreate')}
        onClose={handleCloseConfirmation}
        onAccept={handleAcceptConfirmation}
      />
    </>
  );
};
