import { useUpdateSampleContext } from '@/features/sample/context';
import { zodResolver } from '@hookform/resolvers/zod';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { sampleZodGetAllInput, SampleZodGetAllInput } from '@workspace/api';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

// Types
type Schema = SampleZodGetAllInput;

// Styles
const boxSx = { display: 'flex', gap: 1 };

export const SampleFilter = () => {
  const { filterData } = useUpdateSampleContext();

  // "react-i18next"
  const { t } = useTranslation();

  // "react-hook-form"
  const { register, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(sampleZodGetAllInput),
  });

  // Methods
  const onSubmit = ({ filters }: Schema) => filterData(filters);
  const handleClickClean = () => filterData();

  return (
    <Paper
      sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box sx={boxSx}>
        <TextField
          label="Id"
          variant="outlined"
          autoComplete="off"
          {...register('filters.id')}
        />
        <TextField
          label={t('name')}
          variant="outlined"
          autoComplete="off"
          {...register('filters.name')}
        />
      </Box>

      <Box sx={boxSx}>
        <Button type="submit" variant="outlined">
          <SearchIcon />
        </Button>
        <Button type="button" variant="outlined" onClick={handleClickClean}>
          <CleaningServicesIcon />
        </Button>
      </Box>
    </Paper>
  );
};
