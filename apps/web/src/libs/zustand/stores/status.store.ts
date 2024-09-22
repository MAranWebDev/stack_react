import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Types
type StatusType = (typeof STATUS)[keyof typeof STATUS];
type StatusErrorType = typeof STATUS.ERROR;

type UpdateStatusPropsType =
  | { status: StatusErrorType; errorMessage: string }
  | { status: Exclude<StatusType, StatusErrorType> };

interface StoreType {
  status: StatusType;
  errorMessage: string;
  isIdle: boolean;
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
  updateStatus: (props: UpdateStatusPropsType) => void;
}

// Constants
const ERROR_MESSAGE = 'El error del servidor viene vacío';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  ERROR: 'error',
  SUCCESS: 'success',
} as const;

// Store
const createStore: StateCreator<StoreType, [['zustand/immer', never]]> = (
  set,
) => ({
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
});

export const useStatusStore = create<StoreType>()(devtools(immer(createStore)));
