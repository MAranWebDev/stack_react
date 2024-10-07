import { LanguageDropdown } from '@/components/ui/dropdown';
import { RequestSpinner } from '@/components/ui/spinner';
import { ThemeModeToggle } from '@/components/ui/toggle';
import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <header>
        <ThemeModeToggle />
        <LanguageDropdown />
        <RequestSpinner />
      </header>
      <Box sx={{ width: '90%', mx: 'auto' }} component="main">
        {children}
      </Box>
    </div>
  );
};
