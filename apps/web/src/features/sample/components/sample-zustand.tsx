import { useSampleStore } from '@/libs/zustand/stores';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

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
    <Paper sx={{ display: 'flex', gap: 2, p: 2 }}>
      <h3>Bears: {bears}</h3>

      <Button variant="outlined" onClick={handleClickOne}>
        +1
      </Button>
      <Button variant="outlined" onClick={handleClickThree}>
        +3
      </Button>
      <Button variant="outlined" onClick={handleClickReset}>
        Reiniciar
      </Button>
    </Paper>
  );
};
