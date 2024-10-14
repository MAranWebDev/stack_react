import { trpc } from '@/libs/trpc/hooks';
import { useIsFetching } from '@tanstack/react-query';
import { getQueryKey } from '@trpc/react-query';

export const useTrpcSample = () => {
  // "trpc"
  const utils = trpc.useUtils();
  const getAllInvalidate = utils.sample.getAll.invalidate;
  const getAllQuery = trpc.sample.getAll;
  const getQuery = trpc.sample.get;

  // "react-query"
  const getAllKey = getQueryKey(getAllQuery, undefined, 'query');
  const isGetAllSampleFetching = useIsFetching({ queryKey: getAllKey }) > 0;

  // Mutations
  const createMutation = trpc.sample.create.useMutation({
    onSuccess() {
      getAllInvalidate();
    },
  });

  const updateMutation = trpc.sample.update.useMutation({
    onSuccess() {
      getAllInvalidate();
    },
  });

  const deleteMutation = trpc.sample.delete.useMutation({
    onSuccess() {
      getAllInvalidate();
    },
  });

  return {
    getAllSample: getAllQuery.useQuery,
    getSample: getQuery.useQuery,
    createSample: createMutation.mutate,
    updateSample: updateMutation.mutate,
    deleteSample: deleteMutation.mutate,
    isGetAllSampleFetching,
  };
};
