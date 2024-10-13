import { CustomIconButton } from '@/components/ui/button';
import { SettingsDrawer } from '@/components/ui/drawer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { useState } from 'react';

export const HeaderAppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // "react-query"
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const howManyRequests = isFetching || isMutating;
  const visibilityStatus = howManyRequests ? 'visible' : 'hidden';

  // Methods
  const toggleDrawer = (newIsDrawerOpen: boolean) => () =>
    setIsDrawerOpen(newIsDrawerOpen);

  return (
    <Box component="header">
      <AppBar
        sx={{
          color: 'primary.dark',
          background: 'transparent',
          backdropFilter: 'blur(10px)',
        }}
        position="fixed"
      >
        <Toolbar sx={{ mx: 1, justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Mario
          </Typography>

          <Stack direction="row" spacing={1}>
            <CustomIconButton>
              <Badge badgeContent={2} color="error">
                <NotificationsIcon fontSize="small" />
              </Badge>
            </CustomIconButton>
            <CustomIconButton onClick={toggleDrawer(true)}>
              <SettingsOutlinedIcon fontSize="small" />
            </CustomIconButton>
            <CircularProgress sx={{ visibility: visibilityStatus }} />
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Empty toolbar to not have content behind the AppBar  */}
      <Toolbar />

      <SettingsDrawer open={isDrawerOpen} onClose={toggleDrawer(false)} />
    </Box>
  );
};
