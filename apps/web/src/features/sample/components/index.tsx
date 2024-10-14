import { SampleProvider } from '@/features/sample/context';
import Stack from '@mui/material/Stack';
import { SampleCreateTrigger } from './sample-create-trigger';
import { SampleFilter } from './sample-filter';
import { SamplePagination } from './sample-pagination';
import { SampleTable } from './sample-table';
import { SampleZustand } from './sample-zustand';

export const Sample = () => {
  return (
    <SampleProvider>
      <Stack sx={{ minWidth: 650 }} spacing={1}>
        <SampleZustand />
        <SampleCreateTrigger />
        <SampleFilter />
        <SampleTable />
        <SamplePagination />
      </Stack>
    </SampleProvider>
  );
};
