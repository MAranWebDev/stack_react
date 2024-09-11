import { SampleProvider } from '@/features/sample/context';
import Stack from '@mui/material/Stack';
import { CreateBox } from './CreateBox';
import { FilterBox } from './FilterBox';
import { SamplePagination } from './SamplePagination';
import { SampleTable } from './SampleTable';

export const Sample = () => {
  return (
    <SampleProvider>
      <Stack sx={{ minWidth: 650 }} spacing={1}>
        <CreateBox />
        <FilterBox />
        <SampleTable />
        <SamplePagination />
      </Stack>
    </SampleProvider>
  );
};
