import Stack from '@mui/material/Stack';
import { SamplePagination } from './SamplePagination';
import { SampleTable } from './SampleTable';
import { SearchBox } from './SearchBox';

export const Sample = () => {
  return (
    <Stack sx={{ minWidth: 650 }} spacing={1}>
      <SearchBox />
      <SampleTable />
      <SamplePagination />
    </Stack>
  );
};
