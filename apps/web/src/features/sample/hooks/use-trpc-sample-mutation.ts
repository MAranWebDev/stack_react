import { trpc } from '@/libs/trpc/hooks';

export const useTrpcSampleMutation = () => {
  // "trpc"
  const utils = trpc.useUtils();
  const getAllInvalidate = utils.sample.getAll.invalidate;

  // Utils
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

  return { createSample, updateSample, deleteSample };
};
