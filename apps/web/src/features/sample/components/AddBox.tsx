import { trpc } from '@/libs/trpc';
import { zodResolver } from '@hookform/resolvers/zod';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({ name: z.string().max(10).min(2) });
type Schema = z.infer<typeof schema>;

export const AddBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const sampleCreator = trpc.sample.create.useMutation();
  console.log(errors.name?.message);

  const onSubmit = (data: Schema) => {
    console.log(data);
    sampleCreator.mutate({ name: data.name });
  };

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
