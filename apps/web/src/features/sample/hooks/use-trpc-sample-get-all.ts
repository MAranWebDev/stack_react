import { trpc } from '@/libs/trpc/hooks';
import { useSampleTableStore } from '@/libs/zustand/stores';

export const useTrpcSampleGetAll = () => {
  // "zustand"
  const page = useSampleTableStore((state) => state.page);
  const rowsPerPage = useSampleTableStore((state) => state.rowsPerPage);
  const filters = useSampleTableStore((state) => state.filters);
  const sortBy = useSampleTableStore((state) => state.sortBy);

  // "trpc"
  const { data, isFetching } = trpc.sample.getAll.useQuery({
    page,
    rowsPerPage,
    filters,
    sortBy,
  });

  return { data, isFetching };
};
