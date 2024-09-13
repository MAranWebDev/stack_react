import { Sample } from '@/features/sample/components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const SampleRoute = () => {
  return (
    <Box sx={{ width: '90%', mx: 'auto' }} component="main">
      <Box sx={{ my: 2 }} component="section">
        <Typography sx={{ fontWeight: 'medium' }} component="h1" variant="h4">
          Sample
        </Typography>
      </Box>

      <Box sx={{ mb: 2 }} component="section">
        <Sample />
      </Box>
    </Box>
  );
};
