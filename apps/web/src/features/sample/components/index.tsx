import { SampleProvider } from '@/features/sample/context';
import Stack from '@mui/material/Stack';
import { CreateBox } from './create-box';
import { FilterBox } from './filter-box';
import { SamplePagination } from './sample-pagination';
import { SampleTable } from './sample-table';
import { SampleZustand } from './sample-zustand';

export const Sample = () => {
  return (
    <SampleProvider>
      <Stack sx={{ minWidth: 650 }} spacing={1}>
        <SampleZustand />
        <CreateBox />
        <FilterBox />
        <SampleTable />
        <SamplePagination />
      </Stack>
    </SampleProvider>
  );
};
