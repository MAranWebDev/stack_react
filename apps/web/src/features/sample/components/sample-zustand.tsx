import { useSampleStore } from '@/libs/zustand/stores';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export const SampleZustand = () => {
  const bears = useSampleStore((state) => state.bears);
  const addBear = useSampleStore((state) => state.addBear);
  const addBearBy = useSampleStore((state) => state.addBearBy);
  const removeBears = useSampleStore((state) => state.removeBears);

  const handleClickOne = () => addBear();
  const handleClickThree = () => addBearBy(3);
  const handleClickReset = () => removeBears();

  return (
    <Paper>
      <h1>Bears: {bears}</h1>

      <Button onClick={handleClickOne}>+1</Button>
      <Button onClick={handleClickThree}>+3</Button>
      <Button onClick={handleClickReset}>Reiniciar</Button>
    </Paper>
  );
};
