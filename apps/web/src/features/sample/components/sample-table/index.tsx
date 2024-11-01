import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { SampleActionBar } from './sample-action-bar';
import { SampleTableBody } from './sample-table-body';
import { SampleTableHead } from './sample-table-head';
import { SampleTablePagination } from './sample-table-pagination';

export const SampleTable = () => {
  return (
    <Stack spacing={2}>
      <Paper>
        <SampleActionBar />
      </Paper>

      <Paper>
        <TableContainer sx={{ height: 450 }}>
          <Table stickyHeader size="small">
            <SampleTableHead />
            <SampleTableBody />
          </Table>
        </TableContainer>

        <SampleTablePagination />
      </Paper>
    </Stack>
  );
};
