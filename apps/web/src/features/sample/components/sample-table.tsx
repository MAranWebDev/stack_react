import { TableSkeleton } from '@/components/ui/table';
import { useReadSampleContext } from '@/features/sample/context';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTranslation } from 'react-i18next';
import { SampleDeleteTrigger } from './sample-delete-trigger';
import { SampleUpdateTrigger } from './sample-update-trigger';

export const SampleTable = () => {
  const { results, isFetching, rowsPerPage } = useReadSampleContext();

  // "react-i18next"
  const { t } = useTranslation();

  const columns = ['Id', t('name'), t('status.label'), t('actions.label')];

  return (
    <TableContainer sx={{ height: 565 }} component={Paper}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {isFetching ? (
            <TableSkeleton columns={columns.length} rows={rowsPerPage} />
          ) : results.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                {t('messages.noData')}
              </TableCell>
            </TableRow>
          ) : (
            results.map(({ id, name, isDone }) => (
              <TableRow key={id} hover>
                <TableCell>{id}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>
                  {isDone ? t('status.closed') : t('status.open')}
                </TableCell>
                <TableCell>
                  <SampleUpdateTrigger id={id} name={name} isDone={isDone} />
                  <SampleDeleteTrigger id={id} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
