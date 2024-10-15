import { SampleProvider } from '@/features/sample/context';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SampleCreateTrigger } from './sample-create-trigger';
import { SampleFilter } from './sample-filter';
import { SamplePagination } from './sample-pagination';
import { SampleTable } from './sample-table';
import { SampleZustand } from './sample-zustand';

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
        color="primary"
        value={isTable}
        exclusive
        size="small"
        arial-label="view"
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
              <SamplePagination />
            </>
          ) : (
            <SampleZustand />
          )}
        </Stack>
      </SampleProvider>
    </>
  );
};
