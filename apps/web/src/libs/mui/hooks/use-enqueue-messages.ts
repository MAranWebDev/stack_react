import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

export const useEnqueueMessages = () => {
  // "notistack"
  const { enqueueSnackbar } = useSnackbar();

  // "react-i18next"
  const { t } = useTranslation();

  // Utils
  const enqueueError = (message?: string) => {
    const errorMessage = message || t('messages.errorResponse');
    enqueueSnackbar(errorMessage, { variant: 'error' });
  };

  const enqueueSuccess = (message?: string) => {
    const successMessage = message || t('messages.successResponse');
    enqueueSnackbar(successMessage, { variant: 'success' });
  };

  return {
    enqueueError,
    enqueueSuccess,
  };
};
