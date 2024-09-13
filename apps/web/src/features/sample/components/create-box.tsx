import { trpc } from '@/libs/trpc/hooks';
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
  const { register, handleSubmit } = useForm<SchemaType>({
    resolver: zodResolver(sampleZod.createInput),
  });

  const utils = trpc.useUtils();
  const sampleCreate = trpc.sample.create.useMutation({
    onSuccess() {
      utils.sample.getAll.invalidate();
    },
  });

  const onSubmit = ({ name }: SchemaType) => sampleCreate.mutate({ name });

  return (
    <Paper
      sx={{ display: 'flex', gap: 1, p: 2 }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField label="Nombre" variant="outlined" {...register('name')} />

      <Button type="submit" variant="outlined">
        <AddIcon />
      </Button>
    </Paper>
  );
};
