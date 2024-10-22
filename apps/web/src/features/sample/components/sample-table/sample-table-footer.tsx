import {
  useReadSampleContext,
  useUpdateSampleContext,
} from '@/features/sample/context';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { ChangeEvent, MouseEvent } from 'react';

export const SampleTableFooter = () => {
  const { rowsPerPageOptions, dataCount, rowsPerPage, page } =
    useReadSampleContext();
  const { changePage, changeRowsPerPage } = useUpdateSampleContext();

  // Methods
  const handleChangePage = (
    _: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => changePage(newPage);

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    changeRowsPerPage(newRowsPerPage);
  };

  return (
    <Paper>
      <TablePagination
        component="div"
        rowsPerPageOptions={rowsPerPageOptions}
        count={dataCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
