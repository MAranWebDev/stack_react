import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Types
type StatusType = (typeof STATUS)[keyof typeof STATUS];
type StatusErrorType = typeof STATUS.ERROR;
type StatusNoErrorType = Exclude<StatusType, StatusErrorType>;
type ErrorMessageType = string;

type UpdateStatusPropsType =
  | { status: StatusErrorType; errorMessage: ErrorMessageType }
  | { status: StatusNoErrorType };

interface StateType {
  status: StatusType;
  errorMessage: ErrorMessageType;
  isIdle: boolean;
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
  updateStatus: (props: UpdateStatusPropsType) => void;
}

// Constants
const STORE_NAME = 'statusStore';
const ERROR_MESSAGE = 'El error del servidor viene vacío';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  ERROR: 'error',
  SUCCESS: 'success',
} as const;

export const useStatusStore = create<StateType>()(
  devtools(
    (set) => ({
      status: STATUS.IDLE,
      isIdle: true,
      isPending: false,
      isError: false,
      isSuccess: false,
      errorMessage: '',
      updateStatus: (props: UpdateStatusPropsType) => {
        const { status } = props;
        const errorMessage =
          status === STATUS.ERROR ? props.errorMessage || ERROR_MESSAGE : '';

        return set({
          status,
          isIdle: status === STATUS.IDLE,
          isError: status === STATUS.ERROR,
          isPending: status === STATUS.PENDING,
          isSuccess: status === STATUS.SUCCESS,
          errorMessage,
        });
      },
    }),
    { name: STORE_NAME },
  ),
);
