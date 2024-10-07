import { LanguageDropdown } from '@/components/ui/dropdown';
import { RequestSpinner } from '@/components/ui/spinner';
import { DarkModeSwitch } from '@/components/ui/switch';
import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <header>
        <DarkModeSwitch />
        <LanguageDropdown />
        <RequestSpinner />
      </header>
      <Box sx={{ width: '90%', mx: 'auto' }} component="main">
        {children}
      </Box>
    </div>
  );
};
