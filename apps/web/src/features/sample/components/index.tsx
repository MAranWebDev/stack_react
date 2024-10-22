import { SampleProvider } from '@/features/sample/context';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SampleCounter } from './sample-counter';
import { SampleTable } from './sample-table';

// Constants
const TABS = [
  { id: 0, label: 'table' },
  { id: 1, label: 'counter' },
] as const;

const tabIds = TABS.map(({ id }) => id);

export const Sample = () => {
  const [tabId, setTab] = useState(0);

  // "react-i18next"
  const { t } = useTranslation();

  // Methods
  const handleChange = (_: SyntheticEvent, newTab: number) => setTab(newTab);
  const getTabDisplay = (id: number) => (id !== tabId ? 'none' : '');

  return (
    <SampleProvider>
      <Stack sx={{ minWidth: 650 }} spacing={2}>
        <Tabs value={tabId} onChange={handleChange}>
          {TABS.map(({ id, label }) => (
            <Tab key={id} id={String(id)} label={t(label)} />
          ))}
        </Tabs>

        <Stack sx={{ display: getTabDisplay(tabIds[0]) }}>
          <SampleTable />
        </Stack>

        <Box sx={{ display: getTabDisplay(tabIds[1]) }}>
          <SampleCounter />
        </Box>
      </Stack>
    </SampleProvider>
  );
};
