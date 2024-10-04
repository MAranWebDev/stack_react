import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const CenteredSpinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        alignItems: 'center',
      }}
    >
      <CircularProgress size="3rem" />
    </Box>
  );
};
