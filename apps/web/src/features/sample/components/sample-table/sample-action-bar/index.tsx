import Box from '@mui/material/Box';
import { SampleCreateTrigger } from './sample-create-trigger';
import { SampleFilterForm } from './sample-filter-form';

export const SampleActionBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        borderColor: 'divider',
        borderBottom: 1,
        gap: 1,
        p: 2,
      }}
    >
      <SampleFilterForm />
      <SampleCreateTrigger />
    </Box>
  );
};
