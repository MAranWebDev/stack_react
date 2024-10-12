import CircularProgress from '@mui/material/CircularProgress';

export const AbsoluteSpinner = () => {
  return (
    <CircularProgress
      sx={{ position: 'absolute', zIndex: 'tooltip', top: 10, right: 22 }}
    />
  );
};
