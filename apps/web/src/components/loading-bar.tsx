import CircularProgress from '@mui/material/CircularProgress';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';

export const LoadingBar = () => {
  // "react-query"
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const howManyFetching = isFetching || isMutating;

  return (
    <>
      {howManyFetching ? (
        <CircularProgress
          sx={{ position: 'absolute', zIndex: 'tooltip', top: 24, right: 24 }}
        />
      ) : null}
    </>
  );
};
