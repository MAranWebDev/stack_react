import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SampleCounter } from './sample-counter';
import { SampleTable } from './sample-table';

// Constants
const tabLabels = ['table', 'counter'] as const;

export const Sample = () => {
  const [tabId, setTab] = useState(0);

  // "react-i18next"
  const { t } = useTranslation();

  const tabList = tabLabels.map((label, index) => ({
    id: index,
    label: t(label),
  }));

  // Utils
  const handleChange = (_: SyntheticEvent, newTab: number) => setTab(newTab);
  const getTabDisplay = (id: number) => (id !== tabId ? 'none' : '');

  return (
    <Stack sx={{ minWidth: 650 }} spacing={2}>
      <Tabs value={tabId} onChange={handleChange}>
        {tabList.map(({ id, label }) => (
          <Tab key={id} id={String(id)} label={label} />
        ))}
      </Tabs>

      <Stack sx={{ display: getTabDisplay(tabList[0].id) }}>
        <SampleTable />
      </Stack>

      <Box sx={{ display: getTabDisplay(tabList[1].id) }}>
        <SampleCounter />
      </Box>
    </Stack>
  );
};
