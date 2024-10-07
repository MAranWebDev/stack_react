import { MainLayout } from '@/components/layouts/main-layout';
import { Sample } from '@/features/sample/components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const SampleRoute = () => {
  return (
    <MainLayout>
      <Box component="section">
        <Typography sx={{ fontWeight: 'medium' }} component="h1" variant="h4">
          Sample
        </Typography>
      </Box>

      <Box component="section">
        <Sample />
      </Box>
    </MainLayout>
  );
};
