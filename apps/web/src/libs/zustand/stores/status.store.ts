import { applyMiddlewares } from '@/libs/zustand/utils';
import { create } from 'zustand';

// Types
interface StoreType {
  isPending: boolean;
  changeIsPending: (isPending: boolean) => void;
}

// Constants
const PERSIST_STORE_NAME = 'statusStore';

export const useStatusStore = create<StoreType>()(
  applyMiddlewares({
    persistStoreName: PERSIST_STORE_NAME,
    store: (set) => ({
      isPending: false,
      changeIsPending: (isPending: boolean) => set({ isPending }),
    }),
  }),
);
