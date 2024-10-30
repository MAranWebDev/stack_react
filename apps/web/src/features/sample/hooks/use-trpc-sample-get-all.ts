import { trpc } from '@/libs/trpc/hooks';
import { useSampleTableStore } from '@/libs/zustand/stores';
import { useShallow } from 'zustand/react/shallow';

export const useTrpcSampleGetAll = () => {
  // "zustand"
  const { page, rowsPerPage, filters, sortBy } = useSampleTableStore(
    useShallow((state) => ({
      page: state.page,
      rowsPerPage: state.rowsPerPage,
      filters: state.filters,
      sortBy: state.sortBy,
    })),
  );

  // "trpc"
  const { data, isFetching } = trpc.sample.getAll.useQuery({
    page,
    rowsPerPage,
    filters,
    sortBy,
  });

  return {
    data,
    isFetching,
  };
};
