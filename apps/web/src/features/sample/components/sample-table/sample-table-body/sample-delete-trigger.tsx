import { ConfirmationDialog } from '@/components/ui/dialog';
import { useTrpcSampleMutation } from '@/features/sample/hooks';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Types
interface Props {
  id: string;
}

export const SampleDeleteTrigger = ({ id }: Props) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const { deleteSample } = useTrpcSampleMutation();

  // "react-i18next"
  const { t } = useTranslation();

  // Utils
  const handleOpenConfirmation = () => setIsConfirmationOpen(true);
  const handleCloseConfirmation = () => setIsConfirmationOpen(false);
  const handleAcceptConfirmation = () => deleteSample.mutate({ id });

  return (
    <>
      {/* Trigger dialog */}
      <IconButton aria-label="delete" onClick={handleOpenConfirmation}>
        <ClearIcon />
      </IconButton>

      {/* Confirmation dialog */}
      <ConfirmationDialog
        open={isConfirmationOpen}
        warningText={t('messages.warningDelete')}
        onClose={handleCloseConfirmation}
        onAccept={handleAcceptConfirmation}
      />
    </>
  );
};
