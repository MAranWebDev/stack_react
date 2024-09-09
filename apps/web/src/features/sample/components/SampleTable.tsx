import { useReadSampleContext } from '@/features/sample/context';
import { trpc } from '@/libs/trpc';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const SampleTable = () => {
  const { results } = useReadSampleContext();

  const utils = trpc.useUtils();
  const sampleDelete = trpc.sample.delete.useMutation({
    onSuccess() {
      utils.sample.getAll.invalidate();
    },
  });

  const handleClickRemove = (id: string) => sampleDelete.mutate(id);

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
              <TableCell>
                <IconButton onClick={() => handleClickRemove(id)}>
                  <RemoveIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
