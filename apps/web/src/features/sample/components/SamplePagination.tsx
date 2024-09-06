import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

const rowsPerPage = 0;
const fullDataLength = 0;
const page = 0;
const handleChangePage = () => {
  return;
};
const handleChangeRowsPerPage = () => {
  return;
};
const rowsPerPageOptions = [5, 10, 20];

export const SamplePagination = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <TablePagination
        component="div"
        rowsPerPageOptions={rowsPerPageOptions}
        count={fullDataLength}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
