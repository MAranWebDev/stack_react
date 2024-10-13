import { MainLayout } from '@/components/layouts/main-layout';
import { Sample } from '@/features/sample/components';
import Box from '@mui/material/Box';

export const SampleRoute = () => {
  return (
    <MainLayout>
      <Box component="section">
        <h1>Sample</h1>
      </Box>

      <Box component="section">
        <Sample />
      </Box>
    </MainLayout>
  );
};
