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
import { DeleteDialog } from './delete-dialog';
import { UpdateDialog } from './update-dialog';

// Constants
const COLUMNS = ['Id', 'Nombre', 'Estado', 'Acciones'] as const;

export const SampleTable = () => {
  const { results, isFetching, rowsPerPage } = useReadSampleContext();

  // "i18next"
  const { t } = useTranslation();

  return (
    <TableContainer sx={{ height: 565 }} component={Paper}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            {COLUMNS.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {isFetching ? (
            <TableSkeleton columns={COLUMNS.length} rows={rowsPerPage} />
          ) : results.length === 0 ? (
            <TableRow>
              <TableCell colSpan={COLUMNS.length} align="center">
                {t('noData')}
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
                  <UpdateDialog id={id} />
                  <DeleteDialog id={id} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
