import { useContextWithError } from '@/context/hooks/use-context-with-error';
import { ReadSampleContext, UpdateSampleContext } from './sample.context';

// Constants
const PROVIDER_NAME = 'SampleProvider';

export const useReadSampleContext = () =>
  useContextWithError(
    ReadSampleContext,
    useReadSampleContext.name,
    PROVIDER_NAME,
  );

export const useUpdateSampleContext = () =>
  useContextWithError(
    UpdateSampleContext,
    useUpdateSampleContext.name,
    PROVIDER_NAME,
  );
