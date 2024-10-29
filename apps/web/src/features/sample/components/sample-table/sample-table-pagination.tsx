import { useTrpcSampleGetAll } from '@/features/sample/hooks';
import { useSampleTableStore } from '@/libs/zustand/stores';
import TablePagination from '@mui/material/TablePagination';
import { ChangeEvent, MouseEvent } from 'react';

export const SampleTablePagination = () => {
  // "zustand"
  const rowsPerPageOptions = useSampleTableStore(
    (state) => state.rowsPerPageOptions,
  );
  const rowsPerPage = useSampleTableStore((state) => state.rowsPerPage);
  const page = useSampleTableStore((state) => state.page);
  const changePage = useSampleTableStore((state) => state.changePage);
  const changeRowsPerPage = useSampleTableStore(
    (state) => state.changeRowsPerPage,
  );

  const { data } = useTrpcSampleGetAll();
  const dataCount = data?.dataCount ?? 0;

  // Utils
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
    <TablePagination
      component="div"
      rowsPerPageOptions={rowsPerPageOptions}
      count={dataCount}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
