import { TableSkeleton } from '@/components/table-skeleton';
import { useReadSampleContext } from '@/features/sample/context';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DeleteDialog } from './delete-dialog';
import { UpdateDialog } from './update-dialog';

// Constants
const COLUMNS = ['Id', 'Nombre', 'Estado', 'Acciones'] as const;

const STATUS = {
  CLOSED: 'cerrado',
  OPEN: 'abierto',
} as const;

export const SampleTable = () => {
  const { results, isFetching, rowsPerPage } = useReadSampleContext();

  return (
    <TableContainer component={Paper}>
      <Table>
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
          ) : (
            results.map(({ id, name, isDone }) => (
              <TableRow key={id} hover>
                <TableCell>{id}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{isDone ? STATUS.CLOSED : STATUS.OPEN}</TableCell>
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
