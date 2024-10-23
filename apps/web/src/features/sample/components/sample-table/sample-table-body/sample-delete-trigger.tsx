import { ConfirmationDialog } from '@/components/ui/dialog';
import { useTrpcSample } from '@/features/sample/hooks';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Types
interface Props {
  id: string;
}

export const SampleDeleteTrigger = ({ id }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { deleteSample } = useTrpcSample();

  // "react-i18next"
  const { t } = useTranslation();

  // Methods
  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);
  const handleAccept = () => deleteSample.mutate({ id });

  return (
    <>
      {/* Trigger dialog */}
      <IconButton aria-label="delete" onClick={handleOpenDialog}>
        <ClearIcon />
      </IconButton>

      {/* Confirmation dialog */}
      <ConfirmationDialog
        open={isDialogOpen}
        warningText={t('messages.warningDelete')}
        onClose={handleCloseDialog}
        onAccept={handleAccept}
      />
    </>
  );
};
