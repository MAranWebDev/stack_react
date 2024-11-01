import { LanguageDropdown } from '@/components/ui/dropdowns';
import { ThemeModeToggle } from '@/components/ui/toggles';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

// Types
interface Props {
  open: boolean;
  onClose: () => void;
}

export const SettingsDrawer = ({ open, onClose }: Props) => {
  // "react-i18next"
  const { t } = useTranslation();

  return (
    <Drawer
      PaperProps={{ sx: { borderRadius: '10px 0px 0px 10px' } }}
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box sx={{ width: 360 }} role="presentation">
        <Stack
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            py: '8px',
            px: '16px',
          }}
          direction="row"
        >
          <Typography sx={{ fontWeight: 'medium' }}>{t('settings')}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon color="primary" fontSize="small" />
          </IconButton>
        </Stack>

        <Divider />

        <Stack sx={{ m: 2 }} spacing={1}>
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: '12px',
              color: 'text.secondary',
            }}
          >
            {t('mode').toUpperCase()}
          </Typography>
          <ThemeModeToggle />
        </Stack>

        <Box sx={{ mx: 2, my: 3 }}>
          <LanguageDropdown />
        </Box>
      </Box>
    </Drawer>
  );
};
