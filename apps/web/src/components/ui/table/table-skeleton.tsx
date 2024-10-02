import Skeleton from '@mui/material/Skeleton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

// Types
interface Props {
  rows: number;
  columns: number;
}

export const TableSkeleton = ({ rows, columns }: Props) => {
  return (
    <>
      {Array.from({ length: rows }, (_, rowIndex) => (
        <TableRow key={rowIndex}>
          {Array.from({ length: columns }, (_, columnIndex) => (
            <TableCell key={columnIndex}>
              <Skeleton variant="text" animation="wave" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};
