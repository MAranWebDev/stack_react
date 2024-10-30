import { useSampleTableStore } from '@/libs/zustand/stores';
import { zodResolver } from '@hookform/resolvers/zod';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import { SampleZodGetAllForm, sampleZodGetAllForm } from '@workspace/api';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const SampleFilterForm = () => {
  // "zustand"
  const filterData = useSampleTableStore((state) => state.filterData);

  // "react-i18next"
  const { t } = useTranslation();
  const options = [t('status.open'), t('status.closed')];

  // "react-hook-form"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleZodGetAllForm>({
    resolver: zodResolver(sampleZodGetAllForm),
  });

  // Utils
  const onSubmit = (inputs: SampleZodGetAllForm) => {
    const { isDone } = inputs;
    const isOpen = isDone === options[0];
    const isClosed = isDone === options[1];
    const newIsDone = isClosed ? true : isOpen ? false : undefined;
    filterData({ ...inputs, isDone: newIsDone });
  };

  const handleClickClean = () => filterData();

  return (
    <Box
      sx={{ display: 'flex', flexGrow: 1, gap: 1 }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box sx={{ display: 'flex', flexGrow: 1, gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          autoComplete="off"
          label="Id"
          error={!!errors.id}
          helperText={errors.id?.message}
          {...register('id')}
        />
        <TextField
          fullWidth
          variant="outlined"
          autoComplete="off"
          label={t('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
          {...register('name')}
        />
        <Autocomplete
          fullWidth
          disablePortal
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              label={t('status.label')}
              error={!!errors.isDone}
              helperText={errors.isDone?.message}
              {...register('isDone')}
            />
          )}
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
