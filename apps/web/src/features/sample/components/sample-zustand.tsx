import { useSampleStore } from '@/libs/zustand/stores';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

// Constants
const MULTIPLE_BEARS = 3;

export const SampleZustand = () => {
  // "zustand"
  const bears = useSampleStore((state) => state.bears);
  const addBear = useSampleStore((state) => state.addBear);
  const addBearBy = useSampleStore((state) => state.addBearBy);
  const removeBears = useSampleStore((state) => state.removeBears);

  // "react-i18next"
  const { t } = useTranslation();

  // Methods
  const handleAddOneBear = () => addBear();
  const handleAddMultipleBears = () => addBearBy(MULTIPLE_BEARS);
  const handleResetBears = () => removeBears();

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', p: 2 }}
      component={Paper}
      gap={2}
    >
      <Typography sx={{ fontWeight: 'medium' }}>
        {t('bears')}: {bears}
      </Typography>
      <Button variant="outlined" onClick={handleAddOneBear}>
        +1
      </Button>
      <Button variant="outlined" onClick={handleAddMultipleBears}>
        +{MULTIPLE_BEARS}
      </Button>
      <Button variant="outlined" onClick={handleResetBears}>
        <CleaningServicesIcon />
      </Button>
    </Box>
  );
};
