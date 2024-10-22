import { TableSkeleton } from '@/components/ui/table';
import { useReadSampleContext } from '@/features/sample/context';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useTranslation } from 'react-i18next';
import { SampleDeleteTrigger } from './sample-delete-trigger';
import { SampleUpdateTrigger } from './sample-update-trigger';

// Constants
const NUM_COLUMNS = 4;

export const SampleTableBody = () => {
  const { results, isFetching, rowsPerPage } = useReadSampleContext();

  // "react-i18next"
  const { t } = useTranslation();

  const isEmptyResults = results.length === 0;
  const isNoData = !isFetching && isEmptyResults;
  const isData = !isFetching && !isEmptyResults;

  return (
    <TableBody>
      {isFetching ? (
        <TableSkeleton columns={NUM_COLUMNS} rows={rowsPerPage} />
      ) : null}

      {isNoData ? (
        <TableRow>
          <TableCell colSpan={NUM_COLUMNS} align="center">
            {t('messages.noData')}
          </TableCell>
        </TableRow>
      ) : null}

      {isData
        ? results.map(({ id, name, isDone }) => (
            <TableRow key={id} hover>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>
                {isDone ? t('status.closed') : t('status.open')}
              </TableCell>
              <TableCell sx={{ display: 'flex' }}>
                <SampleUpdateTrigger id={id} name={name} isDone={isDone} />
                <SampleDeleteTrigger id={id} />
              </TableCell>
            </TableRow>
          ))
        : null}
    </TableBody>
  );
};
