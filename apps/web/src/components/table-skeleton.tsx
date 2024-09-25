import Skeleton from '@mui/material/Skeleton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

// Types
interface SkeletonCellsProps {
  columns: number;
}

interface TableSkeletonProps extends SkeletonCellsProps {
  rows: number;
}

const SkeletonCells = ({ columns }: SkeletonCellsProps) =>
  Array.from({ length: columns }, (_, index) => (
    <TableCell key={index}>
      <Skeleton variant="text" />
    </TableCell>
  ));

export const TableSkeleton = ({ rows, columns }: TableSkeletonProps) => {
  return (
    <>
      {Array.from({ length: rows }, (_, index) => (
        <TableRow key={index}>
          <SkeletonCells columns={columns} />
        </TableRow>
      ))}
    </>
  );
};
