import { SORT_ORDERS } from '@/constants/sort-orders';
import { INPUT_KEYS } from '@/features/sample/constants';
import { useSampleTableStore } from '@/libs/zustand/stores';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { useTranslation } from 'react-i18next';
import { useImmer } from 'use-immer';

// Types
interface State {
  direction: SORT_ORDERS;
  byColumn: INPUT_KEYS;
}

export const SampleTableHead = () => {
  const [order, setOrder] = useImmer<State>({
    direction: SORT_ORDERS.ASC,
    byColumn: INPUT_KEYS.ID,
  });

  // "zustand"
  const sortDataBy = useSampleTableStore((state) => state.sortDataBy);

  // "react-i18next"
  const { t } = useTranslation();

  const columns = [
    { key: INPUT_KEYS.ID, text: 'Id' },
    { key: INPUT_KEYS.NAME, text: t('name') },
    { key: INPUT_KEYS.IS_DONE, text: t('status.label') },
  ];

  // Utils
  const handleSort = (columnKey: INPUT_KEYS) => () =>
    setOrder((draft) => {
      const isCurrentColumn = draft.byColumn === columnKey;
      const isOrderAsc = draft.direction === SORT_ORDERS.ASC;
      draft.direction =
        isCurrentColumn && isOrderAsc ? SORT_ORDERS.DESC : SORT_ORDERS.ASC;

      draft.byColumn = columnKey;

      sortDataBy({
        columnName: columnKey,
        isDesc: draft.direction === SORT_ORDERS.DESC,
      });
    });

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.key}>
            <TableSortLabel
              active={order.byColumn === column.key}
              direction={order.direction}
              onClick={handleSort(column.key)}
            >
              {column.text}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell>{t('actions.label')}</TableCell>
      </TableRow>
    </TableHead>
  );
};
