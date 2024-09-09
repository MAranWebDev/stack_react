import { trpc } from '@/libs/trpc';
import { zodResolver } from '@hookform/resolvers/zod';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Types
type ResolverSchema = z.infer<typeof resolverSchema>;

// Values
const resolverSchema = z.object({ name: z.string().max(10).min(2) });

export const AddBox = () => {
  const { register, handleSubmit } = useForm<ResolverSchema>({
    resolver: zodResolver(resolverSchema),
  });

  const utils = trpc.useUtils();
  const sampleCreator = trpc.sample.create.useMutation({
    onSuccess() {
      utils.sample.getAll.invalidate();
    },
  });

  const onSubmit = (data: ResolverSchema) =>
    sampleCreator.mutate({ name: data.name });

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
