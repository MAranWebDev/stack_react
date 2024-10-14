import { useTrpcSample } from '@/features/sample/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { SampleZod, sampleZod } from '@workspace/api';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

// Types
type Schema = SampleZod['createInput'];

export const SampleCreateTrigger = () => {
  const { createSample } = useTrpcSample();

  // "react-i18next"
  const { t } = useTranslation();

  // "react-hook-form"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(sampleZod.createInput),
  });

  // Methods
  const onSubmit = ({ name }: Schema) => createSample({ name });

  return (
    <Paper
      sx={{ display: 'flex', gap: 1, p: 2 }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        required
        size="medium"
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
  );
};
