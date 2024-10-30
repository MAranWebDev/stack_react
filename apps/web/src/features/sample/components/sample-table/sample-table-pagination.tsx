import { useTrpcSampleGetAll } from '@/features/sample/hooks';
import { useSampleTableStore } from '@/libs/zustand/stores';
import TablePagination from '@mui/material/TablePagination';
import { ChangeEvent, MouseEvent } from 'react';
import { useShallow } from 'zustand/react/shallow';

export const SampleTablePagination = () => {
  // "zustand"
  const {
    rowsPerPageOptions,
    rowsPerPage,
    page,
    changePage,
    changeRowsPerPage,
  } = useSampleTableStore(
    useShallow((state) => ({
      rowsPerPageOptions: state.rowsPerPageOptions,
      rowsPerPage: state.rowsPerPage,
      page: state.page,
      changePage: state.changePage,
      changeRowsPerPage: state.changeRowsPerPage,
    })),
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
