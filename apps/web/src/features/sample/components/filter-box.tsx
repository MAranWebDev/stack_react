import { useUpdateSampleContext } from '@/features/sample/context';
import { zodResolver } from '@hookform/resolvers/zod';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { sampleZod, SampleZodType } from '@workspace/api';
import { useForm } from 'react-hook-form';

// Types
type SchemaType = SampleZodType['getAllInput'];

export const FilterBox = () => {
  // react-hook-form
  const { register, handleSubmit } = useForm<SchemaType>({
    resolver: zodResolver(sampleZod.getAllInput),
  });

  const { filterData } = useUpdateSampleContext();

  const onSubmit = (inputs: SchemaType) => filterData(inputs);
  const handleClickClean = () => filterData({});

  return (
    <Paper
      sx={{ display: 'flex', gap: 1, p: 2 }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField label="Id" variant="outlined" {...register('id')} />

      <TextField label="Nombre" variant="outlined" {...register('name')} />

      <Button type="submit" variant="outlined">
        <SearchIcon />
      </Button>

      <Button type="button" variant="outlined" onClick={handleClickClean}>
        <CleaningServicesIcon />
      </Button>
    </Paper>
  );
};
