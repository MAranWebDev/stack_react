import { applyMiddlewares } from '@/libs/zustand/utils';
import { create } from 'zustand';

// Types
interface Store {
  amount: number;
  add: () => void;
  addBy: (by: number) => void;
  reset: () => void;
}

// Constants
const PERSIST_STORE_NAME = 'sampleStore';
const PERSIST_KEYS = ['amount'] as const;

export const useSampleCounterStore = create<Store>()(
  applyMiddlewares({
    persistStoreName: PERSIST_STORE_NAME,
    persistKeys: PERSIST_KEYS,
    store: (set) => ({
      amount: 0,
      add: () =>
        set((state) => {
          state.amount += 1;
        }),
      addBy: (by) =>
        set((state) => {
          state.amount += by;
        }),
      reset: () =>
        set((state) => {
          state.amount = 0;
        }),
    }),
  }),
);
