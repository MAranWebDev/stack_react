import { SampleProvider } from '@/features/sample/context';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SampleCounter } from './sample-counter';
import { SampleCreateTrigger } from './sample-create-trigger';
import { SampleFilter } from './sample-filter';
import { SampleTable } from './sample-table';

export const Sample = () => {
  const [isTable, setIsTable] = useState(true);

  // "react-i18next"
  const { t } = useTranslation();

  // Methods
  const handleChange = (_: MouseEvent<HTMLElement>, newIsTable: boolean) =>
    setIsTable(newIsTable);

  return (
    <>
      <ToggleButtonGroup
        fullWidth
        exclusive
        value={isTable}
        arial-label="sample view"
        onChange={handleChange}
      >
        <ToggleButton value={true}>{t('table')}</ToggleButton>
        <ToggleButton value={false}>{t('counter')}</ToggleButton>
      </ToggleButtonGroup>

      <SampleProvider>
        <Stack sx={{ minWidth: 650 }} spacing={1}>
          {isTable ? (
            <>
              <SampleCreateTrigger />
              <SampleFilter />
              <SampleTable />
            </>
          ) : (
            <SampleCounter />
          )}
        </Stack>
      </SampleProvider>
    </>
  );
};
