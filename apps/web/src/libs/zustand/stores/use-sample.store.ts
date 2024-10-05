import { applyMiddlewares } from '@/libs/zustand/utils';
import { create } from 'zustand';

// Types
interface Store {
  bears: number;
  addBear: () => void;
  addBearBy: (by: number) => void;
  removeBears: () => void;
}

// Constants
const PERSIST_STORE_NAME = 'sampleStore';
const PERSIST_KEYS = ['bears'] as const;

export const useSampleStore = create<Store>()(
  applyMiddlewares({
    persistStoreName: PERSIST_STORE_NAME,
    persistKeys: PERSIST_KEYS,
    store: (set) => ({
      bears: 0,
      addBear: () =>
        set((state) => {
          state.bears += 1;
        }),
      addBearBy: (by: number) =>
        set((state) => {
          state.bears += by;
        }),
      removeBears: () =>
        set((state) => {
          state.bears = 0;
        }),
    }),
  }),
);
