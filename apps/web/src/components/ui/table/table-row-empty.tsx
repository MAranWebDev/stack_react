import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useTranslation } from 'react-i18next';

// Types
interface Props {
  numColumns: number;
}

export const TableRowEmpty = ({ numColumns }: Props) => {
  // "react-i18next"
  const { t } = useTranslation();

  return (
    <TableRow>
      <TableCell colSpan={numColumns} align="center">
        {t('messages.noData')}
      </TableCell>
    </TableRow>
  );
};
