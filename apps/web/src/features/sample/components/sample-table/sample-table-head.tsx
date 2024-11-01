import { useTableHeadSort } from '@/hooks/use-table-head-sort';
import { useSampleTableStore } from '@/libs/zustand/stores';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// Types
type SORT_KEYS = (typeof SORT_KEYS)[keyof typeof SORT_KEYS];

// Constants
const SORT_KEYS = {
  ID: 'id',
  NAME: 'name',
  STATUS: 'isDone',
} as const;

export const SampleTableHead = () => {
  const { order, sortByColumn } = useTableHeadSort();
  const { activeKey, isDesc, direction } = order;

  // "zustand"
  const sortDataBy = useSampleTableStore((state) => state.sortDataBy);

  // "react-i18next"
  const { t } = useTranslation();

  const columnsSort = useMemo(
    () => [
      { key: SORT_KEYS.ID, text: 'Id' },
      { key: SORT_KEYS.NAME, text: t('name') },
      { key: SORT_KEYS.STATUS, text: t('status.label') },
    ],
    [t],
  );

  useEffect(() => {
    if (activeKey) {
      sortDataBy({
        isDesc,
        column: activeKey as SORT_KEYS,
      });
    }
  }, [activeKey, isDesc, sortDataBy]);

  // Utils
  const handleClickSort = (columnKey: string) => () => sortByColumn(columnKey);

  return (
    <TableHead>
      <TableRow>
        {columnsSort.map(({ key, text }) => {
          const isActive = activeKey === key;
          const newDirection = isActive ? direction : undefined;

          return (
            <TableCell key={key}>
              <TableSortLabel
                active={isActive}
                direction={newDirection}
                onClick={handleClickSort(key)}
              >
                {text}
              </TableSortLabel>
            </TableCell>
          );
        })}

        <TableCell>{t('actions.label')}</TableCell>
      </TableRow>
    </TableHead>
  );
};
