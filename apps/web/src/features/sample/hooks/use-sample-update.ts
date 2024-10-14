import { trpc } from '@/libs/trpc/hooks';

// Types
interface SampleUpdateProps {
  id: string;
  name?: string;
  isDone?: boolean;
}

export const useSampleUpdate = () => {
  // "trpc"
  const utils = trpc.useUtils();
  const sampleUpdateMutation = trpc.sample.update.useMutation({
    onSuccess() {
      utils.sample.getAll.invalidate();
    },
  });

  // Methods
  const sampleUpdate = ({ id, name, isDone }: SampleUpdateProps) =>
    sampleUpdateMutation.mutate({ id, name, isDone });

  return { sampleUpdate };
};
