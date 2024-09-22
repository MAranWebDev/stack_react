import { trpc } from '@/libs/trpc/hooks';
import { useStatusStore } from '@/libs/zustand/stores';
import { zodResolver } from '@hookform/resolvers/zod';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { SampleZodType, sampleZod } from '@workspace/api';
import { useForm } from 'react-hook-form';

// Types
type SchemaType = SampleZodType['createInput'];

export const CreateBox = () => {
  // react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(sampleZod.createInput),
  });

  // zustand
  const updateStatus = useStatusStore((state) => state.updateStatus);
  const isPending = useStatusStore((state) => state.isPending);
  const isError = useStatusStore((state) => state.isError);

  // trpc
  const utils = trpc.useUtils();
  const sampleCreate = trpc.sample.create.useMutation({
    onMutate() {
      updateStatus({ status: 'pending' });
    },
    onSuccess() {
      utils.sample.getAll.invalidate();
      updateStatus({ status: 'success' });
    },
    onError({ message }) {
      updateStatus({ status: 'error', errorMessage: message });
    },
  });

  const onSubmit = ({ name }: SchemaType) => sampleCreate.mutate({ name });

  const watchedFields = watch(['name']);
  const isFormEmpty = Object.values(watchedFields).some(
    (value) => value === '',
  );
  const isAddButtonDisabled = isFormEmpty || isPending || isError;

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
