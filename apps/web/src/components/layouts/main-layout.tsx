import { MainHeader } from '@/components/headers/main-header';
import Box from '@mui/material/Box';
import { PropsWithChildren } from 'react';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <MainHeader />
      <Box sx={{ width: '90%', mx: 'auto' }} component="main">
        {children}
      </Box>
    </>
  );
};
