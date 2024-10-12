import { HeaderAppBar } from '@/components/ui/header';
import Box from '@mui/material/Box';
import { PropsWithChildren } from 'react';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <HeaderAppBar />
      <Box sx={{ width: '90%', mx: 'auto' }} component="main">
        {children}
      </Box>
    </>
  );
};
