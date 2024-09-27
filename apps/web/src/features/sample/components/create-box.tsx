import { trpc } from '@/libs/trpc/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { SampleZod, sampleZod } from '@workspace/api';
import { useForm } from 'react-hook-form';

// Types
type Schema = SampleZod['createInput'];

export const CreateBox = () => {
  // react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(sampleZod.createInput),
  });

  // trpc
  const mutationCallbacks = {
    onSuccess() {
      utils.sample.getAll.invalidate();
    },
  };

  const utils = trpc.useUtils();
  const sampleCreate = trpc.sample.create.useMutation(mutationCallbacks);

  const onSubmit = ({ name }: Schema) => sampleCreate.mutate({ name });

  const watchedFields = watch(['name']);
  const isFormEmpty = Object.values(watchedFields).some(
    (value) => value === '',
  );
  const isAddButtonDisabled = isFormEmpty;

  return (
    <Paper
      sx={{ display: 'flex', gap: 1, p: 2 }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        required
        label="Nombre"
        variant="outlined"
        error={!!errors.name}
        helperText={errors.name?.message}
        {...register('name')}
      />

      <Button type="submit" variant="outlined" disabled={isAddButtonDisabled}>
        <AddIcon />
      </Button>
    </Paper>
  );
};
