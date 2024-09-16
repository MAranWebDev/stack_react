import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Types
type StatusType = (typeof STATUS)[keyof typeof STATUS];

interface StateType {
  status: StatusType;
  isIdle: boolean;
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
  updateStatus: (newStatus: StatusType) => void;
}

// Constants
const STORE_NAME = 'statusStore';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  ERROR: 'error',
  SUCCESS: 'success',
} as const;

export const useStatusStore = create<StateType>()(
  devtools(
    persist(
      (set) => ({
        status: STATUS.IDLE,
        isIdle: true,
        isPending: false,
        isError: false,
        isSuccess: false,
        updateStatus: (newStatus: StatusType) =>
          set(() => ({
            status: newStatus,
            isError: newStatus === STATUS.ERROR,
            isPending: newStatus === STATUS.PENDING,
            isSuccess: newStatus === STATUS.SUCCESS,
          })),
      }),
      { name: STORE_NAME, partialize: () => ({}) },
    ),
  ),
);
