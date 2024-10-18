import { ConfirmationDialog } from '@/components/ui/dialog';
import { useTrpcSample } from '@/features/sample/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { SampleZodCreateInput, sampleZodCreateInput } from '@workspace/api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const SampleCreateTrigger = () => {
  const [formData, setFormData] = useState<SampleZodCreateInput | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { createSample } = useTrpcSample();

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

  // Methods
  const handleOpenDialog = () => setIsDialogOpen(true);

  const onSubmit = (newFormData: SampleZodCreateInput) => {
    setFormData(newFormData);
    handleOpenDialog();
  };

  const handleCloseDialog = () => {
    setFormData(null);
    setIsDialogOpen(false);
  };

  const handleAccept = () => {
    if (formData) {
      createSample.mutate(formData, {
        onSuccess() {
          reset();
        },
      });
    }
    handleCloseDialog();
  };

  return (
    <>
      <Paper
        sx={{ display: 'flex', gap: 1, p: 2 }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          required
          label={t('name')}
          variant="outlined"
          autoComplete="off"
          error={!!errors.name}
          helperText={errors.name?.message}
          {...register('name')}
        />
        <Button type="submit" variant="outlined">
          <AddIcon />
        </Button>
      </Paper>

      <ConfirmationDialog
        open={isDialogOpen}
        textWarning={t('messages.warningCreate')}
        onClose={handleCloseDialog}
        onAccept={handleAccept}
      />
    </>
  );
};
