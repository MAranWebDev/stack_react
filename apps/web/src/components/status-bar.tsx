import { useStatusStore } from '@/libs/zustand/stores';
import CircularProgress from '@mui/material/CircularProgress';

export const StatusBar = () => {
  const isPending = useStatusStore((state) => state.isPending);

  return (
    isPending && (
      <CircularProgress
        sx={{ position: 'absolute', zIndex: 'tooltip', top: 24, right: 24 }}
      />
    )
  );
};
