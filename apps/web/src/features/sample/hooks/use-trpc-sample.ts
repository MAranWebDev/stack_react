import { trpc } from '@/libs/trpc/hooks';
import { useIsFetching } from '@tanstack/react-query';
import { getQueryKey } from '@trpc/react-query';

export const useTrpcSample = () => {
  // "trpc"
  const utils = trpc.useUtils();
  const getAllInvalidate = utils.sample.getAll.invalidate;
  const getAll = trpc.sample.getAll;
  const get = trpc.sample.get;

  // "react-query"
  const getAllKey = getQueryKey(getAll, undefined, 'query');
  const isGetAllSampleFetching = useIsFetching({ queryKey: getAllKey }) > 0;

  // Mutations
  const createSample = trpc.sample.create.useMutation({
    onSuccess() {
      getAllInvalidate();
    },
  });

  const updateSample = trpc.sample.update.useMutation({
    onSuccess() {
      getAllInvalidate();
    },
  });

  const deleteSample = trpc.sample.delete.useMutation({
    onSuccess() {
      getAllInvalidate();
    },
  });

  return {
    getAllSample: getAll.useQuery,
    getSample: get.useQuery,
    createSample,
    updateSample,
    deleteSample,
    isGetAllSampleFetching,
  };
};
