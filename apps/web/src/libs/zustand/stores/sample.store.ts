import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Types
interface StoreType {
  bears: number;
  addBear: () => void;
  addBearBy: (by: number) => void;
  removeBears: () => void;
}

// Constants
const STORE_NAME = 'sampleStore';

// Store
const createStore: StateCreator<StoreType, [['zustand/immer', never]]> = (
  set,
) => ({
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
});

export const useSampleStore = create<StoreType>()(
  devtools(
    persist(immer(createStore), {
      name: STORE_NAME,
      partialize: (state) => ({
        bears: state.bears,
      }),
    }),
  ),
);
