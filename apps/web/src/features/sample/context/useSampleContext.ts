import { useContext } from 'react';
import { ReadSampleContext, UpdateSampleContext } from './Sample.context';

const PROVIDER_NAME = 'SampleProvider';

export const useReadSampleContext = () => {
  const context = useContext(ReadSampleContext);

  if (context === undefined)
    throw new Error(
      `${useReadSampleContext.name} must be used within ${PROVIDER_NAME}`,
    );
  return context;
};

export const useUpdateSampleContext = () => {
  const context = useContext(UpdateSampleContext);

  if (context === undefined)
    throw new Error(
      `${useUpdateSampleContext.name} must be used within ${PROVIDER_NAME}`,
    );
  return context;
};
