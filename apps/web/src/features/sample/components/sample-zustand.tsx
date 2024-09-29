import { useSampleStore } from '@/libs/zustand/stores';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const SampleZustand = () => {
  // "zustand"
  const bears = useSampleStore((state) => state.bears);
  const addBear = useSampleStore((state) => state.addBear);
  const addBearBy = useSampleStore((state) => state.addBearBy);
  const removeBears = useSampleStore((state) => state.removeBears);

  // Methods
  const handleClickOne = () => addBear();
  const handleClickThree = () => addBearBy(3);
  const handleClickReset = () => removeBears();

  return (
    <Stack
      sx={{ p: 2, alignItems: 'center' }}
      component={Paper}
      direction="row"
      spacing={2}
    >
      <Typography sx={{ fontWeight: 'medium' }}>Bears: {bears}</Typography>
      <Button variant="outlined" onClick={handleClickOne}>
        +1
      </Button>
      <Button variant="outlined" onClick={handleClickThree}>
        +3
      </Button>
      <Button variant="outlined" onClick={handleClickReset}>
        Reiniciar
      </Button>
    </Stack>
  );
};
