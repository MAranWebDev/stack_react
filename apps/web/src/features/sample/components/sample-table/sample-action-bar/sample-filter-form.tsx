import { useSampleTableStore } from '@/libs/zustand/stores';
import { zodResolver } from '@hookform/resolvers/zod';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import { sampleZodGetAllInput, SampleZodGetAllInput } from '@workspace/api';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const SampleFilterForm = () => {
  // "zustand"
  const filterData = useSampleTableStore((state) => state.filterData);

  // "react-i18next"
  const { t } = useTranslation();

  // "react-hook-form"
  const { register, handleSubmit } = useForm<SampleZodGetAllInput>({
    resolver: zodResolver(sampleZodGetAllInput),
  });

  // Methods
  const onSubmit = ({ filters }: SampleZodGetAllInput) => filterData(filters);
  const handleClickClean = () => filterData();

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
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

      <ButtonGroup variant="outlined">
        <Button type="submit">
          <SearchIcon />
        </Button>
        <Button type="button" onClick={handleClickClean}>
          <CleaningServicesIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
};
