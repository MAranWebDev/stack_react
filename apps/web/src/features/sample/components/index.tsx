import { SampleProvider } from '@/features/sample/context';
import Stack from '@mui/material/Stack';
import { FilterBox } from './filter-box';
import { SampleCreateForm } from './sample-create-form';
import { SamplePagination } from './sample-pagination';
import { SampleTable } from './sample-table';
import { SampleZustand } from './sample-zustand';

export const Sample = () => {
  return (
    <SampleProvider>
      <Stack sx={{ minWidth: 650 }} spacing={1}>
        <SampleCreateForm />
        <FilterBox />
        <SampleTable />
        <SamplePagination />
        <SampleZustand />
      </Stack>
    </SampleProvider>
  );
};
