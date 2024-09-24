import { useSnackbar, VariantType } from 'notistack';

// Types
interface ShowNotificationPropsType {
  variant: VariantType;
  text?: string;
  onClose?: () => void;
}

// Initial values
const messages: Record<VariantType, string> = {
  default: '',
  error: 'El error del servidor viene vacío',
  success: 'Petición exitosa',
  warning: '',
  info: '',
};

export const useNotistack = () => {
  // notistack
  const { enqueueSnackbar } = useSnackbar();

  const showNotification = ({
    variant,
    text,
    onClose,
  }: ShowNotificationPropsType) => {
    const message = text || messages[variant];
    enqueueSnackbar(message, { variant, onClose });
  };

  return { showNotification };
};
