import { CustomIconButton } from '@/components/ui/button';
import { SettingsDrawer } from '@/components/ui/drawer';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppBar from '@mui/material/AppBar';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { useState } from 'react';

export const MainHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // "react-query"
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const howManyRequests = isFetching || isMutating;
  const progressVisibility = howManyRequests ? 'visible' : 'hidden';

  // Utils
  const toggleDrawer = (newIsDrawerOpen: boolean) => () =>
    setIsDrawerOpen(newIsDrawerOpen);

  return (
    <header>
      <AppBar
        sx={{
          color: 'primary.dark',
          background: 'transparent',
          backdropFilter: 'blur(10px)',
        }}
        position="fixed"
      >
        <Toolbar sx={{ justifyContent: 'space-between', mx: 1 }}>
          <Typography component="p" variant="h6">
            Mario
          </Typography>

          <Stack direction="row" spacing={1}>
            <CustomIconButton onClick={toggleDrawer(true)}>
              <SettingsOutlinedIcon fontSize="small" />
            </CustomIconButton>
            <CircularProgress sx={{ visibility: progressVisibility }} />
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Empty toolbar to not have content behind the AppBar  */}
      <Toolbar />

      <SettingsDrawer open={isDrawerOpen} onClose={toggleDrawer(false)} />
    </header>
  );
};
