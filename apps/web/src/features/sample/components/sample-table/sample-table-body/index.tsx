import { TableRowNoData, TableSkeleton } from '@/components/ui/table';
import { useTrpcSampleGetAll } from '@/features/sample/hooks';
import { useSampleTableStore } from '@/libs/zustand/stores';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useTranslation } from 'react-i18next';
import { SampleDeleteTrigger } from './sample-delete-trigger';
import { SampleUpdateTrigger } from './sample-update-trigger';

// Constants
const NUM_COLUMNS = 4;

export const SampleTableBody = () => {
  // "zustand"
  const rowsPerPage = useSampleTableStore((state) => state.rowsPerPage);

  // "react-i18next"
  const { t } = useTranslation();

  const { data, isFetching } = useTrpcSampleGetAll();
  const dataCount = data?.dataCount ?? 0;
  const hasData = dataCount > 0;

  // Render
  const renderContent = () => {
    if (isFetching)
      return <TableSkeleton columns={NUM_COLUMNS} rows={rowsPerPage} />;

    if (!hasData) return <TableRowNoData numColumns={NUM_COLUMNS} />;

    return data?.results.map(({ id, name, isDone }) => (
      <TableRow key={id} hover>
        <TableCell>{id}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{isDone ? t('status.closed') : t('status.open')}</TableCell>
        <TableCell sx={{ display: 'flex' }}>
          <SampleUpdateTrigger id={id} name={name} isDone={isDone} />
          <SampleDeleteTrigger id={id} />
        </TableCell>
      </TableRow>
    ));
  };

  return <TableBody>{renderContent()}</TableBody>;
};
