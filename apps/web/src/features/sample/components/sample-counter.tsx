import { useSampleCounterStore } from '@/libs/zustand/stores';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

// Constants
const ADD_BY = 3;

export const SampleCounter = () => {
  // "zustand"
  const amount = useSampleCounterStore((state) => state.amount);
  const add = useSampleCounterStore((state) => state.add);
  const addBy = useSampleCounterStore((state) => state.addBy);
  const reset = useSampleCounterStore((state) => state.reset);

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

      <ButtonGroup variant="outlined" size="large" aria-label="button group">
        <Button onClick={handleAdd}>+1</Button>
        <Button onClick={handleAddBy}>+{ADD_BY}</Button>
        <Button onClick={handleReset}>
          <CleaningServicesIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
};
