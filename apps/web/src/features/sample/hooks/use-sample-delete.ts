import { trpc } from '@/libs/trpc/hooks';

export const useSampleDelete = () => {
  // "trpc"
  const utils = trpc.useUtils();
  const sampleDeleteMutation = trpc.sample.delete.useMutation({
    onSuccess() {
      utils.sample.getAll.invalidate();
    },
  });

  // Methods
  const sampleDelete = (id: string) => sampleDeleteMutation.mutate({ id });

  return { sampleDelete };
};
