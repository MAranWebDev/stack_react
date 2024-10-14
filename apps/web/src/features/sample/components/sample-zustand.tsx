import { useSampleStore } from '@/libs/zustand/stores';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

// Constants
const ADD_BY = 3;

export const SampleZustand = () => {
  // "zustand"
  const amount = useSampleStore((state) => state.amount);
  const add = useSampleStore((state) => state.add);
  const addBy = useSampleStore((state) => state.addBy);
  const reset = useSampleStore((state) => state.reset);

  // "react-i18next"
  const { t } = useTranslation();

  // Methods
  const handleAdd = () => add();
  const handleAddBy = () => addBy(ADD_BY);
  const handleReset = () => reset();

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', p: 2 }}
      component={Paper}
      gap={2}
    >
      <Typography sx={{ fontWeight: 'medium' }}>
        {t('amount')}: {amount}
      </Typography>
      <Button variant="outlined" onClick={handleAdd}>
        +1
      </Button>
      <Button variant="outlined" onClick={handleAddBy}>
        +{ADD_BY}
      </Button>
      <Button variant="outlined" onClick={handleReset}>
        <CleaningServicesIcon />
      </Button>
    </Box>
  );
};
