import { useReadSampleContext } from '@/features/sample/context';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const SampleTable = () => {
  const { results } = useReadSampleContext();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results?.map(({ id, name, isDone }) => (
            <TableRow key={id} hover>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{isDone ? 'cerrado' : 'abierto'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
