import {
  ReadSampleContext,
  UpdateSampleContext,
} from '@/features/sample/context';
import { useContext } from 'react';

export const useReadSampleContext = () => {
  const context = useContext(ReadSampleContext);

  if (context === undefined)
    throw new Error('useReadSampleContext must be used within SampleProvider');
  return context;
};

export const useUpdateSampleContext = () => {
  const context = useContext(UpdateSampleContext);

  if (context === undefined)
    throw new Error(
      'useUpdateSampleContext must be used within SampleProvider',
    );
  return context;
};
